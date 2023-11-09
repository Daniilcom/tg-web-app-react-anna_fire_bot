import React, { useState, useEffect } from 'react'
import Button from '../Button/Button'
import './ProductItem.css'

const ProductItem = ({ product, className, onAdd, id, addedItems }) => {
  const [buttonText, setButtonText] = useState('Выбрать')
  const [classesList, setClassesList] = useState('add-btn')

  const onAddHandler = () => {
    onAdd(product)
  }

  const addedItem = addedItems.some((item) => item.id === id)

  useEffect(() => {
    if (addedItem) {
      setButtonText('Убрать')
      setClassesList('add-btn add-btn_on')
    } else {
      setButtonText('Выбрать')
      setClassesList('add-btn')
    }
  }, [addedItems])

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
