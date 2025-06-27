import React, { useState } from 'react'
import { Card } from './Card'
import { v4 as uuid } from 'uuid'

type Task = {
  name: string
  id: string
}

function Home() {
  const [todoList, setTodoList] = useState<Task[]>([])
  const [task, setTask] = useState('')
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value)
  }
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const newTask: Task = {
      name: task,
      id: uuid(),
    }

    setTodoList([...todoList, newTask])
    setTask('')
  }
  return (
    <div className="flex flex-col">
      <form onSubmit={handleSubmit}>
        <label className="mx-2" htmlFor="task">
          Task
        </label>
        <input
          className="bg-gray-300 border-1 ml-0.5 mr-2"
          onChange={handleChange}
          type="text"
          name="task"
          id="task"
          value={task}
        />
        <button className=" bg-amber-400 hover:not-focus:bg-amber-500 rounded py-1 px-1 shadow-lg">
          Add Task
        </button>
      </form>
      <div className="flex flex-row justify-evenly mt-10 gap-3">
        <Card>
          <h1 className="font-bold"> To Do list</h1>
          <ul className="py-2">
            {todoList.map((task) => {
              return <li key={task.id}>{task.name}</li>
            })}
          </ul>
        </Card>
        <Card>
          <h1> In Progress</h1>
        </Card>
        <Card>
          <h1> Complete</h1>
        </Card>
      </div>
    </div>
  )
}

export default Home
