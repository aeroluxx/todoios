import React from 'react'
import { SafeAreaView, StyleSheet, ScrollView } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { Header, Left, Button, Icon, H2 } from 'native-base'
import TodoItem from '../components/TodoItem'

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24
  }
})
//eslint-disable-next-line
const DoneScreen = ({ navigation }) => {
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
    listItem = todoList
      .filter(todo => todo.done)
      .map(todo => <TodoItem key={todo.index} todo={todo} deleteTodo={deleteTodo} updateTodo={updateTodo} />)
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
      <SafeAreaView style={{ flex: 1, backgroundColor: 'ghostwhite' }}>
        <ScrollView style={styles.sectionContainer}>
          <H2>Выполненные делa</H2>
          {listItem}
        </ScrollView>
      </SafeAreaView>
    </>
  )
}

export default DoneScreen
