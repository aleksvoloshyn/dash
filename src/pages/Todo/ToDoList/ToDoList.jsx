import { v4 as uuidv4 } from 'uuid'
import {
  DeletelButton,
  InProgressButton,
  DoneButton,
} from './../Buttons/Buttons'
import styles from './toDoList.module.scss'

const ToDoList = ({
  data,
  title,
  onDone,
  onDelete,
  onInProgress,
  progress,
}) => {
  if (progress === 'todo') {
    return (
      <div className={styles.items}>
        <h2>{title}: </h2>
        <ul className={styles.toDoList}>
          {data.map((item) => {
            return (
              !item.isDone &&
              !item.inProgress && (
                <li key={uuidv4()} className={styles.toDoItem}>
                  {item.todo}{' '}
                  <div className={styles.buttonGroup}>
                    <InProgressButton
                      handler={onInProgress}
                      id={item.id}
                      title="in progr"
                    />
                    <DoneButton handler={onDone} id={item.id} title="done" />
                    <DeletelButton
                      handler={onDelete}
                      id={item.id}
                      title="del"
                    />
                  </div>
                </li>
              )
            )
          })}
        </ul>
      </div>
    )
  }

  if (progress === 'inprogress') {
    return (
      <div className={styles.items}>
        <h2>{title}: </h2>
        <ul className={styles.toDoList}>
          {data.map((item) => {
            return (
              item.inProgress && (
                <li key={uuidv4()} className={styles.toDoItem}>
                  {item.todo}{' '}
                  <div className={styles.buttonGroup}>
                    <DoneButton handler={onDone} id={item.id} title="done" />
                    <DeletelButton
                      handler={onDelete}
                      id={item.id}
                      title="del"
                    />
                  </div>
                </li>
              )
            )
          })}
        </ul>
      </div>
    )
  }

  if (progress === 'done') {
    return (
      <div className={styles.items}>
        <h2>{title}: </h2>
        <ul className={styles.toDoList}>
          {data.map((item) => {
            return (
              item.isDone &&
              !item.inProgress && (
                <li key={uuidv4()} className={styles.toDoItem}>
                  {item.todo}{' '}
                  <div className={styles.buttonGroup}>
                    <DeletelButton
                      handler={onDelete}
                      id={item.id}
                      title="del"
                    />
                  </div>
                </li>
              )
            )
          })}
        </ul>
      </div>
    )
  }
}

export default ToDoList
