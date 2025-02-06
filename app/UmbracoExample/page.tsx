
// src/app/UmbracoExample/page.tsx
import { Suspense } from 'react'
import EndpointContent from '@/components/Umbraco/EndpointContent'
import { UmbracoApi } from '@/lib/api'

// Mark this route as dynamic
export const dynamic = 'force-dynamic'

// Async component for content fetching
async function UmbracoContent() {
  const content = await UmbracoApi.getContent('')  // Updated path
  return <EndpointContent content={content} />
}

// Simple loading state
function LoadingState() {
  return <div className="p-6">Loading...</div>
}

export default function UmbracoExamplePage() {
  return (
    <Suspense fallback={<LoadingState />}>
      <UmbracoContent />
    </Suspense>
  )
}