-- Cheetah Games
-- TIS Ramp Up project

-- tables
-- Table: Player
-- Contains the Player information
CREATE TABLE Player (
    Id int IDENTITY,
    Email nvarchar(100)  NOT NULL,
    FirstName varchar(50) NOT NULL,
    LastName varchar(50) NOT NULL,
    Picture varchar(100) NULL,
    CONSTRAINT Player_PK PRIMARY KEY (Id)
);

-- Table: Activity
-- Contains the Activities information
CREATE TABLE Activity (
    Id int IDENTITY,
    ActivityName varchar(50) NOT NULL,
    ActivityDescription text NULL,
    CONSTRAINT Activity_PK PRIMARY KEY (Id)
);

--Table: Team
--Contains the Teams information
CREATE TABLE Team (
    Id int IDENTITY,
    TeamName varchar(50) NOT NULL, 
    ActivityId int NOT NULL,
    CONSTRAINT Team_PK PRIMARY KEY (Id),
    CONSTRAINT Team_To_Activity FOREIGN KEY (ActivityId) REFERENCES Activity(Id)
);

--Table: Roster
--Contains the players that belong to each team
CREATE TABLE Roster (
  TeamId int NOT NULL, 
  PlayerId int NOT NULL,
  CONSTRAINT Roster_PK PRIMARY KEY (TeamId, PlayerId),
  CONSTRAINT Roster_To_Team FOREIGN KEY (TeamId) REFERENCES Team(Id),
  CONSTRAINT Roster_To_Player FOREIGN KEY (PlayerId) REFERENCES Player(Id)
);

-- Table: GameLocation
-- Contains the Location information for each game.
CREATE TABLE GameLocation (
    Id int IDENTITY,
    LocationName varchar(100) NOT NULL,
    LocationDescription text NULL,
    CONSTRAINT Location_PK PRIMARY KEY  (Id)
);

-- Table: Championship
-- Contains the Championships information.
CREATE TABLE Championship (
    Id int IDENTITY,
    ChampionshipName varchar(50) NOT NULL,
    StartDate datetime NOT NULL,
    WinnerTeamId int NULL,
    CONSTRAINT Championship_PK PRIMARY KEY (Id),
    CONSTRAINT Championship_To_Team FOREIGN KEY (WinnerTeamId) REFERENCES Team(Id)
);

-- Table: Game
-- Contains the Game information
CREATE TABLE Game (
    Id int IDENTITY,
    LocationId int NOT NULL,
    GameDate datetime NOT NULL,
    WinnerTeamId int NULL,
    ChampionshipId int NULL,
    CONSTRAINT Game_PK PRIMARY KEY (Id),
    CONSTRAINT Game_To_GameLocation FOREIGN KEY (LocationId) REFERENCES GameLocation(Id),
    CONSTRAINT Game_To_Team FOREIGN KEY (WinnerTeamId) REFERENCES Team(Id),
    CONSTRAINT Game_To_Championship FOREIGN KEY (ChampionshipId) REFERENCES Championship(Id)
);

-- Table: Statistic
-- Contains the stats information from each game
CREATE TABLE Statistic (
    GameId int NOT NULL,
    PlayerId int NOT NULL,
    Stats int NOT NULL,
    StatsType varchar(20) NOT NULL,
    CONSTRAINT Statistic_PK PRIMARY KEY (GameId, PlayerId),
    CONSTRAINT Statistic_To_Game FOREIGN KEY (GameId) REFERENCES Game(Id),
    CONSTRAINT Statistic_To_Player FOREIGN KEY (PlayerId) REFERENCES Player(Id)
);

-- Table: ChampionshipByTeam
-- Contains the relationship information between championships and teams
CREATE TABLE ChampionshipByTeam (
    TeamId int NOT NULL,
    ChampionshipId int NOT NULL,
    CONSTRAINT ChampionshipByTeam_PK PRIMARY KEY (TeamId,ChampionshipId),
    CONSTRAINT ChampionshipByTeam_To_Team FOREIGN KEY (TeamId) REFERENCES Team(Id),
    CONSTRAINT ChampionshipByTeam_To_Championship FOREIGN KEY (ChampionshipId) REFERENCES Championship(Id)
);

-- Table GameByTeam
-- Contains the relationship information between games and teams
CREATE TABLE GameByTeam (
    TeamId int NOT NULL,
    GameId int NOT NULL,
    CONSTRAINT GameByTeam_PK PRIMARY KEY (TeamId,GameId),
    CONSTRAINT GameByTeam_To_Team FOREIGN KEY (TeamId) REFERENCES Team(Id),
    CONSTRAINT GameByTeam_To_Game FOREIGN KEY (GameId) REFERENCES Game(Id)
);

-- End of file.