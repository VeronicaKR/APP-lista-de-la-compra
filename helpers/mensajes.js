require('colors');

const mostrarMenu = () => {
    return new Promise (resolve => {
        console.clear();
    console.log('==================='.yellow);
    console.log('LISTA DE LA COMPRA'.blue);
    console.log('===================\n'.yellow);
    console.log(`${'1.'.yellow} Ver lista de la compra`);
    console.log(`${'2.'.yellow} Insertar productos`);
    console.log(`${'3.'.yellow} Marcar como comprado`);
    console.log(`${'4.'.yellow} Borrar producto`);
    console.log(`${'0.'.yellow} Salir`);
    
    const readline = require('readline').createInterface({
        input:process.stdin,
        output:process.stdout
    });
    readline.question('Seleccione una opción: ', (opt) => {
        readline.close();
        resolve(opt);
    });
        
        
    });
    
    }
    
    const pausa = () => {
        return new Promise (resolve => {
            const readline = require('readline').createInterface({
                input:process.stdin,
                output:process.stdout
            });
            readline.question('Presione ENTER para continuar ', (opt) => {
                readline.close();  
                resolve(); 
        });


        })
       
    
    }

module.exports = {
    mostrarMenu, pausa
}