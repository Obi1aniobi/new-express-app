create database schoolDB;

USE schoolDB;

create table public.skool(
    id serial primary key,
    name varchar(50),
    abbreviation varchar(10);
)