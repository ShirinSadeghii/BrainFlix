import { Routes, Route, useNavigate } from 'react-router-dom'
import axios from 'axios';
import uploadVideos from '../../assets/Images/Upload-video-preview.jpg';
import upload from '../../assets/Images/Icons/upload.svg';
import '../UploadedVideo/UploadedVideo.scss';

function UploadedVideo() {

const navigate = useNavigate();

const handleVideoSubmit = async (event) => {
    event.preventDefault();
    
    try {
        const response = await axios.post(`http://localhost:8080/videos`, {
            title: event.target.title.value, 
            description: event.target.description.value,
        });
        console.log(event.target.description.value);
        console.log(response);
        alert("video uploaded!");
        navigate("/");
    } catch (err) {
        alert("video could not upload");
    }
};

// function handleClick(event) {
//     alert("upload is complete");
//     const navigateHome = () => {
//     navigate('/');
//     }
//     navigateHome();
// }

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
                    <input className='video-upload__text' type='text' name='title' placeholder='Add a title to your video'></input>
                    <label className='video-upload__label video-upload__label--padding'>ADD A VIDEO DESCRIPTION</label>
                    <textarea className='video-upload__text video-upload__text--height' name="description" placeholder='Add a description to your video'></textarea>
                    <button className='video-upload__button'>PUBLISH</button>
                </form>
            </div>
            
            <div className='button'>
                 <div className='button__container'>
                    <button className='video-upload__button'>PUBLISH</button>
                    <img className='upload-btn' src={upload} alt="upload-icon"></img>
                </div>
                <p className='cancel-btn'>CANCEL</p>
            </div>
        </div>
    )   
}

export default UploadedVideo