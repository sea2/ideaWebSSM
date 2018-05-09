package com.tgb.test;

public class SuperTest extends SuperTestAbstract {


    public static void main(String[] args) {
        SuperTestAbstract mSuperTestAbstract = new SuperTest();
        mSuperTestAbstract.show(2);

        String str = "官方渠道#@10000\n" +
                "应用宝#@10010#@Sjqq_1\n" +
                "360手机助手#@10020#@360store_2\n" +
                "百度助手#@10030#@Baidu_1\n" +
                "豌豆荚#@10060#@Wandoujia_1\n" +
                "安智市场#@10070#@AnZhi_1\n" +
                "机锋市场#@10080#@Gfan_1\n" +
                "淘宝手机助手#@10090#@Taobao_1\n" +
                "小米应用商店#@10100#@Xiaomi_1\n" +
                "三星#@10110#@Samsung_1\n" +
                "华为#@10120#@Vmall_1\n" +
                "vivo#@10130\n" +
                "oppo#@10140#@Nearme_1\n" +
                "联想#@10150#@Lenovo_1\n" +
                "魅族#@10170#@Meizu_1\n" +
                "锁财宝#@10200\n" +
                "有米网络#@140293948\n" +
                "神马#@140170728\n" +
                "指游网络#@145851432\n" +
                "乐视手机市场#@146169297\n" +
                "锤子#@146169286\n" +
                "搜狗推广#@146178142\n" +
                "sougouwm#@148213873\n" +
                "360semwm#@148213837\n" +
                "360sem#@148213815\n" +
                "神马SEM#@151540630\n" +
                "一点咨询-灵犀4#@141688220\n" +
                "一点资讯-灵犀3#@141688194\n" +
                "一点咨询-灵犀2#@141688180\n" +
                "一点咨询-灵犀1#@141687640\n" +
                "品友DSP#@158081840\n" +
                "爱奇艺1#@159438871\n" +
                "爱奇艺2#@159438879\n" +
                "爱奇艺3#@159438904\n" +
                "今日头条1#@140099866\n" +
                "今日头条2#@140099868\n" +
                "今日头条3#@140099870\n" +
                "今日头条4#@140099874\n" +
                "移动#@159435840\n" +
                "联通PUSH#@159421038\n" +
                "360手机助手-点睛13#@163077599\n" +
                "360手机助手-点睛14#@163077613\n" +
                "今日头条黄金活动#@412\n" +
                "搜狗#@140162578\n" +
                "今日头条10#@443\n" +
                "今日头条11#@444\n" +
                "今日头条12#@445\n" +
                "今日头条13#@446\n" +
                "今日头条14#@447\n" +
                "今日头条15#@448\n" +
                "唐山推客#@814\n" +
                "今日头条16#@2801\n" +
                "今日头条17#@2804\n" +
                "今日头条18#@2805\n" +
                "今日头条19#@2806";

        String[] array = str.split("\n");
        for (String string : array) {
            String[] array2 = string.split("#@");

            String string2="";
            if (array2.length==2) {
                 string2 = array2[0] + "_" + array2[1] + "{\n" +
                        "manifestPlaceholders << [CHANNEL_KEY:\"" + array2[0] + "\"]\n" +
                        "manifestPlaceholders << [CHANNEL_VALUE:\"" + array2[1] + "\"]\n" +
                        "manifestPlaceholders << [AdTracking_ChannelID: \"\"]}";
            }else   if (array2.length==3){
                 string2 = array2[0] + "_" + array2[1] + "{\n" +
                        "manifestPlaceholders << [CHANNEL_KEY:\"" + array2[0] + "\"]\n" +
                        "manifestPlaceholders << [CHANNEL_VALUE:\"" + array2[1] + "\"]\n" +
                        "manifestPlaceholders << [AdTracking_ChannelID: \"" + array2[2] + "\"]}\n";
            }
            System.out.println(string2);


    }

}


    @Override
    protected void diss(int i) {
        super.diss(i);
        System.out.println("SuperTest---diss" + i);
    }
}
