package com.buenperu.application.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import java.time.LocalDateTime;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.DynamicInsert;

@Entity
@Table(name = "matches")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@DynamicInsert
public class Match {

    public enum Status {
        scheduled,
        in_progress,
        completed,
        canceled
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "match_id")
    private Integer matchId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "event_id", nullable = false)
    private Event event;

    @Column(name = "match_date", nullable = false)
    private LocalDateTime matchDate;

    @Column(name = "location", length = 150)
    private String location;

    @Enumerated(EnumType.STRING)
    @Column(name = "status")
    private Status status;

    @Column(name = "referee", length = 80, nullable = false)
    private String referee;

    @Column(name = "round", length = 50)
    private String round;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "event_team_one_id", nullable = false)
    private EventTeam eventTeamOne;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "event_team_two_id", nullable = false)
    private EventTeam eventTeamTwo;

    @Column(name = "team_one_score")
    private Integer teamOneScore;

    @Column(name = "team_two_score")
    private Integer teamTwoScore;

    @CreationTimestamp
    @Column(name = "created_at", nullable = false, updatable = false)
    private LocalDateTime createdAt;
}
