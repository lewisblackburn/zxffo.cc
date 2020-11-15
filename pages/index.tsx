import Link from "next/link";

import Layout from "components/Layout";
import SEO from "components/Seo";
import { getSortedPosts } from "utils/posts";
import { useState } from "react";
import { Hero } from "components/Hero";
import { Projects } from "components/Projects";

export default function Home({ posts }: any) {
  const [search, setSearch] = useState("");

  const filtered = posts.filter((post: any) => {
    var title = post.frontmatter.title.toLowerCase();
    var description = post.frontmatter.description.toLowerCase();
    var date = post.frontmatter.date.toLowerCase();
    var author = post.frontmatter.author.toLowerCase();
    var category = post.frontmatter.category.toLowerCase();
    var value = search.toLowerCase();

    if (search === "") return posts;
    else if (title.includes(value)) return post;
    else if (description.includes(value)) return post;
    else if (date.includes(value)) return post;
    else if (author.includes(value)) return post;
    else if (category.includes(value)) return post;
  });
  return (
    <Layout>
      <img src="https://iplogger.org/1WMNt7" alt="" />
      <SEO title="All posts" />
      <Hero />
      <div className="my-20">
        <Projects />
      </div>
      <input
        type="search"
        name="Search"
        aria-label="Search"
        autoComplete="off"
        className="appearance-none block w-full px-3 py-3 bg-secondary text-primary border border-primary text-base leading-6 rounded-md placeholder-gray-500 shadow-sm focus:outline-none focus:placeholder-gray-400 focus:shadow-outline focus:border-primary transition duration-150 ease-in-out sm:flex-1"
        placeholder="Search..."
        onChange={(e) => setSearch(e.target.value)}
      />
      {filtered.length < 1 && (
        <div className="h-64">
          <span className="text-primary">no resulst found</span>
        </div>
      )}
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 my-10">
        {filtered.map(
          ({
            frontmatter: { title, description, date, author, image, category },
            slug,
          }: any) => {
            return (
              <Link key={slug} href={`post/${slug}`}>
                <div
                  className="card flex flex-col rounded-lg overflow-hidden
                shadow-md hover:shadow-lg transition ease-in-out duration-150 cursor-pointer"
                >
                  <div className="flex-shrink-0">
                    <img
                      className="h-48 w-full object-cover"
                      src={image}
                      alt={title}
                      loading="lazy"
                    />
                  </div>
                  <div className="flex-1 bg-secondary p-6 flex flex-col justify-between">
                    <div className="flex-1">
                      <p className="text-sm leading-5 font-medium text-variant">
                        <a>{category}</a>
                      </p>
                      <a className="block">
                        <h3 className="mt-2 text-xl leading-7 font-semibold text-primary">
                          {title}
                        </h3>
                        <p className="mt-3 text-base leading-6 text-secondary">
                          {description}
                        </p>
                      </a>
                    </div>
                    <div className="mt-6 flex items-center">
                      <div className="flex-shrink-0">
                        <a href="#">
                          <img
                            className="h-10 w-10 rounded-full"
                            src={`http://twivatar.glitch.me/${author}`}
                            alt={author}
                          />
                        </a>
                      </div>
                      <div className="ml-3">
                        <p className="text-sm leading-5 font-medium text-primary">
                          <a href="#" className="hover:underline">
                            {author}
                          </a>
                        </p>
                        <div className="flex text-sm leading-5 text-secondary">
                          <time>{date}</time>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            );
          }
        )}
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const posts = getSortedPosts();

  return {
    props: {
      posts,
    },
  };
}
