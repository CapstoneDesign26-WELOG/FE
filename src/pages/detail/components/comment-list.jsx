import CommentItem from './comment-item';

const CommentList = ({ comments, onReplySubmit, onLikeClick, disabled }) => (
  <section className="flex flex-1 flex-col pl-[1.6rem] pr-[3.6rem] py-[2rem]">
    <ul className="flex flex-col gap-[1.6rem]">
      {comments.map((comment) => (
        <CommentItem
          key={comment.id}
          comment={comment}
          onReplySubmit={onReplySubmit}
          onLikeClick={onLikeClick}
          disabled={disabled}
        />
      ))}
    </ul>
  </section>
);

export default CommentList;
