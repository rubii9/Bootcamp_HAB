# CONSULTAS

-- Listar todos los espacios 

SELECT e.*, avg(r.puntuacion)
FROM espacios e
left join ratings r
on e.id=r.espacio_id
group by e.id
ORDER BY create_space DESC;

-- Realizar consulta para busqueda(nombre,localidad,tipo,equipamiento,fechas)

SELECT id, nombre, ciudad,descripcion, precio,foto1,foto2,foto3
FROM espacios
WHERE nombre LIKE '%?%';

SELECT id, nombre, ciudad,descripcion, precio,foto1,foto2,foto3
FROM espacios
WHERE ciudad LIKE '%?%';

SELECT id, nombre,ciudad, descripcion, precio,foto1,foto2,foto3
FROM espacios
WHERE comunidad LIKE '%?%';

SELECT id, nombre,ciudad, descripcion, precio,foto1,foto2,foto3
FROM espacios
WHERE tipo LIKE '%?%';

SELECT e.*,eq.nombre,eq.cantidad FROM espacios e, equipamiento eq
where e.id=eq.espacio_id
AND eq.nombre like '%?%';

select e.*,r.* from espacios e
left join reservas r
on  e.id=r.espacio_id
where r.fecha_fin is null or r.fecha_fin < "2020-05-05";

-- Listar datos usuario

SELECT id,nombre,apellidos FROM usuarios;


-- Listar un espacio concreto y su info + rating

SELECT e.*, avg(r.puntuacion)
FROM espacios e
left join ratings r
on e.id=r.espacio_id
where e.id = ?
group by e.id
ORDER BY create_space DESC;



-- Listar reserva "mi coworking" (incidencias + listar el espacio reservado)

select r.*,i.* from reservas r,incidencias i
where r.id = i.reserva_id 
and espacio_id = ?;

-- Listar espacios publicados por un usuario concreto

select u.nombre, u.apellidos , e.* from usuarios u,espacios e
where u.id=e.propietario_id
and u.id=?;
