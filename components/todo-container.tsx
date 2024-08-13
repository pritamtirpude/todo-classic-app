"use client";

import { useTodoStore } from "@/utils/store";
import FormInput from "./form-input";
import TodoList from "./todo-list";

function TodoContainer() {
  const { todos } = useTodoStore();

  return (
    <div className="mb-12 mt-7 lg:mt-10">
      <FormInput />
      <TodoList />
      {todos.length > 0 && (
        <div className="mt-12 flex items-center justify-center">
          <p className="text-sm text-light-darkGrayishBlue dark:text-dark-veryDarkGrayishBlue">
            Drag and drop to reorder list
          </p>
        </div>
      )}
    </div>
  );
}

export default TodoContainer;
