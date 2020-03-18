create database liga;

use liga;

create table equipo(
ID int primary key auto_increment,
nombre varchar(255) not null,
estadio varchar(255) not null,
año_fund int not null,
aforo int not null,
ciudad varchar(255) not null
);

create table presidente(
DNI varchar(9) not null,
nombre varchar(255) not null,
apellidos varchar(255) not null,
fecha_de_nac date not null,
año_inicio int not null,
id_equipo int,
foreign key (id_equipo) references equipo(ID)
);
create table jugador(
ID int primary key auto_increment,
nombre varchar(255) not null,
fecha_de_nac date not null,
posicion varchar(255) not null,
id_equipo int,
foreign key (id_equipo) references equipo(ID)
);

create table partido(
ID int primary key auto_increment,
goles_local int not null,
goles_visit int not null,
goles_total int not null,
fecha date not null,
id_equipo int,
foreign key (id_equipo) references equipo(ID)
);

create table gol(
minuto int not null,
descripcion varchar(255) not null,
id_jugador int,
id_partido int,
foreign key (id_jugador) references jugador(ID),
foreign key (id_partido) references partido(ID)
);

