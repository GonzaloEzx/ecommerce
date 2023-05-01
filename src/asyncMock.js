import { clear } from "@testing-library/user-event/dist/clear";

const products = [
  {
    id: "1",
    name: "iphone 12",
    price: 1000,
    category: "celulares",
    img: "https://dummyimage.com/260x420/bf31bf/fff.png",
    stock: 25,
    description: "Telefono muy caro iphone 12",
  },
  {
    id: "2",
    name: "Nokia 1.3",
    price: 800,
    category: "celulares",
    img: "https://dummyimage.com/260x420/bf31bf/fff.png",
    stock: 25,
    description: "Nokia 1.3 16gb 1gb Ram",
  },
  {
    id: "3",
    name: "LG B220",
    price: 200,
    category: "celulares",
    img: "https://dummyimage.com/260x420/bf31bf/fff.png",
    stock: 25,
    description: "LG B220 Dual SIM 32MB 32MB RAM – TIPO NOKIA 1100",
  },
];

// // Retorna una promesa y emula un retraso
export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 500);
  });
};

export const getProductById = (productId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find((prod) => prod.id === productId));
    }, 500);
  });
};

//mio
export const getProductsByCategory = (productId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find((prod) => prod.id === productId));
    }, 500);
  });
};
