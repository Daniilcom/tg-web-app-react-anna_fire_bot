import { hasUnreliableEmptyValue } from '@testing-library/user-event/dist/utils'
import React, { useState } from 'react'
import Button from '../Button/Button'
import './ProductItem.css'

const [buttonText, setButtonText] = useState('Выбрать')
const onButtonClick = () => {
  setButtonText('Убрать')
}

const ProductItem = ({ product, className, onAdd }) => {
  const onAddHandler = () => {
    onAdd(product)
  }

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
      <Button
        className={'add-btn'}
        onClick={() => {
          onAddHandler()
          onButtonClick()
        }}
      >
        {buttonText}
      </Button>
    </div>
  )
}

export default ProductItem
