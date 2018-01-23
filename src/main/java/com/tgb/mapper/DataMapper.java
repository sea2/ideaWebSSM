package com.tgb.mapper;

import java.util.List;

import com.tgb.model.DataTest;

public interface DataMapper {

	boolean save(DataTest data);

	boolean update(DataTest data);

	boolean deleteType(int type);

	boolean deleteId(int id);

	DataTest findById(int id);

	List<DataTest> findByType(int type);

	List<DataTest> findByTypeRemark(String typeRemark);

	List<DataTest> findAll();

}
