import { getPostDetail, getMdxPathList, parsePostInfo, getTableOfContents } from '@/lib/post';

import PostHeader from '../../../../components/post/post-header';
import PostContent from '../../../../components/post/post-content';
import PostTableOfContents from '@/components/post/post-table-of-contents';
import Giscus from '@/components/shared/giscus';

export interface PostPageProps {
  params: Promise<{ category: string; post: string }>;
}

export default async function PostPage({ params }: PostPageProps) {
  const { category, post } = await params;

  const postDetail = await getPostDetail(category, post);
  const tableOfContents = getTableOfContents(postDetail.content);

  return (
    <section className="mx-auto w-full max-w-(--breakpoint-md) px-4">
      <PostHeader post={postDetail} />

      <div className="flex gap-16">
        <PostContent className="w-full xl:min-w-[736px]" post={postDetail} />
        <PostTableOfContents className="hidden xl:block" tableOfContents={tableOfContents} />
      </div>

      <Giscus className="mt-12 min-h-[372px] border-t pt-10" />
    </section>
  );
}

export const dynamicParams = false;

export async function generateStaticParams() {
  const mdxPaths = await getMdxPathList('all');
  return mdxPaths.map(parsePostInfo).map(({ category, post }) => ({
    category,
    post,
  }));
}
