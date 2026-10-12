import { View, Text, TextInput, Button, FlatList } from 'react-native'
import React, { useState } from 'react'

const TodoList = () => {
  const [todos, setTodos] = useState<string[]>([])
  const [input, setInput] = useState<string>('')

  const addTodo = () => {
    if (!input.trim()) return
    setTodos(prev => [...prev, input.trim()])
    setInput('')
  }

  return (
    <View>
      <Text>Todo List</Text>
      <TextInput
        value={input}
        onChangeText={setInput}
        placeholder="Enter todo here"
        onSubmitEditing={addTodo}
      />
      <Button title="Add todo" onPress={addTodo} />

      <FlatList
        data={todos}
        keyExtractor={(item, index) => `${item}-${index}`}
        renderItem={({ item }) => <Text>{item}</Text>}
      />
    </View>
  )
}

export default TodoList