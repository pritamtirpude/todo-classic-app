"use client";

import { useTodoStore } from "@/utils/store";
import { cn } from "@/utils/util";

function TodoStatus() {
  const {
    clearCompleted,
    status,
    showAllTodos,
    activeTodos,
    completedTodos,
    todos,
  } = useTodoStore();

  const itemsLeft = todos?.filter((item) => !item.completed);
  return (
    <div className="flex items-center justify-between  px-6 py-5">
      <span className="inline-block text-sm text-light-darkGrayishBlue dark:text-dark-darkGrayishBlue">
        {itemsLeft.length} items left
      </span>
      <div className="hidden items-center gap-5 lg:visible lg:flex">
        <button
          onClick={showAllTodos}
          className={cn(
            "text-sm font-bold capitalize  transition-all hover:text-light-veryDarkGrayishBlue  dark:hover:text-light-veryGrayishBlue",
            status === "all"
              ? "text-brightBlue"
              : "text-light-darkGrayishBlue dark:text-dark-darkGrayishBlue"
          )}
        >
          all
        </button>
        <button
          onClick={activeTodos}
          className={cn(
            "text-sm font-bold capitalize  transition-all hover:text-light-veryDarkGrayishBlue dark:hover:text-light-veryGrayishBlue",
            status === "active"
              ? "text-brightBlue"
              : "text-light-darkGrayishBlue dark:text-dark-darkGrayishBlue "
          )}
        >
          active
        </button>
        <button
          onClick={completedTodos}
          className={cn(
            "text-sm font-bold capitalize  transition-all hover:text-light-veryDarkGrayishBlue dark:hover:text-light-veryGrayishBlue",
            status === "completed"
              ? "text-brightBlue"
              : "text-light-darkGrayishBlue dark:text-dark-darkGrayishBlue"
          )}
        >
          completed
        </button>
      </div>
      <button
        onClick={clearCompleted}
        className="text-xs font-bold capitalize text-light-darkGrayishBlue transition-all hover:text-light-veryDarkGrayishBlue dark:text-dark-darkGrayishBlue dark:hover:text-light-veryGrayishBlue lg:text-sm"
      >
        clear completed
      </button>
    </div>
  );
}

export default TodoStatus;
