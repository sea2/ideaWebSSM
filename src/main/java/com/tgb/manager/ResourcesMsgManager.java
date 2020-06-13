package com.tgb.manager;


import org.springframework.context.annotation.PropertySource;
import org.springframework.context.i18n.LocaleContextHolder;

import java.util.HashMap;
import java.util.Locale;
import java.util.Map;
import java.util.ResourceBundle;

@PropertySource(value = {"classpath:i18n/msg*.properties"})
public class ResourcesMsgManager {


    /**
     * 将国际化信息存放在一个map中
     */
    private static final Map<String, ResourceBundle> MESSAGES = new HashMap<String, ResourceBundle>();

    /**
     * 获取国际化信息
     */
    public static String getMessage(String key, Object... params) {
        //如zh、pt、en等
        Locale locale = LocaleContextHolder.getLocale();
        ResourceBundle message = MESSAGES.get(locale.getLanguage());
        if (message == null) {
            synchronized (MESSAGES) {
                //在这里读取配置信息
                message = MESSAGES.get(locale.getLanguage());
                if (message == null) {
                    message = ResourceBundle.getBundle("i18n/msg", locale);
                    MESSAGES.put(locale.getLanguage(), message);
                }
            }
        }
        //此处获取并返回message
        if (params != null) {
            return String.format(message.getString(key), params);
        }
        return message.getString(key);
    }

    /**
     * 清除国际化信息
     */
    public static void flushMessage() {
        MESSAGES.clear();
    }

}
