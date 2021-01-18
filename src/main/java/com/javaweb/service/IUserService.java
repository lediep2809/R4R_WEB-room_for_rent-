package com.javaweb.service;



import java.util.List;

import com.javaweb.model.RoomModel;
import com.javaweb.model.UserModel;

public interface IUserService {
	UserModel findByUserNameAndPasswordAndStatus(String phone, String password, Integer status);
	UserModel save(UserModel userModel);
	UserModel update(UserModel updateUser);
	void delete(long id);
	UserModel findOne(long id);
	UserModel findPhone(String phone);
	List<UserModel> findAll();
}

