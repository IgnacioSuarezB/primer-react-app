//Simulación de la API (traigo todos items)
export const getItems = () => {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve(itemsAPI);
    }, 1000);
  });
};

//Simulación de la API (traigo solo 1 item)
export const getItemById = (id) => {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve(itemsAPI[id]);
    }, 1500);
  });
};

const itemsAPI = [
  {
    id: 0,
    title: "Pelota",
    category: "deporte",
    price: "500",
    stock: 3,
    description: "Lorem Ipmsum de Pelota, description",
    detail: `- COSTURA: COSIDA A MANO
      - CIRCUNFERENCIA: 68-70 cm.
      - FUTSAL
      - PESO: 420 a 450 Gr.
      - PRESIÓN DE AIRE: 0.9 - 1.1 BAR.
      - CÁMARA: butilo.
      - MATERIAL: CUERO PU.
      - PANELES: 32
      - VÁLVULA: butilo.
      - USO: semi match.
      - CAMPO: para uso interno.
      - ORIGEN: Pakistan.`,
    url: "https://upload.wikimedia.org/wikipedia/commons/4/48/Basketball.jpeg",
  },
  {
    id: 1,
    title: "Gorra",
    category: "ropa",
    price: "150",
    stock: 10,
    description: "Lorem Ipmsum de Gorra, description",
    detail: "Gorra de entrenamiento para adultos Adidas Beisbol.",
    url: "https://www.remerasya.com/pub/media/catalog/product/cache/e4d64343b1bc593f1c5348fe05efa4a6/m/a/marino_1.jpg",
  },
  {
    id: 2,
    title: "Botines",
    category: "deporte",
    price: "300",
    stock: 5,
    description: "Lorem Ipmsum de Botines, description",
    detail:
      "Los Botines para adultos Puma Future Z 1.2 FG/AG, están diseñados para partidos en superficies naturales.",
    url: "https://solodeportes-9bvc3m9qgmf6g9x.stackpathdns.com/media/catalog/product/cache/baa193a472891718a9656a0f6c3cd266/b/o/botines-de-futbol-adidas-predator-20-3-fg-negro-20111357-100010ef1645001-1.jpg",
  },
  {
    id: 3,
    title: "Camiseta Boca Juniors",
    category: "deporte",
    price: "900",
    stock: 1,
    description: "Lorem Ipmsum de Camiseta Boca Juniors, description",
    detail:
      "Art: GU1883 - Origen: NACIONAL - Tipo de camiseta: Titular - Temporada: 2021 - Género: Hombre",
    url: "https://www.digitalsport.com.ar/files/products/6116c31ecadf2-540333-500x500.jpg",
  },
  {
    id: 4,
    title: "PALETA ML 10 SHOTGUN NOX",
    category: "deporte",
    price: "1500",
    stock: 2,
    description: "Lorem Ipmsum de PALETA, description",
    detail:
      "Forma Gota - Peso 360-375 gramos - Núcleo HR3 Core - Marco 100% carbono - Cara Carbono 12K",
    url: "https://www.digitalsport.com.ar/files/products/6179306890361-561835-500x500.jpg",
  },
  {
    id: 5,
    title: "CANGURO SPORT CLASH NIKE",
    category: "ropa",
    price: "300",
    stock: 15,
    description: "Lorem Ipmsum de Buzo, description",
    detail:
      "La sudadera con capucha Nike Dri-FIT combina un suave tejido con la tecnología de capilarización del sudor para ofrecer calidez y comodidad antes, durante y después del entrenamiento. ",
    url: "https://www.digitalsport.com.ar/files/products/60ff1985b90c2-523767-500x500.jpg",
  },
];
