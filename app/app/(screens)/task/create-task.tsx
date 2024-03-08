import React, { useState } from "react";
import { ScrollView, View } from "react-native";
import { Button, HelperText, Switch, TextInput } from "react-native-paper";
import { DatePickerInput, TimePickerModal } from "react-native-paper-dates";

import { router } from "expo-router";
import moment from "moment";
import PrioritySelector from "../../../../src/components/complex/prioritySelector/PrioritySelector";
import SecondaryHeader from "../../../../src/components/modular/molecular/headers/SecondaryHeader";
import PText from "../../../../src/components/modular/molecular/texts/PText";
import { TaskDTO } from "../../../../src/models/task/TaskSchema";

type Props = object;

const CreateTask = (props: Props) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState<"low" | "medium" | "high">();
  const [type, setType] = useState("");
  const [startDate, setStartDate] = useState<Date>();
  const [endDate, setEndDate] = useState<Date>();
  const [startTime, setStartTime] = useState(
    moment(new Date()).format("hh:mm A"),
  );
  const [endTime, setEndTime] = useState(moment(new Date()).format("hh:mm A"));
  const [hasReminder, setHasReminder] = useState(false);

  //   time pickers
  const [visible1, setVisible1] = React.useState(false);
  const [visible2, setVisible2] = React.useState(false);

  //   Name Error
  const [nameError, setNameError] = useState(false);

  //   functions
  const createTask = () => {
    //   create task
    if (name === "") {
      setNameError(true);
    } else {
      const data: TaskDTO = {
        name,
        description,
        isCompleted: false,
        createdAt: new Date().toISOString(),
        type,
        priority,
        startDate: startDate ? startDate.toISOString() : undefined,
        endDate: endDate ? endDate.toISOString() : undefined,
        startTime,
        endTime,
        hasReminder,
        subTasks: [],
        notes: [],
      };
      console.log({ data });

      router.push("app/home");
    }
  };

  return (
    <View className="mx-6 flex-1">
      <SecondaryHeader title="Create Task" />

      {/* Form */}
      <ScrollView className="mt-12 flex-1">
        {/* Name and Type */}
        <View className="flex-row justify-center w-full gap-x-6">
          <View className="flex-1">
            {/* Name */}
            <TextInput
              label="Task Name *"
              value={name}
              onChangeText={setName}
              onBlur={() => {
                if (name === "") {
                  setNameError(true);
                } else {
                  setNameError(false);
                }
              }}
            />
            {nameError && (
              <HelperText type="error" visible={nameError}>
                Name is required
              </HelperText>
            )}
          </View>
          {/* Type */}
          <View className="flex-1">
            <TextInput label="Type" value={type} onChangeText={setType} />
          </View>
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

        {/* Date Pickers */}
        <View className="mt-6 flex-row items-center gap-x-6">
          <DatePickerInput
            locale="en-GB"
            label="Start Date"
            value={!startDate ? new Date() : startDate}
            onChange={(d) => setStartDate(d)}
            inputMode="start"
            mode="outlined"
            validRange={{ startDate: new Date() }}
          />
          <DatePickerInput
            locale="en-GB"
            label="End Date"
            value={!endDate ? (startDate ? startDate : new Date()) : endDate}
            onChange={(d) => setEndDate(d)}
            inputMode="start"
            mode="outlined"
            validRange={{
              startDate: startDate ? startDate : new Date(),
            }}
          />
        </View>

        {/* Time Pickers */}
        <View className="mt-6 flex-row items-center gap-x-6">
          <TextInput
            label="Start Time"
            value={startTime}
            onFocus={() => setVisible1(true)}
            right={
              <TextInput.Icon icon="clock" onPress={() => setVisible1(true)} />
            }
            style={{ flex: 1 }}
          />
          <TimePickerModal
            visible={visible1}
            onDismiss={() => setVisible1(false)}
            onConfirm={({ hours, minutes }) => {
              setVisible1(false);
              setStartTime(moment({ hours, minutes }).format("hh:mm A"));
            }}
            hours={
              startTime !== ""
                ? parseInt(startTime.split(":")[0], 10)
                : parseInt(moment(new Date()).format("HH"), 10)
            }
            minutes={
              startTime !== ""
                ? parseInt(startTime.split(":")[1], 10)
                : parseInt(moment(new Date()).format("MM"), 10)
            }
            locale="en-GB"
          />
          <TextInput
            label="End Time"
            value={endTime}
            onFocus={() => setVisible2(true)}
            right={
              <TextInput.Icon icon="clock" onPress={() => setVisible2(true)} />
            }
            style={{ flex: 1 }}
          />
          <TimePickerModal
            visible={visible2}
            onDismiss={() => setVisible2(false)}
            onConfirm={({ hours, minutes }) => {
              setVisible2(false);
              setEndTime(moment({ hours, minutes }).format("hh:mm A"));
            }}
            hours={
              endTime !== ""
                ? parseInt(endTime.split(":")[0], 10)
                : parseInt(moment(new Date()).format("HH"), 10)
            }
            minutes={
              endTime !== ""
                ? parseInt(endTime.split(":")[1], 10)
                : parseInt(moment(new Date()).format("MM"), 10)
            }
            locale="en-GB"
          />
        </View>

        {/* Priority Selectors */}
        <View className="mt-6 flex-row items-center justify-between">
          <PrioritySelector current={priority} setPriority={setPriority} />
        </View>

        {/* Reminder */}
        <View className="flex-row justify-between items-center mt-10">
          <PText className="font-semibold text-xl">Reminder</PText>
          <Switch value={hasReminder} onValueChange={setHasReminder} />
        </View>

        {/* Submit Button */}
        <View className="mt-12 flex justify-center">
          <Button
            onPress={createTask}
            mode="contained"
            style={{ alignSelf: "center", width: "50%" }}
            compact
          >
            Create
          </Button>
        </View>
      </ScrollView>
    </View>
  );
};

export default CreateTask;
