# Daily Challenge: Tables Relationships
 ### Instructions
 1. Create 3 different tables, each one with a different relationship.
```
CREATE TABLE student 
(
	student_id SERIAL NOT NULL,
    first_name VARCHAR(255),
    last_name VARCHAR(255),
    PRIMARY KEY (student_id)
);

CREATE TABLE course 
(
	course_id SERIAL NOT NULL,
    name VARCHAR(255),
    PRIMARY KEY (course_id)
);

CREATE TABLE teacher 
(
	teacher_id SERIAL NOT NULL,
    first_name VARCHAR(255),
    last_name VARCHAR(255),
    PRIMARY KEY (teacher_id)
);
```
2. Join them with all the types of PostgreSQL Joins you’ve learned.
#### INNER JOIN
```
SELECT *
FROM teacher
INNER JOIN student
ON student.student_id = teacher.teacher_id
INNER JOIN course
ON student.student_id = course.course_id;
```
#### LEFT JOIN
```
SELECT *
FROM teacher
LEFT JOIN student
ON student.student_id = teacher.teacher_id
LEFT JOIN course
ON teacher.teacher_id = course.course_id;
```
#### RIGHT JOIN
```
SELECT *
FROM teacher
RIGHT JOIN student
ON teacher.teacher_id = student.student_id
RIGHT JOIN course
ON teacher.teacher_id = course.course_id;
```
#### FULL OUTER JOIN
```
SELECT *
FROM teacher
FULL OUTER JOIN student
ON teacher.teacher_id = student.student_id
FULL OUTER JOIN course
ON teacher.teacher_id = course.course_id;
```