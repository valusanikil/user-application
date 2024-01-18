package com.user.exception;

import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class GlobalException {
	
	@ExceptionHandler(UserNotFoundException.class)
	public String handleUserNotFoundException(UserNotFoundException ex) {
		return ex.getMessage();
	}
	
	@ExceptionHandler(NoDataFoundException.class)
	public String handleNoDataFoundException(NoDataFoundException ex) {
		return ex.getMessage();
	}
	
	@ExceptionHandler(UserAlreadyExistException.class)
	public String handleUserAlreadyExistException(UserAlreadyExistException ex) {
		return ex.getMessage();
	}
}
