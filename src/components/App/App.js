import Container from '../Container/Container'
import Navigation from '../Navigation'
// import ExampleComponent from '../ExampleComponent'

import styles from './app.module.scss'

function App() {
  return (
    <Container>
      {/* <ExampleComponent numb={5} /> */}
      {/* <div className={styles.App}>my react app template</div> */}
      <Navigation />
    </Container>
  )
}

export default App
