import React, { useState, useEffect } from 'react'
import { Dimensions, View, Button, TouchableHighlight, Text } from 'react-native'
import { LineChart, BarChart } from 'react-native-chart-kit'
import dayjs from 'dayjs'

import { Container, Title, RadioContainer, RadioButton, ButtonText, GraphicCard } from './styles'

const Dashboad = () => {
  const [active, setActive] = useState(true)
  const [graphicLabel, setGraphicLabel] = useState<any[]>([])
  const [graphicValue, setGraphicValue] = useState<any[]>([])
  
  const screenWidth = Dimensions.get("window").width;

  const dayOfWeekPt = {
    '0': 'Dom',
    '1': 'Seg',
    '2': 'Ter',
    '3': 'Quart',
    '4': 'Quint',
    '5': 'Sex',
    '6': 'Sab',
  }

  // const dayOfWeekPt = {
  //   '0': '1',
  //   '1': '12',
  //   '2': '13',
  //   '3': '14',
  //   '4': '15',
  //   '5': '16',
  //   '6': '17',
  // }

  const template = {
    graphic: {
      '2021-11-23': 30,
      '2021-11-24': 60,
      '2021-11-25': 28,
      '2021-11-26': 19,
      '2021-11-27': 20,
      '2021-11-28': 12,
      '2021-11-29': 11,
    }
  }

  const constructLabels = (graphic) => {
    const labels = Object.keys(template.graphic).map(day => dayOfWeekPt[String(dayjs(day).day())])
    const values = Object.values(template.graphic)
    setGraphicLabel(labels)
    setGraphicValue(values)
  }

  useEffect(() => {
    constructLabels(template.graphic)
  }, [])
  
  return (
    <Container>
      <RadioContainer  >
        <RadioButton active={active} underlayColor='#adfa' onPress={() => setActive(true)} >
          <ButtonText active={active}>Valor</ButtonText>
        </RadioButton>
        <RadioButton active={!active} onPress={() => setActive(false)} >
          <ButtonText active={!active} >Quantidade</ButtonText>
        </RadioButton>
      </RadioContainer>
      <GraphicCard > 
        <LineChart
          data={{
            labels: graphicLabel,
            datasets: [{
              data: graphicValue,
              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              strokeWidth: 3
            }],
          }}
          width={350}
          height={256}
          fromZero={true}
          yAxisInterval={1} 
          chartConfig={{
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            strokeWidth: 3, 
            barPercentage: 0.5,
            useShadowColorFromDataset: false, 
            backgroundGradientFrom: 'transparent',
            backgroundGradientTo: 'transparent',
            decimalPlaces: 0,
          }}
        />

      </GraphicCard>
      <Title>Dashboad</Title>
    </Container>
  )
}

export default Dashboad