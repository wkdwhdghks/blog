import Link from 'next/link';

import { cn } from '@/lib/utils';

import { Category } from '@/types/post';

import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface CategoryTabsProps {
  className?: string;
  classNames?: { trigger?: string };
  defaultValue: string;
  categoryList: Category[];
  baseUrl: string;
}

export default function CategoryTabs({ className, classNames = {}, defaultValue, categoryList, baseUrl }: CategoryTabsProps) {
  return (
    <Tabs className={className} defaultValue={defaultValue}>
      <TabsList className="gap-2">
        {categoryList.map(({ category, categorySlug, count }) => {
          return (
            <TabsTrigger
              key={category}
              value={categorySlug === 'all' ? 'All' : categorySlug}
              className={cn(
                'py-2 hover:bg-secondary-background data-[state=active]:bg-contrast-background data-[state=active]:text-contrast-foreground data-[state=active]:shadow-none hover:data-[state=active]:bg-[#24292f] hover:data-[state=active]:dark:bg-[#f0f3f6]',
                classNames.trigger,
              )}
              asChild
            >
              <Link href={category === 'All' ? baseUrl : `${baseUrl}/${categorySlug}`}>
                {category} ({count})
              </Link>
            </TabsTrigger>
          );
        })}
      </TabsList>
    </Tabs>
  );
}
