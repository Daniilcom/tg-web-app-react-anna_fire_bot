import React, { useState } from 'react'
import Button from '../Button/Button'
import './ProductItem.css'

const ProductItem = ({ product, className, onAdd }) => {
  const onAddHandler = () => {
    onAdd(product)
  }

  const handler = product + 1

  return (
    <div className={'product ' + className}>
      <div className={'title'}>{product.title}</div>
      <div className={'img'}>
        <img src={product.img} />
      </div>
      <div className={'description'}>{product.description}</div>
      <div className={'price'}>
        <span>
          <b>{product.price}</b>₽
        </span>
      </div>
      {handler === 0 ? (
        <Button className={'add-btn'} onClick={onAddHandler}>
          Добавлено
        </Button>
      ) : (
        <Button className={'add-btn'} onClick={onAddHandler}>
          Выбрать
        </Button>
      )}
    </div>
  )
}

export default ProductItem
