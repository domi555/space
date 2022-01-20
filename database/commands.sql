-- Abfragen inventar_manager_db

--  3 Files users.js spaces.js products.js

-- GET DATA
-- Login: POST /users
SELECT id
FROM users
WHERE email = 'palatin.d02@htlwienwest.at'
  AND password = 'dp';


-- Profile data: GET /users/:id
SELECT email, first, last
FROM users
WHERE id = 1; -- erledigt
-- Spaces: GET /spaces/:id
SELECT name, description, image
FROM users
         JOIN users_spaces on users.id = users_spaces.user_id
         JOIN spaces on users.id = spaces.id
WHERE users.id = 1; -- erledigt
-- Products: GET /products/:id
SELECT products.name, products.description, products.image, count
FROM users
         JOIN users_spaces on users.id = users_spaces.user_id
         JOIN spaces on users.id = spaces.id
         JOIN products on spaces.id = products.space_id
WHERE users.id = 1;

-- POST DATA
-- Register: POST /users/new
INSERT INTO users(email, first, last, password)
VALUES ('email', 'first_name', 'last_name', 'password');
-- Add space: POST /spaces
INSERT INTO spaces(name, description, image)
VALUES ('name', 'description', 'image');
INSERT INTO users_spaces(user_id, space_id, admin)
VALUES (1, 1, true);
-- Add product: POST /products
INSERT INTO products(name, description, image, count, space_id)
VALUES ('name', 'description', 'image', 1, 1);

-- UPDATE DATA
-- Update password: PATCH /users/:id/password
UPDATE users
SET password = 'password'
WHERE id = 1;
-- Update user: PATCH /users/:id
UPDATE users
SET email = 'email',
    first = 'first_name',
    last  = 'last_name'
WHERE id = 1;
-- Update space: PATCH /spaces/:id
UPDATE spaces
SET name        = 'name',
    description = 'description',
    image       = 'space.png'
WHERE id = 1;
-- Update product: PATCH /products/:id
UPDATE products
SET name        = 'name',
    description = 'description',
    image       = 'space.png',
    count       = 1
WHERE id = 1;
-- Share space: PATCH /spaces/:id/share
SELECT id FROM users WHERE email = 'palatin.d02@htlwienwest.at';
INSERT INTO users_spaces(user_id, space_id, admin)
VALUES (1, 1, DEFAULT);

-- DELETE DATA
-- Delete user: DELETE /user/:email
DELETE
FROM users
WHERE id = 1;
-- Delete space: DELETE /spaces/:id
DELETE
FROM spaces
WHERE id = 1;
-- Delete product: DELETE /products/:id
DELETE
FROM products
WHERE id = 1;