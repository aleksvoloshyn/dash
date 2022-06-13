import styles from './title.module.scss'

const Title = ({ level, title }) => {
  let TitleTag = `h${level}`
  return <TitleTag>{title}</TitleTag>
}

export default Title
