'use client';

import { useRef } from 'react';
import clsx from 'clsx';
import speakingurl from 'speakingurl';

function TableOfContent({ data }: { data: any[] }) {
  const collapseToggleRef = useRef<HTMLInputElement>(null);

  const clickHandler = (targetID: string) => {
    if (collapseToggleRef.current) {
      collapseToggleRef.current.checked = false;
    }

    let target = document.getElementById(targetID);

    const elementPosition = target?.getBoundingClientRect().top;
    const offsetPosition = elementPosition && elementPosition + window.scrollY - 50;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  };

  // const isTocFixed = useStickyOnScroll('post-content', 10, 150);

  const headings = data.map((heading) => {
    const text = heading.children[0].text;
    const anchor = speakingurl(text);

    return (
      <li
        onClick={() => clickHandler(anchor)}
        className="mb-3 cursor-pointer text-lg"
        key={heading._key}
      >
        <span className="border-b">{text}</span>
      </li>
    );
  });

  return (
    <div id="toc" className="relative">
      <div className={clsx('left-0 top-0 z-50 w-full lg:hidden')}>
        <div className="collapse collapse-arrow rounded-none border-base-300 bg-brand-dark shadow-lg sm:px-6">
          <input ref={collapseToggleRef} type="checkbox" />
          <div className="collapse-title px-6 text-xl font-medium">Table of Content</div>
          <div className="collapse-content px-6">
            <ul className="pt-4">{headings}</ul>
          </div>
        </div>
      </div>
      <div className={clsx('hidden lg:block')}>
        <h3 className="mb-6 text-2xl font-semibold">Table of Content</h3>
        <ul>{headings}</ul>
      </div>
    </div>
  );
}

export default TableOfContent;
