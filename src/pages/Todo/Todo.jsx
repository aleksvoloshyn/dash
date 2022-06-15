import TextField from '@mui/material/TextField'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import styles from './todo.module.scss'

let todoItems = [
  {
    id: uuidv4(),
    todo: 'to do morning exercises',
    isDone: false,
    inProgress: false,
  },
  { id: uuidv4(), todo: 'clean the window', isDone: false, inProgress: true },
  { id: uuidv4(), todo: 'find cat', isDone: true, inProgress: false },
  { id: uuidv4(), todo: 'cook fish', isDone: true, inProgress: false },
  { id: uuidv4(), todo: 'call Johnne', isDone: false, inProgress: false },
  { id: uuidv4(), todo: 'buy bread', isDone: false, inProgress: false },
  { id: uuidv4(), todo: 'buy meat', isDone: false, inProgress: false },
]

const Todo = () => {
  const [value, setValue] = useState('')
  const [toDo, setToDo] = useState(todoItems)

  const onClickHandler = () => {
    if (value) {
      setToDo([
        ...toDo,
        { id: uuidv4(), todo: value, isDone: false, inProgress: false },
      ])
      setValue('')
    }
    console.log(toDo)
  }

  const onChangeHandler = (e) => {
    setValue(e.target.value)
  }

  const onInProgresHandler = (id) => {
    const updatedData = [...toDo]
    const findedItem = updatedData.find((item) => item.id === id)
    findedItem.inProgress = true
    console.log(toDo)
    setToDo([...updatedData])
  }

  const onDoneHandler = (id) => {
    const updatedData = [...toDo]
    const findedItem = updatedData.find((item) => item.id === id)
    findedItem.isDone = true
    console.log(toDo)
    setToDo([...updatedData])
  }

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
        <button onClick={onClickHandler} className={styles.addTodoButton}>
          Add ToDo
        </button>
      </div>

      <div className={styles.list}>
        {' '}
        {/* notDone */}
        <div className={styles.items}>
          <h2>Todo list: </h2>
          <ul className={styles.toDoList}>
            {toDo.map((item) => {
              if (!item.isDone && !item.inProgress) {
                return (
                  <li key={uuidv4()} className={styles.toDoItem}>
                    {item.todo}{' '}
                    <div className={styles.buttonGroup}>
                      {' '}
                      <button
                        className={styles.inProgressButton}
                        onClick={() => onInProgresHandler(item.id)}
                      >
                        in progress
                      </button>
                      <button
                        className={styles.doneButton}
                        onClick={() => onDoneHandler(item.id)}
                      >
                        done
                      </button>
                    </div>
                  </li>
                )
              }
            })}
          </ul>
        </div>
        {/* inProgress */}
        <div className={styles.items}>
          <h2>In progress: </h2>
          <ul className={styles.toDoList}>
            {toDo.map((item) => {
              if (item.inProgress) {
                return <li key={uuidv4()}>{item.todo}</li>
              }
            })}
          </ul>
        </div>
        {/* isDone */}
        <div className={styles.items}>
          <h2>Done list: </h2>
          <ul className={styles.toDoList}>
            {toDo.map((item) => {
              if (item.isDone && !item.inProgress) {
                return <li key={uuidv4()}>{item.todo}</li>
              }
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Todo
