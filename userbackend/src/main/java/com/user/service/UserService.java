package com.user.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.user.entity.User;
import com.user.repository.UserRepository;

@Service
public class UserService {

	@Autowired
	private UserRepository userRepository;
	
	public Optional<User> getUserById(int userId) {
		return userRepository.findById(userId);
	}

	public List<User> getUsers() {
		return userRepository.findAll();
	}

	public User addUser(User user) {
		return userRepository.save(user);
	}

	
	

}
