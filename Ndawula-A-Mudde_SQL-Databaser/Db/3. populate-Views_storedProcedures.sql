

--Visar Land, Stad med genomsnittsRating
SELECT * FROM vw_CountryCityAvgRating 

--- Visar alla sevärdheter som inte har någon kommentar och/eller betyg
SELECT * FROM vw_SightsNullRating 

-- Visar commentar efter sevärdhet, Land och Stad
SELECT * FROM vw_SightCountryCityComment 

--- Visar alla användare, dess kommentarer och betyg som användaren har lagt in
SELECT * FROM vw_UserCommentRating

--Please write the first And Last Name of the user you want to Add

EXEC dbo.usp_AddUser 'Robert', 'Greene'


-- Please write the Name of the sight that you want to Add
EXEC dbo.usp_AddSight 'Ampitheatre'

--Please insert your comment and the sightId of the sight you want to comment on (Comment first please)
EXEC dbo.usp_AddCommentSight 'It only rains 5 minutes a day', '20'


--Please insert your rating with a SightId (Rating first, then SightId)

EXEC dbo.usp_AddRating '5.0', '12'

-- SELECT statement showing all the changes and additions that have been made by the scipty
SELECT 'by stored procedures' [Changes made]
SELECT CONCAT_WS(' ', u.FirstName, u.LastName) [userName], s.Name [sightName], c.Comment [comments],  c.Rating [Rating] FROM users u
FULL OUTER JOIN sights s ON u.UserId = s.UserId
FULL OUTER JOIN comments c ON  s.SightId = c.SightId
GROUP BY CONCAT_WS(' ', u.FirstName, u.LastName), s.Name, c.Comment, c.Rating

