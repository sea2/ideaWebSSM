package com.tgb.controller;

import java.io.*;
import java.net.URLEncoder;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;
import com.tgb.model.*;
import com.tgb.util.HttpUtil;
import net.sf.json.JSONArray;
import net.sf.json.JSONObject;
import net.sf.json.util.JSONUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.tgb.service.P2pService;
import com.tgb.util.StringUtils;

import jxl.Cell;
import jxl.Sheet;
import jxl.Workbook;
import net.sf.json.JSON;

@Controller
public class P2pControler {

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
        request.setAttribute("order_id", 6);
        return "p2p/list_plat";
    }

    @RequestMapping("p2p/addPlat")
    public String getAddPlat(HttpServletRequest request) {
        return "p2p/add_plat";
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
        String str = "ORDER BY score desc";
        if (id == 1) str = "WHERE tianyan_rank !=0 ORDER BY  tianyan_rank";
        else if (id == 2)
            str = "WHERE rank360  NOT IN ('-')  ORDER BY FIELD(rank360, 'A', 'A-', 'B+', 'B', 'B-', 'C+', 'C', 'C-')";
        else if (id == 3) str = "WHERE zhiji_rank !=0 order by zhiji_rank asc";
        else if (id == 4) str = "WHERE gentou_rank !=0 order by gentou_rank asc";
        else if (id == 5) str = "where rate3_return not in('') order by rate3_return";
        else if (id == 6) str = "ORDER BY score desc";
        else if (id == 7) str = "WHERE is_love!='0'  ORDER BY FIELD(is_love, '10', '9', '8', '7', '6', '5', '4', '3')";
        List<P2pInfo> findAll = p2pService.findAllByStr(str);
        request.setAttribute("platList", findAll);
        request.setAttribute("order_id", id);
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
            String jsonStr2 = HttpUtil.sendGet("http://www.dailuopan.com/MPAPI/GetSearch?keywords=" + mP2pInfo.getOther_name());
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
        if (score <= 10)
            p2pService.updateScore(mP2pInfo);
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
                mP2pInfo.setRate3_return(score);
                p2pService.updateReta3(mP2pInfo);
            } else if (type == 6) {
                P2pInfo mP2pInfo = new P2pInfo();
                mP2pInfo.setId(id);
                mP2pInfo.setRate6_return(score);
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
        Workbook readwb = null;
        try {
            // 构建Workbook对象, 只读Workbook对象

/*

            // 直接从本地文件创建Workbook
            InputStream instream = new FileInputStream("C:\\Users\\Administrator\\Desktop\\springmvc-mybatis-learning-master\\springmvc-mybatis-learning-master\\sourcecode\\webSpringMvc\\跟投.xls");
            readwb = Workbook.getWorkbook(instream);

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
                    System.out.println(cell.getContents());
                    P2pInfo mP2pInfo = new P2pInfo();
                    mP2pInfo.setName(cell.getContents().trim());
                    mP2pInfo.setGentou_rank(StringUtils.toInt(cell2.getContents().trim(), 0));
                    p2pService.updateRankGenTou(mP2pInfo);
                }
            }


            */
/*	------------------获取第2张Sheet表------------------------------------------------*//*


            Sheet readsheet2 = readwb.getSheet(1);

            // 获取Sheet表中所包含的总列数

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
                    p2pService.updateRank360(mP2pInfo);
                }
            }



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
                }
            }


            //天眼评级
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
                }
            }
*/

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
                }
            }


        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            readwb.close();
        }
    }


}
