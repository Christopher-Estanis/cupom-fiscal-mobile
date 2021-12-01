import React, { useState, useEffect } from 'react'
import { Dimensions, View, Button, TouchableHighlight, Text } from 'react-native'
import { LineChart, BarChart } from 'react-native-chart-kit'
import dayjs from 'dayjs'

import dashboard from '../../consumers/dashboard'

import { Container, Title, RadioContainer, RadioButton, ButtonText, GraphicCard, Description, CountCard, CountText, CountDescription } from './styles'

const dayOfWeekPt = {
  '0': 'Dom',
  '1': 'Seg',
  '2': 'Ter',
  '3': 'Quart',
  '4': 'Quint',
  '5': 'Sex',
  '6': 'Sab',
}

const Dashboad = () => {
  const [active, setActive] = useState(true)
  const [graphicLabel, setGraphicLabel] = useState<any[]>([])
  const [graphicValue, setGraphicValue] = useState<any[]>([])
  const [dashboardValues, setDashboardValues] = useState<any>()

  const getDashboard = async () => {
    try {
      const type = active ? undefined : 'value'
      const response = await dashboard.main({ type })
      setDashboardValues(response.data)
    } catch {
      console.warn('error')
    }
  }

  const constructLabels = (graphic) => {
    const labels = Object.keys(graphic).map(day => dayOfWeekPt[String(dayjs(day).day())])
    const values = Object.values(graphic)
    setGraphicLabel(labels)
    setGraphicValue(values)
  }

  useEffect(() => {
    getDashboard()
  }, [])

  useEffect(() => {
    getDashboard()
  }, [active])
  
  useEffect(() => {
    if (dashboardValues?.graphic) constructLabels(dashboardValues?.graphic)
  }, [dashboardValues, setDashboardValues])
  
  return (
    <Container contentContainerStyle={{ alignItems: 'center', justifyContent: 'flex-start' }}>
      <Title>Dashboad</Title>
      <RadioContainer  >
        <RadioButton active={active} onPress={() => setActive(true)} >
          <ButtonText active={active} >Quantidade</ButtonText>
        </RadioButton>
        <RadioButton active={!active} underlayColor='#adfa' onPress={() => setActive(false)} >
          <ButtonText active={!active}>Dinheiro</ButtonText>
        </RadioButton>
      </RadioContainer>
      <GraphicCard > 
        <Description>Utimos 7 dias</Description>
        <LineChart
          data={{
            labels: graphicLabel,
            datasets: [{
              data: graphicValue,
              color: (opacity = 1) => `#5636D3`,
              strokeWidth: 3
            }],
          }}
          width={350}
          height={256}
          fromZero={true}
          yAxisInterval={1} 
          chartConfig={{
            color: (opacity = 1) => `#5636D3`,
            labelColor: (opacity = 1) => `#5636D3`,
            strokeWidth: 3, 
            barPercentage: 0.5,
            useShadowColorFromDataset: false, 
            backgroundGradientFrom: 'transparent',
            backgroundGradientTo: 'transparent',
            decimalPlaces: 0,
          }}
        />
      </GraphicCard>
      <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '90%', marginTop: '20px' }}>
        <CountCard style={{ marginRight: '10px' }} > 
          <CountText style={{ color: '#F0F2F5' }}>{dashboardValues?.count?.cupon || 0}</CountText>
          <CountDescription style={{ color: '#F0F2F5' }}>Total no mês</CountDescription>
        </CountCard>
        <CountCard style={{ border: '2px solid #5636D3', backgroundColor: '#F0F2F5' }} > 
          <CountText >{dashboardValues?.count?.items || 0}</CountText>
          <CountDescription>Total de intens</CountDescription>
        </CountCard>
      </View>
      <View style={{ height: '80px', width: '100%' }} />
    </Container>
  )
}

export default Dashboad