import PostContent from '@/app/components/PostContent';
import PostSidebar from '@/app/components/PostSidebar';
import PostHero from '@/app/components/PostHero';
import CommentForm from '@/app/components/CommentForm';
import CommentsSection from '@/app/components/CommentsSection';
import { SanityPost } from '@/app/types';
import TableOfContent from '../TableOfContent';

function Post({ post }: { post: SanityPost }) {
  const creationDate = new Intl.DateTimeFormat('en-GB', {
    dateStyle: 'long',
  }).format(new Date(post.publishedAt));

  const imageData = {
    url: post.image.url,
    alt: post.image.alt,
  };

  return (
    <>
      <PostHero
        title={post.title}
        introduction={post.previewText}
        creationDate={creationDate}
        image={imageData}
      />
      <div className="sticky top-0 z-10 lg:hidden">
        <TableOfContent data={post.headings} />
      </div>
      <article id="post-content" className="relative bg-brand-dark-purple pt-12">
        <div>
          <div className="container">
            <div className="flex flex-col justify-between pb-16 lg:flex-row lg:gap-5">
              <PostContent content={post.content} />
              <PostSidebar tocData={post.headings} />
            </div>
          </div>
        </div>
        <aside className="bg-brand-purple py-12" id="comments-section">
          <div className="container">
            <div className="mx-auto mb-12 md:w-2/3">
              <CommentForm />
              <CommentsSection />
            </div>
          </div>
        </aside>
      </article>
    </>
  );
}

export default Post;
