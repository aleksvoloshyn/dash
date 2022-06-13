import { Routes, Route } from 'react-router-dom'
import Calendar from '../../pages/Calendar'
import NotFoundPage from '../../pages/NotFoundPage'
import styles from './board.module.scss'

const Board = () => {
  return (
    <div className={styles.board}>
      <Routes>
        <Route path="Calendar" element={<Calendar />}></Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  )
}

export default Board
