import React, { useState } from 'react'
import Button from '../Button/Button'
import './ProductItem.css'

const ProductItem = ({ product, className, onAdd }) => {
  const onAddHandler = () => {
    onAdd(product)
  }

  const [buttonText, setButtonText] = useState('')
  const [classesList, setClassesList] = useState('')
  const onButtonClick = () => {
    if (item.price === 0) {
      setButtonText('Выбрать')
      setClassesList('add-btn')
    } else {
      setButtonText('Убрать')
      setClassesList('add-btn-on')
    }
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
        className={classesList}
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
