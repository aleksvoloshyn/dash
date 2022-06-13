import PropTypes from 'prop-types'
import styles from './exampleComponent.module.scss'

const ExampleComponent = ({ numb }) => {
  return (
    <div className={styles.exampleComponent}>
      exampleComponent number {numb}
    </div>
  )
}

ExampleComponent.propTypes = {
  numb: PropTypes.number,
}

export default ExampleComponent
