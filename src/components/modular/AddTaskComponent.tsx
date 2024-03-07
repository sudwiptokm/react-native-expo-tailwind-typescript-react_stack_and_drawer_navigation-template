import React, { useState } from "react";
import { TextInput, View } from "react-native";

import { Button } from "react-native-paper";
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
          onPress={() => {
            props.cancel(true);
          }}
          mode="outlined"
        >
          Cancel
        </Button>
        <Gap width="w-4" />
        <Button
          onPress={() => {
            props.addTask(data);
            setData("");
          }}
        >
          Add Task
        </Button>
      </View>
    </View>
  );
};

export default AddTaskComponent;
