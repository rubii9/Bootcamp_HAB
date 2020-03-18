create database videoclub;

use videoclub;

create table pelicula (
	id int primary key auto_increment,
	nombre varchar(20) not null,
    descripcion varchar(255) not null,
    PEGI int not null,
    caratula varchar(255) not null,
    directores varchar(20) not null,
    actores varchar(20) not null
    );
    
create table socio (
    id int primary key auto_increment,
    nombre varchar(20)not null,
    DNI int not null,
    telefono int not null,
    fecha_nacimiento date not null,
    email varchar(30) not null
    );
    
create table proveedor (
	id int primary key auto_increment,
    nombre varchar(20) not null,
    telefono int not null,
    email varchar(30) not null,
    DNI int not null
    );

create table copia (
	id int primary key auto_increment,
    tipo enum('VHS', 'DVD'),
    tarifa enum('estreno', 'estandar', 'antiguas'),
    id_pelicula int,
    id_proveedor int,
    constraint fk_proveedor foreign key(id_proveedor) references proveedor(id),
    constraint fk_pelicula foreign key (id_pelicula) references pelicula(id)
    );
    


create table alquiler (
	fecha_dev date not null,
    rating int,
    comentario varchar(255) not null,
	id_socio int,
    id_copia int,
    constraint fk_socio_alquiler foreign key (id_socio) references socio(id),
    constraint fk_copia_alquiler foreign key (id_copia) references copia(id)
);











