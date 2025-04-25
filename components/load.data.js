//'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/35.png';
//https://pokeapi.co/api/v2/pokemon/ditto

export const loadData = [
  {
    name: 'Pikachu',
    image: 'assets/pikachu.png',
    type: 'Electro',
  },
  {
    name: 'Bulbasaur',
    image: 'assets/bulbasaur.png',
    type: 'Planta/Veneno',
  },
];

export async function dataElement(number) {
  const url = 'https://pokeapi.co/api/v2/pokemon/';
  const params = String(number);

  try {
    const response = await fetch(url + params);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    let result = await response.json();
    console.dir(result);
    return result;
  } catch (error) {
    console.log(error, error.message);
  }
}
