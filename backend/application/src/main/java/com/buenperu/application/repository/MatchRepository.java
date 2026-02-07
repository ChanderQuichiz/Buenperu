package com.buenperu.application.repository;

import com.buenperu.application.entities.Match;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MatchRepository extends JpaRepository<Match, Integer> {
    public List<Match> findAllByEvent_EventId(Integer eventId);
}
