import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { TaskDTO } from "../../models/task/TaskSchema";
import { DummyTaskData } from "../../utils/data";
import { RootState } from "../store";

const initialState: TaskDTO[] = DummyTaskData;

export const TaskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<TaskDTO>) => {
      state.push(action.payload);
    },
    updateTask: (state, action: PayloadAction<TaskDTO>) => {
      const index = state.findIndex((task) => task.id === action.payload.id);
      state[index] = action.payload;
    },
    deleteTask: (state, action: PayloadAction<string>) => {
      return state.filter((task) => task.id !== action.payload);
    },
  },
});

export const { addTask, updateTask, deleteTask } = TaskSlice.actions;

export default TaskSlice.reducer;

export const selectAllTasks = (state: RootState) => state.tasks;
export const selectSingleTask = (state: RootState, id: string) =>
  state.tasks.find((task) => task.id === id);
