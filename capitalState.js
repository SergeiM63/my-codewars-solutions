// Завершите метод, который берет последовательность объектов с двумя ключами каждый:
// страна или государство и капитал. Ключи могут быть символами или строками.
// Метод должен возвращать массив предложений, объявляющих штат или страну и ее столицу.
function capital(capitals){
    const result = capitals.map(capital => {
      if(capital.hasOwnProperty("country")) return str = `The capital of ${capital.country} is ${capital.capital}`;
      if(capital.hasOwnProperty("state")) return str =`The capital of ${capital.state} is ${capital.capital}`;
    });
    return result;
}

state_capitals = [{state: 'Maine', capital: 'Augusta'}]
console.log(capital(state_capitals)[0]); // "The capital of Maine is Augusta";

country_capitals = [{'country' : 'Spain', 'capital' : 'Madrid'}]
console.log(capital(country_capitals)[0]); //"The capital of Spain is Madrid"

mixed_capitals = [{"state" : 'Maine', capital: 'Augusta'}, {country: 'Spain', "capital" : "Madrid"}]
console.log(capital(mixed_capitals)[1]); // "The capital of Spain is Madrid"