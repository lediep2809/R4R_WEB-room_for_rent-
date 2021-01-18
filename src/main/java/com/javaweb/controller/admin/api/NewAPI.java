package com.javaweb.controller.admin.api;

import java.io.IOException;

import javax.inject.Inject;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.javaweb.model.RoomModel;
import com.javaweb.model.UserModel;
import com.javaweb.service.IRoomService;
import com.javaweb.utils.HttpUtil;
import com.javaweb.utils.SessionUtil;

@WebServlet(urlPatterns = "/api-admin-new")
public class NewAPI extends HttpServlet {

	@Inject
	private IRoomService roomService;

	private static final long serialVersionUID = 1L;

	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		ObjectMapper mapper = new ObjectMapper();
		request.setCharacterEncoding("UTF-8");
		response.setContentType("application/json");
		roomService.findAll();
		mapper.writeValue(response.getOutputStream(), roomService.findAll());
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		ObjectMapper mapper = new ObjectMapper();
		request.setCharacterEncoding("UTF-8");
		response.setContentType("application/json");
		RoomModel roomModel = HttpUtil.of(request.getReader()).toModel(RoomModel.class);
		roomModel.setCreatedBy(((UserModel) SessionUtil.getInstance().getValue(request, "USERMODEL")).getId());
		roomModel = roomService.save(roomModel);
		mapper.writeValue(response.getOutputStream(), roomModel);
	}

	protected void doPut(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		ObjectMapper mapper = new ObjectMapper();
		request.setCharacterEncoding("UTF-8");
		response.setContentType("application/json");
		RoomModel updateNew = HttpUtil.of(request.getReader()).toModel(RoomModel.class);
		updateNew = roomService.update(updateNew);
		mapper.writeValue(response.getOutputStream(), updateNew);
	}

	protected void doDelete(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		ObjectMapper mapper = new ObjectMapper();
		request.setCharacterEncoding("UTF-8");
		response.setContentType("application/json");
		RoomModel roomModel =  HttpUtil.of(request.getReader()).toModel(RoomModel.class);
		roomService.delete(roomModel.getId());
		mapper.writeValue(response.getOutputStream(), "{}");

	}

}
