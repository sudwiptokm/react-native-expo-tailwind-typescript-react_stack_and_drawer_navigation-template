import React, { useState } from "react";
import { ScrollView, View } from "react-native";

import { TextInput } from "react-native-paper";
import SecondaryHeader from "../../../../src/components/modular/molecular/headers/SecondaryHeader";
import { SubTaskDTO } from "../../../../src/models/task/TaskSchema";

type Props = object;

const CreateTask = (props: Props) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("");
  const [type, setType] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [hasReminder, setHasReminder] = useState(false);
  const [notes, setNotes] = useState<string[]>([]);
  const [subTasks, setSubTasks] = useState<SubTaskDTO[]>([]);

  return (
    <View className="mx-6 flex-1">
      <SecondaryHeader title="Create Task" />

      {/* Form */}
      <ScrollView className="mt-12 flex-1">
        {/* 1st Row */}
        <View className="flex-row justify-center w-full gap-x-6">
          {/* Name */}
          <TextInput
            label="Task Name"
            value={name}
            onChangeText={setName}
            style={{ flex: 1 }}
          />
          {/* Type */}
          <TextInput
            label="Type"
            value={type}
            onChangeText={setType}
            style={{ flex: 1 }}
          />
        </View>
        {/* Description */}
        <View className="mt-6">
          <TextInput
            label="Description"
            value={description}
            onChangeText={setDescription}
            multiline
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default CreateTask;
