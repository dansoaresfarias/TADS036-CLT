import { Genero } from "./models/Genero";
import { AppDataSource } from "./db/data-source";

const generoTeste = new Genero("Terror");
const genero2 = new Genero("Comedia");

// console.log("Olá Mundo, sou a LocaDora!");
//console.table(generoTeste);
//console.table(genero2);

AppDataSource.initialize()
    .then(() => {
        // here you can start to work with your database
        console.log(`Database is running.`);
    })
    .catch((error) => console.log(error))   

