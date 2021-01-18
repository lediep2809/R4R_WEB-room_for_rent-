package com.javaweb.service.impl;


import com.javaweb.dao.IRoomDAO;

import com.javaweb.model.RoomModel;
import com.javaweb.service.IRoomService;

import javax.inject.Inject;
import java.util.List;

public class RoomService implements IRoomService {

	@Inject
	private IRoomDAO roomDao;


	
    @Override
    public List<RoomModel> findByCategoryId(Long categoryId) {
        return roomDao.findByCategoryId(categoryId);
    }

    @Override
    public RoomModel save(RoomModel roomModel) {
    	
    	Long newId = roomDao.save(roomModel);
        return roomDao.findOne(newId);
    }

    @Override
    public RoomModel update(RoomModel updateRoom) {
    	
    	// RoomModel oldNew = newDao.findOne(updateNew.getId());
		//CategoryModel category = categoryDAO.findOneByCode(updateNew.getCategoryCode());
		//updateNew.setCategoryId(category.getId());
    	roomDao.update(updateRoom);
		return roomDao.findOne(updateRoom.getId());
    }

    @Override
    public void delete(long id) {

    		roomDao.delete(id);

    }

    @Override
    public List<RoomModel> findAll() {
        
    	return roomDao.findAll();
    }

    @Override
    public int getTotalItem() {
        return 0;
    }

    @Override
    public RoomModel findOne(long id) {
        RoomModel roomModel = roomDao.findOne(id);
//        CategoryModel categoryModel = categoryDAO.findOne(roomModel.getCategoryId());
//        roomModel.setCategoryCode(categoryModel.getCode());
        return roomModel;

    }

	@Override
	public List<RoomModel> findByCreatedBy(Long createdBy) {
		
		return roomDao.findByCreatedBy(createdBy);
	}

	@Override
	public List<RoomModel> seach(String address) {
		
		return roomDao.seach(address);
	}
}
