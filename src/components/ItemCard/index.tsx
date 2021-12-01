import React from 'react'
import { View } from 'react-native'
import dayjs from 'dayjs'

import { Card, Text, Title } from './styles'

interface Props {
  item: {
    _id?: string
    name?: string
    value?: number
    createdAt?: Date
  }
}

const Dashboad = ({ item, ...rest }: Props) => {
  
  return (
    <Card {...rest} >
      <View style={{ display: 'flex', flexDirection: 'column', flex: 2 }}>
        <Title>{item?.name}</Title>
        <Text>Valor: {item?.value}</Text>
      </View>
      <Text>{dayjs(item?.createdAt).format('DD/MM/YYYY')}</Text>
    </Card>
  )
}

export default Dashboad