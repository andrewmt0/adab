import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import LogOutUseCase from '~/interactor/auth/logout-use-case'
import { Screens, TabScreen } from '~/presentation/navigation'
import { getNotchSize } from '~/presentation/notch'

import { TextButton } from '../common/components'
import { useSettingsViewModel } from './settings-view-model'

type Props = {
  logOutUseCase: LogOutUseCase
}

const SettingsScreen: TabScreen<Props, Screens.SETTINGS> = ({
  logOutUseCase,
}) => {
  const { isProcessing, handleLogOut } = useSettingsViewModel({
    logOutUseCase,
  })

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>
      <TextButton
        style={styles.logoutButton}
        color="#F32013"
        onPress={handleLogOut}
        disabled={isProcessing}
      >
        Log Out
      </TextButton>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    paddingTop: getNotchSize() + 16,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 24,
    color: '#101010',
    fontFamily: 'Satoshi-Bold',
  },
  logoutButton: {
    alignSelf: 'center',
    marginBottom: 24,
  },
})

export default SettingsScreen
