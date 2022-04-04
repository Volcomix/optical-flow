import classNames from 'classnames'
import classes from './InputVideoPreview.module.css'

type InputVideoPreviewProps = {
  className?: string
}

const videosUrl =
  'https://github.com/volcomix/optical-flow/releases/download/assets/videos/v1.0.0'

const InputVideoPreview = ({ className }: InputVideoPreviewProps) => (
  <video
    className={classNames(classes.root, className)}
    aria-label="Input video preview"
    src={`${videosUrl}/sintel-2048-surround.mp4`}
    controls
  />
)

export default InputVideoPreview
