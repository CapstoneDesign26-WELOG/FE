const PostDetail = ({ post }) => (
  <section className="border-b border-gray-300 px-[1.6rem] py-[2rem]">
    <p className="cap_14_m text-gray-600">{post.createdAt}</p>

    <h1 className="body_16_m mt-[0.8rem]">{post.title}</h1>

    <p className="body_16_m mt-[1.2rem] text-gray-800">{post.content}</p>
  </section>
);

export default PostDetail;
