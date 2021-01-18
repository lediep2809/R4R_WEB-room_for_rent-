package com.javaweb.dao.impl;

import java.math.BigInteger;
import java.security.MessageDigest;
import java.util.List;
import java.security.NoSuchAlgorithmException;
import com.javaweb.dao.IUserDAO;
import com.javaweb.mapper.UserMapper;
import com.javaweb.model.UserModel;

public class UserDAO extends AbstractDAO<UserModel> implements IUserDAO  {

	@Override
	public UserModel findByUserNameAndPasswordAndStatus(String phone, String password, Integer status) {

		StringBuilder sql = new StringBuilder("SELECT * FROM users AS u");
		sql.append(" INNER JOIN role AS r ON r.id = u.roleid");
		sql.append(" WHERE phone = ? AND password = ? AND status = ?");
		List<UserModel> users = query(sql.toString(), new UserMapper(), phone, password, status);
		return  users.isEmpty() ? null : users.get(0);
	}

	@Override
	public Long save(UserModel userModel) {
		StringBuilder sql = new StringBuilder("INSERT INTO users (phone, password,");
		sql.append("fullname, status, createddate, roleid)");
		sql.append(" VALUES(?, ?, ?, ?, ?, ?)");
		return insert(sql.toString(), userModel.getPhone(), userModel.getPassword(), userModel.getFullname(),
				userModel.getStatus(), userModel.getCreateddate(), userModel.getRoleId());

	}

	@Override
	public void update(UserModel updateUser) {
		
		StringBuilder sql = new StringBuilder("UPDATE users SET phone = ?, password = ?,");
		sql.append("fullname = ? WHERE id = ?");
		update(sql.toString(), updateUser.getPhone() ,updateUser.getPassword(), updateUser.getFullname(), updateUser.getId());
		
	}

	@Override
	public void delete(long id) {
		String sql = "DELETE FROM users WHERE id = ?";
		update(sql, id);
	}

	@Override
	public String md5(String password) {

		String result = "";
		MessageDigest digest;
		try {
			digest = MessageDigest.getInstance("MD5");
			digest.update(password.getBytes());
			BigInteger bigInteger = new BigInteger(1,digest.digest());
			result = bigInteger.toString(16);
		} catch (NoSuchAlgorithmException e) {
			e.printStackTrace();
		}
		return result;
	}

	@Override
	public UserModel findOne(Long id) {
		String sql =  " SELECT * FROM users WHERE id =? ";
		List<UserModel> user = query(sql, new UserMapper(), id);
		return user.get(0); // is emty lá»—i tráº£ vá»� null
	}
	

	@Override
	public UserModel findPhone(String phone) {
		String sql = "SELECT * FROM users WHERE phone = ?";
		List<UserModel> users = query(sql, new UserMapper(), phone);
		return  users.isEmpty() ? null : users.get(0);
	}
	
	@Override
	public List<UserModel> findAll() {
		String sql = "SELECT phone FROM users";
		return query(sql, new UserMapper());
	}

}
