package com.javaweb.dao;

import com.javaweb.model.RoomModel;

import java.util.List;

public interface IRoomDAO extends GenericDAO<RoomModel> {
	
	RoomModel findOne(Long id);
	List<RoomModel> findByCategoryId(Long categoryId);
	Long save(RoomModel roomModel);
	void update(RoomModel updateRoom);
	void delete(long id);
	List<RoomModel> findAll();
	List<RoomModel> findByCreatedBy(Long createdBy);
	Long getTotalItem();
	
	List<RoomModel> seach(String address);
}
