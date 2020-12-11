package com.tgb.controller;

import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;
import com.tgb.model.*;
import com.tgb.service.P2pService;
import com.tgb.util.DateUtils;
import com.tgb.util.HttpUtil;
import com.tgb.util.StringUtils;
import jxl.Cell;
import jxl.Sheet;
import jxl.Workbook;
import net.sf.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.*;
import java.net.URLEncoder;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/***
 *
 * session一般用于整个工程的会话,关闭浏览器即失效,像是用户的登录信息一般是保存在session中
 * request只是用于发送的请求,提交后即释放,若是使用了请求转发,则可以一直传递,
 * 但若是使用了重定向,那么request中保存的数据就得不到了
 * */
@Controller
public class P2pController {

    @Autowired
    private P2pService p2pService;


    /**
     * 获取所有列表
     *
     * @param request
     * @return
     */
    @RequestMapping("p2p/getList")
    public String getList(HttpServletRequest request, HttpServletResponse response) {
        List<P2pInfo> findAll = p2pService.findAll();
        request.setAttribute("platList", findAll);
        request.setAttribute("list_size", findAll.size());
        request.setAttribute("order_id", 6);
        return "p2p/list_plat";
    }

    /**
     * 获取所有列表
     *
     * @param request
     * @return
     */
    @RequestMapping("p2p/part_list_page")
    public String getPartListPage(HttpServletRequest request, HttpServletResponse response) {
        TPlatRankThirdpartyExample whereStatus = new TPlatRankThirdpartyExample();
        whereStatus.createCriteria().andIdIsNotNull();
        List<TPlatRankThirdparty> tPlatRankThirdpartyList = p2pService.getThirdList(whereStatus);
        request.setAttribute("list_size", tPlatRankThirdpartyList.size());
        return "p2p/third_part";
    }

    @RequestMapping("p2p/part_list")
    @ResponseBody
    public Map<String, Object> getPartList(HttpServletRequest request, HttpServletResponse response) {
        TPlatRankThirdpartyExample whereStatus = new TPlatRankThirdpartyExample();
        whereStatus.createCriteria().andIdIsNotNull();
        List<TPlatRankThirdparty> tPlatRankThirdpartyList = p2pService.getThirdList(whereStatus);
        Map<String, Object> mapReturn = new HashMap<String, Object>();
        mapReturn.put("data", tPlatRankThirdpartyList);
        return mapReturn;
    }

    @RequestMapping("p2p/third_update")
    @ResponseBody
    public Map<String, Object> updateThird(HttpServletRequest request, HttpServletResponse response) {
        int id = Integer.parseInt(request.getParameter("id"));
        String url = request.getParameter("url");
        String question = request.getParameter("question");
        TPlatRankThirdparty recode = p2pService.selectByPrimaryKey(id);
        recode.setQuestion(question);
        recode.setUrl(url);
        int code = p2pService.updateByPrimaryKey(recode);
        Map<String, Object> mapReturn = new HashMap<String, Object>();
        mapReturn.put("code", code);
        return mapReturn;
    }

    @RequestMapping("p2p/addPlat")
    public String getAddPlat(HttpServletRequest request) {
        return "p2p/add_plat";
    }

    @RequestMapping("p2p/update_data")
    public String updateData(HttpServletRequest request) {
        return "p2p/update_data";
    }


    @RequestMapping("app/getOne")
    public void getOne(HttpServletRequest request, HttpServletResponse response) {
        List<P2pInfo> findAll = p2pService.findAll();
        try {
            // 正常接口返回
            JSONObject mJSONObject = new JSONObject();
            for (P2pInfo mP2pInfo : findAll) {
                mJSONObject.put("key", mP2pInfo);
            }
            response.setContentType("application/json;charset=UTF-8");
            response.setCharacterEncoding("UTF-8");
            response.getWriter().write(mJSONObject.toString());
            response.getWriter().flush();
            response.getWriter().close();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }


    @RequestMapping("app/order_test")
    public @ResponseBody
    Map<String, Object> orderByIdTest(HttpServletRequest request, HttpServletResponse response) {
        String str = "ORDER BY score desc";
        int id = 1;
        if (id == 1) str = "WHERE tianyan_rank !=0 ORDER BY  tianyan_rank";
        else if (id == 2)
            str = "WHERE   rank360_int !=0 ORDER BY  rank360_int";
            // str = "WHERE rank360  NOT IN ('-')  ORDER BY FIELD(rank360, 'A', 'A-', 'B+', 'B', 'B-', 'C+', 'C', 'C-')";
        else if (id == 3) str = "WHERE zhiji_rank !=0 order by zhiji_rank asc";
        else if (id == 4) str = "WHERE gentou_rank !=0 order by gentou_rank asc";
        else if (id == 5) str = "where rate3_return not in('') order by rate3_return desc";
        else if (id == 6) str = "ORDER BY score desc";
        else if (id == 7) str = "WHERE is_love!='0'  ORDER BY FIELD(is_love, '10', '9', '8', '7', '6', '5', '4', '3')";
        List<P2pInfo> findAll = p2pService.findAllByStr(str);
        Map<String, Object> map = new HashMap<String, Object>();
        map.put("total", findAll.size());
        map.put("data", findAll);
        return map;
      /*  try {
            // 正常接口返回
            JSONObject mJSONObject = new JSONObject();
            mJSONObject.put("code", 200);
           Gson gson=new Gson();
            // jsonp格式返回
            String renderStr = "jsonpCallback" + "(" + gson.toJson(findAll)+ ")";
            response.setContentType("text/plain;charset=UTF-8");
            response.getWriter().write(renderStr);
            response.getWriter().flush();
            response.getWriter().close();
        } catch (Exception e) {
            e.printStackTrace();
        }*/


    }


    /**
     * 添加平台
     *
     * @param request
     * @param response
     */
    @RequestMapping("app/addPlat")
    public void addPlat(HttpServletRequest request, HttpServletResponse response) {
        String name = request.getParameter("name");
        String score = request.getParameter("score");
        int code = 200;

        P2pInfo mP2pInfo = new P2pInfo();
        mP2pInfo.setName(name);
        if (!StringUtils.isEmpty(score)) {
            mP2pInfo.setScore(StringUtils.toInt(score, 0));
        } else {
            mP2pInfo.setScore(0);
        }
        List<P2pInfo> findAll = p2pService.findAll();
        boolean isExtie = false;
        for (P2pInfo mP2pInfo1 : findAll) {
            if (StringUtils.isContains(mP2pInfo1.getName(), name)) {
                isExtie = true;
            }
            if (StringUtils.isContains(mP2pInfo1.getOther_name(), name)) {
                isExtie = true;
            }
        }
        if (!isExtie)
            p2pService.save_init(mP2pInfo);
        else
            code = 100;
        try {
            // 正常接口返回
            JSONObject mJSONObject = new JSONObject();
            mJSONObject.put("code", code);

            // jsonp格式返回
            String renderStr = "jsonpCallback" + "(" + mJSONObject.toString() + ")";
            response.setContentType("text/plain;charset=UTF-8");
            response.getWriter().write(renderStr);
            response.getWriter().flush();
            response.getWriter().close();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @RequestMapping("app/delPlat")
    public void delPlat(int id, HttpServletRequest request, HttpServletResponse response) {
        p2pService.delById(id);
        String result = "{\"result\":\"success\"}";
        response.setContentType("application/json");
        try {
            PrintWriter out = response.getWriter();
            out.write(result);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    @RequestMapping("app/order")
    public String orderById(int id, HttpServletRequest request, HttpServletResponse response) {
        String str = "ORDER BY score desc,is_love desc";
        if (id == 1) str = "WHERE tianyan_rank !=0 ORDER BY  tianyan_rank";
        else if (id == 2)
            str = "WHERE   rank360_int !=0 ORDER BY  rank360_int";
            // str = "WHERE rank360  NOT IN ('-')  ORDER BY FIELD(rank360, 'A', 'A-', 'B+', 'B', 'B-', 'C+', 'C', 'C-')";
        else if (id == 3) str = "WHERE zhiji_rank !=0 order by zhiji_rank asc";
        else if (id == 4) str = "WHERE gentou_rank !=0 order by gentou_rank asc";
        else if (id == 5) str = "where rate3_return not in('') order by rate3_return desc";
        else if (id == 6) str = "ORDER BY score desc,is_love desc";
        else if (id == 7) str = "WHERE is_love!='0'  ORDER BY FIELD(is_love, '10', '9', '8', '7', '6', '5', '4', '3'),is_love desc";
        List<P2pInfo> findAll = p2pService.findAllByStr(str);
        request.setAttribute("platList", findAll);
        request.setAttribute("order_id", id);
        if (findAll != null)
            request.setAttribute("list_size", findAll.size());
        return "p2p/list_plat";

    }

    @RequestMapping("app/dailuopan")
    public void dailuopanUrl(int id, HttpServletRequest request, HttpServletResponse response) throws UnsupportedEncodingException {
        //之家评级
        P2pInfo mP2pInfo = p2pService.findById(id);
        String name = URLEncoder.encode(mP2pInfo.getName(), "UTF-8");
        String url = "http://www.dailuopan.com/MPAPI/GetSearch?keywords=" + name;
        String jsonStr = HttpUtil.doHttpGet(url);
        String urlDaiLuoPan;
        String dailuopanId = null;
        Gson gson1 = new Gson();
        List<DaiLuoPanInfo> mDaiLuoPanInfoList = gson1.fromJson(jsonStr, new TypeToken<List<DaiLuoPanInfo>>() {
        }.getType());
        if (mDaiLuoPanInfoList != null)
            for (DaiLuoPanInfo mDaiLuoPanInfo : mDaiLuoPanInfoList) {
                if (StringUtils.isContains(mDaiLuoPanInfo.getPlat_name(), mP2pInfo.getName())) {
                    dailuopanId = mDaiLuoPanInfo.getPre_id();
                    break;
                }
            }

        if (dailuopanId == null) {
            String name2 = URLEncoder.encode(mP2pInfo.getOther_name(), "UTF-8");
            String jsonStr2 = HttpUtil.sendGet("http://www.dailuopan.com/MPAPI/GetSearch?keywords=" + name2);
            Gson gson12 = new Gson();
            List<DaiLuoPanInfo> mDaiLuoPanInfoList2 = gson12.fromJson(jsonStr2, new TypeToken<List<DaiLuoPanInfo>>() {
            }.getType());
            if (mDaiLuoPanInfoList2 != null)
                for (DaiLuoPanInfo mDaiLuoPanInfo : mDaiLuoPanInfoList2) {
                    if (StringUtils.isContains(mDaiLuoPanInfo.getPlat_name(), mP2pInfo.getOther_name())) {
                        dailuopanId = mDaiLuoPanInfo.getPre_id();
                        break;
                    }
                }
        }
        String result;
        if (dailuopanId != null) {
            urlDaiLuoPan = "http://www.dailuopan.com/p2p/" + dailuopanId;
            result = "{\"code\":200,\"url\":\"" + urlDaiLuoPan + "\"}";
        } else result = "{\"code\":100}";
        response.setContentType("application/json");
        try {
            PrintWriter out = response.getWriter();
            out.write(result);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }


    @RequestMapping("app/updateScore")
    public void updateScore(HttpServletRequest request, HttpServletResponse response) {



        int id = Integer.parseInt(request.getParameter("id"));
        int score = Integer.parseInt(request.getParameter("score"));
        P2pInfo mP2pInfo = new P2pInfo();
        mP2pInfo.setId(id);
        mP2pInfo.setScore(score);
        if (score <= 10) {
            p2pService.updateScore(mP2pInfo);





            if (score < 0) {
                P2pInfo doP2pInfo = p2pService.findById(id);
                String questionNew = DateUtils.getCurrentDay() + " " + doP2pInfo.getName() + "出问题";

                if (doP2pInfo != null) {
                    if (doP2pInfo.getZhiji_rank() > 0) {//之家出问题的
                        TPlatRankThirdparty recode = p2pService.selectByPrimaryKey(1);
                        if (recode != null) {
                            String oldQuestion = recode.getQuestion();
                            if (!StringUtils.isContains(oldQuestion, doP2pInfo.getName())) {
                                if (recode.getQuestion().length() > 2) {
                                    recode.setQuestion(oldQuestion + "**" + questionNew);
                                } else recode.setQuestion("" + questionNew);
                                p2pService.updateByPrimaryKey(recode);
                            }
                        }
                    }

                    if (doP2pInfo.getRank360_int() > 0) {//融360出问题的
                        TPlatRankThirdparty recode360 = p2pService.selectByPrimaryKey(3);
                        if (recode360 != null) {
                            String oldQuestion3 = recode360.getQuestion();
                            if (!StringUtils.isContains(oldQuestion3, doP2pInfo.getName())) {
                                if (recode360.getQuestion().length() > 2) {
                                    recode360.setQuestion(oldQuestion3 + "**" + questionNew);
                                } else recode360.setQuestion("" + questionNew);
                                p2pService.updateByPrimaryKey(recode360);
                            }
                        }
                    }

                    if (doP2pInfo.getTianyan_rank() > 0) {//融360出问题的
                        TPlatRankThirdparty recodeTY = p2pService.selectByPrimaryKey(2);
                        if (recodeTY != null) {
                            String oldQuestion3 = recodeTY.getQuestion();
                            if (!StringUtils.isContains(oldQuestion3, doP2pInfo.getName())) {
                                if (recodeTY.getQuestion().length() > 2) {
                                    recodeTY.setQuestion(oldQuestion3 + "**" + questionNew);
                                } else recodeTY.setQuestion("" + questionNew);
                                p2pService.updateByPrimaryKey(recodeTY);
                            }
                        }
                    }

                    if (doP2pInfo.getGentou_rank() > 0) {//融360出问题的
                        TPlatRankThirdparty recodeGT = p2pService.selectByPrimaryKey(4);
                        if (recodeGT != null) {
                            String oldQuestion3 = recodeGT.getQuestion();
                            if (!StringUtils.isContains(oldQuestion3, doP2pInfo.getName())) {
                                if (recodeGT.getQuestion().length() > 2) {
                                    String oldQuestion = recodeGT.getQuestion();
                                    recodeGT.setQuestion(oldQuestion + "**" + questionNew);
                                } else recodeGT.setQuestion("" + questionNew);
                                p2pService.updateByPrimaryKey(recodeGT);
                            }
                        }
                    }

                    if (doP2pInfo.getLuopan_rank() > 0) {//融360出问题的
                        TPlatRankThirdparty recodeLP = p2pService.selectByPrimaryKey(5);
                        if (recodeLP != null) {
                            String oldQuestion3 = recodeLP.getQuestion();
                            if (!StringUtils.isContains(oldQuestion3, doP2pInfo.getName())) {
                                if (recodeLP.getQuestion().length() > 2) {
                                    String oldQuestion = recodeLP.getQuestion();
                                    recodeLP.setQuestion(oldQuestion + "**" + questionNew);
                                } else recodeLP.setQuestion("" + questionNew);
                                p2pService.updateByPrimaryKey(recodeLP);
                            }
                        }
                    }

                }
            }
        }
    }

    @RequestMapping("app/updateReta")
    public void updateReta(HttpServletRequest request, HttpServletResponse response) {
        int id = Integer.parseInt(request.getParameter("id"));
        String score = request.getParameter("score");
        int type = Integer.parseInt(request.getParameter("type"));
        if (StringUtils.isFloathString(score) == 0 || StringUtils.isNumberString(score) == 0) {
            if (type == 3) {
                P2pInfo mP2pInfo = new P2pInfo();
                mP2pInfo.setId(id);
                mP2pInfo.setRate3_return(Float.parseFloat(score));
                p2pService.updateReta3(mP2pInfo);
            } else if (type == 6) {
                P2pInfo mP2pInfo = new P2pInfo();
                mP2pInfo.setId(id);
                mP2pInfo.setRate6_return(Float.parseFloat(score));
                p2pService.updateReta6(mP2pInfo);
            }
        }
    }

    @RequestMapping("app/updateLove")
    public void updateLove(HttpServletRequest request, HttpServletResponse response) {
        int id = Integer.parseInt(request.getParameter("id"));
        String score = request.getParameter("score");
        if (StringUtils.isFloathString(score) == 0 || StringUtils.isNumberString(score) == 0) {
            p2pService.updateLove(id, score);
        }
    }

    @RequestMapping("app/updateRemark")
    public void updateRemark(HttpServletRequest request, HttpServletResponse response) {
        int id = Integer.parseInt(request.getParameter("id"));
        String remark = request.getParameter("remark");
        p2pService.updateRemark(id, remark);
    }


    /**
     * 第一次从excel中初始化平台数据
     *
     * @param request
     * @param response
     */
    @RequestMapping(value = "app/p2p/init", method = RequestMethod.GET)
    @ResponseBody
    public void getInitData(HttpServletRequest request, HttpServletResponse response) {
        int id = Integer.parseInt(request.getParameter("id"));
        //id 是0表示全部更新，1是跟投，2是360,3是之家，4是天眼，5是之家简介  6贷罗盘

        Workbook readwb = null;

        try {
            // 构建Workbook对象, 只读Workbook对象
            // 直接从本地文件创建Workbook

            //公司
            String path = "C:\\Users\\Administrator\\Desktop\\ssm-demo\\ideaWebSSM\\跟投.xls";
            //居住地
            // String path="C:\\Users\\Administrator\\Desktop\\ssm-demo\\ideaWebSSM\\跟投.xls";
            InputStream instream = new FileInputStream(path);
            readwb = Workbook.getWorkbook(instream);

            if (id == 0 || id == 1) {
                p2pService.updateRankNull("gentou_rank='0'");
                // Sheet的下标是从0开始
                // 获取第一张Sheet表

                Sheet readsheet = readwb.getSheet(0);

                // 获取Sheet表中所包含的总列数
                int rsColumns = readsheet.getColumns();

                // 获取Sheet表中所包含的总行数
                int rsRows = readsheet.getRows();

                // 遍历行数
                for (int i = 0; i < rsRows; i++) {

                    //第一列
                    Cell cell = readsheet.getCell(0, i);
                    //第二列
                    Cell cell2 = readsheet.getCell(1, i);
                    if (cell != null && cell.getContents() != null && cell.getContents().length() > 0) {
                        System.out.println(cell.getContents() + ":" + cell2.getContents());
                        P2pInfo mP2pInfo = new P2pInfo();
                        mP2pInfo.setName(cell.getContents().trim());
                        mP2pInfo.setGentou_rank(StringUtils.toInt(cell2.getContents().trim(), 0));
                        p2pService.updateRankGenTou(mP2pInfo);
                    }
                }

            }

            /*	------------------获取第2张Sheet表------------------------------------------------*/


            if (id == 0 || id == 2) {
                Sheet readsheet2 = readwb.getSheet(4);

                // 获取Sheet表中所包含的总列数
                p2pService.updateRankNull("rank360='-',rank360_int=0");
                int rsColumnsNew = readsheet2.getColumns();

                // 获取Sheet表中所包含的总行数

                int rsRowsNew = readsheet2.getRows();

                //遍历总行数
                for (int i = 0; i < rsRowsNew; i++) {   //第一列
                    Cell cellNew = readsheet2.getCell(0, i);
                    //第二列
                    Cell cell2New = readsheet2.getCell(1, i);
                    System.out.println(cellNew.getContents().trim() + "-" + cell2New.getContents().trim());
                    if (cell2New.getContents() != null && cell2New.getContents().length() > 1) {
                        P2pInfo mP2pInfo = new P2pInfo();
                        if (StringUtils.isContains(cellNew.getContents().trim(), "玖富")) {
                            mP2pInfo.setName("玖富");
                        } else if (StringUtils.isContains(cellNew.getContents().trim(), "凤凰")) {
                            mP2pInfo.setName("凤凰金融");
                        } else if (StringUtils.isContains(cellNew.getContents().trim(), "网信普惠")) {
                            mP2pInfo.setName("网信普惠");
                        } else
                            mP2pInfo.setName(cellNew.getContents().trim());
                        if (cell2New.getContents() != null && cell2New.getContents().length() > 3)
                            mP2pInfo.setRank360(cell2New.getContents().trim().substring(3));
                        else mP2pInfo.setRank360(cell2New.getContents().trim());
                        if (mP2pInfo.getRank360().contains("�"))
                            mP2pInfo.setRank360(mP2pInfo.getRank360().replace("�", ""));
                        mP2pInfo.setRank360_int(i + 1);
                        p2pService.updateRank360(mP2pInfo);
                    }
                }
            }

            if (id == 0 || id == 3) {
                p2pService.updateRankNull(" zhiji_rank=0");
                //之家评级
                String jsonStr = HttpUtil.sendGet("https://m.wdzj.com/pingji/interfaceIndex?type=&isapp=app");
                Gson gson = new Gson();
                ZhiJaLevelInfo mZhiJaLevelInfo = gson.fromJson(jsonStr, new TypeToken<ZhiJaLevelInfo>() {
                }.getType());
                if (mZhiJaLevelInfo != null) {
                    for (ZhiJaLevelInfo.ListBean mListBean : mZhiJaLevelInfo.getList()) {
                        P2pInfo mP2pInfo = new P2pInfo();
                        mP2pInfo.setName(mListBean.getPlat_name());
                        mP2pInfo.setZhiji_rank(StringUtils.toInt(mListBean.getRank(), 0));
                        mP2pInfo.setZhijia_code(mListBean.getName_pin());
                        mP2pInfo.setZhijia_url(mListBean.getPlat_icon());
                        p2pService.updateZhiJi(mP2pInfo);
                        System.out.println(mListBean.getPlat_name() + "-" + StringUtils.toInt(mListBean.getRank(), 0));
                    }
                }
            }

            if (id == 0 || id == 4) {
                //天眼评级
                p2pService.updateRankNull("tianyan_level='',tianyan_rank=0");
                String jsonStr0 = HttpUtil.sendGet("http://api.p2peye.com/platform/pingji?app_name=wdty&terminal_type=102&app_version=3.6.1");
                Gson gson0 = new Gson();
                TianYanInfo mTianYanInfo = gson0.fromJson(jsonStr0, new TypeToken<TianYanInfo>() {
                }.getType());
                if (mTianYanInfo != null) {
                    List<TianYanInfo.DataBean.MationBean> list = mTianYanInfo.getData().getMation();
                    for (int i = 0; i < list.size(); i++) {
                        TianYanInfo.DataBean.MationBean mMationBean = list.get(i);
                        P2pInfo mP2pInfo = new P2pInfo();
                        mP2pInfo.setName(mMationBean.getPlat_name());
                        mP2pInfo.setTianyan_level(mMationBean.getLevel());
                        mP2pInfo.setTianyan_rank(i + 1);
                        p2pService.updateTianYanRank(mP2pInfo);
                        System.out.println(mMationBean.getPlat_name() + "-" + mMationBean.getLevel());
                    }
                }
            }


            if (id == 0 || id == 6) {
                //贷罗盘
                p2pService.updateRankNull(" luopan_rank=0");
                String jsonStr0 = HttpUtil.sendGet("http://www.dailuopan.com/MPAPI/GetGradeList?type=dlp&page=1&pagesize=500");
                Gson gson0 = new Gson();
                DaiLuoPanHttpInfo mDaiLuoPanHttpInfo = gson0.fromJson(jsonStr0, new TypeToken<DaiLuoPanHttpInfo>() {
                }.getType());
                if (mDaiLuoPanHttpInfo != null) {
                    List<DaiLuoPanHttpInfo.DlpInfo> list = mDaiLuoPanHttpInfo.getGradeList();
                    for (int i = 0; i < list.size(); i++) {
                        DaiLuoPanHttpInfo.DlpInfo mMationBean = list.get(i);
                        int rankNum = i + 1;
                        String url = mMationBean.getSiteurl() + mMationBean.getDlpurl();
                        if (mMationBean != null) {
                            p2pService.updateRankNull(" luopan_rank=" + rankNum + ",luopan_code='" + url + "' where name='" + mMationBean.getPlat_name() + "' or other_name='" + mMationBean.getPlat_name() + "'");
                            System.out.println(mMationBean.getPlat_name() + "-" + i);
                        }
                    }
                }
            }

            if (id == 0 || id == 5) {
                //之家-简称
                String jsonStr1 = HttpUtil.sendGet("https://m.wdzj.com/apphongbao/interfaceIndexSearch");
                Gson gson1 = new Gson();
                List<ZhiJiaIdInfo> mZhiJiaIdInfoList = gson1.fromJson(jsonStr1, new TypeToken<List<ZhiJiaIdInfo>>() {
                }.getType());
                if (mZhiJiaIdInfoList != null) {
                    for (ZhiJiaIdInfo mZhiJiaIdInfo : mZhiJiaIdInfoList) {
                        P2pInfo mP2pInfo = new P2pInfo();
                        mP2pInfo.setName(mZhiJiaIdInfo.getPlatName());
                        mP2pInfo.setZhijia_code(mZhiJiaIdInfo.getPlatPin());
                        mP2pInfo.setZhijia_url(mZhiJiaIdInfo.getPlatIconUrl());
                        p2pService.updateZhiJiCode(mP2pInfo);
                        System.out.println(mZhiJiaIdInfo.getPlatName() + "-" + mZhiJiaIdInfo.getPlatPin());
                    }
                }


                //天眼-简称
                String jsonStr2 = HttpUtil.sendGet("http://api.p2peye.com/Platform/getPlatformInfoData");
                Gson gson2 = new Gson();
                TianYanAllInfo mTianYanAllInfo = gson2.fromJson(jsonStr2, new TypeToken<TianYanAllInfo>() {
                }.getType());
                if (mTianYanAllInfo != null) {
                    for (TianYanAllInfo.DataBean mDataBean : mTianYanAllInfo.getData()) {
                        P2pInfo mP2pInfo = new P2pInfo();
                        mP2pInfo.setName(mDataBean.getName());
                        mP2pInfo.setTianyan_code(mDataBean.getDetailurl());
                        mP2pInfo.setUrl(mDataBean.getUrl());
                        p2pService.updateTianYanCode(mP2pInfo);
                        System.out.println(mDataBean.getName() + "-" + mDataBean.getDetailurl());

                    }
                }
            }

        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            readwb.close();
        }


        try {
            // 正常接口返回
            JSONObject mJSONObject = new JSONObject();
            mJSONObject.put("code", 200);

            // jsonp格式返回
            String renderStr = "jsonpCallback" + "(" + mJSONObject.toString() + ")";
            response.setContentType("text/plain;charset=UTF-8");
            response.getWriter().write(renderStr);
            response.getWriter().flush();
            response.getWriter().close();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }


    /**
     * 保存数据
     *
     * @param request
     * @param response
     */
    @RequestMapping(value = "app/p2p/save", method = RequestMethod.GET)
    @ResponseBody
    public void saveData(HttpServletRequest request, HttpServletResponse response) {

        //天眼-简称
        String jsonStr2 = HttpUtil.sendGet("http://api.p2peye.com/Platform/getPlatformInfoData");
        Gson gson2 = new Gson();
        TianYanAllInfo mTianYanAllInfo = gson2.fromJson(jsonStr2, new TypeToken<TianYanAllInfo>() {
        }.getType());
        if (mTianYanAllInfo != null) {
            for (TianYanAllInfo.DataBean mDataBean : mTianYanAllInfo.getData()) {
                String sqlStr = null;
                try {
                    sqlStr = " t_plat_eye_data (eye_name,eye_plat_url,eye_plat_icon,eye_id,eye_code,eye_plat_detail_url) " +
                            "values(" + mDataBean.getName() + "," + URLEncoder.encode(mDataBean.getUrl(), "UTF-8") + "," + mDataBean.getIcon() + "," + mDataBean.getId() + "," + mDataBean.getPname_jp() + "," + mDataBean.getDetailurl() + ")";
                } catch (UnsupportedEncodingException e) {
                    e.printStackTrace();
                }
                p2pService.save_data(sqlStr);
            }
        }

    }


}
