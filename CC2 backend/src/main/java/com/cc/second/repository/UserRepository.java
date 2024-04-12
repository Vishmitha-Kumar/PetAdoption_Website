package com.cc.second.repository;


import java.util.List;
import java.util.Optional;

import com.cc.second.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;


public interface UserRepository extends JpaRepository<User,Integer> {

    boolean existsByEmail(String email);

    Optional<User> findByEmail(String email);
    void deleteByEmail(String email);

//    @Query(value="select username,email,phone from User where age=:i",nativeQuery=true)
//    List<String> getUserByAge(@Param("i") int age);

}
