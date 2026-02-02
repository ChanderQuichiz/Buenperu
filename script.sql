CREATE DATABASE buenperu;
USE buenperu;

CREATE TABLE accounts (
    account_id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    email VARCHAR(150) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    phone_number VARCHAR(10) NOT NULL,
    role ENUM('admin','organizer','referee') NOT NULL
);

CREATE TABLE events (
    event_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(150) NOT NULL,
    event_src VARCHAR(255) NOT NULL,
    event_type ENUM('league','tournament','friendly') NOT NULL,
    sport_type VARCHAR(50),
    district VARCHAR(50),
    category VARCHAR(50),
    start_date DATE NOT NULL,
    end_date DATE,
    points_win INT DEFAULT 3,
    points_draw INT DEFAULT 1,
    points_loss INT DEFAULT 0,
    max_teams INT DEFAULT NULL,
    account_id INT NOT NULL,
    status ENUM('draft','active','finished') DEFAULT 'draft',
    FOREIGN KEY (account_id) REFERENCES accounts(account_id)
);

CREATE TABLE teams (
    team_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(150) NOT NULL,
    district VARCHAR(100),
    category VARCHAR(50),
    icon_src VARCHAR(255),
    account_id INT NOT NULL,
    FOREIGN KEY (account_id) REFERENCES accounts(account_id)
);

CREATE TABLE events_teams (
    event_team_id INT AUTO_INCREMENT PRIMARY KEY,
    event_id INT NOT NULL,
    team_id INT NOT NULL,
    points INT DEFAULT 0,
    final_position INT,
    games_played INT DEFAULT 0,
    wins INT DEFAULT 0,
    draws INT DEFAULT 0,
    losses INT DEFAULT 0,
    FOREIGN KEY (event_id) REFERENCES events(event_id),
    FOREIGN KEY (team_id) REFERENCES teams(team_id),
    UNIQUE (event_id, team_id)
);

CREATE TABLE matchs (
    match_id INT AUTO_INCREMENT PRIMARY KEY,
    event_id INT NOT NULL,
    match_date DATETIME NOT NULL,
    location VARCHAR(150),
    status ENUM('scheduled','in_progress','completed','canceled') DEFAULT 'scheduled',
    winner_team_id INT
    referee_id INT,
    FOREIGN KEY (event_id) REFERENCES events(event_id),
    FOREIGN KEY (winner_team_id) REFERENCES teams(team_id),
    FOREIGN KEY (next_match_id) REFERENCES matchs(match_id),
    FOREIGN KEY (referee_id) REFERENCES accounts(account_id)
);

CREATE TABLE matchs_teams (
    match_team_id INT AUTO_INCREMENT PRIMARY KEY,
    match_id INT NOT NULL,
    team_id INT NOT NULL,
    score INT DEFAULT 0,
    FOREIGN KEY (match_id) REFERENCES matchs(match_id),
    FOREIGN KEY (team_id) REFERENCES teams(team_id),
    UNIQUE (match_id, team_id)
);
