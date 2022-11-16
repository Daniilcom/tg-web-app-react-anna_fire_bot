import React, { useEffect, useState } from 'react'
import { useTelegram } from '../../hooks/useTelegram'
import './Form.css'

const Form = () => {
  const [address, setAddress] = useState('')
  const [service, setService] = useState('')
  const [subject, setSubject] = useState('vk')
  const { tg } = useTelegram()

  useEffect(() => {
    tg.MainButton.setParams({
      text: 'Отправить данные',
    })
  }, [])

  useEffect(() => {
    if (!address || !service) {
      tg.MainButton.hide()
    } else {
      tg.MainButton.show()
    }
  }, [address, service])

  const onChangeAddress = (e) => {
    setAddress(e.target.value)
  }

  const onChangeService = (e) => {
    setService(e.target.value)
  }

  const onChangeSubject = (e) => {
    setSubject(e.target.value)
  }

  return (
    <div className={'form'}>
      <h3>Расскажите о себе</h3>
      <input
        className={'input'}
        type="text"
        placeholder={'Адрес'}
        value={address}
        onChange={onChangeAddress}
      />
      <input
        className={'input'}
        type="text"
        placeholder={'Любимая услуга'}
        value={service}
        onChange={onChangeService}
      />
      <h3>Откуда узнали обо мне?</h3>
      <select className={'select'} value={subject} onChange={onChangeSubject}>
        <option value={'physical'}>VK</option>
        <option value={'legal'}>Telegram</option>
      </select>
    </div>
  )
}

export default Form
