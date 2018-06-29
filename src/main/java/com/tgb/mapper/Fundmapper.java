package com.tgb.mapper;

import com.tgb.model.MyHasFundInfo;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface FundMapper {



    List<MyHasFundInfo> findAll();
     void saveMyFund(MyHasFundInfo myHasFundInfo);

    MyHasFundInfo findByCode(@Param("fund_has_code")String fund_has_code);

    void updateMyFund(MyHasFundInfo myHasFundInfo);
}
