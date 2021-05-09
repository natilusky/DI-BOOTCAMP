# Exercise 1 : Items And Customers/
### 1. Create a database called public.
```
CREATE DATABASE public;
```

### 2.Add two tables:
```
CREATE TABLE items (
	item VARCHAR(255) UNIQUE NOT NULL,
	price INTEGER NOT NULL
	);
	
CREATE TABLE customers (
	first_name TEXT,
	last_name TEXT
	);
```

### Follow the below instructions to determine which columns to add to the two tables
```
INSERT INTO items (item,price) VALUES
('Small Desk', 100),
('Large Desk', 300),
('Fan', 80);

INSERT INTO customers (first_name,last_name) VALUES
('Greg', 'Jones'),
('Sandra', 'Jones'),
('Scott', 'Scott'),
('Trevor', 'Green'),
('Melanie', 'Johnson');
```
### 3. Use SQL to fetch the following data from the database:
##### 1.All the items.
```
SELECT * FROM items;
```
##### 2.All the items with a price above 80 (80 not included).
```
SELECT * FROM items WHERE price > 80;
```
##### 3.All the items with a price below 300. (300 included)
```
SELECT * FROM items WHERE price <= 300;
```
##### 4.All customers whose last name is ‘Smith’ (What will be your outcome?).
```
SELECT * FROM customers WHERE last_name = 'Smith';
```
##### 5.All customers whose last name is ‘Jones’.
```
SELECT * FROM customers WHERE last_name = 'Jones';
```
##### 6.All customers whose firstname is not ‘Scott’.
```
SELECT * FROM customers WHERE first_name <> 'Scott';
```