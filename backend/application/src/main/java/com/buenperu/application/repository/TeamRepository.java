package com.buenperu.application.repository;


import com.buenperu.application.entities.Team;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;

@Repository
public interface TeamRepository extends JpaRepository<Team, Integer>, JpaSpecificationExecutor<Team> {
}
