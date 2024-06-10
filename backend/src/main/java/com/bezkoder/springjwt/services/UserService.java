package com.bezkoder.springjwt.services;

import com.bezkoder.springjwt.models.Post;
import com.bezkoder.springjwt.models.User;
import com.bezkoder.springjwt.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;


@Service
public class UserService {
    @Autowired
    private final UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }



    public User saveuser(User user){
        User saveuser=userRepository.save(user);
        System.out.println(saveuser);
        return saveuser;
    }
    public User getSudentByID(Long id) throws Exception {
        return userRepository.findById(id).orElseThrow(()-> new Exception("user no found where id: "+id));
    }
    public List<User> getAlluser(){
        return userRepository.findAll();
    }
    public void deleteuserByID(Long id) throws Exception {
        userRepository.findById(id).orElseThrow(()-> new Exception("user no found with id: "+id));
        userRepository.deleteById(id);
        System.out.println("user deleted with id : "+id);

    }

    public User updateuser(User user) throws Exception {
        userRepository.findById(user.getId()).orElseThrow(()-> new Exception("user no found with id: "+user.getId()));
        return userRepository.save(user);
    }


    public List<User> findByEmail(String email) {
        List<User> user = userRepository.findByEmail(email);
        return user;
    }
}
