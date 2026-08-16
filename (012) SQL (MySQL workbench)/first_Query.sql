CREATE DATABASE Instagram;
USE Instagram;

CREATE TABLE user(  -- Create table query --  
	id INT,
    age INT,
    name VARCHAR(30) NOT NULL,
    email VARCHAR(50) UNIQUE,
    followers INT DEFAULT 0,
    following INT DEFAULT 0,
    CONSTRAINT CHECK (age >= 13),
    PRIMARY KEY (id) -- primary key constraint -- 
);

-- insert values query --  
INSERT INTO user
(id, age, name, email, followers, following)
VALUES
(101, 20, "adam", "adam@yahoo.in", 123, 145),
(102, 15, "bob", "bob@email.com", 120, 150);

INSERT INTO user
(id, age, name, email, followers, following)
VALUES
(103, 17, "casey", "casey@gmail.com", 300, 307),
(104, 20, "donald", "donald@gmail.com", 500, 800),
(105, 30, "Tom", "tom544@gmail.com", 600, 700);



SELECT * FROM user; -- selecting the data from user table to show --

SELECT * FROM user 
where age > 18;

-- sort data to show using ORDER BY Clause -- 
SELECT name, age, followers FROM user 
ORDER BY followers DESC;

-- Aggregate functions in SQL 
SELECT COUNT(followers)
FROM user
WHERE followers > 200;


-- group by clause --
SELECT age ,count(id) FROM user 
GROUP BY age; 

-- HAVING CLAUSE -- 
SELECT age, max(followers)
FROM user
GROUP BY age
HAVING max(followers) > 200;


-- Update table QUery
UPDATE user 
SET followers = 200
WHERE name = "adam" OR name = "bob";

-- DELETE table query 
DELETE FROM user
WHERE age = 17;
 
 -- Alter table query -> used to  update the schema of table
 
 -- Add column
 ALTER TABLE user
 ADD COLUMN city VARCHAR(20) DEFAULT NULL;
 
 -- DROP column query
 ALTER TABLE user
 DROP COLUMN city;
 
 -- RENAME table query 
 ALTER TABLE user
 RENAME TO instaUsers;
 
 
 -- RENAME Column query
 ALTER TABLE instaUsers
 CHANGE COLUMN followers subscribers INT DEFAULT 0;
 
 INSERT INTO instaUsers
(id, age, name, email, following)
VALUES
(110, 17, "ting", "ting@gmail.com", 307);
 
 -- MODIFY Column query
 ALTER TABLE instaUsers
 MODIFY subscribers INT DEFAULT 5;
 
SELECT * FROM instaUsers;



SET SQL_SAFE_UPDATES = 0; -- so that MySQL allows to update DB data


CREATE TABLE post(
	id INT PRIMARY KEY,
    content VARCHAR(200),
    user_id INT,
    FOREIGN KEY (user_id) references user(id) -- Foreign key constraint -- 
);

-- inserting values into post table --
INSERT INTO post
(id, content, user_id)
VALUES
(1, "hii everyone", 102),
(2, "hello Guys", 101);


SELECT * FROM post;








