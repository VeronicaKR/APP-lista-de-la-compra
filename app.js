
const { inquirerMenu } = require('./helpers/inquirer');
const { pausa } = require('./helpers/mensajes');

require('colors');

console.clear();

const main = async () => {
    let opt = '';
    do {
      const {opt} = await inquirerMenu();
      console.log(opt);
      await pausa();
      
    }while (opt !== '0')
    
}

main();
