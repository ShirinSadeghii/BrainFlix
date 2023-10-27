import { useState } from "react";
import axios from 'axios';
import {Link} from 'react-router-dom'; 
import VideoDetailsJson from '../../data/video-details.json';
import Header from "../../components/Header/Header";
import SelectedVideo from "../../components/SelectedVideo/SelectedVideo";
import SelectedDescription from "../../components/SelectedDescription/SelectedDescription";
import Comments from "../../components/Comments/Comments";
import VideoList from "../../components/VideoList/VideoList";



function HomePage() {

const [videoData, setVideoData] = useState(VideoDetailsJson)
const [selectedVideo, setSelectedVideo] = useState(VideoDetailsJson[0])

function handleVideoSelection(id) {
    const foundVideo = videoData.find((video) => video.id === id);
    setSelectedVideo(foundVideo);
  }

    return (
        <>
        <Header />
        <SelectedVideo selectedVideo={selectedVideo} />
        <div className='FlexParent'>
        <div className='FlexBox1'>
          <SelectedDescription selectedVideo={selectedVideo} />
          <Comments videoData={videoData} selectedVideo={selectedVideo} handleVideoSelection={handleVideoSelection}  />
        </div>
        <div className='FlexBox2'>
          <VideoList videoData={videoData} selectedVideo={selectedVideo} handleVideoSelection={handleVideoSelection} />
        </div>
      </div>
        </>
        
    )
}

export default HomePage