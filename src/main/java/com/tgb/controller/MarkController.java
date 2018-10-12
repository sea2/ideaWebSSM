package com.tgb.controller;

import com.tgb.model.TMark;
import com.tgb.model.TMarkExample;
import com.tgb.service.MarkService;
import com.tgb.util.StringUtils;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Controller
public class MarkController {

    @Autowired
    private MarkService markService;


    @RequestMapping("mark/getList")
    public String jspFundList(HttpServletRequest request, HttpServletResponse response) {
       String type = request.getParameter("type");
        request.setAttribute("type", type);
        return "admin_mark";
    }

    @RequestMapping("mark/getListInfo")
    @ResponseBody
    public Map<String, Object> getList(HttpServletRequest request, HttpServletResponse response) {
        String type = "1";

        if (StringUtils.isEmpty(request.getParameter("type"))) type = request.getParameter("type");
        TMarkExample example = new TMarkExample();
        example.createCriteria().andTypeEqualTo(StringUtils.toInt(type, 1));
        List<TMark> findAll = markService.getList(example);
        Map<String, Object> mapReturn = new HashMap<String, Object>();
        if (findAll != null)
            mapReturn.put("total", findAll.size());
        mapReturn.put("data", findAll);

        return mapReturn;
    }


    @RequestMapping("mark/del")
    @ResponseBody
    public int delPlat(HttpServletRequest request) {
        String id = request.getParameter("id");
        return markService.deleteByPrimaryKey(Integer.valueOf(id));
    }

    @RequestMapping("mark/insert")
    @ResponseBody
    public void saveMyFundInfo(HttpServletRequest request, HttpServletResponse response) {

        String remark = request.getParameter("remark");
        String type = request.getParameter("type");
        String level = request.getParameter("level");
        TMark mark = new TMark();
        mark.setRemark(remark);
        mark.setTime(new Date());
        mark.setType(Integer.valueOf(type));
        mark.setLevel(Integer.valueOf(level));
        markService.insert(mark);
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
