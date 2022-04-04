import classNames from 'classnames'
import classes from './InputVideos.module.css'

type InputVideosProps = {
  className?: string
}

const InputVideos = ({ className }: InputVideosProps) => (
  <ul className={classNames(classes.root, className)} aria-label="Input videos">
    <li>Sintel</li>
  </ul>
)

export default InputVideos
