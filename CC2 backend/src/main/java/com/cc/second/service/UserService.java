package com.cc.second.service;

import com.cc.second.model.User;
import com.cc.second.repository.UserRepository;

import java.util.List;
import java.util.Optional;

import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;



@Service
@Transactional
public class UserService {

    @Autowired
    private UserRepository userRepository;
    public void saveUser(User user) {
        Optional<User> userExists = userRepository.findByEmail(user.getEmail());
        if (userExists.isPresent())
            return;
        userRepository.save(user);
    }


    public User getUserByEmail(String email) {
        boolean userExists = userRepository.existsByEmail(email);
        if (userExists) {
            return userRepository.findByEmail(email).get();
        }
        return new User();
    }

    public User updateUser(String email, User user) {
        Optional<User> userExists = userRepository.findByEmail(email);
        if (userExists.isPresent()) {
            User existingUser = userExists.get();
            existingUser.setUsername(user.getUsername());
            existingUser.setPassword(user.getPassword());
            existingUser.setPhone(user.getPhone());

            return userRepository.save(existingUser);
        }
        return new User();
    }
    public String deleteUser(String email) {
        boolean userExists = userRepository.existsByEmail(email);
        if (userExists) {
            userRepository.deleteByEmail(email);
            return "User deleted successfully!";
        }
        return "Record not found with email id " + email;
    }
    public User updateUserBy(String email, User user) {
        Optional<User> userExists = userRepository.findByEmail(email);
        return userExists.map(existingUser -> {
            Optional.ofNullable(user.getUsername()).ifPresent(existingUser::setUsername);
            Optional.ofNullable(user.getPassword()).ifPresent(existingUser::setPassword);
            return userRepository.save(existingUser);
        }).orElse(new User());
    }




    public List<User> sort(String field) {
        Sort sort = Sort.by(Sort.Direction.ASC,field);
        return userRepository.findAll(sort);
    }

    public List<User> page(int offset, int pagesize) {
        Pageable page = PageRequest.of(offset,pagesize);
        return userRepository.findAll(page).getContent();
    }

    public List<User> pagesort(int offset,int pagesize,String field){
        return userRepository.findAll(PageRequest.of(offset,pagesize).withSort(Sort.by(Sort.Direction.DESC,field))).getContent();
    }


//    public List<String> getUsersByAge(int age) {
//        return userRepository.getUserByAge(age);
//    }

}


