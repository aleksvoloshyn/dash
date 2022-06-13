import Container from '../Container/Container'
import Navigation from '../Navigation'
import Toolbar from '../Toolbar'
import Board from '../Board'
// import ExampleComponent from '../ExampleComponent'

import styles from './app.module.scss'

function App() {
  return (
    <Container>
      {/* <ExampleComponent numb={5} /> */}
      {/* <div className={styles.App}>my react app template</div> */}
      <div className={styles.wrapper}>
        {' '}
        <Navigation />
        <div className={styles.toolsWithBoard}>
          <Toolbar />
          <Board />
        </div>
      </div>
    </Container>
  )
}

export default App
