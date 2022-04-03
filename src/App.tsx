import './App.css'

const videosUrl =
  'https://github.com/volcomix/optical-flow/releases/download/assets/videos/v1.0.0'

function App() {
  return (
    <div className="App">
      <video
        className="App-videoPreview"
        aria-label="Input"
        src={`${videosUrl}/sintel-2048-surround.mp4`}
        controls
      />
    </div>
  )
}

export default App
