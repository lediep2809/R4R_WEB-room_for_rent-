package com.javaweb.mapper;

import java.sql.ResultSet;
import java.sql.SQLException;

import com.javaweb.model.RoomModel;

public class RoomMapper implements RowMapper<RoomModel> {


	@Override
	public RoomModel mapRow(ResultSet resultSet) {
		try {

			RoomModel rooms = new RoomModel();
			rooms.setId(resultSet.getLong("id"));
			rooms.setName(resultSet.getString("name"));
			rooms.setAddress(resultSet.getString("address"));
			rooms.setCategory(resultSet.getString("category"));
			rooms.setArea(resultSet.getString("area"));
			rooms.setCapacity(resultSet.getString("capacity"));
			rooms.setStatus(resultSet.getString("status"));
			rooms.setDescription(resultSet.getString("description"));
			rooms.setPrice(resultSet.getString("price"));
			rooms.setDeposit(resultSet.getString("deposit"));
			rooms.setElectricPrice(resultSet.getString("electricPrice"));
			rooms.setWaterPrice(resultSet.getString("waterPrice"));
			rooms.setOtherPrice(resultSet.getString("otherPrice"));
			rooms.setHouseOwner(resultSet.getString("houseOwner"));
			rooms.setOwnerPhone(resultSet.getString("ownerPhone"));
			rooms.setCreatedBy(resultSet.getLong("createdby"));
//			rooms.setSeach(resultSet.getString("seach"));
//			if (resultSet.getTimestamp("modifieddate") != null) {
//				rooms.setModifiedDate(resultSet.getTimestamp("modifieddate"));
//			}
//			if (resultSet.getString("modifiedby") != null) {
//				rooms.setModifiedBy(resultSet.getString("modifiedby"));
//			}
			return rooms;
		} catch (SQLException e) {
			return null;
		}	
	}
}

