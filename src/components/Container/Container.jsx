import styles from './container.module.scss'
// import styled from 'styled-components'

const Container = ({ children }) => {
  return <div className={styles.container}>{children}</div>
}

export default Container
