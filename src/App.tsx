import classes from './App.module.css'
import InputVideoPreview from './components/InputVideoPreview'
import InputVideos from './components/InputVideos'

const App = () => (
  <div className={classes.root}>
    <InputVideos className={classes.inputVideos} />
    <InputVideoPreview className={classes.inputVideoPreview} />
  </div>
)

export default App
