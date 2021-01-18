package com.javaweb.service;

import com.javaweb.model.RoomModel;


import java.util.List;

public interface IRoomService {
	List<RoomModel> findByCategoryId(Long categoryId);
	RoomModel save(RoomModel roomModel);
	RoomModel update(RoomModel updateNew);
	void delete(long id);
	List<RoomModel> findAll();
	int getTotalItem();
	RoomModel findOne(long id);
	List<RoomModel> findByCreatedBy(Long createdBy);
	List<RoomModel> seach(String address);
}
