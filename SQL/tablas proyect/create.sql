drop database if exists coworking;
create database coworking;
use coworking;

DROP TABLE IF EXISTS usuarios;
DROP TABLE IF EXISTS espacios;
DROP TABLE IF EXISTS reservas;
DROP TABLE IF EXISTS ratings;
DROP TABLE IF EXISTS equipamiento;
DROP TABLE IF EXISTS incidencias;


create table usuarios (
id int unsigned primary key auto_increment,
nombre varchar(30)not null,
apellidos varchar(60) not null,
nickname varchar(30)not null unique,
email varchar(60) not null unique,
password varchar(255) not null,
ciudad varchar(50) not null,
comunidad varchar(50) not null,
foto varchar(255) default null,
telefono varchar(15) not null,
es_propietario bool default false,
create_user timestamp default current_timestamp,
update_user timestamp default current_timestamp on update current_timestamp);


create table espacios (
id int unsigned primary key auto_increment,
nombre varchar(30)not null,
ciudad varchar(60) not null,
comunidad varchar(60) not null,
direccion varchar(255) not null,
foto1 varchar(255) default null,
foto2 varchar(255) default null,
foto3 varchar(255) default null,
tipo varchar(40) not null,
precio decimal not null,
descripcion text not null,
propietario_id int unsigned not null,
create_space timestamp default current_timestamp,
update_space timestamp default current_timestamp on update current_timestamp,
constraint fk_espacio_usuario_id foreign key (propietario_id) references usuarios(id)on delete cascade) ;


create table equipamiento (
id int unsigned primary key auto_increment,
espacio_id int unsigned not null,
nombre varchar(30) not null,
cantidad int unsigned not null,
constraint fk_equipamiento_espacio_id foreign key (espacio_id) references espacios(id)on delete cascade);

create table reservas (
id int unsigned primary key auto_increment,
fechas_pago date default null,
fecha_inicio date not null,
fecha_fin date not null,
pagorealizado bool default false,
limpieza bool default true,
usuario_id int unsigned not null,
espacio_id int unsigned not null ,
constraint fk_reservas_usuarios_id foreign key (usuario_id) references usuarios(id) on delete cascade,
constraint fk_reservas_espacios_id foreign key (espacio_id) references espacios(id) on delete cascade);


create table incidencias (
id int unsigned primary key auto_increment,
comentario text default null,
estado enum ("abierta","cerrada") default "abierta",
reserva_id int unsigned not null,
create_incidencia timestamp default current_timestamp,
update_incidencia timestamp default current_timestamp on update current_timestamp,
constraint fk_incidencias_reservas foreign key (reserva_id) references reservas(id)on delete cascade);

create table ratings (
id int unsigned primary key auto_increment,
puntuacion int(5) not null,
comentario text default null,
usuario_id int unsigned not null ,
espacio_id int unsigned not null,
create_rating timestamp default current_timestamp,
update_rating timestamp default current_timestamp on update current_timestamp,
constraint fk_ratings_usuarios_id foreign key (usuario_id) references usuarios(id) on delete cascade,
constraint fk_ratings_espacios_id foreign key (espacio_id) references espacios(id)on delete cascade) ;









