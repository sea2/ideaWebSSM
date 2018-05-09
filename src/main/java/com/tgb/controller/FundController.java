package com.tgb.controller;

import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;
import com.tgb.model.FundInfo;
import com.tgb.model.MyFundInfo;
import com.tgb.service.FundService;
import com.tgb.util.HttpUtil;
import com.tgb.util.StringUtils;
import net.sf.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.HashMap;
import java.util.List;


@Controller
public class FundController {

    @Autowired
    private FundService fundService;


    /**
     * 获取所有列表
     *
     * @param request
     * @return
     */
    @RequestMapping("fund/getList")
    public String getList(HttpServletRequest request, HttpServletResponse response) {
        List<FundInfo> findAll = fundService.findAll();
        request.setAttribute("platList", findAll);
        request.setAttribute("order_id", 6);
        return "p2p/list_plat";
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
            String jsonStr1 =   HttpUtil.doHttpPost("https://fundmobapi.eastmoney.com/FundMNewApi/FundMNFInfo", map);
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
