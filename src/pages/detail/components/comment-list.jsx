import CommentItem from './comment-item';

const CommentList = ({
  comments,
  myUserId,
  onReplySubmit,
  onLikeClick,
  onDeleteClick,
  disabled,
}) => (
  <section className="flex flex-1 flex-col pl-[1.6rem] pr-[3.6rem] py-[2rem]">
    <ul className="flex flex-col gap-[1.6rem]">
      {comments.map((comment) => (
        <CommentItem
          key={comment.id}
          comment={comment}
          myUserId={myUserId}
          onReplySubmit={onReplySubmit}
          onLikeClick={onLikeClick}
          onDeleteClick={onDeleteClick}
          disabled={disabled}
        />
      ))}
    </ul>
  </section>
);

export default CommentList;
