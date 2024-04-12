package com.cc.second.model;





import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;

@Entity
@Table(name="payment")
public class Payment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String email;


    private String address;
    private String breed;
    private String gender;
    private String color;


    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="user_eid")
    @JsonBackReference
    private User user;


    public Payment() {
    }
    public Payment(int id, String email, String address, String breed, String gender, String color,User user) {
        this.id = id;
        this.email = email;

        this.address = address;
        this.breed = breed;
        this.gender = gender;
        this.color = color;
        this.user=user;

    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }





    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getBreed() {
        return breed;
    }

    public void setBreed(String breed) {
        this.breed = breed;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

}