package com.tgb.service;

import com.tgb.model.TMark;
import com.tgb.model.TMarkExample;

import java.util.List;

public interface MarkService {


    int deleteByPrimaryKey(Integer id);

    int insert(TMark record);

     List<TMark> getList(TMarkExample example);

     int updateByPrimaryKey(TMark record);

     TMark selectByPrimaryKey(Integer id);


}
