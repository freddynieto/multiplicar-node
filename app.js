const { argv } = require('./config/yargs');
const colors = require('colors');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
        .catch(err => console.log(err));
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
        .then(archivo => console.log(`Archivo creado: ${archivo}`))
        .catch(err => console.log(err));
        break;
    default:
        console.log('Comando no reconocido');
        break;
}

// let base = 'a';
// let argv2 = process.argv;

// console.log(argv.base);
// console.log('Limite: ', argv.limite);

// console.log(argv2);

// let parametro = argv[2];
// let base = parametro.split('=')[1];

// npm console.log(base);