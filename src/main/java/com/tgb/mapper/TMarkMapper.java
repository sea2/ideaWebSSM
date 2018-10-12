package com.tgb.mapper;

import com.tgb.model.TMark;
import com.tgb.model.TMarkExample;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface TMarkMapper {
    int countByExample(TMarkExample example);

    int deleteByExample(TMarkExample example);

    int deleteByPrimaryKey(Integer id);

    int insert(TMark record);

    int insertSelective(TMark record);

    List<TMark> selectByExample(TMarkExample example);

    TMark selectByPrimaryKey(Integer id);

    int updateByExampleSelective(@Param("record") TMark record, @Param("example") TMarkExample example);

    int updateByExample(@Param("record") TMark record, @Param("example") TMarkExample example);

    int updateByPrimaryKeySelective(TMark record);

    int updateByPrimaryKey(TMark record);
}