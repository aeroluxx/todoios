import React, { useState } from 'react'
import { SafeAreaView, StyleSheet, Text, StatusBar } from 'react-native'
import { connect } from 'react-redux'

import { Colors } from 'react-native/Libraries/NewAppScreen'

import { CardItem, Card, View, Header, Left, Button, Icon, DatePicker } from 'native-base'
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
          <Text style={styles.sectionTitle}>CreateScreen</Text>
          <Text style={styles.sectionDescription}>
            Edit <Text style={styles.highlight}>App.js</Text> to change this screen and then come back to see your
            edits.
          </Text>
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
        </View>
      </SafeAreaView>
    </>
  )
}

export default connect(null, { addTodo })(CreateScreen)
