import '../VideoList/VideoList.scss'

function VideoList(props) {
    // console.log(props);
    return (
        <>
        <h3 className='video-list__title'>NEXT VIDEOS</h3>
        <ul className="video-list">{props.videoData.filter((video) => video.id !== props.selectedVideo.id)
            .map((video) => {
            return (
                <li onClick={() => {
                    props.handleVideoSelection(video.id);
                }}
                key={video.id}
                className="video-list__item">
                    <div className='item__container'>
                        <div className='image__container'>
                            <img src={video.image} alt="video image" className="images" />
                        </div>
                        <div className='title__container'>
                            <h3 className='item__title' >{video.title}</h3>
                            <p>{video.channel}</p>
                        </div>
                    </div>
                
                </li>
            );
        })}
        </ul>
    </>
    );
}

export default VideoList