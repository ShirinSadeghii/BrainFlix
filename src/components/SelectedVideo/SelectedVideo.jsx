import '../SelectedVideo/SelectedVideo.scss';
import views from '../../assets/Images/Icons/views.svg';
import likes from '../../assets/Images/Icons/likes.svg';

function SelectedVideo(props) {
// console.log("props: ", props);

const timestamp = props.selectedVideo.timestamp;
const date = new Date(timestamp);
const newDate = date.toLocaleDateString("en-US");

    return (
        <>
            <div>
                <video poster={props.selectedVideo.image} alt="Now Playing Video" className='hero-video' controls/>
            </div>
            <div>
                <h1 className='hero__title'>{props.selectedVideo.title}</h1>
                <div className='hero__container'>
                    <span className='hero__sub-title hero__sub-title--bold'>By {props.selectedVideo.channel}</span>
                    <img src={views} alt='views icon' className='hero-icon sub-title--color' />
                    <span className='hero__sub-title sub-title--color'>{props.selectedVideo.views}</span>
                    <span className='hero__sub-title sub-title--color'>{newDate}</span>
                    <img src={likes} alt='likes icon' className='hero-icon sub-title--color' />
                    <span className='hero__sub-title sub-title--color'>{props.selectedVideo.likes}</span>
                </div>
                <div>
                    <p className='hero__description'>{props.selectedVideo.description}</p>
                </div>

               
            </div>
      </>
    );
}

export default SelectedVideo;