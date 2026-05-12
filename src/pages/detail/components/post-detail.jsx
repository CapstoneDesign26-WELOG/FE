const PostDetail = ({ post }) => (
  <section className="border-b border-gray-300 px-[1.6rem] py-[2rem]">
    <h1 className="body_16_m">{post.title}</h1>

    <p className="cap_14_m mt-[0.6rem] text-gray-500">{post.createdAt}</p>

    {post.content && (
      <p className="body_16_m mt-[1.2rem] text-gray-800">{post.content}</p>
    )}
  </section>
);

export default PostDetail;
