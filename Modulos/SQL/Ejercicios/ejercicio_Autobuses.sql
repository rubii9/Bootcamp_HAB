create database buses;
use buses;
create table modelos_buses(
	id int primary key auto_increment,
	marca varchar(255) not null,
    module varchar(255) not null
);
alter table modelos_buses change column module modelo varchar(255) not null;
create table buses(
	id int primary key auto_increment,
    matricula varchar(7) not null unique,
    fabricacion YEAR(4),
    modelos_buses_id int not null,
    constraint fk_modelo_bus FOREIGN KEY (modelos_buses_id) REFERENCES modelos_buses(id)
);
create table conductores (
	id int primary key auto_increment,
    nombre varchar(255) not null,
	apellidos varchar(255) not null,
    dni varchar(9) not null,
    tlf varchar(14) not null
);
create table paradas (
	id int primary key auto_increment,
    nombre varchar(255) not null,
    calle varchar(255) not null,
    número varchar(4) not null
);
create table lineas (
	id int primary key,
    hora_inicio time not null
);
create table itinerario (
	id int primary key auto_increment,
    id_linea int not null,
    id_parada int not null,
    orden tinyint not null,
    minutos_salida tinyint not null,
	constraint fk_itinerario_linea FOREIGN KEY (id_linea) REFERENCES lineas(id),
    constraint fk_itinerario_parada FOREIGN KEY (id_parada) REFERENCES paradas(id)
);
create table conductores_asignados (
	id_conductor int not null,
    id_bus int not null,
    id_linea int not null,
    constraint fk_asignados_conductor FOREIGN KEY (id_conductor) REFERENCES conductores(id),
	constraint fk_asignados_bus FOREIGN KEY (id_bus) REFERENCES buses(id),
	constraint fk_asignados_linea FOREIGN KEY (id_linea) REFERENCES lineas(id),
    PRIMARY KEY (id_conductor, id_bus, id_linea)
);
--
-- insertar datos
--
insert into modelos_buses(marca, modelo) values ('mercedes', 'modelo1');
insert into modelos_buses(marca, modelo) values ('mercedes', 'modelo2');
insert into modelos_buses(marca, modelo) values ('bwm', 'modelo3');
insert into buses values (null, '1111AAA', 1980, 1);
insert into buses values (null, '1111AAB', 1980, 1);
insert into buses values (null, '1111AAC', 1980, 1);
insert into buses values (null, '2222AAA', 1982, 2);
insert into buses values (null, '2222BBB', 1983, 2);
insert into buses values (null, '3333AAA', 1995, 3);
insert into conductores values (null, 'arsenio', 'iglesias', '12345678A', '666555777');
insert into conductores values (null, 'fernando', 'vazquez', '12345678B', '666555888');
insert into conductores values (null, 'mauro', 'silva', '12345678C', '666555999');
insert into paradas values (null, 'garcia byon 1', 'garcia bayon', 1);
insert into paradas values (null, 'garcia byon 2', 'garcia bayon', 45);
insert into paradas values (null, 'avda de la coruña 1', 'avda de la coruña', 12);
insert into paradas values (null, 'avda de la coruña 2', 'avda de la coruña', 77);
insert into paradas values (null, 'avda de la coruña 3', 'avda de la coruña', 115);
insert into paradas values (null, 'rua galicia 1', 'rua galicia', 3);
insert into paradas values (null, 'rua galicia 2', 'rua galicia', 19);
insert into lineas values (14, '10:00');
insert into lineas values (50, '10:15');
insert into lineas values (8, '10:30');
insert into itinerario values (null, 14, 1, 1, 0);
insert into itinerario values (null, 14, 2, 2, 10);
insert into itinerario values (null, 14, 6, 3, 15);
insert into itinerario values (null, 50, 1, 1, 0);
insert into itinerario values (null, 50, 3, 2, 10);
insert into itinerario values (null, 50, 4, 3, 15);
insert into itinerario values (null, 50, 5, 4, 18);
insert into itinerario values (null, 8, 1, 1, 0);
insert into itinerario values (null, 8, 2, 2, 10);
insert into itinerario values (null, 8, 4, 3, 15);
insert into itinerario values (null, 8, 6, 4, 22);
insert into itinerario values (null, 8, 5, 5, 28);
insert into conductores_asignados values (1, 1, 50);
insert into conductores_asignados values (2, 4, 50);
insert into conductores_asignados values (3, 6, 8);


--
-- Consultas
--

-- 1. buses de la linea 50
select * from buses b inner join conductores_asignados c
on b.id =c.id_bus and c.id_linea = 50;


-- 2. conductores de la linea 50
select * from conductores c inner join conductores_asignados a
on c.id =a.id_conductor and a.id_linea = 50;


-- 3. conductores de la linea 50 y sus buses
select c.*, b.* from conductores c, conductores_asignados a,buses b
where c.id = a.id_conductor  and b.id = a.id_bus and a.id_linea = 50;


-- 3b. conductores de la linea 50 y sus buses con marca y modelo
select c.*, b.*, m.*from conductores c, conductores_asignados a,buses b,modelos_buses m
where c.id = a.id_conductor  and b.id = a.id_bus and m.id=b.modelos_buses_id and a.id_linea = 50;


-- 4. itinerario por orden de parada de la linea 14, con los detalles de cada parada
select * from paradas p,itinerario i
where p.id =i.id_parada and i.id_linea = 14 order by i.orden;


-- 5. lineas que pasan por la parada "avda de la coruña 2"
select i.id_linea from paradas p ,itinerario i
where p.id = i.id_parada and p.nombre = "avda de la coruña 2";


-- 6. lineas que empiecen a circular como muy tarde a las 10:00
select * from lineas
where hora_inicio <= time("10:00:00");



-- 6b. BONUS: la anterior consulta de 2 formas diferentes 
select * from lineas
where TIMEDIFF(hora_inicio,"10:00:00") <= 0;


-- 7. lineas que pasan por la parada "rua galicia 1" y empiecen a circular como muy tarde a las 10:00
select * from lineas l ,itinerario i,paradas p
where l.id = i.id_linea and p.id = i.id_parada and p.nombre= "rua galicia 1" and l.hora_inicio <= time("10:00:00");


-- 8. lista de paradas que recorre el señor arsenio iglesias
select distinct p.nombre from conductores c,paradas p,itinerario i
where p.id = i.id_parada and c.nombre = "arsenio" and c.apellidos ="iglesias" ;


-- 9. buses que pasan por "avda de la coruña 1"
select b.* from buses b,paradas p
where  p.nombre ="avda de la coruña 1";


-- 10. información de la líneas y el número de paradas de cada una
select count(id_parada) as num_paradas, l.* from itinerario i, lineas l
where i.id_linea = l.id
group by id_linea;



-- 11. información solo de la línea con más paradas
	select count(id_parada) as num_paradas, l.* from itinerario i, lineas l
	where i.id_linea = l.id 
	group by id_linea
    order by num_paradas desc
    limit 1;


-- 11b. la anterior pero de otra forma 


-- 12. información conductor con el itinerario más largo
	
   
