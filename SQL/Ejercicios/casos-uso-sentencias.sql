USE tienda_online;

-- 1. Registrar un usuario

INSERT INTO usuarios (login, password, nif, email, nombre, direccion, telefono)
       VALUES (?, ?, ?, ?, ?, ?, ?);
       
-- 2. Iniciar sesión

SELECT id, login, rol
FROM usuarios
WHERE login = ? AND password = ?;

-- 3. Si el usuario le da 'editar perfil'

-- Cargar los datos del usuario

SELECT id, login, nif, email, nombre, direccion, telefono
FROM usuarios
WHERE login = ?;

-- Cuando el usuario le da a guardar

UPDATE usuarios
SET nif = ?, email = ?, nombre = ?, direccion = ?, telefono = ?
WHERE login = ?;

-- 4. El usuario cambia la contraseña (se le pide la antigua y dos veces la nueva)

UPDATE usuarios
SET password = ? -- la nueva
WHERE login = ? AND password = ?; -- la antigua

-- 5. Hacer una búsqueda de artículos/productos/personas/concursos/. . . . . .

-- Búsqueda general (una sola caja de texto y se busca en todos los campos)

SELECT id, nombre, descripcion, precio, foto
FROM productos
WHERE nombre LIKE '%?%' OR descripcion LIKE '%?%';

-- Búsqueda avanzada (el usuario elige el valor para cada criterio de búsqueda)

SELECT id, nombre, descripcion, precio, foto
FROM productos
WHERE precio > ? AND categoria = ?;

-- **Búsqueda avanzada con todos los criterios**

SELECT id, nombre, descripcion, precio, foto
FROM productos
WHERE nombre LIKE '%?%' AND descripcion LIKE '%?%';

-- 6. Registrar un pedido y sus productos

INSERT INTO pedidos (codigo, fecha, estado, precio_total)
VALUES (?, current_timestamp(), 'pedido', ?);

-- Hay que guardar el id generado en una variable para usarla en cada inserción de
-- producto_pedido (last_insert_id())

-- Hacer una vez por producto que haya en el pedido
INSERT INTO producto_pedido (id_producto, id_pedido, cantidad, precio)
VALUES (?, ?, ?, ?);

-- 7. Valorar un producto

-- El usuario está viendo el producto (SELECT)

INSERT INTO valoraciones (id_usuario, id_producto, valoracion)
VALUES (?, ?, ?);

-- 8. Listado de productos (y quiero además que se vea su valoración)

SELECT P.id, P.nombre, P.descripcion, P.foto, P.precio, AVG(V.valoracion) valoracion
FROM productos P, valoraciones V
WHERE P.id = V.id_producto AND P.nombre LIKE '%?%' AND P.descripcion LIKE '%?%'
GROUP BY P.id;

-- Eliminar un producto

DELETE FROM productos WHERE id = ?;

