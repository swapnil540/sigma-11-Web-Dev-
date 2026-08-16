USE college;

-- create a table to store student info (roll_no, name, city, marks)
CREATE TABLE student (
	roll_no INT PRIMARY KEY,
    name VARCHAR(30) NOT NULL,
    city VARCHAR(50),
    marks INT
);


 
 
 -- insert data in the table
 INSERT INTO student
 (roll_no, name, city, marks)
 VALUES
 (110, "adam", "Delhi", 76),
 (108, "bob", "Mumbai", 65),
 (124, "casey", "Pune", 94),
 (112, "duke", "Pune", 80);
 
 SELECT * FROM student;
 
 -- Select all students who scored 75+
 SELECT * FROM student
 WHERE marks > 75;
 
 
 
 
-- Find names of all cities where students are from -> don't repeat  city name
-- 1st way of solving above qs
SELECT city 
FROM student
GROUP BY city;
 
-- 2nd way of solving above qs
SELECT DISTINCT city
FROM student;


-- Find the maximum marks of students from each city
SELECT city, max(marks)
FROM student
GROUP BY city;

-- Find the average marks of the class
SELECT avg(marks) 
FROM student;

-- Add a new column grade in student table, assign grade according to marks
-- Adding new column
 ALTER TABLE student
 ADD COLUMN grade VARCHAR(2) ;
 
 UPDATE student
 SET grade = "O"
 WHERE marks > 80;
 
 UPDATE student
 SET grade = "A"
 WHERE marks >= 70 AND marks <= 80;
 
 
 UPDATE student
 SET grade = "B"
 WHERE marks >= 60 AND marks <70;
 
 SET SQL_SAFE_UPDATES = 0;
 
 

 