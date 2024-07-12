SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[users](
	[UserId] [int] IDENTITY(1,1) NOT NULL,
	[FirstName] [nvarchar](200) NULL,
	[LastName] [nvarchar](200) NULL,
	[CommentId] [int] NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[users] ADD  CONSTRAINT [PK_users] PRIMARY KEY CLUSTERED 
(
	[UserId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO


CREATE TABLE [dbo].[country](
	[CountryId] [int] IDENTITY(2,1) NOT NULL,
	[Name] [nvarchar](200) NULL,
	[SightId] [int] NULL,
	[CityId] [int] NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[country] ADD  CONSTRAINT [PK_country] PRIMARY KEY CLUSTERED 
(
	[CountryId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO


CREATE TABLE [dbo].[cities](
	[CityId] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](50) NULL,
	[CountryId] [int] NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[cities] ADD  CONSTRAINT [PK_cities] PRIMARY KEY CLUSTERED 
(
	[CityId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO

---TRYING TO FIX THE FKs
ALTER TABLE [dbo].[country] WITH CHECK ADD CONSTRAINT [FK_country_cities] FOREIGN KEY ([CityId]) REFERENCES [dbo].[cities] ([CityId])
	GO
--------




CREATE TABLE [dbo].[sights](
	[SightId] [int] IDENTITY(11,1) NOT NULL,
	[Name] [nvarchar](200) NULL,
	[CountryId] [int] NULL,
	[CommentId] [int] NULL,
	[UserId] [int] NULL,
	[CityId] [int] NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[sights] ADD  CONSTRAINT [PK_sights] PRIMARY KEY CLUSTERED 
(
	[SightId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO

---Trying
ALTER TABLE [dbo].[sights]  WITH CHECK ADD  CONSTRAINT [FK_sights_country] FOREIGN KEY([CountryId])
REFERENCES [dbo].[country] ([CountryId])
GO
---where i moved sights to, last fix----------------
ALTER TABLE [dbo].[country] WITH CHECK ADD CONSTRAINT [FK_country_sights] FOREIGN KEY ([SightId]) REFERENCES [dbo].[sights] ([SightId])
	GO
---------------------------------

---WHERE I REMOVED THE SIGHTS_COUNTRY FK
ALTER TABLE [dbo].[sights] CHECK CONSTRAINT [FK_sights_country]
GO

CREATE TABLE [dbo].[comments](
	[CommentId] [int] IDENTITY(18,1) NOT NULL,
	[Comment] [nvarchar](200) NULL,
	[SightId] [int] NULL,
	[UserId] [int] NULL,
	[CityId] [int] NULL,
	[CountryId] [int] NULL,
	[Rating] [money] NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[comments] ADD  CONSTRAINT [PK_comments] PRIMARY KEY CLUSTERED 
(
	[CommentId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
ALTER TABLE [dbo].[comments]  WITH CHECK ADD  CONSTRAINT [FK_comments_users] FOREIGN KEY([UserId])
REFERENCES [dbo].[users] ([UserId])
GO
ALTER TABLE [dbo].[comments] CHECK CONSTRAINT [FK_comments_users]
GO

CREATE TABLE [dbo].[FK_Comment_Sight](
	[CommentId] [int] NULL,
	[SightId] [int] NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[FK_Comment_Sight]  WITH CHECK ADD  CONSTRAINT [FK_FK_Comment_Sight_comments] FOREIGN KEY([CommentId])
REFERENCES [dbo].[comments] ([CommentId])
GO
ALTER TABLE [dbo].[FK_Comment_Sight] CHECK CONSTRAINT [FK_FK_Comment_Sight_comments]
GO
ALTER TABLE [dbo].[FK_Comment_Sight]  WITH CHECK ADD  CONSTRAINT [FK_FK_Comment_Sight_sights] FOREIGN KEY([SightId])
REFERENCES [dbo].[sights] ([SightId])
GO
ALTER TABLE [dbo].[FK_Comment_Sight] CHECK CONSTRAINT [FK_FK_Comment_Sight_sights]
GO

CREATE TABLE [dbo].[FK_Sight_City](
	[SightId] [int] NULL,
	[CityId] [int] NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[FK_Sight_City]  WITH CHECK ADD  CONSTRAINT [FK_FK_Sight_City_cities] FOREIGN KEY([CityId])
REFERENCES [dbo].[cities] ([CityId])
GO
ALTER TABLE [dbo].[FK_Sight_City] CHECK CONSTRAINT [FK_FK_Sight_City_cities]
GO
ALTER TABLE [dbo].[FK_Sight_City]  WITH CHECK ADD  CONSTRAINT [FK_FK_Sight_City_sights] FOREIGN KEY([SightId])
REFERENCES [dbo].[sights] ([SightId])
GO
ALTER TABLE [dbo].[FK_Sight_City] CHECK CONSTRAINT [FK_FK_Sight_City_sights]
GO

ALTER TABLE [dbo].[cities]  WITH CHECK ADD  CONSTRAINT [FK_cities_country] FOREIGN KEY([CountryId])
REFERENCES [dbo].[country] ([CountryId])
GO
-----

--WHERE I TOOK THE FK CONSTRAINT FROM
ALTER TABLE [dbo].[cities] CHECK CONSTRAINT [FK_cities_country]
GO

CREATE VIEW vw_CountryCityAvgRating AS

--Visar alla sevärdheter per land, ort och dess medelrating
SELECT s.Name [Sight Name], cu.Name [Country Name], ci.Name [City Name], AVG(co.Rating) [Average Rating] FROM country cu
INNER JOIN cities ci ON cu.CountryId = ci.CountryId
INNER JOIN sights s ON ci.CityId = s.CityId
INNER JOIN comments co ON s.SightId = co.SightId
GROUP BY s.Name, cu.Name, ci.Name
GO

CREATE VIEW vw_SightsNullRating AS
--- Visar alla sevärdheter som inte har någon kommentar och/eller betyg

SELECT s.Name [Sight Name], co.Comment FROM sights s
INNER JOIN comments co ON s.SightId = co.SightId
WHERE co.Rating IS NULL
GROUP BY s.Name, co.Comment
GO


CREATE VIEW vw_SightCountryCityComment AS
--- Visar alla sevärdheter per land, ort och dess kommentarer
SELECT cu.Name [Country Name], ci.Name [City Name], co.Comment [Comment] FROM country cu
INNER JOIN cities ci ON cu.CountryId = ci.CountryId
INNER JOIN comments co ON ci.CityId = co.CityId
GROUP BY cu.Name, ci.Name, co.Comment
GO

CREATE VIEW vw_UserCommentRating AS
--- Visar alla användare, dess kommentarer och betyg som användaren har lagt in
SELECT u.FirstName, u.LastName, c.Comment, c.Rating FROM users u
INNER JOIN comments c ON u.UserId = c.UserId
GROUP BY u.FirstName, u.LastName, c.Comment, c.Rating
GO

CREATE OR  ALTER PROCEDURE dbo.usp_AddUser
@FirstName NVARCHAR(200),
@LastName NVARCHAR(200) AS

INSERT INTO users (FirstName, LastName)
VALUES (@FirstName, @LastName);

GO

CREATE OR  ALTER PROCEDURE dbo.usp_AddSight
@Name NVARCHAR(200) AS

INSERT INTO sights (Name)
VALUES (@Name)

GO

CREATE OR  ALTER PROCEDURE dbo.usp_AddCommentSight
@Comment NVARCHAR(200),
@SightId INT AS

INSERT INTO comments (Comment, SightId)
VALUES (@Comment, @SightId)

GO

CREATE OR ALTER PROCEDURE dbo.usp_AddRating
@Rating MONEY,
@SightId INT AS

INSERT INTO comments (Rating, SightId)
VALUES (@Rating, @SightId)

GO