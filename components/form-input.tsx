"use client";

import { useTodoStore } from "@/utils/store";
import { FormEvent, useState } from "react";

function FormInput() {
  const [todo, setTodo] = useState("");
  const { addTodo } = useTodoStore();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (todo) {
      addTodo(todo);
      setTodo("");
    }
  };
  return (
    <form onSubmit={handleSubmit} className="relative">
      <span className="absolute left-9 top-1/2  inline-block size-6 -translate-x-1/2 -translate-y-1/2 rounded-full border border-light-veryGrayishBlue dark:border-dark-ultraDarkGrayishBlue"></span>
      <input
        type="text"
        onChange={(e) => setTodo(e.target.value)}
        value={todo}
        placeholder="Create a new todo..."
        className="w-full rounded-md px-[70px] py-4 text-sm text-black shadow-lg focus:outline-none dark:bg-dark-veryDarkDesaturatedBlue dark:text-white lg:py-5 lg:text-lg"
      />
    </form>
  );
}

export default FormInput;
