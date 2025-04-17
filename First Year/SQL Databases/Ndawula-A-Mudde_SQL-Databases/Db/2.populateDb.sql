


INSERT INTO users
    (FirstName, LastName)
VALUES
    ('Marcus', 'Aurelius'),
    ('Lucius', 'Cornelius'),
    ('Gaius', 'Julius'),
    ('Publius', 'Vergilius'),
    ('Titus', 'Flavius')

    GO


INSERT INTO country
    (Name)
VALUES
    ('France'),
    ('Bolivia'),
    ('Brazil'),
    ('South-Africa'),
    ('Kenya')

    GO



INSERT INTO cities
    (Name, CountryId)
VALUES
('Paris', 2),
('Cognac',2),
('La Paz', 3),
('Copacabana', 3),
('Rio de Janeiro', 4),
('Curitiba', 4),
('Mpumalanga', 5),
('Muizenberg', 5),
('Lang-ata,', 6),
('Mombasa', 6)

GO


INSERT INTO sights
    (Name, UserId, CountryId, CityId) 
VALUES
    ('Louvre', 1, 2, 2),
    ('Château of Cognac', 2, 2, 3),
    ('Puma punku', 3, 3, 4),
    ('Basilica of Our Lady of Copacabana',4 , 3, 5),
    ('Christ the Redeemer', 5,  4, 6),
    ('Botanical Garden of Curitiba', 1, 4, 7),
    ('krugerpark', 2, 5, 8),
    ('Muizenberg',3, 5, 9),
    ('Giraffe Centre', 4, 6, 10),
    ('Mombasa',5 , 6, 11),
    ('Notre-Dame Cathedral', 1, 2, 2),
    ('Martell House', 2, 2, 3),
    ('Witches Market', 3, 3, 4),
    ('Sun Island (Isla del Sol)',4 , 3, 5),
    ('Copacabana Beach',5,  4, 6),
    ('Wire Opera House', 1,  4, 7),
    ('Gods Window', 2, 5, 8),
    ('Zandvlei Estuary Nature Reserve', 3, 5, 9),
    ('David Sheldrick Wildlife Trust', 4, 6, 10),
    ('Mombasa Marine National Park', 5, 6, 11)

    GO






   INSERT INTO comments
        (Comment, SightId, UserId, CountryId, CityId, Rating )
    VALUES
        ('Timeless art, stories in every brushstroke, whispers of past brilliance', 11, 1, 2, 2, 4.7),
        (' Old vines tell tales, spirits aged to perfection, heritage in every sip.',12, 2, 2, 3,4.4),
        ('Ancient puzzle pieces, scattered in the sands, echoes of forgotten civilizations.', 13, 3, 3, 4, 4.9),
        ('Peaceful haven, where prayers rise, serenity beneath painted ceilings.', 14, 4, 3, 5, 4.95 ),
        ('Rios guardian, arms wide, smiles down on the lively streets below, welcoming all.', 15, 5, 4, 6, 4.75),

        ('Blooms bloom, greenery thrives, a slice of paradise in the citys heart.', 16, 1, 4, 7, 4.8),
        ('Safari wonders, wild encounters, natures symphony in the bush.',17, 2, 5, 8, 4.3),
        (' Beachside bliss, sands golden, waves crashing, laughter fills the air.', 18, 3, 5, 9, 4.83),
        ('Steel dreams, modern drama, a stage set for urban enchantment.', 19, 4, 6, 10, 4.1),
        ('Vistas stretch, horizons widen, natures canvas painted with wonder.', 20, 5, 6, 11, 4.95),
--------------------------------------------------------------------------------------------------------------------
          ('Marshes teem, lifes rhythms play, a sanctuary for winged wanderers.', 21, 1, 2, 2, 2.7),
        (' Orphans find solace, gentle giants, hearts touched, bonds formed.',22, 2, 2, 3, 2.75),
        ('Beneath the waves, secrets unfold, an underwater kingdom of marvels.', 23, 3, 3, 4, 4.3),
        ('Grandeur whispers, tales in stone, Gothic elegance in Parisian air.', 24, 4, 3, 5, 4.83 ),
        ('Amber elixir, aged to perfection, tales of craftsmanship in every drop.', 25, 5, 4, 6, 5),
-------------------------------------Given Rating up to here
        ('Ancient mystique, market treasures, traditions alive in the labyrinth.', 26, 1, 4, 7, 3.5),
        ('Isle of the Sun, legends born, where time dances with ancient spirits.',27, 2, 5, 8, 4.3),
        (' Sandy shores beckon, footprints lost in endless tides, memories made.', 28, 3, 5, 9, 2.9),
        ('Modern marvels, architectural wonder, a steel symphony in the urban sprawl.', 29, 4, 6, 10, 3.9),
        (' Panoramic views, vistas to infinity, natures majesty unveiled.', 30, 5, 6, 11, 5),

      ('Artistic haven, brushstrokes of brilliance, inspiration found in every corner', 11, 1, 2, 2, 3.7),
        ('Aged spirits, golden hues, heritage distilled, savored in every sip',12, 2, 2, 3, 4.6),
        (' Ancient enigmas, lost to time, echoes of civilizations past, mysteries untold.', 13, 3, 3, 4, 3.8),
        ('Sacred refuge, prayers ascend, tranquility embraced in sacred spaces.', 14, 4, 3, 5, 4.6 ),
        ('Rios embrace, cityscape below, Christs open arms, a symbol of hope and peace.', 15, 5, 4, 6, 2.6),

        ('Lush gardens and a beautiful greenhouse. Perfect for relaxing strolls and nature lovers.', 16, 1, 4, 7, 4.6),
        ('Breathtaking panoramic views over the Lowveld. A must-visit for nature lovers and photographers.',17, 2, 5, 8, 2.4),
        ('Colorful beach huts and great surfing waves. A lively and scenic spot for all ages.', 18, 3, 5, 9, 3.1),
        ('Up-close giraffe encounters and educational conservation tours. Fun for all ages.', 19, 4, 6, 10, 1.6),
        ('Clear waters and vibrant marine life. Ideal for snorkeling and underwater adventures.', 20, 5, 6, 11, 0.9),

         ('Stunning Gothic architecture and intricate stained glass windows.',21, 1, 2, 2, NULL ),
        ('Historic distillery tours with exceptional cognac tastings.', 22, 2, 2, 3, NULL),
        (' Unique market with mystical items and local cultural treasures.', 23, 3, 3, 4, NULL),
        (' Beautiful island with ancient ruins and scenic lake views.', 24, 4, 3, 5, NULL),
        ('Famous beach with golden sands, vibrant nightlife, and ocean views.', 25, 5, 4, 6, NULL),

        (' Stunning steel and glass theater in a lush park setting.', 26, 1, 4, 7, NULL),
        (' Majestic viewpoint offering breathtaking landscapes and lush greenery.',27, 2, 5, 8, NULL),
        (' Peaceful reserve with abundant birdlife and serene walking trails.', 28, 3, 5, 9, NULL),
        ('Heartwarming elephant sanctuary focused on conservation and education.', 29, 4, 6, 10, NULL),
        ('Pristine waters ideal for snorkeling with vibrant marine life.', 30, 5, 6, 11, NULL)

        GO


     
       
