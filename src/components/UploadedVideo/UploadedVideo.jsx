import { Routes, Route, useNavigate } from 'react-router-dom'
import axios from 'axios';
import uploadVideos from '../../assets/Images/Upload-video-preview.jpg';
import upload from '../../assets/Images/Icons/upload.svg';
import '../UploadedVideo/UploadedVideo.scss';

function UploadedVideo() {

const baseUrl = process.env.REACT_APP_BASE_URL;    
const navigate = useNavigate();


const handleVideoSubmit = async (event) => {
    event.preventDefault();
    
    try {
        const response = await axios.post(`${baseUrl}/videos`, {
            title: event.target.title.value, 
            description: event.target.description.value,
        });
        alert("video uploaded!");
        navigate("/");
    } catch (err) {
        alert("video could not upload");
    }
};

function handleClick (event) {
    const cancelSubmit = () => {
        navigate("/");
        alert("upload cancelled");
    }
    cancelSubmit();
}

    return ( 
        <div className='video-upload'>
            <h1 className='video-upload__title'>Upload Video</h1>
            <div className='flex-container'>
                <div className='video-upload__container'>
                    <label className='video-upload__label'>VIDEO THUMBNAIL</label>
                    <img className="video-upload__thumbnail" src={uploadVideos} alt="upload video thumbnail" />
                </div>
                <form  onSubmit={handleVideoSubmit} className='video__form'>
                    <label className='video-upload__label'>TITLE YOUR VIDEO</label>
                    <input className='video-upload__text' type='text' name='title' placeholder='Add a title to your video' required></input>
                    <label className='video-upload__label video-upload__label--padding'>ADD A VIDEO DESCRIPTION</label>
                    <textarea className='video-upload__text video-upload__text--height' name="description" placeholder='Add a description to your video' required></textarea>
                    <div className='button'> 
                        <div className='button__container'>
                            <button className='video-upload__button'>PUBLISH</button>
                            <img className='upload-btn' src={upload} alt="upload-icon"></img>
                        </div >
                        <button onClick={handleClick} className='cancel-btn'>CANCEL</button>
                    </div>
                </form>
            </div>
        </div>
    )   
}

export default UploadedVideo