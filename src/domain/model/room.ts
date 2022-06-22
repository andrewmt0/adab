import { Timestamp } from 'firebase/firestore'

type Room = {
  uid: string
  title: string
  isEnded: boolean
  content: string
  timestamp: Timestamp
  createdAt: Timestamp
  endedAt?: Timestamp
}

export default Room
