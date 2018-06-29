package com.tgb.service;

import com.tgb.model.MyHasFundInfo;

import java.util.List;

public interface FundService {


    List<MyHasFundInfo> findAll();


    void saveMyFund(MyHasFundInfo myHasFundInfo);


    MyHasFundInfo findByCode(String fund_has_code);

    void updateMyFund(MyHasFundInfo myHasFundInfo);
}
