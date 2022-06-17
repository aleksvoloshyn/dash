import { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { ToastContainer, toast } from 'react-toastify'

import { AddButton } from './Buttons/Buttons'
import ToDoList from './ToDoList/ToDoList'
import TextField from '@mui/material/TextField'
import { todoItems } from './../../utils/mock/todoItems'

import 'react-toastify/dist/ReactToastify.css'
import styles from './todo.module.scss'

const Todo = () => {
  const [value, setValue] = useState('')
  const [toDo, setToDo] = useState(todoItems)
  const [tasks, setTasks] = useState(null)

  useEffect(() => {
    setTasks(tasksQuantity)
    console.log(tasks)
  })

  const data = [
    { name: 'To do', progress: tasks },
    { name: 'In Progress', progress: 5 },
    { name: 'Done', progress: 6 },
  ]

  const tasksQ = toDo.filter((i) => {
    return !i.isDone && !i.inProgress
  })
  const tasksQuantity = tasksQ.length
  // console.log(tasksQuantity)

  // add task handler
  const onAddClickHandler = () => {
    if (value) {
      setToDo([
        ...toDo,
        { id: uuidv4(), todo: value, isDone: false, inProgress: false },
      ])
      setValue('')
      notify()
    } else {
      error()
    }
    console.log(toDo)
  }

  //input value handler
  const onChangeHandler = (e) => {
    setValue(e.target.value)
  }

  //on inprog button click handler
  const onInProgresHandler = (id) => {
    const updatedData = [...toDo]
    const findedItem = updatedData.find((item) => item.id === id)
    findedItem.inProgress = true
    findedItem.isDone = false
    console.log(toDo)
    setToDo([...updatedData])
  }

  //on done button click handler
  const onDoneHandler = (id) => {
    const updatedData = [...toDo]
    const findedItem = updatedData.find((item) => item.id === id)
    findedItem.isDone = true
    findedItem.inProgress = false
    console.log(id)
    setToDo([...updatedData])
  }

  //on  delete button click handler
  const onDeleteHandler = (id) => {
    const updatedData = [...toDo]
    const filteredData = updatedData.filter((item) => item.id !== id)

    setToDo([...filteredData])
  }

  const notify = () =>
    toast.success('New task has been added!', {
      position: 'top-right',
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    })
  const error = () => toast.error('Input new task please')

  return (
    <div className={styles.todo}>
      <div className={styles.todoAddanel}>
        <TextField
          className={styles.todoInput}
          id="outlined-basic"
          label="Add task here"
          variant="outlined"
          size="small"
          value={value}
          onChange={onChangeHandler}
          name="todo"
        />

        <AddButton handler={onAddClickHandler} title={'Add ToDo'} />
      </div>

      <div className={styles.list}>
        {/* ToDo */}
        <ToDoList
          progress="todo"
          data={toDo}
          title="Todo list"
          onDone={onDoneHandler}
          onDelete={onDeleteHandler}
          onInProgress={onInProgresHandler}
        />
        {/* InProgress */}
        <ToDoList
          progress="inprogress"
          data={toDo}
          title="In progress"
          onDone={onDoneHandler}
          onDelete={onDeleteHandler}
        />
        {/* Done */}
        <ToDoList
          progress="done"
          data={toDo}
          title="Done list"
          onDelete={onDeleteHandler}
        />
      </div>

      <div className={styles.bar}></div>

      <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar={true}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      ></ToastContainer>
    </div>
  )
}

export default Todo
