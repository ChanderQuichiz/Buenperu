package com.buenperu.application.controllers;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.buenperu.application.entities.Team;
import com.buenperu.application.repository.TeamRepository;

import net.kaczmarzyk.spring.data.jpa.domain.EqualIgnoreCase;
import net.kaczmarzyk.spring.data.jpa.domain.LikeIgnoreCase;
import net.kaczmarzyk.spring.data.jpa.web.annotation.And;
import net.kaczmarzyk.spring.data.jpa.web.annotation.Spec;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.GetMapping;


@RequestMapping("/teams")

@CrossOrigin
@RestController
public class TeamController {
    
    @Autowired
    private TeamRepository teamRepository;
    
    @PostMapping("/save")
    public ResponseEntity<Team> save(@RequestBody Team entity) {
        
        Team valid = teamRepository.save(entity);
        if(valid != null){
            return new ResponseEntity<>( valid, HttpStatus.CREATED);
        } else {
            return new ResponseEntity<>( valid, HttpStatus.BAD_REQUEST);
        }
    }
    @GetMapping("/search")
    public ResponseEntity<Page<Team>> search(@And({
        @Spec(path = "name", spec = LikeIgnoreCase.class),
        @Spec(path = "teamId", spec = EqualIgnoreCase.class),
        @Spec(path = "district", spec = EqualIgnoreCase.class),
        @Spec(path = "category", spec = EqualIgnoreCase.class),
        @Spec(path = "isActive", spec = EqualIgnoreCase.class),
        @Spec(path = "account.accountId", spec = EqualIgnoreCase.class)
    }) Specification<Team> spec, Pageable pageable ) {
        Page<Team> teams = teamRepository.findAll(spec, pageable);
        
        if(teams != null){
            return new ResponseEntity<>(teams, HttpStatus.OK);
        } else {
            return new ResponseEntity<>( teams,HttpStatus.NOT_FOUND);
        }
    }
   
 
}