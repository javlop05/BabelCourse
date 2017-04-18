function Coche() {
    this.ruedas = 4;
    this.cuantasRuedas = function() {
        console.log('tiene', this.ruedas);
    }
}

const coche = new Coche();
//coche.cuantasRuedas(); //tiene 4

/*
const numRuedas = coche.cuantasRuedas;
numRuedas(); //undefined

const numRuedas = coche.cuantasRuedas.bind(coche);
numRuedas(); //tiene 4

*/

//setTimeout(coche.cuantasRuedas, 2000); //undefined

//setTimeout(function() { coche.cuantasRuedas(); }, 2000); //tiene 4

const camion = {
    ruedas: 8,
    cuantasRuedas: coche.cuantasRuedas
}

//camion.cuantasRuedas(); //tiene 8

/*
const camion = {
    ruedas: 8,
    cuantasRuedas: coche.cuantasRuedas.bind(coche)
}

camion.cuantasRuedas(); //tiene 4
*/

camion.cuantasRuedas.call(coche);
