import React from 'react'
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native'
import { DrawerItems } from 'react-navigation-drawer'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 80
  }
})

const CustomDrawerContentComponent = props => (
  <ScrollView>
    <SafeAreaView style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}>
      <DrawerItems {...props} />
    </SafeAreaView>
  </ScrollView>
)

export default CustomDrawerContentComponent
