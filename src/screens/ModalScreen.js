import React, { useState } from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'

import { Colors } from 'react-native/Libraries/NewAppScreen'

import { Card, Text, Button, DatePicker, Container } from 'native-base'

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter
  },
  engine: {
    position: 'absolute',
    right: 0
  },
  body: {
    backgroundColor: Colors.white
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black
  }
})
////eslint-disable-next-line
const ModalScreen = ({ navigation }) => {
  const [date, setDate] = useState(new Date())
  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        <Container>
          <Text style={styles.sectionTitle}>Добавить дело</Text>
          <Card style={{ height: '50%', width: '90%' }}>
            <DatePicker
              defaultDate={date}
              minimumDate={new Date()}
              locale="ru"
              timeZoneOffsetInMinutes={undefined}
              modalTransparent={false}
              animationType="fade"
              androidMode="default"
              placeHolderText="Выберите дату"
              textStyle={{ color: 'green' }}
              placeHolderTextStyle={{ color: '#d3d3d3' }}
              onDateChange={setDate}
              disabled={false}
            />
          </Card>
          <Button rounded onPress={() => navigation.goBack()}>
            <Text>Добавить</Text>
          </Button>
        </Container>
      </SafeAreaView>
    </>
  )
}

export default ModalScreen
