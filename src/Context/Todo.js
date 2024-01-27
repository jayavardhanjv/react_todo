import React, { useContext } from "react"

export const TodoComponent= React.createContext({
    todos:{
        id:1,
        todo: "hello",
        completed: false
    },
    addTodo:(todo)=>{},
    toggleComplete:(id)=>{},
    editeTodo:(id,todo)=>{},
    deleteTodo:(id)=>{},
})

export const TodoProvider = TodoComponent.Provider

export const useTodo = ()=>{return useContext(TodoComponent)}