import React, { useState } from 'react'
import { SafeAreaView, StyleSheet, StatusBar } from 'react-native'
import { connect } from 'react-redux'

import { Colors } from 'react-native/Libraries/NewAppScreen'

import { CardItem, Card, View, Header, Text, Left, Button, Icon, DatePicker } from 'native-base'
import { addTodo } from '../actions'

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
const CreateScreen = ({ navigation }) => {
  const [date, setDate] = useState(new Date())
  //console.log(date)
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Header>
        <Left>
          <Button transparent onPress={() => navigation.openDrawer()}>
            <Icon name="menu" />
          </Button>
        </Left>
      </Header>
      <SafeAreaView>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Список дел</Text>
          <Card>
            <CardItem header button onPress={() => alert('This is Card Header')}>
              <Text>{String(date)}</Text>
            </CardItem>
          </Card>
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
          <Button primary onPress={() => navigation.navigate('Modal')}>
            <Text>Добавить</Text>
          </Button>
        </View>
      </SafeAreaView>
    </>
  )
}

export default connect(null, { addTodo })(CreateScreen)
