package com.tgb.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;
import org.springframework.web.multipart.commons.CommonsMultipartFile;
import org.springframework.web.multipart.commons.CommonsMultipartResolver;

import javax.servlet.http.HttpServletRequest;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.Date;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;
@Controller
public class UphotoController {

    @RequestMapping("/upload")
    public String addUser(@RequestParam("file") CommonsMultipartFile[] files, HttpServletRequest request) {

        for (int i = 0; i < files.length; i++) {
            System.out.println("fileName---------->" + files[i].getOriginalFilename());

            if (!files[i].isEmpty()) {
                int pre = (int) System.currentTimeMillis();
                try {
                    // 拿到输出流，同时重命名上传的文件
                    FileOutputStream os = new FileOutputStream("f:/img" + "/" + new Date().getTime() + ".jpg");
                    // 拿到上传文件的输入流
                    FileInputStream in = (FileInputStream) files[i].getInputStream();

                    // 以写字节的方式写文件
                    int b = 0;
                    while ((b = in.read()) != -1) {
                        os.write(b);
                    }
                    os.flush();
                    os.close();
                    in.close();
                    int finaltime = (int) System.currentTimeMillis();
                    System.out.println(finaltime - pre);

                } catch (Exception e) {
                    e.printStackTrace();
                    System.out.println("上传出错");
                }
            }
        }
        return "/success";
    }


    /**
     * 采用spring提供的上传文件的方法
     * 需要    multipart/form-data
     */
    @RequestMapping("app/springUpload")
    @ResponseBody
    public Map<String, String> springUpload(HttpServletRequest request) throws IllegalStateException, IOException {
        //将当前上下文初始化给  CommonsMutipartResolver （多部分解析器）
        CommonsMultipartResolver multipartResolver = new CommonsMultipartResolver(request.getSession().getServletContext());
        //检查form中是否有enctype="multipart/form-data"
        if (multipartResolver.isMultipart(request)) {
            //将request变成多部分request
            MultipartHttpServletRequest multiRequest = (MultipartHttpServletRequest) request;
            //获取multiRequest 中所有的文件名
            Iterator iter = multiRequest.getFileNames();

            while (iter.hasNext()) {
                //一次遍历所有文件
                MultipartFile file = multiRequest.getFile(iter.next().toString());
                if (file != null) {
                    String path = "c:/springUpload/" + file.getOriginalFilename();
                    //上传
                    file.transferTo(new File(path));
                }
            }

        }
        Map<String, String> map = new HashMap<>();
        map.put("code", "200");
        return map;
    }
}
