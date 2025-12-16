import { notFound } from 'next/navigation';
import { sanityFetch } from '@/sanity/lib/fetch';
import { categoryQuery, getCategoryPostsPaginatedQuery } from '@/sanity/lib/queries';
import PublicationsList from '@/app/components/PublicationsList';
import Breadcrumbs from '@/app/components/Breadcrumbs';
import Pagination from '@/app/components/Pagination';
import Footer from '@/app/components/Footer';
import Navbar from '@/app/components/Navbar';
import { HeadlineWithDescription, PublicationsSection } from '@/app/ui-lib';
import { SanityCategory, SanityPostPreview } from '@/app/types';
import { SITE_BRAND_TITLE_ENDING } from '@/app/constants';

export const revalidate = 3600;

export async function generateMetadata({ params }: { params: Promise<{ category: string }> }) {
  const resolvedParams = await params;
  const categoryMetadata = await sanityFetch<SanityCategory>({
    query: categoryQuery,
    params: resolvedParams,
  });

  return {
    title: `${categoryMetadata?.title || 'Category Not Found'} ${SITE_BRAND_TITLE_ENDING}`,
    description: categoryMetadata?.description,
  };
}

export default async function Page({
  params,
  searchParams,
}: {
  params: Promise<{ category: string }>;
  searchParams: Promise<{ page?: string }>;
}) {
  const resolvedParams = await params;
  const resolvedSearchParams = await searchParams;
  const page = parseInt(resolvedSearchParams.page || '1', 10);
  const limit = 6;
  const start = (page - 1) * limit;

  const categoryMetadata = await sanityFetch<SanityCategory>({
    query: categoryQuery,
    params: resolvedParams,
  });

  const posts = await sanityFetch<SanityPostPreview[]>({
    query: getCategoryPostsPaginatedQuery(resolvedParams.category, start, limit),
    params: resolvedParams,
  });

  if (!posts?.length) {
    return notFound();
  }

  return (
    <>
      <Navbar />
      <main>
        <section className="bg-brand-dark-purple py-16">
          <section className="container mb-12">
            <Breadcrumbs />
          </section>
          <section className="container">
            <PublicationsSection>
              <HeadlineWithDescription
                headline={categoryMetadata.title as string}
                description={categoryMetadata.description as string}
                category
              />
              <PublicationsList items={posts} />
              {categoryMetadata.totalPosts > limit && (
                <Pagination
                  currentPage={page}
                  totalPosts={categoryMetadata.totalPosts}
                  postsPerPage={limit}
                  category={resolvedParams.category}
                />
              )}
            </PublicationsSection>
          </section>
        </section>
      </main>
      <Footer />
    </>
  );
}
