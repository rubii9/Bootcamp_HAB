-- 47. Lista los detalles de los empleados con los detalles de sus respectivos departamentos (esta sí es un JOIN)
select * from employee e, department d where e.department_id = d.id; 

-- 48. Lista los detalles de los empleados con un salario más alto que BLAKE
select * from employee where salary > (select salary from employee where name = 'BLAKE'); 

-- 49. Lista los empleados que tienen el mismo job que ALLEN
select * from employee where job = (select job from employee where name = 
'ALLEN');
-- 49b. Igual q la anterior, pero ya sabemos el job de ALLEN, queremos omitirlo
select * from employee where job = (select job from employee where name = 
'ALLEN') and name != 'ALLEN'; 

-- 50. Lista de empleados que llevan más tiempo en la empresa que KING
select * from employee where hire_date < (select hire_date from employee where name = 'KING'); 

-- 51. Lista de empleados del departamento 20 que tienen los mismos trabajos que los empleados del departamento 10.
select * from employee
where department_id = 20 
and job in (
	select distinct job from employee where department_id = 10
);
-- podemos comprobar los jobs del departamento 10, y luego volver a tirar la query anterior para comprobar
select distinct job from employee where department_id = 10;


-- 53. Nombre y salario de FORD y SMITH y todos aquellos que tengan el salario igual a 1 de ellos. 

select name, salary from employee where salary in (
	select salary from employee where name in ('SMITH', 'FORD')
) 
order by salary desc; 

-- 53.b Nombre y salario de emplados que tienen el mismo salario que FORD o SMITH ordenador por salario más alto. FORD O SMITH no deben salir en el resultado.

select name, salary from employee where salary in (
	select salary from employee where name in ('SMITH', 'FORD')
) 
and name not in ('SMITH', 'FORD')
order by salary desc; 


-- 54. Lista de empleados cuyo trabajo es el mismo que el de MILLER o cuyo salario es mayor que el de ALLEN
select * from employee where job = (
	select job from employee where name = 'MILLER'
) or salary > (
	select salary from employee where name = 'ALLEN'
); 

-- 55. Lista de empleados cuyo salario es mayor que el sueldo total de todos los empleados SALESMAN
select * from employee where salary > (
	select sum(coalesce(commission, 0)) + sum(salary) as sueldo_total_salesman 
    from employee where job = 'SALESMAN'
); 
  
 
-- 58. Lista de empleados cuyos trabajos son los mismos que los de SMITH o ALLEN (y q no muestre a estos últimos). 
select * from employee where job in (
	select job from employee where name in ('SMITH', 'ALLEN')
)
and name not in ('SMITH', 'ALLEN');

 
-- 59. Lista nombre y salarios de empleados cuyo salario es el mismo que cualquier SALESMAN con 5 años de antiguedad o más insertar la siguiente fila antes de hacer la query.
-- INSERT INTO employee VALUES ('7777','pepe','CLERK', null,'1981-02-22','1500.00','500.00','30');
select name, salary, job from employee where salary in (
	select salary from employee 
    where job = 'SALESMAN'
    and hire_date <= DATE_SUB(CURRENT_DATE(), INTERVAL 5 YEAR)
) and job != 'SALESMAN';

-- 60. Lista de tipos de empleados (jobs) que existen en el departamento 10 pero no en el 20.
select e.job from employee e where e.department_id = 10 and e.job not in (
	select job from employee e where e.department_id = 20
);
select * from employee where department_id = 10 or department_id = 20 order by department_id;


-- 62. Encuentra el salario más alto de todos los empleados
select max(salary) from employee;

-- 63. Muestra la información del empleados con el salario más alto
select * from employee where salary in (select max(salary) from employee); 
 

-- 64. Find the highest paid employee of sales department. 
select * from employee where salary in (
	select max(salary) from employee where department_id in (
		select id from department where name = 'SALES'
	)
); 


-- 66. Lista de empleados con más antigüedad que el último empleado contratado cuyo manager es KING.
select * from employee where hire_date < (
	select max(hire_date) from employee where manager_id in (
		select id from employee where name = 'KING'
    ) 
); 
-- 66b. comprobar los empleados del equipo de KING, ordenados de menos a más antigüedad, y volver a tirar la query anterior
select hire_date, name from employee where manager_id in (
		select id from employee where name = 'KING'
)
order by hire_date desc;


-- 68. Lista de empleados contratados en el 81 (bonus: por lo menos 3 formas diferentes de conseguir el mismo resultado)

select * from employee where hire_date like '1981%';
select * from employee where hire_date > '1980-12-31' and hire_date < '1982-01-01';
select * from employee where year(hire_date) = '1981';

-- 68b Lista de empleados contratados en Diciembre de 1981 (bonus: por lo menos 3 formas diferentes de conseguir el mismo resultado)
 select * from employee where hire_date like '1981-12%';
select * from employee where hire_date > '1981-11-31' and hire_date < '1982-01-01';
select * from employee where year(hire_date) = '1981' and month(hire_date) = '12';

 
-- 69. Lista de SALESMAN contratados en el 81.
select * from employee where year(hire_date) = '1981' and job = 'SALESMAN';

-- 70. Lista de empleados contratados en el 81 con el mismo job que el primer contratado en ese mismo año.
select * from employee where year(hire_date) = '1981' and job in (
	select job from employee where hire_date in (
		select min(hire_date) from employee where year(hire_date) = '1981'
    )
);
 -- 70b muestra la lista de empleados contratados en el 81 ordenador de mayor a menor antigüedad para comprobar su job y vuelve a tirar la query anterior
select * from employee where year(hire_date) = '1981' order by hire_date;

-- 71. muestra el nombre, slario mensual y salario anual de todos los empleados
select name, salary as salario_mensual, (salary*12) as salario_anual from employee;

-- 71b. Muestra el gasto mensual total en salarios de managers
select sum(salary) from employee where job = 'MANAGER';

-- 71c Muestra el gasto anual total en salarios de managers
select sum(salary*12) from employee where job = 'MANAGER';

-- 72. Muestra el gasto anual total en salarios de los empleados con más de 39 años de antigüedad
select sum(salary * 12) from employee where hire_date <= DATE_SUB(CURRENT_DATE(), INTERVAL 39 YEAR);

---------
-- NOTA: a partir de aquí puede que necesiteis JOIN en algunas consultas, y habrá algunas q agrupen datos (recordad: GROUP BY)
----------

-- 72b . Muestra el gasto anual en salarios del año 81, agrupado por jobs. 
select job, sum(12*salary) from employee where year(hire_date) = '1981' group by job;
 
-- 74. Muesta el salario medio de todos los empleados CLERK
select job, avg(salary) from employee where job = 'CLERK';

-- 74b. Muestra el salario medio de cada uno de los jobs.
select job, avg(salary) from employee group by job; 

-- 75. Lista de empleados del departamento 20 con un salario mayor a la media de todos los salarios del departamento 10
select * from employee where department_id = 20 and salary > (
	select avg (salary) from employee 
	where department_id = 10
);
-- comprobad la media del salario del departamento 10, tirad la consulta anterior y comprobad q efectivamente es mayor
select avg (salary) from employee where department_id = 10;

 
-- 76. Mostrar el número de empleados de cada job, en cada departamento. Es decir, departamento 10, CLERK, 2, departament 10, SALESMAN, 1, etc (bonus: se puede hacer usando solo la tabla employee, o con un JOIN on department)
-- con la tabla de employee 
select department_id, job, count(*) from employee group by department_id, job;
-- o usando join con department
 select d.id, e.job, count(e.job) from employee e, department d
 where e.department_id = d.id group by e.job, d.id; 
 
 
-- 77. Lista el id y nombre de los managers y número de empleados en el equipo de cada manager, ordenador por el ID de los manager.
select m.id, m.name, count(*) from employee e, employee m
where e.manager_id = m.id 
group by e.manager_id 
order by e.manager_id asc;
 
 
-- 78. Mostrar IDs de departamentos y número de empleados de cada de departamento (y también que uno de los grupos sea el número de empleados sin departamento).
-- NOTA: si este grupo no sale, hacer 1 o varios inserts y/o updates en la tabla employee donde el department_id del employee sea NULL, de esta forma esos employees que estáis añadiendo ya no pertenecen a ningún departamento
select department_id, count(*) as num_empleados from employee
group by department_id;

-- 78b. Mostrar todos los detalles de cada departamento, y el número de empleados que trabajan en él.
select d.*, count(e.id) as num_empleados from employee e, department d
where e.department_id = d.id
group by department_id;

-- 78c. Igual que en la anterior, pero a mayores que muestre el grupo de empleados q no tienen departamento.
select d.*, count(e.id) as num_empleados from employee e
left join department d
on e.department_id = d.id
group by department_id;

-- 78d. Igual q la 78b, pero que muestre solo los departamento con 4 o más empleados.
select d.*, count(e.id) as num_empleados from employee e, department d
where e.department_id = d.id
group by department_id
having count(*) >= 4;
 
 
-- 80. Mostrar el nombre de los departamentos y el número de empleados CLERK en cada uno
select d.name, count(e.id) from employee e, department d
where e.department_id = d.id
and e.job = 'CLERK' 
group by d.name;

-- 80b. Igual q la anterior, pero q muestre solo los q tienen 2 o más CLERKs.
select d.name, count(e.id) from employee e, department d
where e.department_id = d.id
and e.job = 'CLERK' 
group by d.name
having count(e.id) >= 2;

---------------
-- JOINS
--------------
-- 1. Selecciona todos los datos de los empleados y los departamentos relacionados (explícito e implícito)
select * from employee e inner join department d on e.department_id = d.id;
select * from employee e join department d on e.department_id = d.id;
select * from employee e, department d where e.department_id = d.id;

-- 2. Obten el nombre del empleado y el nombre del departamento en el que trabaja
select e.name, d.name
from employee e inner join department d 
on e.department_id = d.id;

-- 3. Obten el nombre de los empleados y el salario y el nombre del departamento de aquellos empleados cuyo salario es mayor a 2000
select e.name, e.salary, d.name
from employee e 
inner join department d on e.department_id = d.id
where e.salary > 2000;

select e.name, e.salary, d.name
from employee e, department d
where e.department_id = d.id
and e.salary > 2000;

-- 3b. Obten el nombre de los empleados y el salario y el nombre del departamento de aquellos empleados cuyo salario es mayor a 2000 y que trabajan en el departamento que está en DALLAS
select e.name, e.salary, d.name
from employee e
inner join department d on e.department_id = d.id
where e.salary > 2000 and d.location like 'DALLAS';

-- 4. Obten nombre y salario de los empleados que cobran más que sus jefes (mostrando nombre y salario de los jefes también).
select e.name, e.salary, m.name, m.salary
from employee e 
inner join employee m on e.manager_id = m.id
where e.salary > m.salary;
 
 -- 5. Obten los empleados cuyo sueldo total (salario+comisisones) es mayor que el sueldo total de sus jefes (incluyendo comisiones). 
 -- PISTA: debería dar el mismo resultado
select e.name, e.salary, e.salary+coalesce(e.commission,0) as sueldo_total, m.name, m.salary, m.salary+coalesce(m.commission,0) as sueldo_total
from employee e 
inner join employee m on e.manager_id = m.id
where (e.salary + coalesce(e.commission, 0)) > (m.salary + coalesce(m.commission, 0));

-- 5b. Hacer un update para q JONES y SCOTT tengan una comisión con valor 500.
-- NOTA: puede ser q el mysql tenga habilitada por defecto una protección contra los UPDATES.
-- si os sale un error diciendo 'You are using safe mode...' ejecutad esto antes:
-- SET SQL_SAFE_UPDATES = 0; 
-- y después el UPDATE de nuevo
update employee set commission = 500 where name in ('JONES', 'SCOTT');

-- 5c. Ejecutad la consulta 5 otra vez comprobad que se ven reflejadas las comisiones que acabáis de meter con el UPDATE, y q la lista es diferente.

-- 6. Obtén el número de empleados que hay en la empresa sin tener en cuenta los que están en DALLAS
select count(*)
from employee e
inner join department d on e.department_id = d.id
where d.location not like 'DALLAS';

-- 7. Obtén el número de empleados de cada departamento, así como el nombre del departamento.
select count(e.department_id), d.location,d.name
from employee e
right join department d on e.department_id = d.id
group by e.department_id, d.location,d.name;

select department_id from employee ;

-- 8. Los nombres de departamentos con el total de empleados por departamento que tienen una A en su nombre
SELECT d.name as department_name, COUNT(e.id) as total_employees_with_A
FROM employee e, department d
WHERE e.department_id = d.id AND e.name LIKE '%A%'
GROUP BY department_id;

-- 9. Lista de empleados que trabajan el departamento de NEW YORK

select * from employee e
inner join department d
on e.department_id = d.id
and d.location = 'NEW YORK';

-- 10. Lista de empleados que no trabajan en ningún departamento (con JOIN y sin JOIN)
select * from employee where department_id is null;
select * from employee e 
left join department d 
on e.department_id = d.id
Where e.department_id is null;

-- 11. Lista de departamentos que no tienen ahora mismo ningún empleado asignado (con JOIN y sin JOIN)
select * from employee e 
right join department d 
on e.department_id = d.id
Where e.department_id is null;

select * from department where id not in (
	select distinct department_id from employee where not department_id is null
);

-- 12. Lista de empleados que tienen más antigüedad que sus propios managers 
select * from employee e, employee m where e.manager_id = m.id and e.hire_date < m.hire_date; 

-- 13. Lista de empleados que tienen más atigüedad q BLAKE y trabajan en BOSTON o CHICAGO 
select * from employee e ,department d where e.department_id = d.id 
and d.location in ('CHICAGO','BOSTON')
and e.hire_date < (
	select hire_date from employee where name = 'BLAKE'
); 