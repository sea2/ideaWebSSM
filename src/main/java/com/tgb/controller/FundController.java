package com.tgb.controller;

import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;
import com.tgb.model.*;
import com.tgb.service.FundService;
import com.tgb.util.BigDecimalUtils;
import com.tgb.util.HttpUtil;
import com.tgb.util.NumberUtils;
import com.tgb.util.StringUtils;
import org.json.JSONArray;
import org.json.JSONObject;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.*;

/**
 * 基金
 */

@Controller
public class FundController {

    @Autowired
    private FundService fundService;


    @RequestMapping("fund/getList")
    public String jspFundList(HttpServletRequest request, HttpServletResponse response) {
        return "fund/list_fund";
    }

    /**
     * 获取所有列表
     *
     * @param request 166009,166002,163402,340007,340008,519068,519066,470028,420005,001632,001631,001986,070032,001616,070023,160222,160225,020026,161725,110022,519700,000251,100032,530018,002851,217016,001878,000988,110023
     * @return
     */
    @RequestMapping("fund/getListInfo")
    public @ResponseBody
    Map<String, Object> getList(HttpServletRequest request, HttpServletResponse response) {
        List<MyHasFundInfo> findAll = fundService.findAll();
        Map<String, Object> mapReturn = new HashMap<String, Object>();


        final String sortOrder = request.getParameter("sortOrder");
        String sortName = request.getParameter("sortName");
        String search = request.getParameter("search");

        if (findAll != null) {
            StringBuilder stringBuilder = new StringBuilder();
            for (int i = 0; i < findAll.size(); i++) {
                String code = findAll.get(i).getFund_has_code();
                if (!StringUtils.isEmpty(code)) {
                    if (i != 0) {
                        stringBuilder.append(",");
                    }
                    stringBuilder.append(code);
                }
            }

            HashMap<String, String> map = new HashMap<>();
            map.put("pageIndex", "1");
            map.put("ReqNo", "1524621947948");
            map.put("CompanyId", "10000");
            map.put("pageSize", findAll.size() + "");
            map.put("plat", "Android");
            map.put("appType", "ttjj");
            map.put("BUY", "true");
            map.put("deviceid", "db5639755e30b8af059c1d78a921c348%7C%7C666038230091568");
            map.put("product", "EFund");
            map.put("Version", "5.5.0");
            map.put("Fcodes", stringBuilder.toString());
            String jsonStr1 = HttpUtil.doHttpPost("https://fundmobapi.eastmoney.com/FundMNewApi/FundMNFInfo", map);
            Gson gson1 = new Gson();
            MyFundInfo mMyFundInfo = gson1.fromJson(jsonStr1, new TypeToken<MyFundInfo>() {
            }.getType());
            List<TianTianMyDatasBean> mTianTianMyDatasBeanList = mMyFundInfo.getDatas();

            if (sortName != null && sortName.equals("gsz"))
                Collections.sort(mTianTianMyDatasBeanList, new Comparator<TianTianMyDatasBean>() {
                    @Override
                    public int compare(TianTianMyDatasBean o1, TianTianMyDatasBean o2) {
                        if (sortOrder.equals("asc") || sortOrder.equals("ASC"))
                            return new Double(o1.getGSZZL()).compareTo(new Double(o2.getGSZZL()));
                        else return new Double(o2.getGSZZL()).compareTo(new Double(o1.getGSZZL()));
                    }
                });
            else if (sortName != null && sortName.equals("nav"))
                Collections.sort(mTianTianMyDatasBeanList, new Comparator<TianTianMyDatasBean>() {
                    @Override
                    public int compare(TianTianMyDatasBean o1, TianTianMyDatasBean o2) {
                        if (sortOrder.equals("asc") || sortOrder.equals("ASC"))
                            return new Double(o1.getNAVCHGRT()).compareTo(new Double(o2.getNAVCHGRT()));
                        else return new Double(o2.getNAVCHGRT()).compareTo(new Double(o1.getNAVCHGRT()));
                    }
                });


            List<NeedShowFundInfo> listData = new ArrayList<>();
            for (TianTianMyDatasBean mTianTianMyDatasBean : mTianTianMyDatasBeanList) {
                NeedShowFundInfo mNeedShowFundInfo = new NeedShowFundInfo();
                mNeedShowFundInfo.setFcode(mTianTianMyDatasBean.getFCODE());
                mNeedShowFundInfo.setGsz(mTianTianMyDatasBean.getGSZ());
                mNeedShowFundInfo.setGszzl(mTianTianMyDatasBean.getGSZZL());
                mNeedShowFundInfo.setNav(mTianTianMyDatasBean.getNAV());
                mNeedShowFundInfo.setNavChgrt(mTianTianMyDatasBean.getNAVCHGRT());
                mNeedShowFundInfo.setShortname(mTianTianMyDatasBean.getSHORTNAME() + "**" + mTianTianMyDatasBean.getFCODE());

                for (MyHasFundInfo mMyHasFundInfo : findAll) {
                    if (mMyHasFundInfo.getFund_has_code().equals(mTianTianMyDatasBean.getFCODE())) {
                        double getNew = Double.parseDouble(mTianTianMyDatasBean.getNAV());
                        double rate = BigDecimalUtils.sub(BigDecimalUtils.div(getNew, mMyHasFundInfo.getFund_buy_price()), 1d);
                        mNeedShowFundInfo.setRate(NumberUtils.getTwoScale(BigDecimalUtils.mul(rate, 100)) + "");
                        double income = rate * mMyHasFundInfo.getFund_has_money();
                        mNeedShowFundInfo.setIncome(NumberUtils.getTwoScale(income) + "");
                        //持有本金
                        mNeedShowFundInfo.setMoney(NumberUtils.getTwoScale(BigDecimalUtils.add(mMyHasFundInfo.getFund_has_money(), income)) + "");
                        //买入金额
                        mNeedShowFundInfo.setMoney_old(NumberUtils.getZeroScale(mMyHasFundInfo.getFund_has_money()) + "");
                        //买入净值
                        mNeedShowFundInfo.setFund_buy_price(StringUtils.keepFour(mMyHasFundInfo.getFund_buy_price()));
                        //基金类型
                        mNeedShowFundInfo.setFund_type(mMyHasFundInfo.getFund_type());
                        //基金重要等级
                        mNeedShowFundInfo.setFund_level(mMyHasFundInfo.getFund_level());
                        //基金备注
                        mNeedShowFundInfo.setFund_remark(mMyHasFundInfo.getFund_remark());
                        //基金规模
                        if (!StringUtils.isEmpty(mMyHasFundInfo.getFund_size())) {
                            int size_length = mMyHasFundInfo.getFund_size().length();
                            String size_show = mMyHasFundInfo.getFund_size().substring(0,size_length-14);
                            mNeedShowFundInfo.setFund_size(StringUtils.toFloat(size_show));
                        }

                        //历史最高净值小于昨日净值
                        if (mMyHasFundInfo.getFund_history_height() == 0 || mMyHasFundInfo.getFund_history_height() < StringUtils.toFloat(mTianTianMyDatasBean.getNAV())) {
                            String sqlStr = " t_fund set fund_history_height='" + mTianTianMyDatasBean.getNAV() + "' where fund_code='" + mMyHasFundInfo.getFund_has_code() + "'";
                            fundService.updateSql(sqlStr);
                            mNeedShowFundInfo.setBest_height(StringUtils.keepFour(StringUtils.toFloat(mTianTianMyDatasBean.getNAV())));
                        } else
                            mNeedShowFundInfo.setBest_height(StringUtils.keepFour(mMyHasFundInfo.getFund_history_height()));
                        //历史最低净值大于昨日净值
                        if (mMyHasFundInfo.getFund_history_low() == 0 || (StringUtils.toFloat(mTianTianMyDatasBean.getNAV()) != 0 && mMyHasFundInfo.getFund_history_low() > StringUtils.toFloat(mTianTianMyDatasBean.getNAV()))) {
                            String sqlStr = " t_fund set fund_history_low='" + mTianTianMyDatasBean.getNAV() + "' where fund_code='" + mMyHasFundInfo.getFund_has_code() + "'";
                            fundService.updateSql(sqlStr);
                            mNeedShowFundInfo.setBest_low(StringUtils.keepFour(StringUtils.toFloat(mTianTianMyDatasBean.getNAV())));
                        } else
                            mNeedShowFundInfo.setBest_low(StringUtils.keepFour(mMyHasFundInfo.getFund_history_low()));

                        break;
                    }
                }
                listData.add(mNeedShowFundInfo);
            }

            //金额排序
            if (sortName != null && sortName.equals("money"))
                Collections.sort(listData, new Comparator<NeedShowFundInfo>() {
                    @Override
                    public int compare(NeedShowFundInfo o1, NeedShowFundInfo o2) {
                        if (sortOrder.equals("asc") || sortOrder.equals("ASC"))
                            return Double.compare(Double.parseDouble(o1.getMoney()), Double.parseDouble(o2.getMoney()));
                        else
                            return Double.compare(Double.parseDouble(o2.getMoney()), Double.parseDouble(o1.getMoney()));
                    }
                });
            else if (sortName != null && sortName.equals("income"))
                Collections.sort(listData, new Comparator<NeedShowFundInfo>() {
                    @Override
                    public int compare(NeedShowFundInfo o1, NeedShowFundInfo o2) {
                        if (sortOrder.equals("asc") || sortOrder.equals("ASC"))
                            return new Double(o1.getIncome()).compareTo(new Double(o2.getIncome()));
                        else return new Double(o2.getIncome()).compareTo(new Double(o1.getIncome()));
                    }
                });

            mapReturn.put("total", mMyFundInfo.getTotalCount());
            mapReturn.put("data", listData);
        }

        return mapReturn;
    }

    @RequestMapping("fund/addPlat")
    public String getAddPlat(HttpServletRequest request) {
        return "fund/add_fund";
    }


    @RequestMapping("fund/del")
    @ResponseBody
    public int delPlat(HttpServletRequest request) {
        String code = request.getParameter("code");
        String deleteSql = " t_fund where fund_code='" + code + "'";
        fundService.deleteSql(deleteSql);
        return 1;
    }


    @RequestMapping("fund/fund_goto_line")
    @ResponseBody
    public Map<String, Object> getGoToLine(HttpServletRequest request) {
        String param = request.getParameter("param");
        String code = request.getParameter("code");
        String jsonStr1 = HttpUtil.doHttpGet("https://fundmobapi.eastmoney.com/FundMApi/FundYieldDiagramNew.ashx?FCODE=" + code + "&appType=ttjj&MobileKey=a3217fd8e628d1c3e9380d2318dfa49e||" +
                "607258620742768&version=5.4.1&plat=Android&deviceid=a3217fd8e628d1c3e9380d2318dfa49e||" +
                "607258620742768&RANGE=" + param + "&product=EFund");
        JSONObject object = new JSONObject(jsonStr1);
        JSONArray mJSONArray = object.getJSONArray("Datas");
        List<List<Object>> list = new ArrayList<>();
        List<Object> dates = new ArrayList<>();
        for (int i = 0; i < mJSONArray.length(); i++) {
            JSONObject obj = mJSONArray.getJSONObject(i);
            String pdate = obj.getString("PDATE");
            double yield = obj.getDouble("YIELD");
            List<Object> ja2 = new ArrayList<>();
            DateFormat format1 = new SimpleDateFormat("yyyy-MM-dd");
            Date date = null;
            // String转Date
            try {
                date = format1.parse(pdate);
            } catch (ParseException e) {
                e.printStackTrace();
            }
            ja2.add(date.getTime());
            ja2.add(NumberUtils.getTwoScale(yield));
            list.add(ja2);
            int endInt = mJSONArray.length() - 1;
            if (i == 0 || i == endInt) {
                dates.add(date.getTime());
            }
        }
        Map<String, Object> map = new HashMap<>();
        map.put("list", list);
        map.put("dates", dates);

        return map;
    }

    @RequestMapping("fund/fund_same")
    @ResponseBody
    public List<List<Object>> getGoToSame(HttpServletRequest request) {
        String code = request.getParameter("code");
        List<TFundStockRelation> originalList = fundService.findStockByCode(code);
        List<MyHasFundInfo> findAll = fundService.findAll();
        List<List<Object>> returnList = new ArrayList<>();

        for (MyHasFundInfo mMyHasFundInfo : findAll) {
            List<TFundStockRelation> getList = new ArrayList<>();
            List<TFundStockRelation> newList = fundService.findStockByCode(mMyHasFundInfo.getFund_has_code());
            for (TFundStockRelation originalInfo : originalList) {
                for (TFundStockRelation newInfo : newList) {
                    if (newInfo.getStockCode().equals(originalInfo.getStockCode()) && !code.equals(mMyHasFundInfo.getFund_has_code())) {
                        getList.add(newInfo);
                    }
                }
            }
            if (getList.size() >= 3) {
                int count = getList.size();
                List<Object> ob = new ArrayList<>();
                StringBuilder sb = new StringBuilder();
                for (TFundStockRelation lTFundStockRelation : getList) {
                    sb.append(lTFundStockRelation.getStockName()).append("  ");
                }
                ob.add(mMyHasFundInfo.getFund_name() + "(" + mMyHasFundInfo.getFund_has_code() + ")");
                ob.add(count);
                ob.add(sb.toString());
                returnList.add(ob);
            }
        }

        return returnList;
    }

    @RequestMapping("fund/fund_compare")
    @ResponseBody
    public List<FundCompareInfo> getCompareInfo(HttpServletRequest request) {
        List<FundCompareInfo> listFundCompareInfo = new ArrayList<>();
        String code = request.getParameter("code");
        String[] array = code.split(",");
        if (array != null && array.length > 1) {
            List<TFundStockRelation> originalList = fundService.findStockByCode(array[0]);
            List<TFundStockRelation> newList = fundService.findStockByCode(array[1]);

            List<TFundStockRelation> getList = new ArrayList<>();
            for (TFundStockRelation originalInfo : originalList) {
                for (TFundStockRelation newInfo : newList) {
                    if (newInfo.getStockCode().equals(originalInfo.getStockCode())) {
                        originalInfo.setStockName("<span style=\"color: #ff4343;\">" + originalInfo.getStockName() + "</span>");
                        newInfo.setStockName("<span style=\"color: #ff4343;\">" + newInfo.getStockName() + "</span>");
                        getList.add(newInfo);
                    }
                }
            }


            MyHasFundInfo hasFundInfo = fundService.findByCode(array[0]);
            FundCompareInfo mFundCompareInfo1 = new FundCompareInfo();
            mFundCompareInfo1.setCode(hasFundInfo.getFund_has_code());
            mFundCompareInfo1.setName(hasFundInfo.getFund_name());
            StringBuilder originalInfoStringBuilder = new StringBuilder();
            for (int i = 0; i < originalList.size(); i++) {
                originalInfoStringBuilder.append("&emsp;");
                originalInfoStringBuilder.append(originalList.get(i).getStockName());
                if (i != 0 && i % 4 == 0) originalInfoStringBuilder.append("<br/>");
            }
            mFundCompareInfo1.setHold_stocks(originalInfoStringBuilder.toString());
            for (int i = 0; i < 2; i++) {
                String param;
                if (i == 0) param = "3y";
                else param = "n";
                List<List<Object>> list = fundService.getFundLineLists(hasFundInfo.getFund_has_code(), param);
                if (i == 0) mFundCompareInfo1.setList(list);
                else mFundCompareInfo1.setList2(list);
            }
            listFundCompareInfo.add(mFundCompareInfo1);


            MyHasFundInfo hasFundInfo2 = fundService.findByCode(array[1]);
            FundCompareInfo mFundCompareInfo2 = new FundCompareInfo();
            mFundCompareInfo2.setCode(hasFundInfo2.getFund_has_code());
            mFundCompareInfo2.setName(hasFundInfo2.getFund_name());
            StringBuilder originalInfoStringBuilder2 = new StringBuilder();
            for (int i = 0; i < newList.size(); i++) {
                originalInfoStringBuilder2.append("&emsp;");
                originalInfoStringBuilder2.append(newList.get(i).getStockName());
                if (i != 0 && i % 4 == 0) originalInfoStringBuilder2.append("<br/>");
            }
            mFundCompareInfo2.setHold_stocks(originalInfoStringBuilder2.toString());
            for (int i = 0; i < 2; i++) {
                String param;
                if (i == 0) param = "3y";
                else param = "n";
                List<List<Object>> list = fundService.getFundLineLists(hasFundInfo2.getFund_has_code(), param);
                if (i == 0) mFundCompareInfo2.setList(list);
                else mFundCompareInfo2.setList2(list);
            }
            listFundCompareInfo.add(mFundCompareInfo2);
        }
        return listFundCompareInfo;
    }

    @RequestMapping("fund/saveMyFund")
    @ResponseBody
    public void saveMyFundInfo(HttpServletRequest request, HttpServletResponse response) {
        MyHasFundInfo myHasFundInfo = new MyHasFundInfo();

        String fund_has_code = request.getParameter("code");
        //总持有收益率
        String fund_buy_rate = request.getParameter("score");
        double fund_has_money = Double.parseDouble(request.getParameter("money"));

        HashMap<String, String> map = new HashMap<>();
        map.put("pageIndex", "1");
        map.put("ReqNo", "1524621947948");
        map.put("CompanyId", "10000");
        map.put("pageSize", "");
        map.put("plat", "Android");
        map.put("appType", "ttjj");
        map.put("BUY", "true");
        map.put("deviceid", "db5639755e30b8af059c1d78a921c348%7C%7C666038230091568");
        map.put("product", "EFund");
        map.put("Version", "5.2.5");
        map.put("Fcodes", fund_has_code);
        String jsonStr1 = HttpUtil.doHttpPost("https://fundmobapi.eastmoney.com/FundMNewApi/FundMNFInfo", map);
        Gson gson1 = new Gson();
        MyFundInfo mMyFundInfo = gson1.fromJson(jsonStr1, new TypeToken<MyFundInfo>() {
        }.getType());
        List<TianTianMyDatasBean> tianTianMyDatasBeanList = mMyFundInfo.getDatas();
        if (tianTianMyDatasBeanList != null && tianTianMyDatasBeanList.size() > 0) {
            TianTianMyDatasBean mTianTianMyDatasBean = tianTianMyDatasBeanList.get(0);
            myHasFundInfo.setFund_name(mTianTianMyDatasBean.getSHORTNAME());
            //昨日净值
            double nav = Double.parseDouble(mTianTianMyDatasBean.getNAV());
            //总持有收益率
            double fund_buy_rateDouble = Double.parseDouble(fund_buy_rate);
            double fund_buy_price = BigDecimalUtils.div(nav, BigDecimalUtils.add(1, BigDecimalUtils.div(fund_buy_rateDouble, 100)));
            //买入金额
            double fund_buy_money_old = BigDecimalUtils.div(fund_has_money, BigDecimalUtils.add(1, BigDecimalUtils.div(fund_buy_rateDouble, 100)));
            myHasFundInfo.setFund_has_money(NumberUtils.getTwoScale(fund_buy_money_old));
            //买入成本
            myHasFundInfo.setFund_buy_price(fund_buy_price);
            //持有份额
            myHasFundInfo.setFund_has_amount(BigDecimalUtils.div(fund_has_money, nav));
            myHasFundInfo.setFund_has_code(mTianTianMyDatasBean.getFCODE());
        }
        //基金持有信息
        MyHasFundInfo hasFundInfo = fundService.findByCode(fund_has_code);
        if (hasFundInfo != null && !StringUtils.isEmpty(hasFundInfo.getFund_has_code())) {
            fundService.updateMyFund(myHasFundInfo);
        } else
            fundService.saveMyFund(myHasFundInfo);


        //持仓股票
        String urlScale = "https://fundmobapi.eastmoney.com/FundMApi/FundPositionList.ashx?FCODE=" + fund_has_code + "&appType=ttjj&plat=Android&MobileKey=a3217fd8e628d1c3e9380d2318dfa49e||607258620742768&product=EFund&version=5.4.1&deviceid=a3217fd8e628d1c3e9380d2318dfa49e||607258620742768";
        String jsonScale = HttpUtil.doHttpGet(urlScale);
        HoldStocks mHoldStocks = gson1.fromJson(jsonScale, new TypeToken<HoldStocks>() {
        }.getType());
        if (mHoldStocks != null && mHoldStocks.getDatas() != null && mHoldStocks.getDatas().size() > 0) {
            List<HoldStocks.DatasBean> mHoldStocksDatas = mHoldStocks.getDatas();
            for (HoldStocks.DatasBean mDatasBean : mHoldStocksDatas) {
                String deleteSql = " t_fund_stock where stock_code='" + mDatasBean.getShareCode() + "'";
                String insertSql = "  t_fund_stock(stock_code,stock_name,stock_new_price,stock_new_rate) VALUES('" + mDatasBean.getShareCode() + "','" + mDatasBean.getShareName() + "','" + mDatasBean.getSharePrice() + "','" + mDatasBean.getShareGain() + "')";
                fundService.deleteSql(deleteSql);
                fundService.insertSql(insertSql);
                String deleteSql2 = "  t_fund_stock_relation where fund_code='" + fund_has_code + "' and stock_code='" + mDatasBean.getShareCode() + "'";
                String insertSql2 = "  t_fund_stock_relation(fund_code,stock_code,hold_scale) VALUES('" + fund_has_code + "','" + mDatasBean.getShareCode() + "','" + mDatasBean.getShareProportion() + "')";
                fundService.deleteSql(deleteSql2);
                fundService.insertSql(insertSql2);
            }
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


    @RequestMapping("fund/saveFund")
    public void saveFundInfo(HttpServletRequest request, HttpServletResponse response) {
        String fundList = request.getParameter("fundList");
        if (!StringUtils.isEmpty(fundList)) {

            String[] arrayCode = new String[0];
            if (StringUtils.isContains(fundList, ",")) {
                arrayCode = fundList.split(",");
            } else if (StringUtils.isContains(fundList, "，")) {
                arrayCode = fundList.split("，");
            }

            StringBuilder stringBuilder = new StringBuilder();
            for (int i = 0; i < arrayCode.length; i++) {
                String code = arrayCode[i];
                if (i != 0)
                    stringBuilder.append(",");
                stringBuilder.append(code);
            }

            HashMap<String, String> map = new HashMap<>();
            map.put("pageIndex", "1");
            map.put("ReqNo", "1524621947948");
            map.put("CompanyId", "10000");
            map.put("pageSize", "");
            map.put("plat", "Android");
            map.put("appType", "ttjj");
            map.put("BUY", "true");
            map.put("deviceid", "db5639755e30b8af059c1d78a921c348%7C%7C666038230091568");
            map.put("product", "EFund");
            map.put("Version", "5.2.5");
            map.put("Fcodes", stringBuilder.toString());
            String jsonStr1 = HttpUtil.doHttpPost("https://fundmobapi.eastmoney.com/FundMNewApi/FundMNFInfo", map);
            Gson gson1 = new Gson();
            MyFundInfo mMyFundInfo = gson1.fromJson(jsonStr1, new TypeToken<MyFundInfo>() {
            }.getType());
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


    @RequestMapping("app/updateFundRemark")
    public void updateRemark(HttpServletRequest request, HttpServletResponse response) {
        String id = request.getParameter("id");
        String remark = request.getParameter("remark");
        String sqlStr = " t_fund set fund_remark='" + remark + "' where fund_code='" + id + "'";
        fundService.updateSql(sqlStr);
    }

    //基金信息爬虫，基金规模，基金创建时间，基金经理
    @RequestMapping("app/updateFundInfo")
    public void updateFundInfo(HttpServletRequest request, HttpServletResponse response) {
        List<MyHasFundInfo> findAll = fundService.findAll();
        for (MyHasFundInfo mMyHasFundInfo : findAll) {
            String code = mMyHasFundInfo.getFund_has_code();
            String url = "http://fund.eastmoney.com/" + code + ".html";
            try {
                Document doc = Jsoup.connect(url).get();
                Element child3 = doc.select("table td").get(13);
                Element child4 = doc.select("table td").get(14);
                Element child5 = doc.select("table td").get(15);
                String fund_size = child3.text().replace("基金规模：", "");
                String fund_mg = child4.text().replace("基金经理：", "");
                String fund_ct = child5.text().replace("成 立 日：", "");
                String sqlStr = " t_fund set fund_size='" + fund_size + "',fund_creat_time='" + fund_ct + "',fund_manager='" + fund_mg + "'  where fund_code='" + mMyHasFundInfo.getFund_has_code() + "'";
                fundService.updateSql(sqlStr);
            } catch (IOException e) {
                e.printStackTrace();
            }
        }

        //  fundService.updateSql(sqlStr);
    }


}
