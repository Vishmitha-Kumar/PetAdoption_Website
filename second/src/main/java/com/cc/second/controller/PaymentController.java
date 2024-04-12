package com.cc.second.controller;


import com.cc.second.model.Payment;
import com.cc.second.service.PaymentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController

@RequestMapping("api/v1/pay")
public class PaymentController {

    @Autowired
    private PaymentService paymentservice;

    @PostMapping("/save")
    public ResponseEntity<?> addpay(@RequestBody Payment payment){
        try{
            paymentservice.addpay(payment);
            return new ResponseEntity<>("Payment successfully!",HttpStatus.CREATED);
        }
        catch(Exception e){
            System.out.println(e);
            return new ResponseEntity<>("Failed to add payment"+e.getMessage(),HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }



}