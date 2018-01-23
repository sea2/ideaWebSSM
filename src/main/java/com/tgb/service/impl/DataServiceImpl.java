package com.tgb.service.impl;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.tgb.mapper.DataMapper;
import com.tgb.model.DataTest;
import com.tgb.service.DataService;

@Service
@Transactional // 此处不再进行创建SqlSession和提交事务，都已交由spring去管理了。
public class DataServiceImpl implements DataService {
	@Resource
	private DataMapper mapper;

	@Override
	public boolean save(DataTest data) {
		return mapper.save(data);
	}

	@Override
	public boolean update(DataTest data) {
		return mapper.update(data);
	}

	@Override
	public boolean deleteType(int type) {
		return mapper.deleteType(type);
	}

	@Override
	public boolean deleteId(int id) {
		return mapper.deleteId(id);
	}

	@Override
	public DataTest findById(int id) {
		return mapper.findById(id);
	}

	@Override
	public List<DataTest> findByType(int type) {
		return mapper.findByType(type);
	}

	@Override
	public List<DataTest> findByTypeRemark(String typeRemark) {
		return mapper.findByTypeRemark(typeRemark);
	}

	@Override
	public List<DataTest> findAll() {
		return mapper.findAll();
	}

}
