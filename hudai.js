const products = [
  {id: 1, name:'walton phone', price:19000},
  {id: 2, name:'I phone phone', price:119000},
  {id: 3, name:'walton laptop', price:80000},
  {id: 4, name:'mi phone', price:29000},
  {id: 5, name:'oppo phone', price:30000},
  {id: 6, name:'infinex phone', price:12000},
  {id: 7, name:'vivo phone', price:22000},
  {id: 8, name:'apple phone', price:90000},
  {id: 9, name:'one plus phone', price:49000},
]

// for(const product of products){
//   console.log(products)
// }

function matchedProducts(products, search){
  const match= [];
  for(const product of products){
    if(product.name.inCludes(search)){
      matched.push(products);
    }
  }

}

const result = matchedProducts(products, 'phone');
console.log(result);

document.getElementById