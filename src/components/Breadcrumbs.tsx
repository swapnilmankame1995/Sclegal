import { ComponentProps } from 'react';

interface BreadcrumbsProps {
  siteName?: string;
  pageTitle: string;
  pageKey: string;
}

export function Breadcrumbs({ siteName = "SheetCutters", pageTitle }: BreadcrumbsProps) {
  return (
    <div className="mb-8 pb-5 border-b border-[#30363d]">
      <nav className="flex items-center text-xl leading-tight">
        <span className="font text-[rgb(255,255,255)] hover:underline cursor-pointer">{siteName}</span>
        <span className="mx-2 text-[#8b949e] font-normal">/</span>
        <span className="font text-[#c9d1d9]">{pageTitle}</span>
      </nav>
    </div>
  );
}
