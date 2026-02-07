package com.buenperu.application.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.buenperu.application.entities.Match;
import com.buenperu.application.repository.MatchRepository;



@RequestMapping("/matches")
@RestController
@CrossOrigin
public class MatchController {
    
    @Autowired
    private MatchRepository matchRepository;

    @PostMapping("/save")
    public ResponseEntity<Match> save(@RequestBody Match entity) {
      Match valid = matchRepository.save(entity);
      if(valid != null){
            return new ResponseEntity<>( valid, HttpStatus.CREATED);
        } else {
            return new ResponseEntity<>( valid, HttpStatus.BAD_REQUEST);
      }
    }

    @GetMapping("/findallbyeventid/{eventId}")    
    public ResponseEntity<List<Match>> findAllbyEventId(@PathVariable Integer eventId) {
        List<Match> matches = matchRepository.findAllByEvent_EventId(eventId);
        
        if(matches != null){
            return new ResponseEntity<>(matches, HttpStatus.OK);
        } else {
            return new ResponseEntity<>( matches, HttpStatus.NOT_FOUND);
        }
    }
}
