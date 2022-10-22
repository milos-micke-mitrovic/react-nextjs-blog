import Head from "next/head";

import FeaturedPosts from "../components/home-page/featured-posts";
import Hero from "../components/home-page/hero";

import { getFeaturedPosts } from "../lib/posts-util";

const HomePage = ({ posts }) => {
  return (
    <>
      <Head>
        <title>Milos' blog</title>
        <meta
          name="description"
          content="I post about programing and develpment."
        />
      </Head>
      <Hero />
      <FeaturedPosts posts={posts} />
    </>
  );
};

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
  };
}

export default HomePage;
