package com.tgb.test;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;

import java.io.IOException;

/**
 * 参考：https://www.cnblogs.com/ry123/p/3682749.html
 **/
public class JsoupTest {


    public static void main(String[] arg) {
        //   String url = "http://www.mzitu.com/tag/ugirls/";
//        String url = "http://fund.eastmoney.com/160225.html";
//        Document doc = null;
//        try {
//            doc = Jsoup.connect(url)
//                    .header("Host", "http://www.mzitu.com")
//                    .header("User-Agent", "  Mozilla/5.0 (Windows NT 6.1; WOW64; rv:5.0) Gecko/20100101 Firefox/5.0")
//                    .header("Accept", "  text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8")
//                    .header("Accept-Language", "zh-cn,zh;q=0.5")
//                    .header("Accept-Charset", "  GB2312,utf-8;q=0.7,*;q=0.7")
//                    .header("Connection", "keep-alive")
//                    .get();
//
//            Element body = doc.body();
//          /*  //获取元素通过id
//            Element elementById = doc.getElementById("id");
//            //获取元素通过class
//            Elements elementByClass = doc.getElementsByClass("class");
//            //获取元素通过选择器
//            Elements h2 = doc.select("h2.csdn-tracking-statistics");
//            Elements a = h2.select("a");
//            Elements imgs = doc.select("img[src$=.png]");
//            //获取父元素，进而得到父属性
//               Element parentElement = element.parent();
//                String hrefStr = parentElement.attr("href");
//              //定位具体元素
//            Element titleElement = doc.getElementsByTag("a").get(0);
//            titleElement.text();
//            titleElement.attr("");
//              */
//
//            Element child2 = doc.select("table td").get(12);
//            Element child3 = doc.select("table td").get(13);
//            Element child4 = doc.select("table td").get(14);
//            Element child5 = doc.select("table td").get(15);
//            Element child6 = doc.select("table td").get(16);
//            Element child7 = doc.select("table td").get(17);
//                System.out.println(" " + child2.text());
//                System.out.println(" " + child3.text());
//                System.out.println(" " + child4.text());
//                System.out.println(" " + child5.text());
//                System.out.println(" " + child6.text());
//                System.out.println(" " + child7.text());
//
//        } catch (IOException e) {
//            e.printStackTrace();
//        }


        //   String url = "http://www.mzitu.com/tag/ugirls/";
        String url = "https://m.gm88.com";
        Document doc = null;
        try {
            doc = Jsoup.connect(url).get();

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
/*<div class="swiper-container swiper-container1 swiper-container-horizontal">
                <div class="swiper-wrapper" style="transform: translate3d(-2560px, 0px, 0px); transition-duration: 300ms;">
                <div class="swiper-slide swiper-slide-duplicate swiper-slide-next swiper-slide-duplicate-prev" data-swiper-slide-index="2" style="width: 640px;">
                        <a href="/index.php?app=index&amp;act=jump&amp;id=204"><img src="/uploads/images/1523954453.png" alt="刺激战场" style="width: 100%;"></a>
                    </div>
                                        <div class="swiper-slide swiper-slide-duplicate-active" data-swiper-slide-index="0" style="width: 640px;">
                        <a href="/index.php?app=index&amp;act=jump&amp;id=222"><img src="/uploads/images/201902/1550129786.jpeg" alt="阴阳师" style="width: 100%;"></a>
                    </div>
                                        <div class="swiper-slide" data-swiper-slide-index="1" style="width: 640px;">
                        <a href="/index.php?app=index&amp;act=jump&amp;id=223"><img src="/uploads/images/201902/1550133821.jpeg" alt="王者荣耀" style="width: 100%;"></a>
                    </div>
                                        <div class="swiper-slide swiper-slide-prev swiper-slide-duplicate-next" data-swiper-slide-index="2" style="width: 640px;">
                        <a href="/index.php?app=index&amp;act=jump&amp;id=204"><img src="/uploads/images/1523954453.png" alt="刺激战场" style="width: 100%;"></a>
                    </div>
                                    <div class="swiper-slide swiper-slide-duplicate swiper-slide-active" data-swiper-slide-index="0" style="width: 640px;">
                        <a href="/index.php?app=index&amp;act=jump&amp;id=222"><img src="/uploads/images/201902/1550129786.jpeg" alt="阴阳师" style="width: 100%;"></a>
                    </div></div>
                <div class="swiper-pagination swiper-pagination-bullets"><span class="swiper-pagination-bullet swiper-pagination-bullet-active"></span><span class="swiper-pagination-bullet"></span><span class="swiper-pagination-bullet"></span></div>
            </div>*/


            Elements elementByClass = doc.getElementsByClass("swiper-slide");
            for (Element element : elementByClass) {
                Elements elementas = element.children();
                if (elementas.size() > 0) {
                    Element aElement = elementas.get(0);
                    String urlGm = aElement.attr("href");
                    System.out.println(urlGm);
                    Elements elementImgs = aElement.children();
                    if (elementImgs.size() > 0) {
                        Element imgElement = elementImgs.get(0);
                        String srcGm = imgElement.attr("src");
                        System.out.println(srcGm);
                    }
                }
            }


        } catch (IOException e) {
            e.printStackTrace();
        }
    }


}
