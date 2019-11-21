import React, { useState } from 'react'
import { CardItem, Card, Body, Text, Left, Button, Icon, Right, CheckBox } from 'native-base'

//eslint-disable-next-line
const TodoItem = ({ navigation, todo, deleteTodo, updateTodo }) => {
  const [check, setCheck] = useState(todo.done)

  return (
    <>
      <Card>
        <CardItem header bordered>
          <Text>
            {todo.start} / {todo.finish}
          </Text>
        </CardItem>
        <CardItem bordered>
          <Body>
            <Text>{todo.title}</Text>
          </Body>
        </CardItem>
        <CardItem footer bordered>
          <Left>
            {/*<CheckBox checked={check} color="green" onPress={() => setCheck(!todo.done)} />*/}
            <CheckBox
              checked={check}
              color="green"
              onPress={() => {
                updateTodo(todo)
                setCheck(!check)
              }}
            />
          </Left>
          <Right>
            <Button small danger onPress={() => deleteTodo(todo)}>
              <Icon name="trash" />
            </Button>
          </Right>
        </CardItem>
      </Card>
    </>
  )
}

export default TodoItem
