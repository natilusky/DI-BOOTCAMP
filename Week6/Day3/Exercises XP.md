# Exercises XP
### Exercise 1: DVD Rental
#### Instructions
1. Get a list of all film languages.
```
SELECT name FROM language
```
2. Get a list of all films joined with their languages – select the following details : film title, description, and language name. Try your query with different joins:
1. Get all films, even if they don’t have languages.
```
SELECT title, description, name
FROM film
INNER JOIN language
ON film.language_id = language.language_id
```
2. Get all languages, even if there are no films in those languages.
```
SELECT title, description, name
FROM language
INNER JOIN film
ON film.language_id = language.language_id
```
3. Create a new table called new_film with the following columns : id, name. Add some new films to the table.
```
CREATE TABLE new_film (
	id SERIAL PRIMARY KEY,
	name VARCHAR(255)
)

-- 3
INSERT INTO new_film (name)
SELECT title 
FROM film
LIMIT 40
```

4. Create a new table called customer_review, which will contain film reviews that customers will make.
Think about the DELETE constraint: if a film is deleted, it’s review should be automatically deleted.
It should have the following columns:
1. review_id – a primary key, non null, auto-increment.
2. film_id – references the new_film table. The film that is being reviewed.
3. language_id – references the language table. What language the review is in.
4. title – the title of the review.
5. score – the rating of the review (1-10).
6. review_text – the text of the review. No limit on the length.
7. last_update – when the review was last updated.
```
CREATE TABLE customer_review (
	review_id SERIAL NOT NULL,
	film_id INT NOT NULL,
	language_id INT,
	title VARCHAR(255),
	score INT,
	reviw_text TEXT,
	last_update TIMESTAMP,
	PRIMARY KEY (review_id),
	CONSTRAINT fk_film_id FOREIGN KEY (film_id)
	REFERENCES new_film (id)
	ON DELETE CASCADE,
	FOREIGN KEY (language_id)
	REFERENCES language (language_id)
)
```
5. Add 2 movie reviews. Make sure you link them to valid objects in the other tables.
```
INSERT INTO customer_review (film_id, language_id, title, score, reviw_text , last_update) 
VALUES
(1,1,'Hi,Mom',2, 'Russian crime drama psychological thriller',NOW()),
(2,2,'Detective Chinatown 3',4,'film directed by Klim Shipenko',NOW())
```

6. Delete a film that has a review from the new_film table, what happens to the customer_review table?

```
DELETE FROM new_film
WHERE id = 3
```

### Exercise 2 : DVD Rental
#### Instructions
1. Use UPDATE to change the language of some films. Make sure that you use valid languages.
```
UPDATE language 
SET name = 'Hebrew', last_update = NOW()
WHERE language_id = 2
```

3. We created a new table called customer_review. Drop this table. Is this an easy step, or does it need extra checking?
```
DROP TABLE customer_review
```
4. Find out how many rentals are still outstanding (ie. have not been returned to the store yet).
```
SELECT *
FROM rental
WHERE return_date IS NULL
```
5. Find the 30 most expensive movies which are outstanding (ie. have not been returned to the store yet)
```
SELECT title, replacement_cost
FROM rental
INNER JOIN inventory
ON inventory.inventory_id = rental.inventory_id
INNER JOIN film
ON film.film_id = inventory.film_id
WHERE return_date IS NULL
ORDER BY replacement_cost DESC
LIMIT 30;
```