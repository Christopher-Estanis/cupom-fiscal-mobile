import React, { useState, useEffect } from 'react'
import { View } from 'react-native'

import ItemCard from '../../components/ItemCard'
import { Container, Title } from './styles'

import item from '../../consumers/item'

const Categories = () => {
  const [items, setItems] = useState<any[]>([])

  const listItems = async () => {
    try {
      const response = await item.list()
      setItems(response?.data?.items)
    } catch (error) {
      console.warn({ error })
    }
  }

  useEffect(() => {
    listItems()
  }, [])
  
  return (
    <Container contentContainerStyle={{ alignItems: 'center' }}>
      <Title>Itens</Title>
      {items.map(test => ( <ItemCard key={test._id} item={test} /> ))}
      <View style={{ height: '80px', width: '100%' }} />
    </Container>
  )
}

export default Categories