// src/app/page.tsx
import  EndpointContent  from '@/components/Umbraco/EndpointContent'
import { UmbracoApi } from '@/lib/api'

// Need to use Server Components for initial data fetching
export default async function Page() {
  try {
    const content = await UmbracoApi.getContent('')
    
    return <EndpointContent content={content} />
  } catch (error) {
    return <div className="p-6 text-red-500">Error loading content</div>
  }
}