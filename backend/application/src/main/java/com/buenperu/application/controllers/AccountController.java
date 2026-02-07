package com.buenperu.application.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.buenperu.application.entities.Account;
import com.buenperu.application.repository.AccountRepository;

import net.kaczmarzyk.spring.data.jpa.domain.Between;
import net.kaczmarzyk.spring.data.jpa.domain.EqualIgnoreCase;
import net.kaczmarzyk.spring.data.jpa.domain.LikeIgnoreCase;
import net.kaczmarzyk.spring.data.jpa.web.annotation.And;
import net.kaczmarzyk.spring.data.jpa.web.annotation.Spec;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.GetMapping;




@RestController
@CrossOrigin
@RequestMapping("/accounts")
public class AccountController {

    @Autowired
    private AccountRepository accountRepository;

    @PostMapping("/save")
    public ResponseEntity<Account> save(@RequestBody Account account) {
        Account valid = accountRepository.save(account);
        if(valid != null){
            return new ResponseEntity<>(valid,HttpStatus.CREATED);
        } else {
            return new ResponseEntity<>(valid,HttpStatus.BAD_REQUEST);
        }
    
    }
    @PostMapping("/signin")
    public ResponseEntity<Account> signin(@RequestBody Account account) {
        
        Account valid = accountRepository.findByEmailAndPassword(account.getEmail(), account.getPassword());
        if(valid != null){
            return new ResponseEntity<>(valid,HttpStatus.OK);
        } else {
            return new ResponseEntity<>(valid, HttpStatus.UNAUTHORIZED);
        }
    }
    @GetMapping("/search")
    public ResponseEntity<Page<Account>> search(@And({
        @Spec(path = "email", spec = LikeIgnoreCase.class),
        @Spec(path = "firstName", spec = LikeIgnoreCase.class),
        @Spec(path = "lastName", spec = LikeIgnoreCase.class),
        @Spec(path = "accountId", spec = EqualIgnoreCase.class),
        @Spec(path = "role", spec = EqualIgnoreCase.class),
        @Spec(path = "status", spec = EqualIgnoreCase.class),
        @Spec(path = "createdAt", spec = Between.class),
        @Spec(path = "updatedAt", spec = Between.class)
    }) Specification<Account> spec, Pageable pageable) {
       Page<Account> valid = accountRepository.findAll(spec, pageable);
        if(valid != null){
            return new ResponseEntity<>(valid, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(valid, HttpStatus.NOT_FOUND);
    }
}
}