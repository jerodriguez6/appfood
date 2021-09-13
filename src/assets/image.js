import addFood from './img/addFood.png'
// import bgBig from './img/bgBig.jpg'
// import bgFooter from './img/bgFooter.jpg'
// import bgStart from './img/bgStart.jpg'
// import logo from './img/logo.png'
import burgerIcon from './img/burgerIcon.png'
import bugerSpecial from './img/burgerSpecial.png'
import burgerTrad from './img/burgerTrad.png'
import chikenIcon from './img/chickenIcon.png'
import choriperro from './img/choriperro.png'
import drinksIcon from './img/drinksIcon.png'
import otherPlates from './img/otherplates.png'
import codorniz from './img/codorniz.jpg'
import fries from './img/fries.jpg'
import hotDog from './img/hotdog.jpeg'
import hotDogIcon from './img/hotdogIcon.png'
import waterDrink from './img/jugoAgua.jpg'
import milkDrink from './img/jugoLeche.jpg'
import lemonade from './img/limonada.jpg'
import avena from './img/avena.jpg'
import rice from './img/arrozChino.png'
import mazorcada from './img/mazorcada.png'
import patacona from './img/patacona.png'
import halfChicken from './img/1-2Chicken.png'
import quarterChicken from './img/1-4Chicken.jpg'
import unChicken from './img/unChicken.jpg'
import legChicken from './img/colombina.jpeg'
import wing from './img/ala.jpg'
import breast from './img/pechuga.jpg'

const allProducts = [
  {
    "title": "Huevos de codorniz x 5",
    "description": "",
    "img": codorniz,
    "unPrice": 2000,
    "category": 'added',
    "id": 1
  },
  {
    "title": "Papas a la francesa",
    "description": "",
    "img": fries,
    "unPrice": 3000,
    "category": 'added',
    "id": 2
  },
  {
    "title": "Hamburguesa Tradicional",
    "description": "(Carne artesanal, tomate, lechuga, cebolla caramelizada, queso, papas a la francesa)",
    "img": burgerTrad,
    "unPrice": 9000,
    "category": 'burger',
    "id": 3
  },
  {
    "title": "Hamburguesa Especial",
    "description": "(Carne artesanal, tomate, lechuga, cebolla caramelizada, huevos de codorniz, tocineta, chorizo, queso, papas a la francesa)",
    "img": bugerSpecial,
    "unPrice": 13000,
    "category": 'burger',
    "id": 4
  },
  {
    "title": "Hot Dog Tradicional",
    "description": "(Salchicha americana, rapipapa, queso, huevo de codorniz y jamón)",
    "img": hotDog,
    "unPrice": 6000,
    "category": 'hotDog',
    "id": 5
  },
  {
    "title": "Choriperro Especial",
    "description": "(Salchicha americana, rapipapa, queso, huevo de codorniz, tocineta, salsa de piña y jamón)",
    "img": choriperro,
    "unPrice": 8000,
    "category": 'hotDog',
    "id": 6
  },
  {
    "title": "Cuarto de pollo",
    "description": "(Patacón, arepa y papa a la francesa)",
    "img": quarterChicken,
    "unPrice": 7000,
    "category": 'chicken',
    "id": 7
  },
  {
    "title": "Medio pollo",
    "description": "(Patacón, arepa y papa a la francesa)",
    "img": halfChicken,
    "unPrice": 13000,
    "category": 'chicken',
    "id": 8
  },
  {
    "title": "Unidad",
    "description": "(Patacón, arepa y papa a la francesa)",
    "img": unChicken,
    "unPrice": 26000,
    "category": 'chicken',
    "id": 9
  },
  {
    "title": "Ala",
    "description": "(Patacón y arepa)",
    "img": wing,
    "unPrice": 3000,
    "category": 'chicken',
    "id": 10
  },
  {
    "title": "Pierna o Pernil",
    "description": "(Patacón y arepa)",
    "img": legChicken,
    "unPrice": 3500,
    "category": 'chicken',
    "id": 11
  },
  {
    "title": "Pechuga",
    "description": "(Patacón y arepa)",
    "img": breast,
    "unPrice": 4000,
    "category": 'chicken',
    "id": 12
  },
  {
    "title": "Mazorcada de la casa",
    "description": "(Maíz tierno, carne desmechada, pollo desmechado, rapipapa, queso y huevos de codorniz)",
    "img": mazorcada,
    "unPrice": 12000,
    "category": 'otherPlates',
    "id": 13
  },
  {
    "title": "Patacona",
    "description": "(Patacón, carne desmechada, pollo desmechado, tocineta, rapipapa, queso y huevo de codorniz)",
    "img": patacona,
    "unPrice": 13000,
    "category": 'otherPlates',
    "id": 14
  },
  {
    "title": "Arroz Chino - Personal",
    "description": "(Acompañado de pollo broaster o costillas)",
    "img": rice,
    "unPrice": 10000,
    "category": 'otherPlates',
    "id": 15
  },
  {
    "title": "Arroz Chino - Para 2 o 3 personas",
    "description": "Acompañado de pollo a la broaster)",
    "img": rice,
    "unPrice": 16000,
    "category": 'otherPlates',
    "id": 16
  },
  {
    "title": "Arroz Chino - Para 2 o 3 personas",
    "description": "Acompañado de costillas)",
    "img": rice,
    "unPrice": 17000,
    "category": 'otherPlates',
    "id": 17
  },
  {
    "title": "Arroz Chino - Familiar",
    "description": "(Acompañado de pollo a la broaster)",
    "img": rice,
    "unPrice": 26000,
    "category": 'otherPlates',
    "id": 18
  },
  {
    "title": "Arroz Chino - Familiar",
    "description": "(Acompañado de costillas)",
    "img": rice,
    "unPrice": 28000,
    "category": 'otherPlates',
    "id": 19
  },
  {
    "title": "Jugos en agua",
    "img": waterDrink,
    "description": "(Maracuya,Mora,Lulo,Fresa)",
    "unPrice": 3000,
    "category": 'drinks',
    "id": 20
  },
  {
    "title": "Jugos en leche",
    "img": milkDrink,
    "description": "(Maracuya,Mora,Lulo,Fresa)",
    "unPrice": 3500,
    "category": 'drinks',
    "id": 21
  },
  {
    "title": "Limonada Natural",
    "img": lemonade,
    "unPrice": 3000,
    "category": 'drinks',
    "id": 22
  },
  {
    "title": "Avena Cubana (pequeña)",
    "img": avena,
    "unPrice": 2000,
    "category": 'drinks',
    "id": 23
  },
  {
    "title": "Avena Cubana (grande)",
    "img": avena,
    "unPrice": 2000,
    "category": 'drinks',
    "id": 24
  },
  {
    "img": burgerIcon,
    "name": "Hamburguesas",
    "category": 'icons',
    "id": 'burger'
  },
  {
    "img": hotDogIcon,
    "name": "Hot dogs",
    "category": 'icons',
    "id": 'hotDog'
  },
  {
    "img": chikenIcon,
    "name": "Pollo Broaster",
    "category": 'icons',
    "id": 'chicken'
  },
  {
    "img": drinksIcon,
    "name": "Bebidas",
    "category": 'icons',
    "id": 'drinks'
  },
  {
    "img": otherPlates,
    "name": "Otros platos",
    "category": 'icons',
    "id": 'otherPlates'
  },
  {
    "img": addFood,
    "name": "Adicionales",
    "category": 'icons',
    "id": 'added'
  }
]

export default allProducts
// export {add, burgers, hotDogs, chicken, otherPlates, drinks, icons};

/* const add = [
  {
    "title": "Huevos de codorniz x 5",
    "img": codorniz,
    "unPrice": 2000,
    "id": 1
  },
  {
    "title": "Papa a la francesa",
    "img": fries,
    "unPrice": 3000,
    "id": 2
  }
]
const burgers = [
  {
    "title": "Hamburguesa Tradicional",
    "description": "(Carne artesanal, tomate, lechuga, cebolla caramelizada, queso, papas a la francesa)",
    "img": burgerTrad,
    "unPrice": 9000,
    "id": 3
  },
  {
    "title": "Hamburguesa Especial",
    "description": "(Carne artesanal, tomate, lechuga, cebolla caramelizada, huevos de codorniz, tocineta, chorizo, queso, papas a la francesa)",
    "img": bugerSpecial,
    "unPrice": 13000,
    "id": 4
  }
]
const hotDogs = [
  {
    "title": "Hot Dog Tradicional",
    "description": "(Salchicha americana, rapipapa, queso, huevo de codorniz y jamón)",
    "img": hotDog,
    "unPrice": 6000,
    "id": 5
  },
  {
    "title": "Choriperro Especial",
    "description": "(Salchicha americana, rapipapa, queso, huevo de codorniz, tocineta, salsa de piña y jamón)",
    "img": choriperro,
    "unPrice": 8000,
    "id": 6
  }
]
const chicken = [
  {
    "title": "Cuarto de pollo",
    "description": "(Patacón, arepa y papa a la francesa)",
    "img": choriperro,
    "unPrice": 7000,
    "id": 7
  },
  {
    "title": "Medio pollo",
    "description": "(Patacón, arepa y papa a la francesa)",
    "img": choriperro,
    "unPrice": 13000,
    "id": 8
  },
  {
    "title": "Unidad",
    "description": "(Patacón, arepa y papa a la francesa)",
    "img": choriperro,
    "unPrice": 26000,
    "id": 9
  },
  {
    "title": "Ala",
    "description": "(Patacón y arepa)",
    "img": hotDog,
    "unPrice": 3000,
    "id": 10
  },
  {
    "title": "Pierna o Pernil",
    "description": "(Patacón y arepa)",
    "img": choriperro,
    "unPrice": 3500,
    "id": 11
  },
  {
    "title": "Pechuga",
    "description": "(Patacón y arepa)",
    "img": choriperro,
    "unPrice": 4000,
    "id": 12
  }
]
const othersPlates = [
  {
    "title": "Mazorcada de la casa",
    "description": "(Maíz tierno, carne desmechada, pollo desmechado, rapipapa, queso y huevos de codorniz)",
    "img": choriperro,
    "unPrice": 12000,
    "id": 13
  },
  {
    "title": "Patacona",
    "description": "(Patacón, carne desmechada, pollo desmechado, tocineta, rapipapa, queso y huevo de codorniz)",
    "img": choriperro,
    "unPrice": 13000,
    "id": 14
  },
  {
    "title": "Personal",
    "description": "(Acompañado de pollo broaster o costillas)",
    "img": choriperro,
    "unPrice": 10000,
    "id": 15
  },
  {
    "title": "Para 2 o 3 personas",
    "description": "Acompañado de pollo a la broaster)",
    "img": hotDog,
    "unPrice": 16000,
    "id": 16
  },
  {
    "title": "Para 2 o 3 personas",
    "description": "Acompañado de costillas)",
    "img": hotDog,
    "unPrice": 17000,
    "id": 17
  },
  {
    "title": "Familiar",
    "description": "(Acompañado de pollo a la broaster)",
    "img": choriperro,
    "unPrice": 26000,
    "id": 18
  },
  {
    "title": "Familiar",
    "description": "(Acompañado de costillas)",
    "img": choriperro,
    "unPrice": 28000,
    "id": 19
  }
]
const drinks = [
  {
    "title": "Agua",
    "unPrice": 3000,
    "id": 20
  },
  {
    "title": "Leche",
    "unPrice": 3500,
    "id": 21
  },
  {
    "title": "Limonada Natural",
    "unPrice": 3000,
    "id": 22
  },
  {
    "title": "Avena Cubana (pequeña)",
    "unPrice": 2000,
    "id": 23
  },
  {
    "title": "Avena Cubana (grande)",
    "unPrice": 2000,
    "id": 24
  },
]
const icons = [
  {
    "img": burgerIcon,
    "name": "Hamburguesas",
    "id": 25
  },
  {
    "img": hotDogIcon,
    "name": "Hot dogs",
    "id": 26
  },
  {
    "img": chikenIcon,
    "name": "Pollo Broaster",
    "id": 27
  },
  {
    "img": drinksIcon,
    "name": "Bebidas",
    "id": 28
  },
  {
    "img": otherPlates,
    "name": "Otros platos",
    "id": 29
  },
  {
    "img": addFood,
    "name": "Adicionales",
    "id": 30
  }
] */