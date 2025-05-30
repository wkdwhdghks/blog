import { getCategoryList, getPostList } from '@/lib/post';

import CategoryTabs from '@/components/category/category-tabs';
import CategorySelect from '@/components/category/category-select';
import PostListItem from '@/components/post/post-list-item';
import TagGroup from '@/components/post/tag-group';

export interface CategoryPageProps {
  params: Promise<{ category: string }>;
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category } = await params;

  const [categoryList, postList] = await Promise.all([getCategoryList(), getPostList(category)]);

  return (
    <section className="mx-auto flex w-full max-w-(--breakpoint-xl) lg:gap-10">
      <div className="flex-2 px-4">
        <div className="mb-[10px]">
          <CategoryTabs className="hidden sm:block" defaultValue={category} categoryList={categoryList} baseUrl={'/posts'} />
          <CategorySelect classNames={{ trigger: 'sm:hidden' }} defaultValue={category} categoryList={categoryList} baseUrl={'/posts'} />
        </div>

        <ul>
          {postList.map((post) => {
            return (
              <li key={post.postUrl}>
                <PostListItem post={post} />
              </li>
            );
          })}
        </ul>
      </div>

      <aside className="hidden flex-1 border-l px-4 md:block">
        <section className="flex flex-col gap-3">
          <h2 className="text-sm font-medium text-secondary-foreground">태그</h2>
          <TagGroup tags={categoryList.filter(({ category }) => category !== 'all')} activeTag={category} baseUrl={'/posts'} />
        </section>
      </aside>
    </section>
  );
}

export const dynamicParams = false;

export async function generateStaticParams() {
  const categoryList = await getCategoryList();
  const staticParams = categoryList.map(({ category }) => ({ category }));
  return staticParams;
}
