package com.bezkoder.springjwt.controllers;

import com.bezkoder.springjwt.models.Post;
import com.bezkoder.springjwt.models.User;
import com.bezkoder.springjwt.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@CrossOrigin
@RestController
@RequestMapping("/user")
public class UserController {
    @Autowired
    UserService userservice;

    public UserController(UserService userService) {
        this.userservice = userService;
    }
    @PostMapping
    public User saveUser(@RequestBody User user){
        return userservice.saveuser(user);
    }
    @GetMapping("/{id}")
    public User getuser(@PathVariable Long id) throws Exception {
        return userservice.getSudentByID(id);
    }
    @GetMapping
    public List<User> getAllUser(){
        return userservice.getAlluser();
    }



    @DeleteMapping("/{id}")
    public String deleteuser(@PathVariable Long id) throws Exception {
        userservice.deleteuserByID(id);
        return "user delete successfully";
    }
    @PutMapping
    public User updateuser(@RequestBody User user) throws Exception {
        return userservice.updateuser(user);

    }
    @PostMapping("/getEmail")
    public ResponseEntity<?> getUsersByEmail(@RequestBody User Email) {
        try {
            List<User> users;
            List<User> user;
            user = userservice.findByEmail(Email.getEmail());
            return ResponseEntity.ok(user);// Return list of users by email
        } catch (Exception e) {
            // Handle exception appropriately
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Failed to retrieve users by email: " + e.getMessage()); // Return error message
        }
    }

}