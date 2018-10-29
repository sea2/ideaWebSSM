package com.tgb.service;

import javax.servlet.http.HttpServletResponse;

public interface CommonService {


    void returnJson(HttpServletResponse response, String json);
    void returnJsonp(HttpServletResponse response, String json);

}
