package com.tgb.controller;

import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;
import com.tgb.model.MyFundInfo;
import com.tgb.model.MyHasFundInfo;
import com.tgb.model.NeedShowFundInfo;
import com.tgb.model.TianTianMyDatasBean;
import com.tgb.service.FundService;
import com.tgb.util.HttpUtil;
import com.tgb.util.StringUtils;
import net.sf.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.*;

/**
 * 基金
 *
 * */

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


            List<NeedShowFundInfo> listData = new ArrayList<NeedShowFundInfo>();
            for (TianTianMyDatasBean mTianTianMyDatasBean : mTianTianMyDatasBeanList) {
                NeedShowFundInfo mNeedShowFundInfo = new NeedShowFundInfo();
                mNeedShowFundInfo.setFcode(mTianTianMyDatasBean.getFCODE());
                mNeedShowFundInfo.setGsz(mTianTianMyDatasBean.getGSZ() + "**" + mTianTianMyDatasBean.getGSZZL());
                mNeedShowFundInfo.setGszzl(mTianTianMyDatasBean.getGSZZL());
                mNeedShowFundInfo.setNav(mTianTianMyDatasBean.getNAV() + "**" + mTianTianMyDatasBean.getNAVCHGRT());
                mNeedShowFundInfo.setNavChgrt(mTianTianMyDatasBean.getNAVCHGRT());
                mNeedShowFundInfo.setShortname(mTianTianMyDatasBean.getSHORTNAME() + "**" + mTianTianMyDatasBean.getFCODE());
                for (MyHasFundInfo mMyHasFundInfo : findAll) {
                    if (mMyHasFundInfo.getFund_has_code().equals(mTianTianMyDatasBean.getFCODE())) {
                        mNeedShowFundInfo.setMoney(mMyHasFundInfo.getFund_has_money());
                        double getNew = Double.parseDouble(mTianTianMyDatasBean.getNAV());
                        double rate = getNew / mMyHasFundInfo.getFund_buy_price() - 1d;
                        double income = rate * mMyHasFundInfo.getFund_has_money();
                        mNeedShowFundInfo.setIncome(StringUtils.keepTwo(income));
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
                            return Double.compare(o1.getMoney(), o2.getMoney());
                        else return Double.compare(o2.getMoney(), o1.getMoney());
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

    @RequestMapping("fund/saveMyFund")
    public void saveMyFundInfo(HttpServletRequest request, HttpServletResponse response) {
        MyHasFundInfo myHasFundInfo = new MyHasFundInfo();

        String fund_has_code = request.getParameter("code");
        //昨天总持有收益率
        String fund_buy_rate = request.getParameter("score");
        String fund_has_money = request.getParameter("money");
        myHasFundInfo.setFund_has_money(Double.parseDouble(fund_has_money));


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

            double fund_buy_rateDouble = Double.parseDouble(fund_buy_rate) / 100d;

            double fund_buy_price = nav / (1 + fund_buy_rateDouble);
            myHasFundInfo.setFund_buy_price(fund_buy_price);
            myHasFundInfo.setFund_has_code(mTianTianMyDatasBean.getFCODE());
        }


        MyHasFundInfo hasFundInfo = fundService.findByCode(fund_has_code);
        if (hasFundInfo != null && !StringUtils.isEmpty(hasFundInfo.getFund_has_code())) {
            fundService.updateMyFund(myHasFundInfo);
        } else
            fundService.saveMyFund(myHasFundInfo);

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


}
