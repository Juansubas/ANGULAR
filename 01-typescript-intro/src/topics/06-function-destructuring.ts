interface Product {
  description: string;
  price: number;
}

const phone: Product = {
  description: 'Nokia A1',
  price: 150,
};

const tablet: Product = {
  description: 'iPad Air',
  price: 350,
};

function taxCalculation() : number[]{
  
}

const shoppingCart = [phone, tablet];
const tax = 0.15;


export {};