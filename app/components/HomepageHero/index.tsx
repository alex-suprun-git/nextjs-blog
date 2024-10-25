import Link from 'next/link';

function HomepageHero() {
  const href = '/publications';

  return (
    <div className="flex items-center justify-center px-10 pb-24 pt-24 text-stone-200">
      <div className="mx-auto max-w-screen-md">
        <span className="mb-4 flex text-5xl font-bold text-gray-200">NextJS Blog ©</span>
        <h1 className="mb-6 break-normal text-4xl font-black leading-relaxed sm:text-6xl sm:leading-[1.25]">
          NextJS Blog Demo Project
        </h1>
        <p className="mb-8 text-xl leading-relaxed text-stone-200 sm:text-2xl sm:leading-[1.65]">
          This demo application, built with NextJS, TypeScript, Tailwind & Sanity allows users to
          check blog posts [AI generated].
        </p>
        <div>
          <Link href={href}>
            <button className="btn no-animation btn-lg mb-5 border-0 bg-brand-pink text-gray-900 hover:bg-brand-light-pink">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomepageHero;
