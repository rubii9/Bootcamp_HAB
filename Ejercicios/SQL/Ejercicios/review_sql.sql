-- Base de datos (tiene todo en el enlace)
-- https://dev.mysql.com/doc/sakila/en/

-- ==============================================
-- Qual es la persona que mas ha pagado
-- ==============================================

SELECT * FROM customer -- Mirar lo que tenemos en customers
SELECT * FROM payment -- Mirar lo que hay en payments

SELECT sum(payment.amount) FROM payment -- Total de pago
SELECT sum(payment.amount) FROM payment GROUP BY payment.customer_id -- Total de pago por cliente
SELECT sum(payment.amount), payment.customer_id FROM payment GROUP BY payment.customer_id -- Total de pago por cliente y su id

SELECT sum(payment.amount), payment.customer_id FROM payment 
	INNER JOIN customer ON customer.customer_id = payment.customer_id
	GROUP BY payment.customer_id -- Hacer un join. Ahora es posible coger datos de la tabla customer
    
SELECT sum(payment.amount), payment.customer_id, customer.first_name FROM payment 
	INNER JOIN customer ON customer.customer_id = payment.customer_id
	GROUP BY payment.customer_id -- Todos los pagos por cliente y su nombre
    
SELECT sum(payment.amount) AS TotalPago, payment.customer_id as Identificador, customer.first_name as PrimerNombre FROM payment 
	INNER JOIN customer ON customer.customer_id = payment.customer_id
	GROUP BY payment.customer_id -- Add alias para cambiar nombres de las columnas
    
SELECT sum(payment.amount) AS TotalPago, payment.customer_id as Identificador, customer.first_name as PrimerNombre FROM payment 
	INNER JOIN customer ON customer.customer_id = payment.customer_id
	GROUP BY payment.customer_id 
    ORDER BY TotalPago -- Add sort para coger desde menor a mayor
    
SELECT sum(payment.amount) AS TotalPago, payment.customer_id as Identificador, customer.first_name as PrimerNombre FROM payment 
	INNER JOIN customer ON customer.customer_id = payment.customer_id
	GROUP BY payment.customer_id 
    ORDER BY TotalPago DESC -- Sort pero desde mayor a menor
    
SELECT sum(payment.amount) AS TotalPago, payment.customer_id as Identificador, customer.first_name as PrimerNombre FROM payment 
	INNER JOIN customer ON customer.customer_id = payment.customer_id
	GROUP BY payment.customer_id 
    ORDER BY TotalPago DESC 
    LIMIT 1 -- Coger solo la primera linea

-- ==============================================
-- Cual es la categorias TOP 5 que mas se alquila
-- Recuerdate que FK es solo para Data Consistency.
-- ==============================================

select * from rental -- Investigar la tabla

select * from rental
	INNER JOIN inventory ON rental.inventory_id = inventory.inventory_id -- Join para que se pueda coger el film_id dentro de la tabla inventory
    
select * from rental
	INNER JOIN inventory ON rental.inventory_id = inventory.inventory_id
    INNER JOIN film_category ON inventory.film_id = film_category.film_id -- Juntar film_id de 2 tablas para coger el category_id de la tabla film_category
    
select * from rental
	INNER JOIN inventory ON rental.inventory_id = inventory.inventory_id
    INNER JOIN film_category ON inventory.film_id = film_category.film_id
    INNER JOIN category ON film_category.category_id = category.category_id -- Juntar la tabla category para que lograr en coger la columna caterogy.name
    
select count(*) from rental
	INNER JOIN inventory ON rental.inventory_id = inventory.inventory_id
    INNER JOIN film_category ON inventory.film_id = film_category.film_id
    INNER JOIN category ON film_category.category_id = category.category_id -- Junta todo
    
select count(*), category.name from rental
	INNER JOIN inventory ON rental.inventory_id = inventory.inventory_id
    INNER JOIN film_category ON inventory.film_id = film_category.film_id
    INNER JOIN category ON film_category.category_id = category.category_id 
    GROUP BY category.name -- Junta todo pero en grupos
    
select count(*) as quantidadAlquilada, category.name from rental
	INNER JOIN inventory ON rental.inventory_id = inventory.inventory_id
    INNER JOIN film_category ON inventory.film_id = film_category.film_id
    INNER JOIN category ON film_category.category_id = category.category_id 
    GROUP BY category.name 
    ORDER BY quantidadAlquilada -- Coger los datos en orden
    
select count(*) as quantidadAlquilada, category.name from rental
	INNER JOIN inventory ON rental.inventory_id = inventory.inventory_id
    INNER JOIN film_category ON inventory.film_id = film_category.film_id
    INNER JOIN category ON film_category.category_id = category.category_id 
    GROUP BY category.name 
    ORDER BY quantidadAlquilada DESC -- De mayor a menor
    
select count(*) as quantidadAlquilada, category.name from rental
	INNER JOIN inventory ON rental.inventory_id = inventory.inventory_id
    INNER JOIN film_category ON inventory.film_id = film_category.film_id
    INNER JOIN category ON film_category.category_id = category.category_id 
    GROUP BY category.name 
    ORDER BY quantidadAlquilada DESC
    LIMIT 5 -- Respuesta final




-- ==============================================
-- Todas las peliculas alquiladas desde enero hasta agosto del año de 2005
-- ==============================================

SELECT * FROM rental -- Investigar la tabla
-- MONTH() => un numero de 1 hasta 12 (enero hasta deciembre)
SELECT * FROM rental WHERE MONTH(rental_date) >= 1 AND MONTH(rental_date) <= 3 -- Coger las rentas desde enero hasta marzo

SELECT * FROM rental WHERE 
	MONTH(rental_date) >= 1 
    AND MONTH(rental_date) <= 8
	AND YEAR(rental_date) = 2005 -- Coger solo del año 2005

-- ==============================================
-- Ejemplo de como usar expressions en SQL
-- Mirar en Google por SQL LIKE para más ejemplos 
-- ==============================================

SELECT * FROM actor WHERE first_name LIKE "P%" -- Donde el firt_name sea como P<loquesea>
SELECT * FROM actor WHERE first_name LIKE "%P%" -- Una P al medio de primer nombre
SELECT * FROM actor WHERE first_name LIKE "%P" -- Una P al medio de primer nombre

-- ==============================================
-- Total de alquileres por empleado
-- ==============================================

SELECT * FROM rental -- Investigar
SELECT count(*) FROM rental -- Total de alquileres
SELECT count(*) FROM rental GROUP BY staff_id -- Total de rentas por empleado
SELECT count(*), staff_id FROM rental GROUP BY staff_id -- Total de rentas por empleado

SELECT count(*), staff.staff_id, staff.first_name FROM rental 
	INNER JOIN staff ON staff.staff_id = rental.staff_id
	GROUP BY staff_id -- El mismo de antes + el nombre
    
CREATE VIEW AmountOfRentalsPerEmployer AS 
	SELECT count(*), staff.staff_id, staff.first_name FROM rental 
	INNER JOIN staff ON staff.staff_id = rental.staff_id
	GROUP BY staff_id -- El mismo de antes + el nombre
    
SELECT * FROM AmountOfRentalsPerEmployer 
	INNER JOIN payment ON AmountOfRentalsPerEmployer.staff_id = payment.staff_id -- Se puede usar una view como una tabla normal, pero hojo con la view pues el select dentro de la view siempre se arranca

-- ==============================================
-- cuales los nombres que se repiten
-- ==============================================

SELECT * FROM actor -- Investigar
    
SELECT count(*) AS qtdNombre FROM actor 
	GROUP BY first_name -- Candidad en grupo de first_name
    
SELECT count(*) AS qtdNombre, first_name from actor
	GROUP BY first_name 
    HAVING qtdNombre > 1 -- Candidad en grupo de first_name

-- ==============================================
-- cual es el nombre que no se repite
-- ==============================================

SELECT count(*) AS qtdNombre, first_name from actor
	GROUP BY first_name 
    HAVING qtdNombre = 1 -- Candidad en grupo de first_name
	
-- ==============================================
-- La pelica que no ha sido alquilada
-- ==============================================

SELECT * FROM rental -- Investigar
SELECT * FROM rental 
	INNER JOIN inventory ON rental.inventory_id = inventory.inventory_id -- Juntar la tabla inventory para coger el film_id en inventory
    
SELECT DISTINCT film_id from rental
	INNER JOIN inventory ON rental.inventory_id = inventory.inventory_id -- Todas las peli que han sido alquiladas
    
SELECT * FROM film -- Investigar
SELECT film_id from film -- Todos los film_id que existen

SELECT film_id from film
	WHERE film_id NOT IN (
			SELECT DISTINCT film_id FROM rental
				INNER JOIN inventory ON rental.inventory_id = inventory.inventory_id 
		) -- Compara todos los film_id que existen y coge SOLO SE EL FILM_ID que no se encuentra en el select de dentro
        

CREATE OR REPLACE VIEW PeliculasAlquiladas AS
	SELECT DISTINCT film_id FROM rental
		INNER JOIN inventory ON rental.inventory_id = inventory.inventory_id -- Crear una view
        
SELECT * FROM PeliculasAlquiladas -- Probar la view

SELECT film_id FROM film
	WHERE film_id NOT IN (SELECT * FROM PeliculasAlquiladas) -- Respuesta 2.0 (lo mismo pero más bonita)


-----------------

-- ==============================================
-- SI QUIERES HACER PAGINATION (coger datos en "páginas")
-- ==============================================
SELECT * FROM actor LIMIT 5 OFFSET 10
-- Esa es la manera más sensilla de hacer. És posible hacer con una otra cosa que se llama "pagination via cursor" pero és muy complejo
-- y no se hace solo con SQL
