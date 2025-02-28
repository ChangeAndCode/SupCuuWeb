// app/test/page.tsx
import { getLocale } from '@/lib/Localization';
import { getUmbracoContent } from '@/lib/server/umbracoApi';

export default async function TestPage() {
  // Properly handle the async nature of getLocale
  const locale = await getLocale();
  
  // Direct Umbraco API call for server components
  const content = await getUmbracoContent('/sites/invest-in-talent/', locale);
  
  return (
    <main>
        <div className="pt-16">
      <h1>Test Page</h1>
      <p>Current locale: {locale}</p>
      <h2>{content.properties.title}</h2>
      <div>{JSON.stringify(content)}</div> 
      
    </div>
    </main>
  );
}
