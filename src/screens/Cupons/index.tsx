import React from 'react'

import { Container, Title } from './styles'

const Dashboad = () => {
  const test = [
    {
      cuponId: 'f1f1f33f5wq0e8qwe1',
      cuponNumber: 32,
      store: 'Loja seu zé',
      storeId: 'f1f1f33f5wq0e8qwe0',
      date: '2021-10-27',
      quantity: 5
    },
    {
      cuponId: 'f1f1f33f5wq0e8qwe2',
      cuponNumber: 32,
      store: 'Loja seu zé',
      storeId: 'f1f1f33f5wq0e8qwe0',
      date: '2021-10-26',
      quantity: 5
    },
    {
      cuponId: 'f1f1f33f5wq0e8qwe3',
      cuponNumber: 32,
      store: 'Loja seu zé',
      storeId: 'f1f1f33f5wq0e8qwe0',
      date: '2021-10-25',
      quantity: 5
    },
    {
      cuponId: 'f1f1f33f5wq0e8qwe4',
      cuponNumber: 32,
      store: 'Loja seu zé',
      storeId: 'f1f1f33f5wq0e8qwe0',
      date: '2021-10-25',
      quantity: 5
    }
  ]
  
  return (
    <Container>
      <Title>Cupons</Title>
    </Container>
  )
}

export default Dashboad