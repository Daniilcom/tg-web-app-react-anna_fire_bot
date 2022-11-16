import React, { useState } from 'react'
import { useTelegram } from '../../hooks/useTelegram'
import ProductItem from '../ProductItem/ProductItem'
import './ProductList.css'

const products = [
  { id: '1', title: 'Окрашивание', price: 600 },
  { id: '2', title: 'Коррекция', price: 600 },
  { id: '3', title: 'Долговременная укладка', price: 1000 },
  { id: '4', title: 'Ламинирование ресниц', price: 2000 },
]

const getTotalPrice = (items = []) => {
  return items.reduce((acc, item) => {
    return (acc += item.price)
  }, 0)
}

const ProductList = () => {
  const [addedItems, setAddedItems] = useState([])
  const { tg } = useTelegram()

  const onAdd = (product) => {
    const alreadyAdded = addedItems.find((item) => item.id === product.id)
    let newItems = []

    if (alreadyAdded) {
      newItems = addedItems.filter((item) => item.id !== product.id)
    } else {
      newItems = [...addedItems, product]
    }

    setAddedItems(newItems)

    if (newItems.length === 0) {
      tg.MainButton.show()
      tg.MainButton.setParams({
        text: `Купить ${getTotalPrice(newItems)}`,
      })
    }
  }

  return (
    <div className={'list'}>
      {products.map((item) => (
        <ProductItem Product={item} onAdd={onAdd} className={'item'} />
      ))}
    </div>
  )
}

export default ProductList
