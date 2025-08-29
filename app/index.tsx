import CardNote from "@/components/CardNote";
import { useState } from "react";
import { Button, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Index() {
  const [content, setContent] = useState("");
  return (
    <ScrollView style={{ paddingTop: 20,paddingHorizontal: 20}}>
      <Text>Note</Text>
      <View style={{ flexDirection: "row", gap: 10}}>
      <TextInput style={{
        borderColor: "black",
        padding: 10,
        borderWidth: 1,
        width: "90%",
      }}
      onChangeText={(text) => setContent(text)}
      />
      <Button title="+" onPress={() => console.log(content)}/>
      </View>
      <CardNote 
      onDelete={() => console.log("delete!")}
      onNavigate={() => console.log("navigate!")}
      content="Note Hari ini"
      />
    </ScrollView>
  );
}
