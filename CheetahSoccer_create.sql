-- tables
-- Table: Player
-- Contains the Player information
CREATE TABLE Player (
    Id int NOT NULL IDENTITY,
    Email nvarchar(100)  NOT NULL,
    FirstName varchar(50) NOT NULL,
    LastName varchar(50) NOT NULL,
    FieldPosition varchar(100) NOT NULL,
    StrongFoot varchar(10) NULL,
    Picture nvarchar(100) NULL,
    CONSTRAINT Player_pk PRIMARY KEY  (Id)
);

-- Table: Game
-- Contains the Game information
CREATE TABLE Game (
    Id int  IDENTITY NOT NULL,
    CourtId int  NOT NULL,
    GameDate datetime NOT NULL,
    CONSTRAINT Game_pk PRIMARY KEY  (Id)
);

-- Table: GameInfo
-- Contains the stats of each game. 
CREATE TABLE GameInfo (
    GameId int NOT NULL,
    PlayerId int NOT NULL,
    Goals int NULL,
    Assists int NULL,
    Fouls int NULL,
    CONSTRAINT GameInfo_pk PRIMARY KEY  (GameId , PlayerId)
);

-- Table: Court
-- Contains the Cort information.
CREATE TABLE Court (
    Id int  NOT NULL IDENTITY,
    CourtName nvarchar(100)  NULL,
    CourtDescription text NULL,
    CONSTRAINT Court_pk PRIMARY KEY  (Id)
);

-- Foreign keys
-- Reference: Game To Court (table: Game)
ALTER TABLE Game ADD CONSTRAINT Game_To_Court
    FOREIGN KEY (CourtId)
    REFERENCES Court (Id);

-- Reference: GameInfo to Game (table: GameInfo)
ALTER TABLE GameInfo ADD CONSTRAINT GameInfo_To_Game
    FOREIGN KEY (GameId)
    REFERENCES Game (Id);

-- Reference: GameInfo to Player (table: GameInfo)
ALTER TABLE GameInfo ADD CONSTRAINT GameInfo_To_Player
    FOREIGN KEY (PlayerId)
    REFERENCES Player (Id);

-- End of file.

