package com.tgb.service.impl;

import com.tgb.mapper.FundMapper;
import com.tgb.model.MyHasFundInfo;
import com.tgb.service.FundService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.Resource;
import java.util.List;
@Service
@Transactional
public class FundServiceImpl implements FundService {
    @Resource
    private FundMapper mapper;



    @Override
    public List<MyHasFundInfo> findAll() {
        return mapper.findAll();
    }

    @Override
    public void saveMyFund(MyHasFundInfo myHasFundInfo) {
        mapper.saveMyFund(myHasFundInfo);
    }

    @Override
    public MyHasFundInfo findByCode(String fund_has_code){
      return   mapper.findByCode(fund_has_code);
    }

    @Override
    public void updateMyFund(MyHasFundInfo myHasFundInfo){
        mapper.updateMyFund(myHasFundInfo);
    }
}


