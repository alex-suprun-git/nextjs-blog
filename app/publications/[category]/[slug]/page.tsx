import { notFound } from 'next/navigation';
import { sanityFetch } from '@/sanity/lib/fetch';
import { postPathsQuery, postQuery } from '@/sanity/lib/queries';
import { client } from '@/sanity/lib/client';
import Navbar from '@/app/components/Navbar';
import Post from '@/app/components/Post';
import Footer from '@/app/components/Footer';
import { SanityPost, SanityPostMeta } from '@/app/types';
import { SITE_BRAND_TITLE_ENDING } from '@/app/constants';

export const revalidate = 3600;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const postMetadata = await sanityFetch<SanityPostMeta>({
    query: postQuery,
    params: resolvedParams,
  });

  return {
    title: `${postMetadata?.title || 'Post Not Found'} ${SITE_BRAND_TITLE_ENDING}`,
    description: `${postMetadata?.previewText || `Blog Publication on ${SITE_BRAND_TITLE_ENDING}`}`,
  };
}

export async function generateStaticParams() {
  const posts = await client.fetch(postPathsQuery);
  return posts;
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = await sanityFetch<SanityPost>({ query: postQuery, params: resolvedParams });

  if (!post) {
    return notFound();
  }

  return (
    <>
      <Navbar transparent />
      <main>
        <Post post={post} />
      </main>
      <Footer />
    </>
  );
}
