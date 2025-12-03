import { siteContent } from './data';
import { Breadcrumbs } from './Breadcrumbs';

export const ContentArea = ({ pageKey }) => {
  const page = siteContent[pageKey];

  if (!page) return null;

  return (
    <main className="flex-1 min-w-0 overflow-y-auto bg-[#0d1117]">
      <div className="max-w-4xl mx-auto px-6 py-8 md:py-12">
        <Breadcrumbs pageTitle={page.title} pageKey={pageKey} />
        
        <header className="mb-10">
          <h1 className="text-4xl md:text-5xl text-[#c9d1d9] tracking-tight mb-4">
            {page.title}
          </h1>
          {page.lastUpdated && (
            <p className="text-sm text-[#8b949e] text-[12px]">Last updated on {page.lastUpdated}</p>
          )}
        </header>
        
        <article 
          className="prose prose-invert prose-headings:text-[#c9d1d9] prose-p:text-[#8b949e] prose-a:text-[#58a6ff] max-w-none text-[#8b949e] leading-relaxed"
          dangerouslySetInnerHTML={{ __html: page.content }}
        />
      </div>
    </main>
  );
};