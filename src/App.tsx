import classes from './App.module.css'

const videosUrl =
  'https://github.com/volcomix/optical-flow/releases/download/assets/videos/v1.0.0'

function App() {
  return (
    <div className={classes.root}>
      <ul className={classes.inputVideos} aria-label="Input videos">
        <li>Sintel</li>
      </ul>
      <video
        className={classes.inputVideoPreview}
        aria-label="Input video preview"
        src={`${videosUrl}/sintel-2048-surround.mp4`}
        controls
      />
    </div>
  )
}

export default App
