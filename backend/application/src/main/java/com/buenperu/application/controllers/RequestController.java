package com.buenperu.application.controllers;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.buenperu.application.entities.Request;
import com.buenperu.application.repository.RequestRepository;

import net.kaczmarzyk.spring.data.jpa.domain.EqualIgnoreCase;
import net.kaczmarzyk.spring.data.jpa.web.annotation.And;
import net.kaczmarzyk.spring.data.jpa.web.annotation.Spec;



@RestController
@CrossOrigin
@RequestMapping("/requests")
public class RequestController {
    @Autowired
    private RequestRepository requestRepository;
    
    @PostMapping("/save")
    public ResponseEntity<Request> save(@RequestBody Request entity) {
      Request valid = requestRepository.save(entity);
      if(valid != null){
            return new ResponseEntity<>(valid, HttpStatus.CREATED);
        } else {
            return new ResponseEntity<>(valid, HttpStatus.BAD_REQUEST);
      }
    }
    @GetMapping("/search")
    public ResponseEntity<Page<Request>> search(@And({
        @Spec(path = "status", spec = EqualIgnoreCase.class),
        @Spec(path = "organizerEmail", spec = EqualIgnoreCase.class)
    }) Specification<Request> spec, Pageable pageable) {
      
            Page<Request> valid = requestRepository.findAll(spec, pageable);
    
        if(valid != null){
            return new ResponseEntity<>(valid, HttpStatus.OK);
        } else {
            return new ResponseEntity<>( valid, HttpStatus.NOT_FOUND);
        }
    }
 
    
}
