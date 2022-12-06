import React, { useState } from 'react'
import Button from '../Button/Button'
import './ProductItem.css'

const ProductItem = ({ product, className, onAdd }) => {
  const [buttonText, setButtonText] = useState('Выбрать')
  const [classesList, setClassesList] = useState('add-btn')
  const onAddHandler = () => {
    onAdd(product)
    if (product === 0) {
      setButtonText('Выбрать')
      setClassesList('add-btn')
    }
    if (product !== 0) {
      setButtonText('Убрать')
      setClassesList('add-btn-on')
    }
    console.log(product)
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
      <Button className={classesList} onClick={onAddHandler}>
        {buttonText}
      </Button>
    </div>
  )
}

export default ProductItem
