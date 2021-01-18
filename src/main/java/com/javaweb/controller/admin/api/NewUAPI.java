package com.javaweb.controller.admin.api;
import java.io.IOException;

	import javax.inject.Inject;
	import javax.servlet.ServletException;
	import javax.servlet.annotation.WebServlet;
	import javax.servlet.http.HttpServlet;
	import javax.servlet.http.HttpServletRequest;
	import javax.servlet.http.HttpServletResponse;

	import com.fasterxml.jackson.databind.ObjectMapper;
import com.javaweb.model.AbstractModel;
import com.javaweb.model.UserModel;
import com.javaweb.service.IUserService;
import com.javaweb.utils.FormUtil;
import com.javaweb.utils.HttpUtil;
import com.javaweb.utils.SessionUtil;

@WebServlet(urlPatterns = "/api-admin-newU")
	
	public class NewUAPI extends HttpServlet {

		@Inject
		private IUserService userService;

		private static final long serialVersionUID = 1L;

		protected void doGet(HttpServletRequest request, HttpServletResponse response)
				throws ServletException, IOException {
			ObjectMapper mapper = new ObjectMapper();
			request.setCharacterEncoding("UTF-8");
			response.setContentType("application/json");
			Long t=  ((UserModel) SessionUtil.getInstance().getValue(request, "USERMODEL")).getId();
			UserModel userModel= userService.findOne(t);
			mapper.writeValue(response.getOutputStream(), userModel);
		}
		
		protected void doPost(HttpServletRequest request, HttpServletResponse response)
				throws ServletException, IOException {
			ObjectMapper mapper = new ObjectMapper();
			request.setCharacterEncoding("UTF-8");
			response.setContentType("application/json");
			UserModel userModel = HttpUtil.of(request.getReader()).toModel(UserModel.class);
			userModel = userService.save(userModel);
			mapper.writeValue(response.getOutputStream(), userModel);
		}

		protected void doPut(HttpServletRequest request, HttpServletResponse response)
				throws ServletException, IOException {
			ObjectMapper mapper = new ObjectMapper();
			request.setCharacterEncoding("UTF-8");
			response.setContentType("application/json");
			UserModel updateUser = HttpUtil.of(request.getReader()).toModel(UserModel.class);
			updateUser.setId(((UserModel) SessionUtil.getInstance().getValue(request, "USERMODEL")).getId());
			updateUser = userService.update(updateUser);
			mapper.writeValue(response.getOutputStream(), updateUser);
		}
//
		protected void doDelete(HttpServletRequest request, HttpServletResponse response)
				throws ServletException, IOException {
			ObjectMapper mapper = new ObjectMapper();
			request.setCharacterEncoding("UTF-8");
			response.setContentType("application/json");
			UserModel userModel =  HttpUtil.of(request.getReader()).toModel(UserModel.class);
			userService.delete(userModel.getId());
			mapper.writeValue(response.getOutputStream(), "{}");

		}

	}

