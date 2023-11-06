import '../VideoList/VideoList.scss';
import { Link } from 'react-router-dom';

function VideoList(props) {

const baseUrl = "http://localhost:8080";

    return (
        <>
        <h3 className='video-list__title'>NEXT VIDEOS</h3>
        <ul className="video-list">{props.videoData.filter((video) => video.id !== props.selectedVideo.id)
            .map((video) => {
            return (
                <li key={video.id}
                className="video-list__item">
                    <Link to={`/${video.id}`}>
                        <div className='item__container'>
                            <div className='image__container'>
                                <img src={`${baseUrl}/images/${video.image}`} alt="video image" className="images" />
                            </div>
                            <div className='title-container'>
                                <h3 className='title-container__header' >{video.title}</h3>
                                <p className='title-container__paragraph'>{video.channel}</p>
                            </div>
                        </div>
                    </Link>
                </li>
                
            );
        })}
        </ul>
    </>
    );
}

export default VideoList