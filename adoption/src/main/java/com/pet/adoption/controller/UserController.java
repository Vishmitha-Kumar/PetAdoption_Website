package com.pet.adoption.controller;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;


import org.springframework.web.bind.annotation.*;


import com.pet.adoption.model.User;
import com.pet.adoption.service.UserService;
import java.util.Optional;

@RestController
//@CrossOrigin("http://localhost:3000")
@RequestMapping("api/v1/user")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/save")
    public ResponseEntity<?> saveUser(@RequestBody User user) {
        try {
            userService.saveUser(user);
            return new ResponseEntity<>("User registered successfully!", HttpStatus.CREATED);
        } catch (Exception e) {

            System.out.println(e);
            return new ResponseEntity<>("Something went wrong!" +e.getMessage(), HttpStatus.EXPECTATION_FAILED);
        }
    }

    @GetMapping("/get")
    public ResponseEntity<?> getUserByEmail(@RequestParam String email) {
        try {
            return new ResponseEntity<>(userService.getUserByEmail(email), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>("Something went wrong", HttpStatus.EXPECTATION_FAILED);
        }
    }

    @PutMapping("/update/{email}")
    public ResponseEntity<?> updateUser(@PathVariable String email, @RequestBody User user) {
        try {
            return new ResponseEntity<>(userService.updateUser(email, user), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>("Something went wrong", HttpStatus.EXPECTATION_FAILED);
        }
    }

    @DeleteMapping("/delete/{email}")
    public ResponseEntity<?> deleteUser(@PathVariable String email) {
        try {
            return new ResponseEntity<>(userService.deleteUser(email), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>("Something went wrong", HttpStatus.EXPECTATION_FAILED);
        }
    }

    @PatchMapping("/patchUpdate/{email}")
    public ResponseEntity<?> updateUserBy(@PathVariable String email, @RequestBody User user) {
        try {
            return new ResponseEntity<>(userService.updateUserBy(email, user), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>("Something went wrong", HttpStatus.EXPECTATION_FAILED);
        }
    }

}