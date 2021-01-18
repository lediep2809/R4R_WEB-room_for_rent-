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
import com.javaweb.service.IUserService;
import com.javaweb.utils.HttpUtil;
import com.javaweb.utils.SessionUtil;

@WebServlet(urlPatterns = "/api-admin-postroom")
	
	public class PostRoomAPI extends HttpServlet {

	@Inject
	private IRoomService roomService;

		private static final long serialVersionUID = 1L;

		
		
		protected void doGet(HttpServletRequest request, HttpServletResponse response)
				throws ServletException, IOException {
			ObjectMapper mapper = new ObjectMapper();
			request.setCharacterEncoding("UTF-8");
			response.setContentType("application/json");
			RoomModel roomModel = HttpUtil.of(request.getReader()).toModel(RoomModel.class);
			Long t=  ((UserModel) SessionUtil.getInstance().getValue(request, "USERMODEL")).getId();
			mapper.writeValue(response.getOutputStream(), roomService.findByCreatedBy(t));
		}

		

	}