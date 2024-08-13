"use client";

import { TodoType, useTodoStore } from "@/utils/store";
import TodoStatus from "./todo-status";
import { cn } from "@/utils/util";
import { Fragment, useEffect, useState } from "react";
import iconCross from "@/public/assets/images/icon-cross.svg";
import Image from "next/image";
import MobileStatus from "./mobile-status";
import { AnimatePresence, Reorder, motion } from "framer-motion";

function TodoList() {
  const [filteredTodos, setFilteredTodos] = useState<TodoType[]>([]);
  const { todos, completeTodo, status, deleteTodo } = useTodoStore();

  useEffect(() => {
    if (status === "active") {
      const activeTodos = todos.filter((todo) => !todo.completed);
      setFilteredTodos(activeTodos);
    } else if (status === "completed") {
      const completedTodos = todos.filter((todo) => todo.completed);
      setFilteredTodos(completedTodos);
      if (completedTodos.length === 0) {
        setFilteredTodos(todos);
      }
    } else {
      setFilteredTodos(todos);
    }
  }, [status, todos]);

  return (
    <Fragment>
      <div className="mt-6  rounded-md bg-white shadow-lg dark:bg-dark-veryDarkDesaturatedBlue">
        {filteredTodos?.length > 0 && (
          <Reorder.Group
            axis="y"
            values={filteredTodos}
            onReorder={setFilteredTodos}
            className="overflow-hidden"
          >
            <AnimatePresence>
              {filteredTodos?.map((todo) => (
                <Reorder.Item
                  initial={{ opacity: 0, y: -30 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.25,
                    },
                  }}
                  exit={{ opacity: 0, y: -30, transition: { duration: 0.25 } }}
                  value={todo}
                  key={todo.id}
                  className="group/item relative flex cursor-pointer items-center gap-6 border-b border-x-light-veryGrayishBlue px-6 py-5 dark:border-dark-ultraDarkGrayishBlue"
                >
                  <span
                    className={cn(
                      "size-6 rounded-full flex transition-all justify-center items-center",
                      todo.completed
                        ? "bg-gradient-to-br from-gradientOne to-gradientTwo"
                        : "border border-light-veryGrayishBlue dark:border-dark-ultraDarkGrayishBlue hover:border-gradient-to-br from-gradientOne to-gradientTwo"
                    )}
                    onClick={() => completeTodo(todo.id)}
                  >
                    {todo.completed && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="11"
                        height="9"
                      >
                        <motion.path
                          fill="none"
                          stroke="#FFF"
                          strokeWidth="2"
                          d="M1 4.304L3.696 7l6-6"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 0.5 }}
                        />
                      </svg>
                    )}
                  </span>
                  <span
                    className={cn(
                      "inline-block capitalize text-xs lg:text-lg text-light-veryDarkGrayishBlue dark:text-dark-lightGrayishBlue",
                      todo.completed
                        ? "line-through text-light-lightGrayishBlue dark:text-dark-veryDarkGrayishBlue"
                        : ""
                    )}
                    onClick={() => completeTodo(todo.id)}
                  >
                    {todo.text}
                  </span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      deleteTodo(todo.id);
                    }}
                    className="invisible absolute right-6 group-hover/item:visible"
                  >
                    <Image src={iconCross} alt="cross icon" />
                  </button>
                </Reorder.Item>
              ))}
            </AnimatePresence>
          </Reorder.Group>
        )}
        <TodoStatus />
      </div>
      {filteredTodos?.length > 0 && <MobileStatus />}
    </Fragment>
  );
}

export default TodoList;
