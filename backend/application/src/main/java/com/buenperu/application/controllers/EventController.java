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

import com.buenperu.application.entities.Event;
import com.buenperu.application.repository.EventRepository;

import net.kaczmarzyk.spring.data.jpa.domain.Between;

import net.kaczmarzyk.spring.data.jpa.domain.EqualIgnoreCase;

import net.kaczmarzyk.spring.data.jpa.domain.LikeIgnoreCase;
import net.kaczmarzyk.spring.data.jpa.web.annotation.And;
import net.kaczmarzyk.spring.data.jpa.web.annotation.Spec;

@RestController
@RequestMapping("/events")
@CrossOrigin
public class EventController {
    @Autowired
    private EventRepository eventRepository;
    @PostMapping("/save")
    public ResponseEntity<Event> save(@RequestBody Event entity) {
      Event valid = eventRepository.save(entity);
      if(valid != null){
            return new ResponseEntity<>( valid, HttpStatus.CREATED);
        } else {
            return new ResponseEntity<>( valid, HttpStatus.BAD_REQUEST);
        }
    }
    @GetMapping("/search")
    public ResponseEntity<Page<Event>> search(@And({
        @Spec(path = "name", spec = LikeIgnoreCase.class),
        @Spec(path = "eventId", spec = EqualIgnoreCase.class),
        @Spec(path = "eventType", spec = EqualIgnoreCase.class),
        @Spec(path = "sportType", spec = EqualIgnoreCase.class),
        @Spec(path = "district", spec = LikeIgnoreCase.class),
        @Spec(path = "category", spec = EqualIgnoreCase.class),
        @Spec(path = "startDate", spec = Between.class),
        @Spec(path = "endDate", spec = Between.class),
        @Spec(path = "status", spec = EqualIgnoreCase.class),
        @Spec(path = "account.accountId", spec = EqualIgnoreCase.class)
    }) Specification<Event> spec, Pageable pageable) {
        Page<Event> events = eventRepository.findAll(spec, pageable);
        
        if(events != null){
            return new ResponseEntity<>(events, HttpStatus.OK);
        } else {
            return new ResponseEntity<>( events, HttpStatus.NOT_FOUND);
        }
    }
}
