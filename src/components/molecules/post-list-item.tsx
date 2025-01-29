import Image from 'next/image';
import Link from 'next/link';

import { Post } from '@/types/post';

interface PostListItemProps {
  post: Post;
}

export default function PostListItem({ post: { title, excerpt, createdAt, readingMinutes, thumbnail, postUrl } }: PostListItemProps) {
  return (
    <article>
      <Link href={postUrl} className="group flex items-center justify-between gap-5 rounded-xl py-5">
        <div className="flex w-[calc(100vw-182px)] flex-col gap-3 sm:w-full">
          <div className="flex flex-col gap-2">
            <h2 className="line-clamp-1 text-base font-semibold text-foreground group-hover:text-accent-foreground sm:text-xl">{title}</h2>
            <p className="line-clamp-2 text-xs text-secondary-foreground sm:text-sm">{excerpt}</p>
          </div>

          <div className="flex items-center gap-2 text-xs text-secondary-foreground">
            <time>{createdAt}</time>
            <span>·</span>
            <span>{readingMinutes} min read</span>
          </div>
        </div>

        <figure className="relative h-[90px] w-[130px] shrink-0 overflow-hidden rounded-xl will-change-transform">
          <Image src={thumbnail} alt={title} fill className="object-cover transition-transform duration-300 group-hover:scale-110" sizes="130px" />
        </figure>
      </Link>
    </article>
  );
}
