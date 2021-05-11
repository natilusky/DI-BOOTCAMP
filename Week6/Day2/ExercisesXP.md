# Exercises XP: Week 6 Day2

### Exercise 1 : Items And Customers
### Instructions
We will work on the public database that we created yesterday.
##### 1. Use SQL to get the following from the database:

```
CREATE TABLE items (
	item_id SERIAL PRIMARY KEY,
	item VARCHAR(255) UNIQUE NOT NULL,
	price INTEGER NOT NULL
	);
```

```
CREATE TABLE customers (
	customer_id SERIAL PRIMARY KEY,
	first_name TEXT,
	last_name TEXT
	);
```

```
INSERT INTO items (item,price) VALUES
('Small Desk', 100),
('Large Desk', 300),
('Fan', 80);
```

```
INSERT INTO customers (first_name,last_name) VALUES
('Greg', 'Jones'),
('Sandra', 'Jones'),
('Scott', 'Scott'),
('Trevor', 'Green'),
('Melanie', 'Johnson');
```


##### 2. Create a table named purchases. It should have 2 columns : customer_id and item_id. These columns are references from the tables customers and items. Edit the data of the purchases table:

```
CREATE TABLE purchases(
	customer_id INTEGER,
	item_id INTEGER
)
```
1. Add a row which references a customer by ID, but does not reference an item by ID (leave it blank). Does this work? Why/why not?
```
INSERT INTO purchases (customer_id) 
SELECT customer_id
FROM customers
WHERE customer_id=1
```
2. Add 5 rows which reference existing customers and items.
```
INSERT INTO purchases (customer_id,item_id) 
SELECT customer_id, item_id
FROM customers, items
LIMIT 5
```
##### 3. Use SQL to get the following from the database:
1. All purchases. Is this information useful to us?
```
SELECT * FROM purchases
```

2. All purchases, joining with the customers table
```
SELECT * 
FROM purchases p, customers c
WHERE p.customer_id = c.customer_id
```

3. Purchases of the customer with the ID equal to 4.
```
SELECT * 
FROM purchases p, customers c
WHERE p.customer_id = c.customer_id
AND p.customer_id = 4
```

4. Purchases for a large desk AND a small desk
```
SELECT * 
FROM purchases p
INNER JOIN items i
ON p.item_id = i.item_id
WHERE i.item = 'Large Desk'
OR i.item = 'Small Desk'
```

##### 4. Create a purchase for Scott Scott – he bought a hard drive.
```
INSERT INTO items (item, price) VALUES ('hard drive', 50)
INSERT INTO purchases (customer_id,item_id) 
SELECT customer_id, item_id
FROM customers, items
WHERE customers.first_name = 'Scott'
AND customers.last_name = 'Scott'
```

##### 5. Use SQL to show all the customers who have made a purchase. Show the following fields/columns:
1. Customer first name
2. Customer last name
3. Item name
```
SELECT DISTINCT first_name, last_name, item 
FROM customers
INNER JOIN purchases p
ON p.customer_id = customers.customer_id
INNER JOIN items
ON p.item_id = items.item_id
```
