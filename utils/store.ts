import { create } from "zustand";
import { persist } from "zustand/middleware";

export type TodoType = {
  id: number;
  text: string;
  completed: boolean;
};

type TodoStore = {
  todos: TodoType[];
  addTodo: (text: string) => void;
  completeTodo: (id: number) => void;
  activeTodos: () => void;
  showAllTodos: () => void;
  completedTodos: () => void;
  clearCompleted: () => void;
  deleteTodo: (id: number) => void;
  status: "all" | "active" | "completed";
};

export const useTodoStore = create<TodoStore>()(
  persist(
    (set, get) => ({
      todos: [],
      status: "all",
      addTodo: (text: string) => {
        const newTodo: TodoType = {
          id: Date.now(),
          text,
          completed: false,
        };

        set((state) => ({
          todos: [...state.todos, newTodo],
        }));
      },
      completeTodo: (id: number) => {
        set((state) => ({
          todos: state.todos.map((todo) =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
          ),
        }));
      },
      activeTodos: () => {
        set((state) => ({
          status: "active",
        }));
      },
      completedTodos: () => {
        set((state) => ({
          status: "completed",
        }));
      },
      showAllTodos: () => {
        set((state) => ({
          status: "all",
        }));
      },
      deleteTodo: (id: number) => {
        set((state) => ({
          todos: state.todos.filter((todo) => todo.id !== id),
        }));
      },
      clearCompleted: () => {
        set((state) => ({
          todos: state.todos.filter((todo) => !todo.completed),
          status: "all",
        }));
      },
    }),
    {
      name: "todo-store",
    }
  )
);
