import { loadData, dataElement } from './load.data.js';

export async function renderCharacter() {
  const insertPoint = 'beforeend';
  for (var i = 1; i <= 9; i++) {
    const data = [dataElement(i)];

    for await (const element of data) {
      const template = `
    <div class="poke-card">
          <img src="${element.sprites.front_default}" alt="${element.name}" type="image/x-png" width="200"/>
          <h2>${element.name}</h2>
          <p>Tipo: ${element.types[0].type.name}</p>
     </div>
   `;
      render(insertPoint, template);
    }
  }
}
export function render(insertPoint, template) {
  const point = document.querySelector('.poke-list');
  point.insertAdjacentHTML(insertPoint, template);
}
