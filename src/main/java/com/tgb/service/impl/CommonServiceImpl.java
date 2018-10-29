package com.tgb.service.impl;

import com.tgb.service.CommonService;
import org.json.JSONObject;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Service
@Transactional // 此处不再进行创建SqlSession和提交事务，都已交由spring去管理了。
public class CommonServiceImpl implements CommonService {


    @Override
    public void returnJson(HttpServletResponse response, String jsonStr) {
        try {
            response.setContentType("application/json;charset=UTF-8");
            response.setCharacterEncoding("UTF-8");
            response.getWriter().write(jsonStr);
            response.getWriter().flush();
            response.getWriter().close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    @Override
    public void returnJsonp(HttpServletResponse response, String json) {
        try {
            // 正常接口返回
            JSONObject mJSONObject = new JSONObject();
            mJSONObject.put("code", 200);
            // jsonp格式返回
            String renderStr = "jsonpCallback" + "(" + json + ")";
            response.setContentType("text/plain;charset=UTF-8");
            response.getWriter().write(renderStr);
            response.getWriter().flush();
            response.getWriter().close();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
