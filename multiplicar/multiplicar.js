//requires
const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite) => {
    console.log("===================".red);
    console.log(`tabla de ${base}`.red);
    console.log("===================".red);

    for (let i = 0; i < limite; i++) {
        console.log(`${base} * ${i + 1} = ${(i + 1) * base}`);
    }
};

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${ base } no es un numero`);
            return;
        }

        let data = ""

        for (let i = 0; i < limite; i++) {
            data += `${base} * ${i + 1} = ${(i + 1) * base}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-${base}.txt`)
        })
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}