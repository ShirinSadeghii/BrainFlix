import { useState, useEffect } from "react";
import axios from 'axios';
import {useParams} from 'react-router-dom'; 
import Header from "../../components/Header/Header";
import SelectedVideo from "../../components/SelectedVideo/SelectedVideo";
import SelectedDescription from "../../components/SelectedDescription/SelectedDescription";
import Comments from "../../components/Comments/Comments";
import VideoList from "../../components/VideoList/VideoList";

function HomePage() {

const [videoData, setVideoData] = useState([])
const [selectedVideo, setSelectedVideo] = useState({})

const baseUrl = "http://localhost:8080";
// const baseUrl = process.env.REACT_APP_BASE_URL;


const params = useParams();

// useEffect hook to pull in all videos in the array
useEffect(() => {
  async function fetchVideos() {
      try {
        const response = await axios.get(`${baseUrl}/videos`);
        setVideoData(response.data);
      } catch (error) {
        console.log(error);
      }
  }
  fetchVideos();
}, []);


// second useEffect hook to use API to set selectedVideo
useEffect(() => {
  async function fetchVideo(){
    try {
      if (!params.id) {
        const response = await axios.get(`${baseUrl}/videos`);
      
        const selectedResponse = await axios.get(`${baseUrl}/videos/${response.data[0].id}`);
        setSelectedVideo(selectedResponse.data);
      } else {
        const selectedResponse = await axios.get(`${baseUrl}/videos/${params.id}`);
        setSelectedVideo(selectedResponse.data);
      }
    } catch (error){
      console.log(error);
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