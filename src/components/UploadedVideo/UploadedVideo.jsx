import { Routes, Route, useNavigate } from 'react-router-dom'
import uploadVideos from '../../assets/Images/Upload-video-preview.jpg';
import upload from '../../assets/Images/Icons/upload.svg';
import '../UploadedVideo/UploadedVideo.scss';
import HomePage from '../../pages/HomePage/HomePage';

function UploadedVideo() {

const navigate = useNavigate();

function handleClick(event) {
    alert("upload is complete");
    const navigateHome = () => {
    navigate('/');
    }
    navigateHome();
}

    return (
        <div className='video-upload'>
        <h1>Upload Video</h1>
        <div className='video-upload__container'>
            <label className='video-upload__label'>VIDEO THUMBNAIL</label>
            <img className="video-upload__thumbnail" src={uploadVideos} alt="upload video thumbnail" />
        </div>
        <form className='video__form'>
            <label className='video-upload__label'>TITLE YOUR VIDEO</label>
            <input className='video-upload__text' type='text' placeholder='Add a title to your video'></input>
            <label className='video-upload__label video-upload__label--padding'>ADD A VIDEO DESCRIPTION</label>
            <textarea className='video-upload__text video-upload__text--height' name="videoDescription" placeholder='Add a description to your video'></textarea>
        </form>
        <div className='button__container'>
            <button onClick={handleClick} className='video-upload__button'>PUBLISH</button>
            <img className='upload-btn' src={upload} alt="upload-icon"></img>
        </div>
        <p className='cancel-btn'>CANCEL</p>
        
        </div>
    )   
}

export default UploadedVideo