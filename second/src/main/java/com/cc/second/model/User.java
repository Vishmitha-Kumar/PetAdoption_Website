package com.cc.second.model;


import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Entity
@Component
@Table(name="user")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String username;

    @Column(unique=true)
    private String email;

    private int age;
    private String password;
    private String phone;



    @OneToMany(mappedBy = "user",cascade = CascadeType.ALL)
    @JsonManagedReference
    private List<Payment> paydata=new ArrayList<>();
    public List<Payment> getPaydata() {
        return paydata;
    }
    public void setPaydata(List<Payment> paydata) {
        this.paydata = paydata;
    }



    public User() {
    }


    public User(int id, String username, String email, int age,String password, String phone) {
        this.id = id;
        this.username = username;
        this.email = email;
        this.age=age;
        this.password = password;
        this.phone = phone;


    }


    public int getId() {
        return id;
    }


    public void setId(int id) {
        this.id = id;
    }


    public String getUsername() {
        return username;
    }


    public void setUsername(String username) {
        this.username = username;
    }


    public String getEmail() {
        return email;
    }


    public void setAge(int age) {
        this.age =age;
    }
    public int getAge() {
        return age;
    }


    public void setEmail(String email) {
        this.email = email;
    }



    public String getPassword() {
        return password;
    }


    public void setPassword(String password) {
        this.password = password;
    }


    public String getPhone() {
        return phone;
    }


    public void setPhone(String phone) {
        this.phone = phone;
    }











}