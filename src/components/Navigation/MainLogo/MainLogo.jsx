import styles from './mainlogo.module.scss'
import logo from './../../../images/logo.png'

const MainLogo = () => {
  return (
    <div className={styles.mainLogo}>
      <img src={logo} alt="logo" className={styles.mainLogoLogo} />
      <h1 className={styles.mainLogoTitle}>Alex</h1>
    </div>
  )
}

export default MainLogo
