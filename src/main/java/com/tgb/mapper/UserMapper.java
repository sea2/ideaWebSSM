package com.tgb.mapper;

import java.util.List;

import com.tgb.model.DataTest;
import com.tgb.model.User;
import com.tgb.model.UserClass;

public interface UserMapper {

	void save(User user);
	boolean update(User user);
	boolean delete(int id);
	User findById(int id);
	User findByPhone(String phone);
	List<User> findAll();
	List<UserClass> findClassAll();
	void saveData(DataTest mdata);
}
