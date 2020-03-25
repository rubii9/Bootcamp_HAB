-- Consultas a realizar sobre las tablas employee y department

-- 01. Obtener todos los datos de todos los empleados.
-- 02. Obtener todos los datos de todos los departamentos.
-- 03. Obtener todos los datos de los administrativos (su trabajo es, en ingl´es, ’CLERK’).
-- 04. Idem, pero ordenado por el nombre.
-- 05. Obten el mismo resultado de la pregunta anterior, pero modificando la sentencia SQL.
-- 06. Obten el numero (codigo), nombre y salario de los empleados.
-- 07. Lista los nombres de todos los departamentos.
-- 08. Idem, pero ordenandolos por nombre.
-- 09. Idem, pero ordenandolo por la ciudad (no se debe mostrar la ciudad en el resultado).
-- 10. Idem, pero el resultado debe mostrarse ordenado por la ciudad en orden inverso.
-- 11. Obtener el nombre y empleo de todos los empleados, ordenado por salario.
-- 12. Obtener el nombre y empleo de todos los empleados, ordenado primero por su trabajo y luego por su salario.
-- 13. Idem, pero ordenando inversamente por empleo y normalmente por salario.
-- 14. Obten los salarios, las comisiones y el nombre de cada uno de los empleados del departamento 30.
-- 15. Idem, pero ordenado por comision.
-- 16. Obten las comisiones de todos los empleados. 
-- 17. Obten las comisiones de los empleados de forma que no se repitan.
-- 18. Obten el nombre de empleado y su comision.
-- 19. Obten los nombres de los empleados y sus salarios, de forma que no se repitan filas.
-- 20. Obten las comisiones de los empleados y sus numeros de departamento, de forma que no se repitan filas.
-- 21 Obten los nuevos salarios de los empleados del departamento 30, que resultarian de sumar a su salario una gratificación de 1000.
--     Muestra también los nombres de los empleados
-- 22 Lo mismo que la anterior, pero mostrando también su salario original, y haz que la columna que almaccena el nueva salario se denonime new_sal
-- 23 Halla los empleados que tienen una comision superior a la mitad de su salario.
-- 24 Halla los empleados que no tienen comision, o que la tengan menor o igual que el 25% de su salario.
-- 25 Obten una lista de los nombres de los empleados y sus saldarios de forma que en la salida aparezca en todas las filas 'Name:' and 'Salary:' antes
--     del respectivo campo. Las columnas de la tabla deben llamarse 'Name' y 'Salary
-- 26. Hallar el codigo, salario y comision de los empleados cuyo codigo sea mayor que 7500.
-- 27. Obten todos los datos de los empleados que esten ordenados alfabeticamente y la primera letra sea J o mayor.
--     https://dev.mysql.com/doc/refman/5.7/en/string-functions.html#function_substring
-- 28. Obten el salario, comision y salario total (salario+comision) de los empleados con comision,
--     ordenando el resultado por numero de empleado.
--     OJO: Solo con comprobar con IS NOT NULL no es suficiente porque hay un empleado cuya comisión  es 0.
--     Suponemos que NULL nos indica que no tiene comision
-- 29. Lista la misma informacion, pero para los empleados que no tienen comision.
-- 30. Muestra el nombre de los empleados que, teniendo un salario superior a 1000, tengan como jefe
--     al empleado cuyo codigo es 7698.
-- 31. Halla el conjunto complementario del resultado del ejercicio anterior.
-- DIFICIL
-- 32. Indica para cada empleado el porcentaje que supone su comision sobre su salario, ordenando el
--     resultado por el nombre del mismo empleado.
-- 33. Hallar los empleados del departamento 10 cuyo nombre no contiene la cadena LA.
-- 34. Obten los empleados que no son supervisados por ning´un otro.
-- 35. Obten los nombres de los departamentos que no sean Ventas (SALES) ni investigacion (RESEARCH).
--     Ordena el resultado por la localidad del departamento.

-- 36. Deseamos conocer el nombre de los empleados y el codigo del departamento de los administra-
--     tivos(CLERK) que no trabajan en el departamento 10, y cuyo salario es superior a 800, ordenado
--     por fecha de contratacion.
-- 37. Para los empleados que tengan comision, obten sus nombres y el cociente entre su salario y su
--     comision (excepto cuando la comision sea cero), ordenando el resultado por nombre.
-- 38. Lista toda la informacion sobre los empleados cuyo nombre completo tenga exactamente 5 caracteres.
-- 39. Lo mismo, pero para los empleados cuyo nombre tenga al menos cinco letras.
-- 40. Halla los datos de los empleados que, o bien su nombre empieza por A y su salario es superior
--     a 1000, o bien reciben comisi´on y trabajan en el departamento 30.
-- 41. Halla el nombre, el salario y el sueldo total (sal+com)de todos los empleados, ordenando el resultado
--     primero por salario y luego por el sueldo total. En el caso de que no tenga comisi´on, el sueldo
--     total debe reflejar solo el salario.
-- 42. Obtén el nombre, salario y la comisión de los empleados que perciben un salario que esta entre la mitad de la comisión y la propia comisión.
-- 43. Obtén el complementario del anterior.
-- DIFICIL
-- 44. Lista los nombres y empleos de aquellos empleados cuyo empleo acaba en MAN y cuyo nombre empieza por A.
-- 45. Lista los nombres y fecha de contrataci´on de aquellos empleados que no son vendedores (SALESMAN).
-- 46. Obten la informacion disponible de los empleados cuyo numero es uno de los siguientes: 7844,
-- 7900, 7521, 7521, 7782, 7934, 7678 y 7369, pero que no sea uno de los siguientes: 7902, 7839, 7499 ni 7878. 
-- Intenta hacerlo usando como máximo un AND en la clausura WHERE.


use hb_employees;
-- Ej 1
select * from employee;
-- -------------------------------------------------------------------------------
-- Ej 2
select * from department;
-- -------------------------------------------------------------------------------
-- Ej 3
select * from employee where job = "CLERK";
-- -------------------------------------------------------------------------------
-- Ej 4
select * from employee where job ="CLERK" order by name;
-- -------------------------------------------------------------------------------
-- Ej 5
select * from employee where job ="CLERK" order by name desc;
-- -------------------------------------------------------------------------------
-- Ej 6
select id,name,salary from employee;
-- -------------------------------------------------------------------------------
-- Ej 7
select name from department;
-- -------------------------------------------------------------------------------
-- Ej 8
select name from department order by name;
-- -------------------------------------------------------------------------------
-- Ej 9
select name from department order by location;
-- -------------------------------------------------------------------------------
-- Ej 10
select name from department order by location desc;
-- -------------------------------------------------------------------------------
-- Ej 11
select name,job from employee order by salary;
-- -------------------------------------------------------------------------------
-- Ej 12
select name,job from employee order by job,salary;
-- -------------------------------------------------------------------------------
-- Ej 13
select name,job from employee order by job desc,salary;
-- -------------------------------------------------------------------------------
-- EJ 14
select salary,coalesce(commission),name from employee where department_id=30;
-- -------------------------------------------------------------------------------
-- Ej 15
select salary,coalesce(commission,0),name from employee where department_id=30 order by commission;
-- -------------------------------------------------------------------------------
-- Ej 16
select coalesce(commission,0) from employee;
-- -------------------------------------------------------------------------------
-- Ej 17
select distinct coalesce(commission,0) from employee;
-- -------------------------------------------------------------------------------
-- Ej 18
select name,coalesce(commission,0) from employee;
-- -------------------------------------------------------------------------------
-- Ej 19
select distinct  salary,name from employee;
-- -------------------------------------------------------------------------------
-- Ej 20
select distinct  coalesce(commission,0),department_id from employee;
-- -------------------------------------------------------------------------------
-- Ej 21 y 22
select name,salary,salary + 1000  as new_sal from employee where department_id =30;
-- -------------------------------------------------------------------------------
-- Ej 23
select name,salary,commission from employee where commission > salary/2;
-- --------------------------------------------------------------------------------
-- Ej 24
select name, commission from employee where commission < salary *0.25 or commission = "NULL";
-- --------------------------------------------------------------------------------
-- Ej 25
select concat('Name: ',name) as 'Name', concat('Salary: ',salary) as 'Salary' from employee;
-- --------------------------------------------------------------------------------
-- Ej 26
select id,salary,coalesce(commission,0) from employee where id >7500;
-- --------------------------------------------------------------------------------
-- Ej 27
select * from employee where name >= 'J%' order by name asc;
-- --------------------------------------------------------------------------------
-- Ej 28
select id,name,salary,coalesce(commission,0),(salary+coalesce(commission,0)) as total_salary from employee order by id;
-- --------------------------------------------------------------------------------
-- Ej 29
select id,name,salary,commission from employee where commission is not NULL;
-- --------------------------------------------------------------------------------
-- Ej 30
select name,salary from employee where salary>1000 and manager_id = 7698;
-- --------------------------------------------------------------------------------
-- Ej 31
select name,salary from employee where not salary>1000 and  not manager_id =7698;
-- --------------------------------------------------------------------------------
-- Ej 32
select * , (coalesce(commission,0)/salary)*100 as porcentaje from employee order by name;
-- --------------------------------------------------------------------------------
-- Ej 33
select * from employee where department_id= 10 and name not like "%LA%";
-- --------------------------------------------------------------------------------
-- Ej 34
select * from employee where coalesce(manager_id,0) = 0;
-- --------------------------------------------------------------------------------
-- Ej 35
select * from department where not name = "SALES" AND not name ="RESEARCH" order by location;
-- --------------------------------------------------------------------------------




