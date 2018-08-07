package com.tgb.mapper;

import com.tgb.model.TFundStock;
import com.tgb.model.TFundStockExample;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface TFundStockMapper {
    int countByExample(TFundStockExample example);

    int deleteByExample(TFundStockExample example);

    int deleteByPrimaryKey(Integer stockId);

    int insert(TFundStock record);

    int insertSelective(TFundStock record);

    List<TFundStock> selectByExample(TFundStockExample example);

    TFundStock selectByPrimaryKey(Integer stockId);

    int updateByExampleSelective(@Param("record") TFundStock record, @Param("example") TFundStockExample example);

    int updateByExample(@Param("record") TFundStock record, @Param("example") TFundStockExample example);

    int updateByPrimaryKeySelective(TFundStock record);

    int updateByPrimaryKey(TFundStock record);
}