package com.tgb.test;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;

import java.io.IOException;

public class JsoupTest {


    public static void main(String[] arg) {
        //   String url = "http://www.mzitu.com/tag/ugirls/";
        String url = "http://www.mzitu.com/";
        Document doc = null;
        try {
            doc = Jsoup.connect(url)
                    .header("Host", "http://www.mzitu.com")
                    .header("User-Agent", "  Mozilla/5.0 (Windows NT 6.1; WOW64; rv:5.0) Gecko/20100101 Firefox/5.0")
                    .header("Accept", "  text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8")
                    .header("Accept-Language", "zh-cn,zh;q=0.5")
                    .header("Accept-Charset", "  GB2312,utf-8;q=0.7,*;q=0.7")
                    .header("Connection", "keep-alive")
                    .get();

            Element body = doc.body();
          /*  //获取元素通过id
            Element elementById = doc.getElementById("id");
            //获取元素通过class
            Elements elementByClass = doc.getElementsByClass("class");
            //获取元素通过选择器
            Elements h2 = doc.select("h2.csdn-tracking-statistics");
            Elements a = h2.select("a");
            Elements imgs = doc.select("img[src$=.png]");

              //定位具体元素
            Element titleElement = doc.getElementsByTag("a").get(0);
            titleElement.text();
            titleElement.attr("");
              */

            Elements a = doc.select(".lazy");
            for (Element element : a) {
                Element parentElement = element.parent();
                String hrefStr = parentElement.attr("href");
                String imgStr = element.attr("data-original");
                System.out.println(hrefStr + " " + imgStr);
            }

        } catch (IOException e) {
            e.printStackTrace();
        }
    }


}
