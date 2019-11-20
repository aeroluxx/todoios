import React, { useState } from 'react'
import { CardItem, Card, Body, Text, Left, Button, Icon, Right, CheckBox } from 'native-base'

//eslint-disable-next-line
const TodoItem = ({ navigation }) => {
  const [check, setCheck] = useState(false)

  return (
    <>
      <Card>
        <CardItem header bordered>
          <Text>10/20/2019</Text>
        </CardItem>
        <CardItem bordered>
          <Body>
            <Text>NativeBase is a free and open source</Text>
          </Body>
        </CardItem>
        <CardItem footer bordered>
          <Left>
            <CheckBox checked={check} color="blue" onPress={() => setCheck(!check)} />
          </Left>
          <Right>
            <Button small danger>
              <Icon name="trash" />
            </Button>
          </Right>
        </CardItem>
      </Card>
    </>
  )
}

export default TodoItem
