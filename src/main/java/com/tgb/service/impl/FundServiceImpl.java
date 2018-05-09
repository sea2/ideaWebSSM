package com.tgb.service.impl;

import com.tgb.mapper.Fundmapper;
import com.tgb.model.FundInfo;
import com.tgb.service.FundService;

import javax.annotation.Resource;
import java.util.List;

public class FundServiceImpl implements FundService {
    @Resource
    private Fundmapper mapper;



    @Override
    public List<FundInfo> findAll() {
        return mapper.getAll();
    }

}


