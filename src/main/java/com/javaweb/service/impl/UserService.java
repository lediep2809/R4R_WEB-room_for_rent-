package com.javaweb.service.impl;

import javax.inject.Inject;

import com.javaweb.dao.IUserDAO;
import com.javaweb.model.RoomModel;
import com.javaweb.model.UserModel;
import com.javaweb.service.IUserService;

import java.sql.Date;
import java.sql.Timestamp;
import java.text.SimpleDateFormat;
import java.util.List;


public class UserService implements IUserService {

	@Inject
	private IUserDAO userDAO;

    @Override
    public UserModel findByUserNameAndPasswordAndStatus(String phone, String password, Integer status) {
        password = userDAO.md5(password);
    	return userDAO.findByUserNameAndPasswordAndStatus(phone, password, status);
    }

    @Override
    public UserModel save(UserModel userModel) {
    	UserModel olduser = userDAO.findPhone(userModel.getPhone());
    	if(olduser == null) {
        userModel.setCreateddate(new Timestamp(System.currentTimeMillis()));
        userModel.setStatus(1);
        userModel.setRoleId(2l);
        userModel.setPassword(userDAO.md5(userModel.getPassword()));
    	Long newId = userDAO.save(userModel);
        return userDAO.findOne(newId);
    	}
		return null;
    }


    @Override
    public UserModel update(UserModel updateUser) {
    	//UserModel oldNew = userDAO.findOne(updateUser.getId());
    	updateUser.setPassword(userDAO.md5(updateUser.getPassword()));
    	userDAO.update(updateUser);
		return userDAO.findOne(updateUser.getId());
    }

    @Override
    public void delete(long id) {

			//1.delete comment (khoa ngoai new_id)
			//2.delete news
			userDAO.delete(id);

    }

	@Override
	public UserModel findOne(long id) {

		return userDAO.findOne(id);

	}

	@Override
	public UserModel findPhone(String phone) {
		
		return userDAO.findPhone(phone);
	}

	@Override
	public List<UserModel> findAll() {
		
		return userDAO.findAll();
	}
}
