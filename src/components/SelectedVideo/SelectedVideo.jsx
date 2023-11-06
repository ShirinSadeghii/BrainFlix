import '../SelectedVideo/SelectedVideo.scss';


function SelectedVideo(props) {

    const baseUrl = process.env.REACT_APP_BASE_URL;
    return (
        <div>
            <div className='main'>
                <video poster={`${baseUrl}/images/${props.selectedVideo.image}`} alt="Now Playing Video" className='hero-video' controls/>
            </div>
            
      </div>
    );
}

export default SelectedVideo;