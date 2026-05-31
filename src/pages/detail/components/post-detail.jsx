const PostDetail = ({ post }) => (
  <div>
    <section className="flex flex-col gap-[0.8rem] px-[1.6rem] py-[2rem]">
      <h1 className="body_16_m text-gray-black">{post.title}</h1>
      <p className="cap_12_m text-gray-600">{post.createdAt}</p>
    </section>

    <div className="h-[0.1rem] bg-gray-300" />
  </div>
);

export default PostDetail;
