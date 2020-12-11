package com.tgb.controller;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public abstract class BaseController {




    protected void write(HttpServletResponse response,String strJson){
        response.setContentType("application/json;charset=UTF-8");
        response.setCharacterEncoding("UTF-8");
        try {
            response.getWriter().write(strJson);
            response.getWriter().flush();
            response.getWriter().close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
