import './App.css'

// Makes file handled by git lfs work in GitHub Pages
const sintelUrl =
  'https://media.githubusercontent.com/media/volcomix/optical-flow/main/src/assets/videos/sintel-2048-surround.mp4'

function App() {
  return (
    <div className="App">
      <video className="App-videoPreview" src={sintelUrl} controls />
    </div>
  )
}

export default App
