import "react-native-get-random-values";

import React, { useState } from "react";
import { ScrollView, View } from "react-native";
import {
  Button,
  HelperText,
  Menu,
  Switch,
  TextInput,
} from "react-native-paper";
import { DatePickerInput } from "react-native-paper-dates";

import { router } from "expo-router";
import moment from "moment";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import PrioritySelector from "../../../../src/components/complex/prioritySelector/PrioritySelector";
import SecondaryHeader from "../../../../src/components/modular/molecular/headers/SecondaryHeader";
import PText from "../../../../src/components/modular/molecular/texts/PText";
import { TaskDTO } from "../../../../src/models/task/TaskSchema";
import { addTask } from "../../../../src/redux/slices/TaskSlice";

type Props = object;

const CreateTask = (props: Props) => {
  // Redux
  const dispatch = useDispatch();

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

  // Type Suggestion Menu
  const [showMenu, setShowMenu] = React.useState(false);
  const [menuAnchor, setMenuAnchor] = React.useState<{
    x: number;
    y: number;
  }>();

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
        startDate: startDate
          ? moment(startDate).format("MMM Do YY")
          : undefined,
        endDate: endDate ? moment(endDate).format("MMM Do YY") : undefined,
        startTime,
        endTime,
        hasReminder,
        subTasks: [],
        notes: [],
        id: uuidv4(),
      };
      console.log({ data });

      dispatch(addTask(data));

      router.push("app/home");
    }
  };

  return (
    <View className="flex-1">
      <View className="mx-6 flex-1">
        <SecondaryHeader title="Create Task" />

        {/* Form */}
        <ScrollView className="mt-12 flex-1">
          <KeyboardAwareScrollView extraHeight={200}>
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
              <View
                className="flex-1"
                onLayout={(event) => {
                  event.target.measure((x, y, width, height, pageX, pageY) => {
                    setMenuAnchor({
                      x: pageX,
                      y: y + pageY + height,
                    });
                  });
                }}
              >
                <TextInput
                  label="Type"
                  value={type}
                  onChangeText={setType}
                  onFocus={() => setShowMenu(true)}
                />
                <Menu
                  visible={showMenu}
                  onDismiss={() => setShowMenu(false)}
                  anchor={{ x: menuAnchor?.x ?? 0, y: menuAnchor?.y ?? 0 }}
                  anchorPosition="bottom"
                >
                  {["Personal", "Work", "Study", "Other"].map((item, index) => (
                    <Menu.Item
                      key={index}
                      onPress={() => {
                        setType(item);
                        setShowMenu(false);
                      }}
                      title={item}
                    />
                  ))}
                  <Menu.Item
                    key={5}
                    onPress={() => {
                      setType(type);
                      setShowMenu(false);
                    }}
                    title={`+ ${type !== "" ? type : "Your Type"}`}
                  />
                </Menu>
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
                value={
                  !endDate ? (startDate ? startDate : new Date()) : endDate
                }
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
                  <TextInput.Icon
                    icon="clock"
                    onPress={() => setVisible1(true)}
                  />
                }
                style={{ flex: 1 }}
              />
              <TextInput
                label="End Time"
                value={endTime}
                onFocus={() => setVisible2(true)}
                right={
                  <TextInput.Icon
                    icon="clock"
                    onPress={() => setVisible2(true)}
                  />
                }
                style={{ flex: 1 }}
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
          </KeyboardAwareScrollView>
        </ScrollView>
      </View>
    </View>
  );
};

export default CreateTask;
