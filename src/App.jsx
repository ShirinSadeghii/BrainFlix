import logo from './assets/Images/BrainFlix-logo.svg';
import '../src/App.scss'
import Header from './components/Header/Header';
import SelectedVideo from './components/SelectedVideo/SelectedVideo';
import VideoList from './components/VideoList/VideoList';
import Comments from './components/Comments/Comments';
import { useState } from 'react';
import VideosJson from './data/video-details.json';
import { setSelectionRange } from '@testing-library/user-event/dist/utils';



function App() {

const [videoData, setVideoData] = useState(VideosJson)
const [selectedVideo, setSelectedVideo] = useState(VideosJson[0])

// console.log("selectedVideo: ", selectedVideo);
// console.log(selectedVideo.image);
function handleVideoSelection(id) {
  const foundVideo = videoData.find((video) => video.id === id);
  setSelectedVideo(foundVideo);
}

  return (
    <div className='App'>
      <Header />
      <SelectedVideo selectedVideo={selectedVideo} />
      <Comments videoData={videoData} selectedVideo={selectedVideo} handleVideoSelection={handleVideoSelection}  />
      <VideoList videoData={videoData} selectedVideo={selectedVideo} handleVideoSelection={handleVideoSelection} />
    </div>
  );
}

export default App;
