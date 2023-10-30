import '../Comments/Comments.scss';
import mohan from '../../assets/Images/Mohan-muruge.jpg';
import comment from '../../assets/Images/Icons/add_comment.svg';


function Comments(props) {

    return (
        <>
        <h3 className='new-comment__title'>{props.selectedVideo.comments?.length} Comments</h3>
        <div className='new-comment'>
            <div className='avatar__container'>
                <img src={mohan} alt="mohan" className='mohan mohan--remove-margin' />
            </div>
            <form className='new-comment__form'>
                <div className='new-comment__container'>
                    <label className='new-comment__label'>JOIN THE CONVERSATION</label>
                    <textarea className='new-comment__text' name="comment" placeholder='Add a new comment' required ></textarea>
                </div>
                <div className='new-comment__btn-container'>
                    <button className='new-comment__button' type="submit">COMMENT</button>
                    <img src={comment} alt="add comment" className='add-comment-logo' />
                </div>
            </form>
        </div>
        <div className="comment">
        <ul className="comment__list">
          {/* Using map to loop through all comments */}
          {props.selectedVideo.comments?.map((comment, index) => {
            return (
                <li key={index} className='comment__item'>
                    <div className='comment__avatar'></div>
                    <div className='comment__container'>
                        <div className='comment__title'>
                            <span className='name--bold' >{comment.name}</span>
                            <span className='sub-title--color'>
                                {new Date(comment.timestamp).toLocaleDateString()}
                            </span>
                        </div>
                        <p className='comment__paragraph'>{comment.comment}</p>
                    </div>
                </li>
            );
          })}
        </ul>
      </div>
        </>
    );
}

export default Comments