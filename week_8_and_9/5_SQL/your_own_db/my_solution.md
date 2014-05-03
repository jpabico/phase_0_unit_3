<!-- ## Show the terminal output here.  -->
SQLite version 3.7.13 2012-07-17 17:46:21
Enter ".help" for instructions
Enter SQL statements terminated with a ";"



sqlite> .schema
CREATE TABLE customers (
id INTEGER PRIMARY KEY AUTOINCREMENT,
first_name VARCHAR(25),
last_name VARCHAR(25),
phone INTEGER
);
CREATE TABLE order_details (
id INTEGER PRIMARY KEY AUTOINCREMENT,
product_id INTEGER,
order_id INTEGER
);
CREATE TABLE order_details_and_products_combined(
  id INT,
  product_id INT,
  order_id INT,
  "id:1" INT,
  description TEXT,
  brand TEXT,
  price NUM
);
CREATE TABLE orders (
id INTEGER PRIMARY KEY AUTOINCREMENT,
customer_id INTEGER,
order_date DATETIME
);
CREATE TABLE products (
id INTEGER PRIMARY KEY AUTOINCREMENT,
description VARCHAR(64),
brand VARCHAR(20),
price DECIMAL
);



sqlite> select * from customers;
id          first_name  last_name   phone     
----------  ----------  ----------  ----------
101         Amy         Adams       3243567   
102         Bob         Barker      8677247   
103         Carol       Coyne       9785632   
104         Dan         Davis       1367899   
105         Eve         Evans       6632900   
106         Fred        Ferris      8844225   
107         Gale        Gonzalez    7856321   
108         Heather     Harris      9733011   
109         Ivan        Ingram      7652310   
110         Jane        Jones       4000087   



sqlite> select * from order_details;
id          product_id  order_id  
----------  ----------  ----------
1001        10001       55555     
1002        10002       66666     



sqlite> select * from products;
id          description  brand        price     
----------  -----------  -----------  ----------
10001       corn flakes  Quaker Oats  2.99      
10002       pineapple    Dole         3.5       



sqlite> select * from order_details_and_products_combined;
id          product_id  order_id    id:1        description  brand        price     
----------  ----------  ----------  ----------  -----------  -----------  ----------
1001        10001       55555       10001       corn flakes  Quaker Oats  2.99      
1002        10002       66666       10002       pineapple    Dole         3.5   