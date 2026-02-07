package com.buenperu.application.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import jakarta.persistence.UniqueConstraint;
import java.time.LocalDateTime;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.DynamicInsert;

@Entity
@Table(
    name = "events_teams",
    uniqueConstraints = @UniqueConstraint(columnNames = {"event_id", "team_id"})
)
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@DynamicInsert
public class EventTeam {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "event_team_id")
    private Integer eventTeamId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "event_id", nullable = false)
    private Event event;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "team_id", nullable = false)
    private Team team;

    @Column(name = "points")
    private Integer points;

    @Column(name = "final_position")
    private Integer finalPosition;

    @Column(name = "games_played")
    private Integer gamesPlayed;

    @Column(name = "wins")
    private Integer wins;

    @Column(name = "draws")
    private Integer draws;

    @Column(name = "losses")
    private Integer losses;

    @CreationTimestamp
    @Column(name = "created_at", nullable = false, updatable = false)
    private LocalDateTime createdAt;
}
