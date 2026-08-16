CREATE DATABASE college;

USE college;
CREATE TABLE Teacher(
	id INT PRIMARY KEY,
    name VARCHAR(40),
    subject VARCHAR(20),
    salary INT DEFAULT 25000
);


INSERT INTO Teacher
(id, name, subject, salary)
VALUES
(23, "ajay", "math", 50000),
(47, "bharat", "english", 60000),
(18, "chetan", "chemistry", 45000),
(09, "divya", "physics", 75000);

SELECT * FROM Teacher;

-- select teacher whose slaray is more than 55k
SELECT * FROM Teacher 
WHERE salary > 55000;

-- Rename the salary column of teacher to ctc
ALTER TABLE Teacher
CHANGE COLUMN salary ctc INT NOT NULL;

SELECT * FROM Teacher;

-- Update the salary of all teachers by giving them an increment of 25% 
UPDATE Teacher
SET ctc = ctc + (ctc * 0.25);

SET SQL_SAFE_UPDATES = 0;

-- Add a new column for teachers called city. The default city should be Gurgaon
ALTER TABLE Teacher
ADD COLUMN city VARCHAR(50) DEFAULT "Gurgaon";

-- Delete the salary column from teacher table
ALTER TABLE Teacher
DROP COLUMN ctc;