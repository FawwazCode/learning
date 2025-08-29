import { View, Text, TouchableOpacity, TextInput, Button } from 'react-native'
import React, { useState } from 'react'
import { router, useLocalSearchParams } from 'expo-router'
import Ionicons from '@expo/vector-icons/Ionicons';
import { useEditNote } from '@/hooks/useNote';
// import { Button } from '@react-navigation/elements';



const DetailNote = () => {
    const params = useLocalSearchParams();
    const [content, setContent] = useState(params.content);
    const {error,mutate:editNote} = useEditNote();
  return (
    <View>
        <View style={{
            flexDirection: "row",
            padding: 20,
            justifyContent:"space-between"
        }}>
        <TouchableOpacity>
            <Ionicons name="arrow-back" size={20} onPress={() => router.replace("/")} />
        </TouchableOpacity>
      <Text>DetailNote</Text>
      <View></View>
        </View>
    <TextInput 
    style={{
        borderColor: "black",
        borderWidth: 1,
        width: "100%",
    }}
    onChangeText={(text) => setContent(text)}
    value={content as string}
    />
      {/* <Text>{params.id}</Text>
      <Text>{params.content}</Text> */}
    <Button title="Update" onPress={() => editNote({ 
        content: content as string,
        id:parseInt(params.id as string)
     })} />
    </View>

  )

}

export default DetailNote;