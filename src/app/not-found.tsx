import Link from 'next/link';

import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="m-auto">
      <div className="flex flex-col items-center justify-center gap-8">
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-2xl font-bold">Not Found</h1>
          <p className="text-lg">찾을 수 없는 페이지입니다.</p>
        </div>

        <Button className="h-10 bg-secondary-background px-10 text-secondary-foreground shadow-none transition-none hover:bg-tertiary-background" asChild>
          <Link href="/posts">홈으로</Link>
        </Button>
      </div>
    </div>
  );
}
