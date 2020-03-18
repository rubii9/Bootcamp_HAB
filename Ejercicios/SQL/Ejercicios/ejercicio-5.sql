use ejercicio1;

create table medico (
id int primary key auto_increment,
nombre varchar(10) not null,
apellidos varchar(20) not null,
telefono int not null,
especialidad varchar(20)
);
create table paciente (
id int primary key auto_increment,
codigo_postal int not null,
telefono int,
fecha_nacimiento datetime not null,
nombre varchar(10) not null,
apellidos varchar(20) not null,
direccion varchar(255) not null,
poblacion varchar(20) not null,
provincia varchar (20) not null
);


create table ingreso (
id int primary key auto_increment,
num_habitacion int not null,
cama int not null,
fecha datetime not null,
id_paciente int not null,
id_medico int not null,
foreign key (id_paciente) references paciente(id),
foreign key (id_medico) references medico(id)
);


