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
import com.javaweb.service.IRoomService;
import com.javaweb.utils.HttpUtil;

@WebServlet(urlPatterns = "/api-admin-search")
public class SearchAPI extends HttpServlet {

	@Inject
	private IRoomService roomService;

		private static final long serialVersionUID = 1L;

		
		protected void doPost(HttpServletRequest request, HttpServletResponse response)
				throws ServletException, IOException {
			ObjectMapper mapper = new ObjectMapper();
			request.setCharacterEncoding("UTF-8");
			response.setContentType("application/json");
			RoomModel roomModel = HttpUtil.of(request.getReader()).toModel(RoomModel.class);
			String t = roomModel.getAddress() ;
			mapper.writeValue(response.getOutputStream(), roomService.seach(t));
		}

}
