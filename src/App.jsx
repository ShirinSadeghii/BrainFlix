import logo from './assets/Images/BrainFlix-logo.svg';
import '../src/App.scss';
import { useState } from 'react';
import VideoDetailsJson from './data/video-details.json';
import VideosJson from './data/videos.json';
import { setSelectionRange } from '@testing-library/user-event/dist/utils';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import UploadPage from './pages/UploadPage/UploadPage';




function App() {

const [videoData, setVideoData] = useState(VideoDetailsJson)
const [selectedVideo, setSelectedVideo] = useState(VideoDetailsJson[0])

function handleVideoSelection(id) {
  const foundVideo = videoData.find((video) => video.id === id);
  setSelectedVideo(foundVideo);
}

  return (
    <div className='App'>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/upload' element={<UploadPage />} />
      </Routes>
      {/* <SelectedVideo selectedVideo={selectedVideo} /> */}
      {/* <div className='FlexParent'>
        <div className='FlexBox1'>
          <SelectedDescription selectedVideo={selectedVideo} />
          <Comments videoData={videoData} selectedVideo={selectedVideo} handleVideoSelection={handleVideoSelection}  />
        </div>
        <div className='FlexBox2'>
          <VideoList videoData={videoData} selectedVideo={selectedVideo} handleVideoSelection={handleVideoSelection} />
        </div>
      </div> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
