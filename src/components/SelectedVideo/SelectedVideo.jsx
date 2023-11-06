import '../SelectedVideo/SelectedVideo.scss';


function SelectedVideo(props) {

    const baseUrl = "http://localhost:8080";
    return (
        <div>
            <div className='main'>
                <video poster={`${baseUrl}/images/${props.selectedVideo.image}`} alt="Now Playing Video" className='hero-video' controls/>
            </div>
            
      </div>
    );
}

export default SelectedVideo;