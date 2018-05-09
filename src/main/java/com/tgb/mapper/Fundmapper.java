package com.tgb.mapper;

import com.tgb.model.FundInfo;

import java.util.List;

public interface Fundmapper {



    List<FundInfo> getAll();
   void saveFund();
}
