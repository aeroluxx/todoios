import React, { useState } from 'react'
import { SafeAreaView, StyleSheet, Text, StatusBar } from 'react-native'

import { Colors } from 'react-native/Libraries/NewAppScreen'

import { Card, View, Button, DatePicker } from 'native-base'

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
    paddingHorizontal: 24
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark
  },
  highlight: {
    fontWeight: '700'
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right'
  }
})
////eslint-disable-next-line
const ModalScreen = ({ navigation }) => {
  const [date, setDate] = useState(new Date())
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>МОДАЛЬНОЕ ОКНО</Text>
          <Card>
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
            <Button onPress={() => navigation.goBack()} />
          </Card>
        </View>
      </SafeAreaView>
    </>
  )
}

export default ModalScreen
