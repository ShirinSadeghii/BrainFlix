import '../VideoList/VideoList.scss'

function VideoList(props) {
    // console.log(props);
    return (
        <ul className="video-list">{props.videoData.filter((video) => video.id !== props.selectedVideo.id)
            .map((video) => {
            return (
                <li onClick={() => {
                    props.handleVideoSelection(video.id);
                }}
                key={video.id}
                className="video-list__item">
                
                <h2>{video.title}</h2>
                <img src={video.image} alt="video image" className="video-list__image" />
                </li>
            );
        })}
        </ul>
    );
}

export default VideoList