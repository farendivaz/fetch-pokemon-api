const obj = {
  url: "https://pokeapi.co/api/v2/",
  type: "pokemon",
  id: "89",
};

const { url, type, id } = obj;
const API = `${url}${type}/${id}`;

fetch(API)
  .then((response) => response.json())
  .then((data) => generateHtml(data));

const generateHtml = (data) => {
  const html = `
            <div class="name">${data.name}</div>
            <img src=${data.sprites.front_default}>
            <div class="details">
                  <span>Height: ${data.height} </span>
                  <span>Weight: ${data.weight} </span>
            </div>
            
      `;
  const pokemon = document.querySelector(".pokemon");
  pokemon.innerHTML = html;
};
// function generateHtml(data) {
//   return `
//      <div class="name">${data.name}
//         <img src=${data.sprites.front_default}>
//         <div class="details>
//             <span>Height: ${data.height} </span>
//             <span>Weight: ${data.weight} </span>
//         </div>
//     </div>
//     `;

// }
