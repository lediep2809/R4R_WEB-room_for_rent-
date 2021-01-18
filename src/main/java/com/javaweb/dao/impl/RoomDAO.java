package com.javaweb.dao.impl;

import java.util.List;

import com.javaweb.dao.IRoomDAO;
import com.javaweb.mapper.RoomMapper;
import com.javaweb.model.RoomModel;

public class RoomDAO extends AbstractDAO<RoomModel> implements IRoomDAO {

	@Override
	public List<RoomModel> findByCategoryId(Long categoryid) {

		String sql = " SELECT * FROM room WHERE categoryid =? ";
		return query(sql, new RoomMapper(), categoryid);
	}

	@Override
	public Long save(RoomModel roomModel) {
		StringBuilder sql = new StringBuilder("INSERT INTO room ( name, address,");
		sql.append(" category, area, capacity, status,");
		sql.append(" description, price, deposit, electricPrice, waterPrice, otherPrice,");
		sql.append(" houseOwner, ownerPhone, createdBy) ");
		sql.append(" VALUES( ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");

		return insert(sql.toString(), roomModel.getName(), roomModel.getAddress(), roomModel.getCategory(),
				roomModel.getArea(), roomModel.getCapacity(), roomModel.getStatus(),
				roomModel.getDescription(), roomModel.getPrice(), roomModel.getDeposit(), roomModel.getElectricPrice(),
				roomModel.getWaterPrice(), roomModel.getOtherPrice(), roomModel.getHouseOwner(), roomModel.getOwnerPhone(),
				roomModel.getCreatedBy());


	}

	@Override
	public RoomModel findOne(Long id) {
		String sql = " SELECT * FROM room WHERE id =? ";
		List<RoomModel> news = query(sql, new RoomMapper(), id);
		return news.get(0); 
	}

	@Override
	public void update(RoomModel updateRoom) {
//		StringBuilder sql = new StringBuilder("UPDATE room SET name = ?, address = ? ,");
//		sql.append(" category = ?, area = ?, capacity = ?, status = ?,");
//		sql.append(" description = ?, price = ?, deposit = ?, electricPrice = ?,");
//		sql.append(" waterPrice = ?, otherPrice = ?, houseOwner = ?, ownerPhone = ?, createdBy = ? WHERE id = ? ");
//
//		update(sql.toString(), updateRoom.getName(), updateRoom.getAddress(),
//				updateRoom.getCategory(),
//				updateRoom.getArea(), updateRoom.getCapacity(), updateRoom.getStatus(), updateRoom.getDescription(),
//				updateRoom.getPrice(), updateRoom.getDeposit(), updateRoom.getElectricPrice(),updateRoom.getWaterPrice(),
//				updateRoom.getOtherPrice(), updateRoom.getHouseOwner(), updateRoom.getOwnerPhone(), updateRoom.getCreatedBy(),
//				updateRoom.getId());
		
		StringBuilder sql = new StringBuilder("UPDATE room SET name = ?,");
		sql.append(" category = ?, area = ?, capacity = ?, price = ? WHERE id = ? ");
		

		update(sql.toString(), updateRoom.getName(), 
				updateRoom.getCategory(),
				updateRoom.getArea(), updateRoom.getCapacity(),
				updateRoom.getPrice(),
				updateRoom.getId());

	}

	@Override
	public void delete(long id) {
		
		String sql = "DELETE FROM room WHERE id = ?";
		update(sql, id);

	}

	@Override
	public List<RoomModel> findAll() {
		String sql = " SELECT * FROM room ";
		
		return query(sql, new RoomMapper());
		
	}

	@Override
	public Long getTotalItem() {
		String sql = "SELECT count(*) FROM room";
		//return count(sql);
		return null;
	}

	@Override
	public List<RoomModel> findByCreatedBy(Long createdBy) {
		
		String sql = " SELECT * FROM room WHERE createdBy =? ";
		return query(sql, new RoomMapper(), createdBy);
		
	}

	@Override
	public List<RoomModel> seach(String address) {
		 String sql = " SELECT * FROM room WHERE address LIKE '%"+address+"%'";
		// String sql = " SELECT * FROM room WHERE name LIKE '%?%'";
		//String sql = " SELECT * FROM room WHERE name LIKE '%";
		return query(sql, new RoomMapper(), address);
	}
	

	
}
