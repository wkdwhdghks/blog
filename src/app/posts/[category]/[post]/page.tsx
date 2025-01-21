import { getPostDetail, getMdxPathList, parsePostInfo, getTableOfContents } from '@/lib/post';

import PostHeader from '../../../../components/molecules/post-header';
import PostContent from '../../../../components/molecules/post-content';
import PostTableOfContents from '@/components/molecules/post-table-of-contents';
import Giscus from '@/components/molecules/giscus';

interface Props {
  params: Promise<{ category: string; post: string }>;
}

export default async function PostPage({ params }: Props) {
  const { category, post } = await params;

  const postDetail = await getPostDetail(category, post);
  const tableOfContents = getTableOfContents(postDetail.content);

  return (
    <section className="mx-auto w-full max-w-screen-md px-4">
      <PostHeader className="mb-12" post={postDetail} />

      <div className="flex gap-16">
        <PostContent className="mb-12 w-full border-b pb-12" post={postDetail} />
        <PostTableOfContents className="hidden xl:block" tableOfContents={tableOfContents} />
      </div>

      <Giscus />
    </section>
  );
}

export const dynamicParams = false;

export async function generateStaticParams(): Promise<{ category: string; post: string }[]> {
  const mdxPaths = await getMdxPathList('All');

  return mdxPaths.map(parsePostInfo).map(({ categorySlug, postSlug }) => ({
    category: categorySlug,
    post: postSlug,
  }));
}
