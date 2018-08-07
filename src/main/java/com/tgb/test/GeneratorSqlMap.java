package com.tgb.test;

import org.mybatis.generator.api.MyBatisGenerator;
import org.mybatis.generator.config.Configuration;
import org.mybatis.generator.config.xml.ConfigurationParser;
import org.mybatis.generator.internal.DefaultShellCallback;

import java.io.File;
import java.util.ArrayList;
import java.util.List;

public class GeneratorSqlMap {
    public void generator() throws Exception {
        List<String> warnings = new ArrayList<String>();
        boolean overwrite = true;
        //加载配置文件
        // 公司环境
        String path = "C:\\Users\\Administrator\\Desktop\\ssm-demo\\ideaWebSSM\\src\\main\\resources\\generatorConfig.xml";
        //私人
        //  String path="D:\\workplace\\ssm-demo\\ideaWebSSM\\src\\main\\resources\\generatorConfig.xml";
        File configFile = new File(path);
        ConfigurationParser cp = new ConfigurationParser(warnings);
        Configuration config = cp.parseConfiguration(configFile);
        DefaultShellCallback callback = new DefaultShellCallback(overwrite);
        MyBatisGenerator myBatisGenerator = new MyBatisGenerator(config, callback, warnings);
        myBatisGenerator.generate(null);
    }


    public static void main(String[] args) {
        try {
            GeneratorSqlMap generatorSqlMap = new GeneratorSqlMap();
            generatorSqlMap.generator();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
