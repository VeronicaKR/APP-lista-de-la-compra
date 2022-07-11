const inquirer = require('inquirer');
require('colors');

const preguntas = [
    {
        type:'list',
        name: 'opt',
        message: 'Que quieres hacer?',
        choices: [
            {
                value:'1',
                name:'1.Ver lista de la compra'
            },
            {
                value:'2',
                name:'2.Insertar productos'
            },
            {
                value:'3',
                name:'3.Marcar como comprado'
            },
            {
                value:'4',
                name:'4.Borrar producto'
            },
            {
                value:'0.',
                name:'0.Salir'
            },
    ]
    }
]

const inquirerMenu = async() => {
    console.clear();
    console.log('==================='.yellow);
    console.log('LISTA DE LA COMPRA'.blue);
    console.log('===================\n'.yellow);

    const opt = await inquirer.prompt(preguntas)
    return opt;

}
module.exports = {
    inquirerMenu
}