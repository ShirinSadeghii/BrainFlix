import '../Comments/Comments.scss';
import mohan from '../../assets/Images/Mohan-muruge.jpg';
import comment from '../../assets/Images/Icons/add_comment.svg';

function Comments(props) {

const timestamp = props.selectedVideo.comments[0].timestamp;
const date = new Date(timestamp);
const commentDate = date.toLocaleDateString("en-US");

    return (
        <>
        <h3 className='new-comment__title'>3 Comments</h3>
        <div className='new-comment'>
            <div className='avatar__container'>
                <img src={mohan} alt="mohan" className='mohan mohan--remove-margin' />
            </div>
            <form className='new-comment__form'>
                <div className='new-comment__container'>
                    <label className='new-comment__label'>JOIN THE CONVERSATION</label>
                    <textarea className='new-comment__text' name="comment" placeholder='Add a new comment' required></textarea>
                </div>
                <div className='button__container'>
                    <button className='new-comment__button'>COMMENT</button>
                    <img src={comment} alt="add comment" className='add-comment-logo' />
                </div>
               
            </form>
        </div>
        <ul className="comment__list">
            <li className='comment__item'>
                <div className='comment__avatar'></div>
                <div className='comment__container'>
                    <div className='comment__title'>
                        <span className='name--bold' >{props.selectedVideo.comments[0].name}</span>
                        <span className='sub-title--color'>{commentDate}</span>
                    </div>
                    <p className='comment__paragraph'>{props.selectedVideo.comments[0].comment}</p>
                </div>
            </li>

            <li className='comment__item'>
                <div className='comment__avatar'></div>
                <div className='comment__container'>
                    <div className='comment__title'>
                        <span className='name--bold'>{props.selectedVideo.comments[1].name}</span>
                        <span className='sub-title--color'>{commentDate}</span>
                    </div>
                    <p className='comment__paragraph'>{props.selectedVideo.comments[1].comment}</p>
                </div>
            </li>

            <li className='comment__item'>
                <div className='comment__avatar'></div>
                <div className='comment__container'>
                    <div className='comment__title'>
                        <span className='name--bold'>{props.selectedVideo.comments[2].name}</span>
                        <span className='sub-title--color'>{commentDate}</span>
                    </div>
                    <p className='comment__paragraph'>{props.selectedVideo.comments[2].comment}</p>
                </div>
            </li>
        </ul>
        </>
    );
}

export default Comments