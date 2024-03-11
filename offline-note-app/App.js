import { Amplify } from 'aws-amplify';
import amplifyconfig from './src/aws-exports';
Amplify.configure(amplifyconfig);
import React, { useState, useEffect } from 'react'
import { Text, View, TextInput, Button } from 'react-native'
import { DataStore } from '@aws-amplify/datastore'
import { Message} from './src/models'

const initialState = { color: 'black', title: '' }

function App() {
  const [formState, updateFormState] = useState(initialState)
  const [messages, updateMessages] = useState([])

  useEffect(() => {
    fetchMessages()
    const subscription = DataStore.observe(Message).subscribe(() => fetchMessages())
    return () => subscription.unsubscribe()
  })

  function onChangeText(key, value) {
    updateFormState({ ...formState, [key]: value })
  }

  async function fetchMessages() {
    const messages = await DataStore.query(Message)
    updateMessages(messages)
  }
  async function createMessage() {
    if (!formState.title) return
    await DataStore.save(new Message({ ...formState }))
    updateFormState(initialState)
  }

  return (
    <View style={container}>
      <Text style={heading}>Real Time Message Board</Text>
      <TextInput
        onChangeText={v => onChangeText('title', v)}
        placeholder='Message title'
        value={formState.title}
        style={input}
      />
      <TextInput
        onChangeText={v => onChangeText('color', v)}
        placeholder='Message color'
        value={formState.color}
        style={input}
        autoCapitalize='none'
      />
      <Text>Color: <Text style={{fontWeight: 'bold', color: formState.color}}>{formState.color}</Text></Text>
      <Button onPress={createMessage} title='Create Message' />
      {
        messages.map(message => (
          <View key={message.id} style={{...messageStyle, backgroundColor: message.color}}>
            <View style={messageBg}>
              <Text style={messageTitle}>{message.title}</Text>
            </View>
          </View>
        ))
      }
    </View>
  )
}

const container = { padding: 20, paddingTop: 80 }
const input = { marginBottom: 10, padding: 7, backgroundColor: '#ddd' }
const heading = { fontWeight: 'normal', fontSize: 40 }
const messageBg = { backgroundColor: 'white' }
const messageStyle = { padding: 20, marginTop: 7, borderRadius: 4 }
const messageTitle = { margin: 0, padding: 9, fontSize: 20  }

export default App