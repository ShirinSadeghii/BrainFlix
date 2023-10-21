import '../SelectedVideo/SelectedVideo.scss';

function SelectedVideo(props) {
// console.log("props: ", props);


    return (
        <>
            <div>
                <img src={props.selectedVideo.image} alt="Now Playing Video" className='hero-video'/>
            </div>
            <div>
                <h1 className='hero__title'>{props.selectedVideo.title}</h1>
                <div>
                    <h3 className='hero__sub-title'>By {props.selectedVideo.channel}</h3>
                    <span className='hero__sub-title'>{props.selectedVideo.views}</span>
                </div>
               
            </div>
      </>
    );
}

export default SelectedVideo;