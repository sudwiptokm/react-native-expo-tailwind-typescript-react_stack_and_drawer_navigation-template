import { View, Text, TextInput } from "react-native";
import React, { useState } from "react";
import Button from "./Button";
import Gap from "./Gap";

type Props = {
  addTask: (val: string) => void;
  cancel: (val: boolean) => void;
};

const AddTaskComponent = (props: Props) => {
  const [data, setData] = useState<string>("");
  return (
    <View>
      <TextInput
        className="border border-gray-600 p-2 text-white rounded-sm"
        value={data}
        placeholder="Enter Your Task Name"
        placeholderTextColor="gray"
        onChangeText={setData}
      />
      <View className="mt-4 flex-row justify-center">
        <Button
          title="Cancel"
          onPress={() => {
            props.cancel(true);
          }}
          variant="outline"
        />
        <Gap width="w-4" />
        <Button
          title="Add Task"
          onPress={() => {
            props.addTask(data);
            setData("");
          }}
        />
      </View>
    </View>
  );
};

export default AddTaskComponent;
