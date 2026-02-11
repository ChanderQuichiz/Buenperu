CREATE DATABASE buenperu;
USE buenperu;

CREATE TABLE accounts (
    account_id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    email VARCHAR(150) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    district VARCHAR(50),
    phone_number VARCHAR(15),
    role ENUM('admin','organizer','payroll') NOT NULL,
    status ENUM('active','inactive','banned') DEFAULT 'active',
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE requests (
    request_id INT AUTO_INCREMENT PRIMARY KEY,
    account_id INT NOT NULL,
    request_file LONGBLOB,
    organizer_email VARCHAR(150),
    status ENUM('pending','approved','rejected') DEFAULT 'pending',
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    reviewed_at DATETIME,
    reviewed_by INT,
    FOREIGN KEY (account_id) REFERENCES accounts(account_id),
    FOREIGN KEY (reviewed_by) REFERENCES accounts(account_id)
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
    account_id INT,
    status ENUM('draft','active','finished') DEFAULT 'draft',
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (account_id) REFERENCES accounts(account_id)
);

CREATE TABLE teams (
    team_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(150) NOT NULL,
    district VARCHAR(100),
    category VARCHAR(50),
    icon_src VARCHAR(255),
    account_id INT,
    is_active BOOLEAN DEFAULT 1,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
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
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (event_id) REFERENCES events(event_id),
    FOREIGN KEY (team_id) REFERENCES teams(team_id),
    UNIQUE (event_id, team_id)
);

CREATE TABLE matches (
    match_id INT AUTO_INCREMENT PRIMARY KEY,
    event_id INT NOT NULL,
    match_date DATETIME NOT NULL,
    location VARCHAR(150),
    status ENUM('scheduled','in_progress','completed','canceled') DEFAULT 'scheduled',
    referee VARCHAR(80) NOT NULL,
    round VARCHAR(50),
    event_team_one_id INT NOT NULL,
    event_team_two_id INT NOT NULL,
    team_one_score INT DEFAULT 0,
    team_two_score INT DEFAULT 0,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (event_id) REFERENCES events(event_id),
    FOREIGN KEY (event_team_one_id) REFERENCES events_teams(event_team_id),
    FOREIGN KEY (event_team_two_id) REFERENCES events_teams(event_team_id)
);
