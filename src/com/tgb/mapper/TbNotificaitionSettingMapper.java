package com.tgb.mapper;

import com.tgb.model.TbNotificaitionSetting;
import com.tgb.model.TbNotificaitionSettingExample;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface TbNotificaitionSettingMapper {
    int countByExample(TbNotificaitionSettingExample example);

    int deleteByExample(TbNotificaitionSettingExample example);

    int deleteByPrimaryKey(Long id);

    int insert(TbNotificaitionSetting record);

    int insertSelective(TbNotificaitionSetting record);

    List<TbNotificaitionSetting> selectByExample(TbNotificaitionSettingExample example);

    TbNotificaitionSetting selectByPrimaryKey(Long id);

    int updateByExampleSelective(@Param("record") TbNotificaitionSetting record, @Param("example") TbNotificaitionSettingExample example);

    int updateByExample(@Param("record") TbNotificaitionSetting record, @Param("example") TbNotificaitionSettingExample example);

    int updateByPrimaryKeySelective(TbNotificaitionSetting record);

    int updateByPrimaryKey(TbNotificaitionSetting record);
}