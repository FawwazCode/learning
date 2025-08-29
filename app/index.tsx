import CardNote from "@/components/CardNote";
import { useDeleteNote, useGetNotes, usePostNote } from "@/hooks/useNote";
import { router } from 'expo-router';
import { useState } from "react";
import { Button } from "react-native";
import { ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Index() {
  const [content, setContent] = useState("");
  const {data, error} = useGetNotes();
  const {error: errorCreate, mutate: createNote} = usePostNote();
  const {error: errorDelete, mutate: deleteNote} = useDeleteNote();

  return (
    <ScrollView style={{ padding: 20, paddingHorizontal: 20 }}>
      <Text>Notes</Text>

      <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
        <TextInput
          style={{
            borderColor: "black",
            padding: 10,
            borderWidth: 1,
            flex: 1,
          }}
          onChangeText={(text) => setContent(text)}
        />
        <Button title="+" onPress={() => createNote({content:content})} />
      </View>
      {data?.map((note, index) => (
        <CardNote 
          key={index}
          content={note.content}
          onDelete={() => deleteNote({ id: note.id })}
          onNavigate={() => router.push({
            pathname: "/detail-note",
            params: { id: note.id, content: note.content },
          })}
        />
      ))}
    </ScrollView>
  );
}