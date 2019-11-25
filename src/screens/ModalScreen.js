import React, { useState, useEffect } from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'
import { Card, Text, Button, DatePicker, Textarea, CardItem, Right, Left, Icon, H2, View } from 'native-base'
import { useDispatch } from 'react-redux'

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 14
  }
})
////eslint-disable-next-line
const ModalScreen = ({ navigation }) => {
  const [date0, setDate0] = useState(new Date())
  const [date1, setDate1] = useState(new Date())
  const [txt, setTxt] = useState('Введите текст')
  const [todo, setTodo] = useState({})

  const dispatch = useDispatch()

  useEffect(() => {
    if (todo.title) {
      dispatch({ type: 'ADD_TODO', todo })
    }
  }, [todo])

  const createTodo = () => {
    setTodo({
      start: date1.toString().substr(4, 12),
      finish: date0.toString().substr(4, 12),
      title: txt,
      done: false,
      trash: false,
      index: Date.now().toString()
    })
  }

  const toggleTodo = () => {
    createTodo()
    navigation.goBack()
  }

  return (
    <View style={{ flex: 1, backgroundColor: 'ghostwhite' }}>
      <SafeAreaView style={styles.sectionContainer}>
        <Card>
          <CardItem bordered>
            <H2>Добавить дело</H2>
          </CardItem>
          <CardItem bordered>
            <Textarea
              rowSpan={3}
              style={{ flex: 1 }}
              value={txt}
              onChangeText={setTxt}
              placeholder="Введите текст"
              clearTextOnFocus
              placeholderTextColor="gray"
            />
          </CardItem>
          <CardItem bordered>
            <DatePicker
              defaultDate={date0}
              minimumDate={new Date()}
              locale="ru"
              timeZoneOffsetInMinutes={undefined}
              modalTransparent={false}
              animationType="fade"
              androidMode="default"
              placeHolderText="Начать"
              textStyle={{ color: 'black' }}
              placeHolderTextStyle={{ color: 'black' }}
              onDateChange={setDate0}
              disabled={false}
            />
            <DatePicker
              defaultDate={date1}
              minimumDate={new Date()}
              locale="ru"
              timeZoneOffsetInMinutes={undefined}
              modalTransparent={false}
              animationType="fade"
              androidMode="default"
              placeHolderText="Закончить"
              textStyle={{ color: 'black' }}
              placeHolderTextStyle={{ color: 'black' }}
              onDateChange={setDate1}
              disabled={false}
            />
          </CardItem>
          <CardItem footer bordered>
            <Left />
            <Right>
              <Button iconLeft rounded big onPress={toggleTodo}>
                <Icon name="paper-plane" />
                <Text>Создать</Text>
              </Button>
            </Right>
          </CardItem>
        </Card>
      </SafeAreaView>
    </View>
  )
}

export default ModalScreen
