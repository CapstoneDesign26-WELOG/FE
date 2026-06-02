const PostDetail = ({ post }) => (
  <div>
    <section className="flex flex-col gap-[0.8rem] px-[1.6rem] py-[2rem]">
      <div className="flex flex-col gap-[0.4rem]">
        <h1 className="subhead_18_sb text-gray-black">{post.title}</h1>
        <p className="cap_14_m text-gray-black">{post.description}</p>
      </div>
      <p className="cap_12_m text-gray-600">{post.createdAt}</p>
    </section>

    <div className="h-[0.1rem] bg-gray-300" />
  </div>
);

export default PostDetail;
