package com.buenperu.application.repository;

import com.buenperu.application.entities.EventTeam;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EventTeamRepository extends JpaRepository<EventTeam, Integer> {
    public List<EventTeam> findByEvent_EventId(Integer eventId);
}
