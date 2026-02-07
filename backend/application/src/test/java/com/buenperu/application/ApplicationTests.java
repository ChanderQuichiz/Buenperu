package com.buenperu.application;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.Assertions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.buenperu.application.entities.Team;
import com.buenperu.application.repository.TeamRepository;

@SpringBootTest
class ApplicationTests {
	@Autowired
	private TeamRepository teamRepository;

	@Test
	void contextLoads() {
		Team team = new Team();
		team.setName("Team Test");
		team.setDistrict("Lima");
		team.setCategory("U20");
		team.setIsActive(true);

		Team saved = teamRepository.save(team);
		Assertions.assertNotNull(saved.getTeamId());
	}

}
