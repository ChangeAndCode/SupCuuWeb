import { UmbracoContent } from '@/types/umbraco';

interface ContentProps {
  content: UmbracoContent;
}
const EndpointContent = ({ content }: ContentProps) => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{content.name}</h1>
      
      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">Properties:</h2>
        {Object.entries(content.properties).map(([key, value]) => (
          <div key={key} className="mb-2">
            <span className="font-medium">{key}:</span> {JSON.stringify(value)}
          </div>
        ))}
      </div>
      
      <div className="text-sm text-gray-500">
        <div>Content Type: {content.contentType}</div>
        <div>Created: {new Date(content.createDate).toLocaleString()}</div>
        <div>Updated: {new Date(content.updateDate).toLocaleString()}</div>
        <div>ID: {content.id}</div>
      </div>
    </div>
  );
};

export default EndpointContent;