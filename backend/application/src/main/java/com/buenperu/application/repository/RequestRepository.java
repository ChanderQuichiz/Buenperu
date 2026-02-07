package com.buenperu.application.repository;

import com.buenperu.application.entities.Request;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;

@Repository
public interface RequestRepository extends JpaRepository<Request, Integer>, JpaSpecificationExecutor<Request> {
   
}
