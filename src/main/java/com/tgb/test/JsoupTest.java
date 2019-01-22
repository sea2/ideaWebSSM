package com.tgb.test;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;

import java.io.IOException;

/**
 * 参考：https://www.cnblogs.com/ry123/p/3682749.html
 **/
public class JsoupTest {


    public static void main(String[] arg) {
        //   String url = "http://www.mzitu.com/tag/ugirls/";
        String url = "http://fund.eastmoney.com/160225.html";
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
            //获取父元素，进而得到父属性
               Element parentElement = element.parent();
                String hrefStr = parentElement.attr("href");
              //定位具体元素
            Element titleElement = doc.getElementsByTag("a").get(0);
            titleElement.text();
            titleElement.attr("");
              */

            Element child2 = doc.select("table td").get(12);
            Element child3 = doc.select("table td").get(13);
            Element child4 = doc.select("table td").get(14);
            Element child5 = doc.select("table td").get(15);
            Element child6 = doc.select("table td").get(16);
            Element child7 = doc.select("table td").get(17);
                System.out.println(" " + child2.text());
                System.out.println(" " + child3.text());
                System.out.println(" " + child4.text());
                System.out.println(" " + child5.text());
                System.out.println(" " + child6.text());
                System.out.println(" " + child7.text());

        } catch (IOException e) {
            e.printStackTrace();
        }
    }


}
