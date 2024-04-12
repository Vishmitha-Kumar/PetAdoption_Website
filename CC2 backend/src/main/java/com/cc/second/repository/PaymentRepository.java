package com.cc.second.repository;

import com.cc.second.model.Payment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface PaymentRepository extends JpaRepository<Payment,Integer> {
    Optional<Payment> findByEmail(String email);

    @Query(value="select email from payment where breed=:i", nativeQuery=true)
    List<String> getUsersByBreed(@Param("i") String breed);



}