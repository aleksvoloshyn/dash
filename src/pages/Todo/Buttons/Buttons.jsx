import styles from './buttons.module.scss'

const AddButton = ({ handler, title }) => {
  return (
    <button onClick={() => handler()} className={styles.addTodoButton}>
      {title}
    </button>
  )
}

const DeletelButton = ({ handler, id, title }) => {
  return (
    <button onClick={() => handler(id)} className={styles.deleteButton}>
      {title}
    </button>
  )
}

const InProgressButton = ({ handler, id, title }) => {
  return (
    <button onClick={() => handler(id)} className={styles.inProgressButton}>
      {title}
    </button>
  )
}
const DoneButton = ({ handler, id, title }) => {
  return (
    <button onClick={() => handler(id)} className={styles.doneButton}>
      {title}
    </button>
  )
}

export { AddButton, DeletelButton, InProgressButton, DoneButton }
