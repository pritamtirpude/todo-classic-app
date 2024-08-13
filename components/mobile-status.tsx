import { useTodoStore } from "@/utils/store";
import { cn } from "@/utils/util";
import React from "react";

function MobileStatus() {
  const { status, showAllTodos, activeTodos, completedTodos } = useTodoStore();
  return (
    <div className="mt-4 flex items-center justify-center gap-5 rounded-md bg-white py-4 shadow-lg dark:bg-dark-veryDarkDesaturatedBlue lg:hidden ">
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
  );
}

export default MobileStatus;
