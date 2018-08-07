package com.tgb.mapper;

import com.tgb.model.TFund;
import com.tgb.model.TFundExample;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface TFundMapper {
    int countByExample(TFundExample example);

    int deleteByExample(TFundExample example);

    int deleteByPrimaryKey(Integer fundId);

    int insert(TFund record);

    int insertSelective(TFund record);

    List<TFund> selectByExample(TFundExample example);

    TFund selectByPrimaryKey(Integer fundId);

    int updateByExampleSelective(@Param("record") TFund record, @Param("example") TFundExample example);

    int updateByExample(@Param("record") TFund record, @Param("example") TFundExample example);

    int updateByPrimaryKeySelective(TFund record);

    int updateByPrimaryKey(TFund record);
}