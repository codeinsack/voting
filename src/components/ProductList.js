import React, { Component } from "react"

import { products } from "../data"
import Product from "./Product"

class ProductList extends Component {
  state = {
    products,
  };

  render() {
    const { products } = this.state

    return (
      <div className='ui items'>
        {products.map((product) => (
          <Product
            key={product.id}
            data={product}
          />
        ))}
      </div>
    );
  }
}

export default ProductList
