package com.buenperu.application.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.buenperu.application.entities.EventTeam;
import com.buenperu.application.entities.Request;
import com.buenperu.application.repository.EventTeamRepository;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;



@RestController
@CrossOrigin
@RequestMapping("/eventteams")
public class EventTeamController {
    @Autowired
    private EventTeamRepository eventTeamRepository;
    
    @PostMapping("/save")
    public ResponseEntity<EventTeam> save(@RequestBody EventTeam entity) {
      EventTeam valid = eventTeamRepository.save(entity);
      if(valid != null){
            return new ResponseEntity<>( valid,HttpStatus.CREATED);
        } else {
            return new ResponseEntity<>( valid, HttpStatus.BAD_REQUEST);
      }
    }
    @GetMapping("/findallbyeventid/{eventid}")
    public ResponseEntity<List<EventTeam>> findAllById(@PathVariable Integer eventid) {
        List<EventTeam> eventTeams = eventTeamRepository.findByEvent_EventId(eventid);
        
        if(eventTeams != null){
            return new ResponseEntity<>( eventTeams, HttpStatus.OK);
        } else {
            return new ResponseEntity<>( eventTeams, HttpStatus.NOT_FOUND);
        }
    }
    
    @DeleteMapping("/deletebyid/{id}")
    public ResponseEntity<Request> deleteById(@PathVariable Integer id) {
    try{
        eventTeamRepository.deleteById(id);
      return new ResponseEntity<>( HttpStatus.OK);
    } catch(Exception e){
      return new ResponseEntity<>( HttpStatus.BAD_REQUEST);
    }
}
}
