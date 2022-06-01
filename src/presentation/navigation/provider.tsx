import { NavigationContainer, Theme } from '@react-navigation/native'
import React, { FC } from 'react'

type Props = {
  theme?: Theme
}

const linking = {
  prefixes: ['adab://', 'https://adab.bearcats.dev/'],
  config: {
    initialRouteName: 'Home' as const,
    screens: {
      Home: {
        path: '',
      },
      Join: {
        path: 'join',
      },
    },
  },
}

const NavigationProvider: FC<Props> = ({ theme, children }) => {
  return (
    <NavigationContainer linking={linking} theme={theme}>
      {children}
    </NavigationContainer>
  )
}

export default NavigationProvider
