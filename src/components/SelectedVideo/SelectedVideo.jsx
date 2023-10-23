import '../SelectedVideo/SelectedVideo.scss';


function SelectedVideo(props) {

    return (
        <div>
            <div className='main'>
                <video poster={props.selectedVideo.image} alt="Now Playing Video" className='hero-video' controls/>
            </div>
            
      </div>
    );
}

export default SelectedVideo;