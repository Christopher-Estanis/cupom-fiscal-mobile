import React, { useEffect, useState } from 'react'
import { View } from 'react-native'

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
  
  return (
    <Container contentContainerStyle={{ alignItems: 'center' }}>
      <Title>Cupons</Title>
      {cupons.map(test => ( <CuponCard key={test._id} cupon={test} /> ))}
      <View style={{ height: '80px', width: '100%' }} />
    </Container>
  )
}

export default Cupons