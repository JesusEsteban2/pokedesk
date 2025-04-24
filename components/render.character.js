import { loadData } from './load.data.js';

export function renderCharacter() {
  const insertPoint = 'beforeend';
  const data = loadData;
  data.forEach((element) => {
    const template = `
    <div class="poke-card">
          <img src="${element.image}" alt="${element.image}" type="image/x-png" width="200"/>
          <h2>${element.name}</h2>
          <p>Tipo: ${element.type}</p>
     </div>
   `;
    const html = render(insertPoint, template);
  });
}

export function render(insertPoint, template) {
  const point = document.querySelector('.poke-list');
  point.insertAdjacentHTML(insertPoint, template);
}
