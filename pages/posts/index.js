import AllPosts from "../../components/posts/all-posts";

const AllPostsPage = () => {
  const DUMMY_POSTS = [
    {
      slug: "getting-started-with-nextjs",
      title: "Getting Started With NExtJs",
      image: "getting-started-nextjs.png",
      excerpt: "NextJs is React framework for production",
      date: "2022-01-01",
    },
  ];

  return <AllPosts posts={DUMMY_POSTS} />;
};

export default AllPostsPage;
