import '../Comments/Comments.scss'

function Comments(props) {

const timestamp = props.selectedVideo.comments[0].timestamp;
const date = new Date(timestamp);
const commentDate = date.toLocaleDateString("en-US");

    return (
        <ul className="comment__list">
            <li className='comment__item'>
                <div className='comment__avatar'></div>
                <div className='comment__container'>
                    <div className='comment__title'>
                        <span className='name--bold' >{props.selectedVideo.comments[0].name}</span>
                        <span className='sub-title--color'>{commentDate}</span>
                    </div>
                    <p>{props.selectedVideo.comments[0].comment}</p>
                </div>
            </li>

            <li className='comment__item'>
                <div className='comment__avatar'></div>
                <div className='comment__container'>
                    <div className='comment__title'>
                        <span className='name--bold'>{props.selectedVideo.comments[1].name}</span>
                        <span className='sub-title--color'>{commentDate}</span>
                    </div>
                    <p>{props.selectedVideo.comments[1].comment}</p>
                </div>
            </li>

            <li className='comment__item'>
                <div className='comment__avatar'></div>
                <div className='comment__container'>
                    <div className='comment__title'>
                        <span className='name--bold'>{props.selectedVideo.comments[2].name}</span>
                        <span className='sub-title--color'>{commentDate}</span>
                    </div>
                    <p>{props.selectedVideo.comments[2].comment}</p>
                </div>
            </li>
        </ul>
    );
}

export default Comments