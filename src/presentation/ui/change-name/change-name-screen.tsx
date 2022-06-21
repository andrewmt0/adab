import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import ChangeNameUseCase from '~/interactor/auth/change-name-use-case'
import { Screen, Screens } from '~/presentation/navigation'
import { getNotchSize } from '~/presentation/notch'
import { Button, InputGroup } from '~/presentation/ui/common/components'

import { useChangeNameViewModel } from './change-name-view-model'

type Props = {
  changeNameUseCase: ChangeNameUseCase
}

const ChangeNameScreen: Screen<Props, Screens.CHANGE_NAME> = ({
  navigation,
  changeNameUseCase,
}) => {
  const {
    handleInputTextChange,
    handleChangeName,
    isProcessing,
    globalError,
    fieldError,
  } = useChangeNameViewModel({
    changeNameUseCase,
  })

  const navigateToSettings = () => navigation.pop()
  const handleChangeNamePress = async () => {
    if (await handleChangeName()) navigateToSettings()
  }

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Change Display Name</Text>
        <InputGroup
          label="Display Name"
          style={styles.inputGroup}
          placeholder="John Doe"
          onChangeText={handleInputTextChange('displayName')}
          error={fieldError.displayName}
        />
        <Text style={styles.error}>{globalError}</Text>
      </View>
      <Button onPress={handleChangeNamePress} disabled={isProcessing} primary>
        Update Name
      </Button>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: getNotchSize() + 40,
    paddingBottom: 48,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    height: '100%',
  },
  title: {
    fontSize: 28,
    color: '#101010',
    marginBottom: 24,
    fontFamily: 'Satoshi-Bold',
  },
  inputGroup: {
    marginTop: 12,
  },
  signUpButton: {
    position: 'absolute',
    top: 52,
    right: 20,
    marginTop: 16,
  },
  error: {
    color: '#fe6b4d',
    marginTop: 24,
  },
})

export default ChangeNameScreen
