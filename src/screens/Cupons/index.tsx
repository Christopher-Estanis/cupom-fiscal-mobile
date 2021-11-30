import React, { useEffect, useState } from 'react'
import { Text } from 'react-native'

import CuponCard from '../../components/CuponCard'
import cupon from '../../consumers/ocr'

import { Container, Title, Card } from './styles'

interface ICupon {
  _id?: string
  number?: number
  itemsQuantity?: number
  store?: string
  createdAt?: Date
  updatedAt?: Date 
  items?: {
    _id: string
    name: string
    value: number
    quantity: number
  }[]
}

const Cupons = () => {
  const [cupons, setCupons] = useState<ICupon[]>([])

  const listCupons = async () => {
    try {
      const response = await cupon.list()
      setCupons(response?.data?.cupons)
    } catch (error) {
      console.warn({ error })
    }
  }

  useEffect(() => {
    listCupons()
  }, [])
  
  const tests = [
    {
      cuponId: 'f1f1f33f5wq0e8qwe1',
      cuponNumber: 32,
      store: 'Loja seu zé',
      storeId: 'f1f1f33f5wq0e8qwe7',
      date: '2021-10-27',
      quantity: 5
    },
    {
      cuponId: 'f1f1f33f5wq0e8qwe2',
      cuponNumber: 32,
      store: 'Loja seu zé',
      storeId: 'f1f1f33f5wq0e8qwe6',
      date: '2021-10-26',
      quantity: 5
    },
    {
      cuponId: 'f1f1f33f5wq0e8qwe3',
      cuponNumber: 32,
      store: 'Loja seu zé',
      storeId: 'f1f1f33f5wq0e8qwe5',
      date: '2021-10-25',
      quantity: 5
    },
    {
      cuponId: 'f1f1f33f5wq0e8qwe4',
      cuponNumber: 32,
      store: 'Loja seu zé',
      storeId: 'f1f1f33f5wq0e8qwe3',
      date: '2021-10-25',
      quantity: 5
    }
  ]
  
  return (
    <Container contentContainerStyle={{ alignItems: 'center' }}>
      <Title>Cupons</Title>
      {cupons.map(test => ( <CuponCard key={test._id} cupon={test} /> ))}
    </Container>
  )
}

export default Cupons