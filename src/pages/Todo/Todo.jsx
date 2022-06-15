import { useState } from 'react'
import styles from './todo.module.scss'

const Todo = () => {
  const [todo, setTodo] = useState([])

  const inputHandler = (e) => {
    setTodo(e.target.value)
  }

  return (
    <div className={styles.todo}>
      todo: {todo}
      <label htmlFor={1} className={styles.searchLabel}>
        <input
          className={styles.todoInput}
          type="text"
          placeholder="Add task here"
          value={todo}
          onChange={inputHandler}
          name="todo"
          id={1}
          //name такой как в стейте
        />
      </label>
      <button className={styles.addButton}>Add ToDo</button>
    </div>
  )
}

export default Todo
