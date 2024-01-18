package com.user.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.user.entity.User;
import com.user.exception.NoDataFoundException;
import com.user.exception.UserAlreadyExistException;
import com.user.exception.UserNotFoundException;
import com.user.service.UserService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")

public class UserController {

	@Autowired
	private UserService userService;
	
	@GetMapping("users/{userId}")
	public Optional<User> getUserById(@PathVariable ("userId") int userId) throws UserNotFoundException {
		Optional<User> user= Optional.of(userService.getUserById(userId).orElseThrow(
				()->new UserNotFoundException("No user found with the id : "+userId)));
		return user;
	}
	
	@GetMapping("users")
	public List<User> getUsers() throws NoDataFoundException{
		List<User> userList=userService.getUsers();
		if(userList.isEmpty()) {
			throw new NoDataFoundException("No users found");
		}
		return userList;
	}
	
	@PostMapping("users/user")
	public User addUser(@RequestBody User user) throws UserAlreadyExistException {
		User existingUser=userService.getUserById(user.getUserId())
				.orElse(null);
		if(existingUser==null) {
			return userService.addUser(user);
		}
		else {
			throw new UserAlreadyExistException("User already exists!!");
		}
	}
}
