// --- DATOS DE PRODUCTOS ---
const products = [
  {id:1, name:"Aretes Cereza", desc:"cereja rojo, plata y elegante.", price:"bs.30", image:"https://i.pinimg.com/736x/f0/6c/99/f06c994a13b947e663f7f83effe392e6.jpg", details:"Accesorio artesanal, liviano y sencillo con un moño de elegancia."},
  {id:2, name:"Gargantilla Blanco perleado", desc:"Gargantilla blanco perleado, con un corazon de plata y porta foto pequeño.", price:"bs.45", image:"https://i.pinimg.com/736x/66/0c/20/660c201ac73c6c6d859f01ab08e0f0ac.jpg", details:"consta con una cinta, ademas de una cadena sencilla y el corazon."},
  {id:3, name:"Collar Mariposa", desc:"color rosa perla, brillo y de joya mariposa.", price:"bs.40", image:"https://i.pinimg.com/736x/4f/72/f7/4f72f7afc817d72a4e2e224f97da0895.jpg", details:"El color es duradero y brilla ya sea dia o noche."},
  {id:4, name:"SET de Mariposas", desc:"Mariposa en anillo, collar y arete.", price:"bs.65", image:"https://i.pinimg.com/736x/69/1c/ff/691cfff1f87d260930acb02c605456d0.jpg", details:"Cadena de color dorado y las mariposas de color morado suave, brillo."},
  {id:5, name:"Gafas Mariposa", desc:"Gafas morado suave con diseño de Mariposa", price:"bs.70", image:"https://i.pinimg.com/736x/ce/ae/30/ceae300326c9ff7bf12fc9fde11746d7.jpg", details:"protege del sol ademas de la elegancia que muestra."},
  {id:6, name:"Collar sol y luna", desc:"Collar para compartir y sencilles en el estilo.", price:"bs.60", image:"https://i.pinimg.com/736x/ac/1d/08/ac1d082d59621b61d846164241991e3a.jpg", details:"No pierde el color y ademas combinable con tu estilo que elegis."},
  {id:7, name:"Collar Cereza", desc:"Elegantes y de un bonito color rojo.", price:"bs.40", image:"https://i.pinimg.com/736x/bc/96/ad/bc96ad8756c5f20ab70702ff79fc2517.jpg", details:"collar para un estilo delicado y suave"},
  {id:8, name:"Pearl", desc:"con perlas blancas y con una mariposa de detalle", price:"$70", image:"https://i.pinimg.com/736x/3e/ce/90/3ece90634a250af53c2b76475e4b36c7.jpg", details:"Collar par un vestido elegante elegante."},
  {id:9, name:"Llavero cute", desc:"Con 3 detalles, audifono, microfono y una guitarra", price:"bs.25", image:"https://i.pinimg.com/1200x/d7/be/5c/d7be5cadc02b70d073f0f54624854eee.jpg", details:"un estilo star y facil de llevar donde quieras"},
  {id:10, name:"Anillo Star", desc:"Minimalista y delicado.", price:"bs.75", image:"https://i.pinimg.com/1200x/58/f1/8d/58f18da7fa8e1b7ca9febbeb6e644c1e.jpg", details:"Anillo ajustable de acero inoxidable con detalles dorados."},
  {id:11, name:"Trabas star", desc:"Dos pares de sujetador.", price:"bs.15", image:"https://i.pinimg.com/1200x/43/e7/e4/43e7e4b4e3801a6bb6782aa6c0c5fc28.jpg", details:"lindo para un sencillo peinado"},
  {id:12, name:"Blue anillo", desc:"Color azul y brillante", price:"bs.85", image:"https://i.pinimg.com/736x/49/35/29/493529e0c0a9287aa9f1f20c80b0496c.jpg", details:"num 6.7 para un dedo pequeño,"}
];

const catalog = document.getElementById('catalog');
const modal = document.getElementById('modal');
const modalBody = document.getElementById('modalBody');
const closeModal = document.getElementById('closeModal');

// Crear las tarjetas
products.forEach(p => {
  const div = document.createElement('div');
  div.className = 'item';
  div.innerHTML = `
    <img src="${p.image}" alt="${p.name}">
    <div class="info">
      <h2>${p.name}</h2>
      <p>${p.desc}</p>
      <p class="price">${p.price}</p>
      <button class="btn">Ver más</button>
    </div>
  `;
  div.addEventListener('click', () => showModal(p));
  catalog.appendChild(div);
});

// Mostrar modal
function showModal(p) {
  modalBody.innerHTML = `
    <h2 style="color:#ff6b9c;">${p.name}</h2>
    <img src="${p.image}" alt="${p.name}">
    <p>${p.details}</p>
    <p><strong>Precio:</strong> ${p.price}</p>
  `;
  modal.style.display = 'flex';
}

// Cerrar modal
closeModal.addEventListener('click', () => modal.style.display = 'none');
modal.addEventListener('click', e => { if (e.target === modal) modal.style.display = 'none'; });
