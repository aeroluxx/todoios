import React from 'react'
import { SafeAreaView, StyleSheet, StatusBar, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'

import { Colors } from 'react-native/Libraries/NewAppScreen'

import { CardItem, Card, View, Header, Text, Left, Button, Icon } from 'native-base'
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
  buttonAdd: {
    borderRadius: 50,
    backgroundColor: 'blue',
    width: 100,
    height: 100,
    position: 'absolute',
    bottom: 0,
    marginBottom: 30,
    right: 10,
    alignSelf: 'flex-end',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonAddPlus: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.white
  }
})
////eslint-disable-next-line
const CreateScreen = ({ navigation }) => {
  const date = new Date()

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
            <CardItem header button onPress={() => alert('Удалить')}>
              <Text>{String(date)}</Text>
            </CardItem>
          </Card>
        </View>
      </SafeAreaView>
      <TouchableOpacity style={styles.buttonAdd} onPress={() => navigation.navigate('Modal')}>
        <Text style={styles.buttonAddPlus}>+</Text>
      </TouchableOpacity>
    </>
  )
}

export default connect(null, { addTodo })(CreateScreen)
