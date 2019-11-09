const argv = require('./config/yargs').argv;
const Color = require('colors');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let command = argv._[0];


//El switch es como un if que nos permite definir una acción
switch (command) {

    case 'listar':

        listarTabla(argv.base, argv.limite)
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${ archivo.blue }`))
            .catch(e => console.log(e));
        break;

    default:
        console.log('Comando no Reconocido');

}







//let base = '5';

//console.log(process.argv);
//let argv2 = process.argv;

//console.log('limite', argv.limite);




//let parametro = argv[2];
//let base = parametro.split('=')[1]