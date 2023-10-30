import views from '../../assets/Images/Icons/views.svg';
import likes from '../../assets/Images/Icons/likes.svg';
import '../SelectedDescription/SelectedDescription.scss';

function SelectedDescription(props) {
const timestamp = props.selectedVideo.timestamp;
const date = new Date(timestamp);
const newDate = date.toLocaleDateString("en-US");
    return (
        <div className='hero'>
                <h1 className='hero__title'>{props.selectedVideo.title}</h1>
                <div className='hero__container'>
                    <div className='hero__sub-container'>
                        <span className='hero__sub-title hero__sub-title--bold'>By {props.selectedVideo.channel}</span>
                        <span className='hero__sub-title sub-title--color'>{newDate}</span>
                    </div>
                    <div className='hero__sub-container hero__sub-container--width'>
                        <img src={views} alt='views icon' className='hero-icon sub-title--color' />
                        <span className='hero__sub-title hero__sub-title--color'>{props.selectedVideo.views}</span>
                        <img src={likes} alt='likes icon' className='hero-icon sub-title--color' />
                        <span className='hero__sub-title hero__sub-title--color'>{props.selectedVideo.likes}</span>
                    </div>  
                </div>
                <div>
                    <p className='hero__description'>{props.selectedVideo.description}</p>
                </div>
            </div>
    )
}

export default SelectedDescription