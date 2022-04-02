import './App.css'
import sintel from './assets/videos/sintel-2048-surround.mp4'

function App() {
  return (
    <div className="App">
      <video className="App-videoPreview" src={sintel} controls />
    </div>
  )
}

export default App
