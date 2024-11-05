import Image from 'next/image';
import Link from 'next/link';
import { SanityPostPreview } from '@/app/types';

function PublicationCard({
  title,
  category,
  previewText,
  slug,
  image,
  publishedAt,
}: SanityPostPreview) {
  const link = `/publications/${category.url}/${slug}`;
  const creationDate = new Intl.DateTimeFormat('en-GB', {
    dateStyle: 'long',
  }).format(new Date(publishedAt));

  return (
    <Link href={link}>
      <div className="card card-compact bg-slate-800 shadow-xl">
        <figure className="lxs-sm:h-[200px] md:h-[250px]">
          <Image
            width={400}
            height={400}
            src={image.url}
            alt={image.alt || title}
            quality={60}
            placeholder="blur"
            blurDataURL="iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkmHOiHgAD7QHlxT90/wAAAABJRU5ErkJggg=="
            priority
            className="h-full w-full object-cover"
          />
        </figure>
        <div className="card-body sm:h-[340px] md:h-[320px] lg:h-[265px]">
          <span className="text-md text-slate-300">{creationDate}</span>
          <h2 className="card-title mb-4 text-stone-200">{title}</h2>
          <p className="text-stone-200">{previewText}</p>
          <div className="card-actions justify-end">
            <button className="btn no-animation btn-sm bg-brand-dark-purple text-gray-300 hover:bg-brand-purple">
              Read More
            </button>
          </div>
        </div>
      </div>

      {/* <div className="card image-full shadow-xl">
        <figure className="sm:h-[470px] lxs-sm:h-[380px] md:h-[420px]">
          <Image
            width={400}
            height={400}
            src={image.url}
            alt={image.alt || title}
            quality={60}
            placeholder="blur"
            blurDataURL="iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkmHOiHgAD7QHlxT90/wAAAABJRU5ErkJggg=="
            priority
            className="h-full w-full object-cover"
          />
        </figure>
        <div className="card-body">
          <span className="text-md text-slate-300">{creationDate}</span>
          <h2 className="card-title mb-4 text-stone-200">{title}</h2>
          <p className="text-stone-200">{previewText}</p>
          <div className="card-actions justify-end">
            <button className="btn no-animation btn-sm bg-brand-dark-purple text-gray-300 hover:bg-brand-purple">
              Read More
            </button>
          </div>
        </div>
      </div> */}
    </Link>
  );
}

export default PublicationCard;
