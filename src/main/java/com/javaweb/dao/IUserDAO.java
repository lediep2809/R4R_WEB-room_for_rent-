package com.javaweb.dao;


import java.util.List;

import com.javaweb.model.RoomModel;
import com.javaweb.model.UserModel;

public interface IUserDAO extends GenericDAO<UserModel> {
	UserModel findByUserNameAndPasswordAndStatus(String phone, String password, Integer status);
	Long save(UserModel userModel);
	void update(UserModel updateUser);
	void delete(long id);
	String md5(String password);
	UserModel findOne(Long id);
	UserModel findPhone(String phone);
	List<UserModel> findAll();
}
