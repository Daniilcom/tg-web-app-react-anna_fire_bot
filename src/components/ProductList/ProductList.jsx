import React, { useState } from 'react'
import './ProductList.css'
import ProductItem from '../ProductItem/ProductItem'
import { useTelegram } from '../../hooks/useTelegram'
import { useCallback, useEffect } from 'react'
import browImg from '../images/brow.png'

const products = [
  {
    id: '1',
    title: 'Коррекция',
    price: 700,
    description: 'воск, пинцет, прореживание',
    img: browImg,
  },
  {
    id: '2',
    title: 'Окрашивание',
    price: 700,
    description: 'воск, пинцет, прореживание',
    img: browImg,
  },
  {
    id: '3',
    title: 'Долговременная укладка',
    price: 1200,
    description: 'воск, пинцет, прореживание',
    img: browImg,
  },
  {
    id: '4',
    title: 'Ламинирование ресниц',
    price: 2000,
    description: 'воск, пинцет, прореживание',
    img: browImg,
  },
]

const getTotalPrice = (items = []) => {
  return items.reduce((acc, item) => {
    return (acc += item.price)
  }, 0)
}

const ProductList = () => {
  const [addedItems, setAddedItems] = useState([])
  const { tg, queryId } = useTelegram()

  const onSendData = useCallback(() => {
    const data = {
      products: addedItems,
      totalPrice: getTotalPrice(addedItems),
      queryId,
    }
    fetch('http://85.119.146.179:8000/web-data', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
  }, [addedItems])

  useEffect(() => {
    tg.onEvent('mainButtonClicked', onSendData)
    return () => {
      tg.offEvent('mainButtonClicked', onSendData)
    }
  }, [onSendData])

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
      tg.MainButton.hide()
    } else {
      tg.MainButton.show()
      tg.MainButton.setParams({
        text: `Записаться • ${getTotalPrice(newItems)}₽`,
      })
    }
  }

  return (
    <div className={'list'}>
      {products.map((item) => (
        <ProductItem
          id={item.id}
          product={item}
          onAdd={onAdd}
          className={'item'}
          addedItems={addedItems}
        />
      ))}
    </div>
  )
}

export default ProductList
