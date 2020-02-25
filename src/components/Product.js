import React, { Component } from "react"

class Product extends Component {
  render() {
    const { data } = this.props

    return (
      <div className='item'>
        <div className='image'>
          <img src={data.productImageUrl} />
        </div>
        <div className='middle aligned content'>
          <div className='header'>
            <a>
              <i className='large caret up icon' />
            </a>
            {data.votes}
          </div>
          <div className='description'>
            <a href={data.url}>{data.title}</a>
            <p>{data.description}</p>
          </div>
          <div className='extra'>
            <span>Submitted by:</span>
            <img className='ui avatar image' src={data.submitterAvatarUrl} />
          </div>
        </div>
      </div>
    );
  }
}

export default Product
