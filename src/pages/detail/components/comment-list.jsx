import CommentItem from './comment-item';

const CommentList = ({ comments }) => (
  <section className="flex flex-1 flex-col px-[1.6rem] py-[1.6rem]">
    <ul className="flex flex-col gap-[1.6rem]">
      {comments.map((comment) => (
        <CommentItem key={comment.id} comment={comment} />
      ))}
    </ul>
  </section>
);

export default CommentList;
