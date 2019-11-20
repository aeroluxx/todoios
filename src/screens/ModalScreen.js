import React, { useState } from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import { Card, Text, Button, DatePicker, Textarea, CardItem, Right, Left, Icon, H2 } from 'native-base'

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
    flex: 1,
    marginHorizontal: 14,
    justifyContent: 'center'
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black
  }
})
////eslint-disable-next-line
const ModalScreen = ({ navigation }) => {
  const [date0, setDate0] = useState(new Date())
  const [date1, setDate1] = useState(new Date())
  return (
    <>
      <SafeAreaView style={styles.sectionContainer}>
        <Card>
          <CardItem bordered>
            <H2>Добавить дело</H2>
          </CardItem>
          <CardItem bordered>
            <Textarea rowSpan={3} style={{ flex: 1 }} placeholder="Введите текст" />
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
              <Button iconLeft rounded big onPress={() => navigation.goBack()}>
                <Icon name="paper-plane" />
                <Text>Создать</Text>
              </Button>
            </Right>
            {/*<Text>{date.toString().substr(4, 12)}</Text>*/}
          </CardItem>
        </Card>
      </SafeAreaView>
    </>
  )
}

export default ModalScreen
