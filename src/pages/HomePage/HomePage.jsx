import { useState, useEffect } from "react";
import axios from 'axios';
import {useParams} from 'react-router-dom'; 
import Header from "../../components/Header/Header";
import SelectedVideo from "../../components/SelectedVideo/SelectedVideo";
import SelectedDescription from "../../components/SelectedDescription/SelectedDescription";
import Comments from "../../components/Comments/Comments";
import VideoList from "../../components/VideoList/VideoList";

// {"api_key":"138ed581-c157-41cd-9015-021a14082ced"}

function HomePage() {

const [videoData, setVideoData] = useState([])
const [selectedVideo, setSelectedVideo] = useState({})


const params = useParams();
// console.log("params:", params.id)

// useEffect hook to pull in all videos in the array
useEffect(() => {
  async function fetchVideos() {
      const response = await axios.get("https://project-2-api.herokuapp.com/videos?api_key=138ed581-c157-41cd-9015-021a14082ced");
      setVideoData(response.data);
  }
  fetchVideos();
}, []);

// second useEffect hook to use API to set selectedVideo
useEffect(() => {
  async function fetchVideo(){
    if (!params.id) {
      const response = await axios.get("https://project-2-api.herokuapp.com/videos?api_key=138ed581-c157-41cd-9015-021a14082ced");
    
      const selectedResponse = await axios.get(`https://project-2-api.herokuapp.com/videos/${response.data[0].id}?api_key=138ed581-c157-41cd-9015-021a14082ced`);
      setSelectedVideo(selectedResponse.data);
    } else {
      const selectedResponse = await axios.get(`https://project-2-api.herokuapp.com/videos/${params.id}?api_key=138ed581-c157-41cd-9015-021a14082ced`);
      setSelectedVideo(selectedResponse.data);
    }
  }
  fetchVideo();
}, [params.id]);

    return (
        <>
        <Header />
        <SelectedVideo selectedVideo={selectedVideo} />
        <div className='FlexParent'>
        <div className='FlexBox1'>
          <SelectedDescription selectedVideo={selectedVideo} />
          <Comments videoData={videoData} selectedVideo={selectedVideo} />
        </div>
        <div className='FlexBox2'>
          <VideoList videoData={videoData} selectedVideo={selectedVideo} />
        </div>
      </div>
        </>  
    )
}

export default HomePage