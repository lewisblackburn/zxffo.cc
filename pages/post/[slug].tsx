import Link from "next/link";
import ReactMarkdown from "react-markdown/with-html";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import Layout from "components/Layout";
import Image from "components/Image";
import SEO from "components/Seo";
import { getPostBySlug, getPostsSlugs } from "utils/posts";
// @ts-ignore
import { duotoneSea } from "react-syntax-highlighter/dist/cjs/styles/prism";
import gfm from "remark-gfm";
import { useState } from "react";

const CodeBlock = ({ language, value }: any) => {
  return (
    <div>
      <div className="terminal__header flex items-center justify-between bg-gray-800 text-white text-sm px-6 py-4 rounded-t-md capitalize">
        {language}
      </div>
      <SyntaxHighlighter language={language} style={duotoneSea}>
        {value}
      </SyntaxHighlighter>
    </div>
  );
};

const MarkdownImage = ({ alt, src }: any) => (
  <Image
    alt={alt}
    src={require(`../../content/assets/${src}`)}
    webpSrc={require(`../../content/assets/${src}?webp`)}
    previewSrc={require(`../../content/assets/${src}?lqip`)}
    className="w-full"
  />
);

export default function Post({
  post,
  frontmatter,
  nextPost,
  previousPost,
}: any) {
  return (
    <Layout>
      <SEO
        title={frontmatter.title}
        description={frontmatter.description || post.excerpt}
      />

      <article className="w-8/12 mx-auto">
        <header className="mb-8 text-primary">
          <h1 className="mb-2 text-6xl font-black leading-none font-display">
            <span className="text-primary text-4xl">{frontmatter.title}</span>
          </h1>
          <p className="text-sm">{frontmatter.date}</p>
        </header>
        <ReactMarkdown
          plugins={[gfm]}
          className="mb-4 text-secondary"
          escapeHtml={false}
          source={post.content}
          renderers={{ code: CodeBlock, image: MarkdownImage }}
        />
      </article>
      <nav className="flex flex-wrap justify-between mb-10">
        {previousPost ? (
          <Link href={"/post/[slug]"} as={`/post/${previousPost.slug}`}>
            <a className="text-primary text-lg font-bold">
              ← {previousPost.frontmatter.title}
            </a>
          </Link>
        ) : (
          <div />
        )}
        {nextPost ? (
          <Link href={"/post/[slug]"} as={`/post/${nextPost.slug}`}>
            <a className="text-primary text-lg font-bold">
              {nextPost.frontmatter.title} →
            </a>
          </Link>
        ) : (
          <div />
        )}
      </nav>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getPostsSlugs();

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }: any) {
  const postData = getPostBySlug(slug);

  if (!postData.previousPost) {
    // @ts-ignore
    postData.previousPost = null;
  }

  if (!postData.nextPost) {
    // @ts-ignore
    postData.nextPost = null;
  }

  return { props: postData };
}
