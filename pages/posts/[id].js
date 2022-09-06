import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Head from "next/head";

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

// Si une page a des routes dynamiques et utilise getStaticProps,
// elle doit définir une liste de chemins à générer statiquement.
// grace à getStaticPaths()
export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false, // can also be true or 'blocking'
  };
}

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      {postData.title}
      <br />
      {postData.id}
      <br />
      {postData.date}
      <br />
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </Layout>
  );
}
