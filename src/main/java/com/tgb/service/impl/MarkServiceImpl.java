package com.tgb.service.impl;

import com.tgb.mapper.TMarkMapper;
import com.tgb.model.TMark;
import com.tgb.model.TMarkExample;
import com.tgb.service.MarkService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.Resource;
import java.util.List;

@Service
@Transactional
public class MarkServiceImpl implements MarkService{
    @Resource
    private TMarkMapper mapper;


    @Override
    public int deleteByPrimaryKey(Integer id) {
        return mapper.deleteByPrimaryKey(id);
    }

    @Override
    public int insert(TMark record) {
        return mapper.insert(record);
    }

    @Override
    public List<TMark> getList(TMarkExample example) {
        return mapper.selectByExample(example);
    }
    @Override
    public int updateByPrimaryKey(TMark record){
        return mapper.updateByPrimaryKey(record);
    }

    @Override
    public TMark selectByPrimaryKey(Integer id){
        return mapper.selectByPrimaryKey(id);
    }



}
