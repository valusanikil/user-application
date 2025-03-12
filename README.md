# User Management System

This is a **User Management System** developed using **Spring Boot (Backend)** and **Angular (Frontend)**. It allows users to **register, view, and search users by ID**. 

## Features
- Register new users
- View the list of registered users
- Search for a user by ID
- Error handling for user-related exceptions

## Technologies Used
### Backend:
- **Spring Boot** (REST API Development)
- **Spring Data JPA** (Database Integration)
- **H2 Database/MySQL** (Changeable Database Support)
- **Lombok** (For reducing boilerplate code)
- **Exception Handling** (Global Exception Handling)

### Frontend:
- **Angular** (User Interface)
- **TypeScript & HTML/CSS**
- **Bootstrap** (UI Styling)

## Project Structure
### Backend - Spring Boot
```
com.user
├── controller
│   ├── UserController.java
├── entity
│   ├── User.java
├── exception
│   ├── GlobalException.java
│   ├── NoDataFoundException.java
│   ├── UserAlreadyExistException.java
│   ├── UserNotFoundException.java
├── repository
│   ├── UserRepository.java
├── service
│   ├── UserService.java
```


## Screenshots
### Home Page
<img src="assets/Screenshot (129).png" alt="">

### Register User Page
<img src="assets/Screenshot (130).png" alt="">

### User List Page
<img src="assets/Screenshot (131).png" alt="">

### Search User by ID
<img src="assets/Screenshot (132).png" alt="">

## Installation and Setup
### Backend Setup
1. Clone the repository
   ```sh
   git clone https://github.com/yourusername/user-management-system.git
   ```
2. Navigate to the backend directory and run the application
   ```sh
   cd user-management-backend
   mvn spring-boot:run
   ```

### Frontend Setup
1. Navigate to the frontend directory and install dependencies
   ```sh
   cd user-management-frontend
   npm install
   ```
2. Start the Angular development server
   ```sh
   ng serve
   ```
3. Open `http://localhost:4200` in your browser.

## API Endpoints
- `GET /users` → Fetch all users
- `GET /users/{id}` → Fetch user by ID
- `POST /users/user` → Register a new user

