// Requires
const fs = require('fs');
const colors = require('colors/safe');

let listarTabla = (base, limite = 10) => {

    console.log('/*********************/'.green);
    console.log(`/* Tabla del ${base} */`.green);
    console.log('/*********************/'.green);

    return new Promise((resolve, reject) => {

        if(!Number(base)) {
            reject(`La base ${base} no es un número`);
            return;
        }

        if(!Number(limite)) {
            reject(`El límite ${base} no es un número`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }

        console.log(data);

    }); 
}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if(!Number(base)) {
            reject(`La base ${base} no es un número`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }

        fs.writeFile(`./archivos/tabla-${base}.txt`, data, (err) => {
            if (err) reject(err);
            else resolve(colors.green(`El archivo tabla-${base}.txt ha sido creado`));
        })
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}