class Bucket{
  constructor(items = [] , cost = 0){
    this.items = items;
    this.cost = cost;
  }

  addItem(item){}
  removeItem(item){}
  calcSumm(){}
}

class BucketItem extends ProductItem{}

class ProductList{
  constructor(container = '.goods-list'){
    this.container = container;
    this.goods = [];
    this.allProducts = [];
    this._fetchProducts();
    this._render();
  }

  _fetchProducts(){
    this.goods = [
      {id: 1, title: 'Notebook', price: 20000 },
      {id: 2, title: 'Mouse', price: 1500 },
      {id: 3, title: 'Keyboard', price: 5000 },
      {id: 4, title: 'Gamepad', price: 4500 },
    ];
  }

  _render(){
    const block = document.querySelector(this.container);

    for(let product of this.goods){
      const productObject = new ProductItem(product);
      this.allProducts.push(productObject);
      block.insertAdjacentHTML('beforeend', productObject.render())
    }
  }

  calcSumm(){
    let summPrice = 0;

    for(let price of this.goods){
      summPrice += price.price
    }

    return summPrice;
  }
}



class ProductItem{
  constructor(product, img = 'https://placehold.it/200x150'){
    this.title = product.title;
    this.price = product.price;
    this.id = product.id;
    this.img = img;
  }

  render(){
    return `<div class="product-item" data-id="${this.id}">
                <img src="${this.img}" alt="Some Img">
                <div class="desc">
                  <h3>${this.title}
                  <p>${this.price} \u20bd</p>
                  <button class="buy-btn">Купить</button>
                </div>
              </div>`;
  }
}

const list = new ProductList();
console.log(list.calcSumm())