import { Routes, Route } from 'react-router-dom'
import Template from '../../pages/Template'
import Calendar from '../../pages/Calendar'
import Todo from '../../pages/Todo'
import NotFoundPage from '../../pages/NotFoundPage'
import styles from './board.module.scss'

const Board = () => {
  return (
    <div className={styles.board}>
      <Routes>
        <Route path="Template" element={<Template />}></Route>

        <Route path="Todo" element={<Todo />}></Route>
        <Route path="Calendar" element={<Calendar />}></Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  )
}

export default Board
