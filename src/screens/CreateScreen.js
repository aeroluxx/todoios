import React from 'react'
import { SafeAreaView, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import { Header, Text, Left, Button, Icon, H2 } from 'native-base'
import { useSelector, useDispatch } from 'react-redux'
import TodoItem from '../components/TodoItem'

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24
  },
  buttonAdd: {
    borderRadius: 50,
    backgroundColor: '#0091ea',
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
//eslint-disable-next-line
const CreateScreen = ({ navigation }) => {
  const todoList = useSelector(state => state.todo_reducer.todos)

  const dispatch = useDispatch()

  const deleteTodo = todo => {
    dispatch({ type: 'DELETE_TODO', todo })
  }

  const updateTodo = todo => {
    dispatch({ type: 'UPDATE_TODO', todo })
  }

  let listItem = []
  if (todoList.length > 0) {
    listItem = todoList.map(todo => (
      <TodoItem key={todo.index} todo={todo} deleteTodo={deleteTodo} updateTodo={updateTodo} />
    ))
  }

  return (
    <>
      <Header>
        <Left>
          <Button transparent onPress={() => navigation.openDrawer()}>
            <Icon name="menu" />
          </Button>
        </Left>
      </Header>
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView style={styles.sectionContainer}>
          <H2>Список дел</H2>
          {listItem}
        </ScrollView>
      </SafeAreaView>
      <TouchableOpacity style={styles.buttonAdd} onPress={() => navigation.navigate('Modal')}>
        <Text style={styles.buttonAddPlus}>+</Text>
      </TouchableOpacity>
    </>
  )
}

export default CreateScreen
