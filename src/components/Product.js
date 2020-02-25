import React, { Component } from "react"

class Product extends Component {
  handleUpVote = () => {
    const { onVote, id } = this.props
    onVote(id)
  };

  render() {
    const { productImageUrl, votes, url, title, description, submitterAvatarUrl } = this.props

    return (
      <div className='item'>
        <div className='image'>
          <img src={productImageUrl} />
        </div>
        <div className='middle aligned content'>
          <div className='header'>
            <a onClick={this.handleUpVote}>
              <i className='large caret up icon' />
            </a>
            {votes}
          </div>
          <div className='description'>
            <a href={url}>{title}</a>
            <p>{description}</p>
          </div>
          <div className='extra'>
            <span>Submitted by:</span>
            <img className='ui avatar image' src={submitterAvatarUrl} />
          </div>
        </div>
      </div>
    );
  }
}

export default Product
