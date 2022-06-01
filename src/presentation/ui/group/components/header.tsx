import React, { FC } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

import { Group } from '~/domain/model'

import { TextButton } from '../../common/components'

type Props = {
  group: Group
  navigateToMember: () => void
  handleCopyInviteLink: () => void
}

const GroupHeader: FC<Props> = ({
  group,
  navigateToMember,
  handleCopyInviteLink,
}) => {
  return (
    <>
      <View style={styles.topContainer}>
        <Text style={styles.header}>{group.name}</Text>
        <TouchableOpacity
          style={styles.copyButton}
          activeOpacity={0.7}
          onPress={handleCopyInviteLink}
        >
          <Icon name="content-copy" size={20} color="#1d2d48" />
        </TouchableOpacity>
      </View>
      <TextButton style={styles.seeMembers} onPress={navigateToMember}>
        See members{'  '}&gt;
      </TextButton>
    </>
  )
}

const styles = StyleSheet.create({
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  copyButton: {
    marginTop: 4,
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 24,
    color: '#1d2d48',
    fontWeight: '600',
    maxWidth: '80%',
  },
  seeMembers: {
    paddingLeft: 0,
    marginBottom: 24,
  },
})

export default GroupHeader
