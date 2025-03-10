
# LPSC

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Environment Variables

The following environment variables are required:

*   `NEXT_PUBLIC_CONTACT_FORM_EMAIL`: the email address where contact form submissions will be sent (e.g. `your-contact-email@example.com`)
*   `NEXT_PUBLIC_API_URL`: the URL of the API (e.g. `https://your-api-url.com/`)
*   `NEXT_PUBLIC_BASE_URL`: the current url the app is running on
*   `UMBRACO_API_URL`: the URL of the Umbraco API (e.g. `http://localhost:3177/umbraco/delivery/api/v2`)
*   `UMBRACO_API_KEY`: the API key for the Umbraco API (e.g. `your-umbraco-api-key`)

Add these variables to your `.env.local` file to configure the project.

## Web.config Structure

The application also requires a `web.config` file for IIS configuration.  Here's the expected structure:

```xml
<?xml version="1.0" encoding="utf-8"?>
<configuration>
  <appSettings>
    <add key="NEXT_PUBLIC_API_URL" value="[Your API URL]" />
    <add key="NEXT_PUBLIC_CONTACT_FORM_EMAIL" value="[Your Contact Email]" />
    <add key="UMBRACO_API_URL" value="[Your Umbraco API URL]" />
    <add key="UMBRACO_API_KEY" value="[Your Umbraco API Key]" />
    <add key="NEXT_PUBLIC_BASE_URL" value="[Your Base URL]" />
  </appSettings>
  <system.webServer>
    <!-- This is the important bit - force detailed errors -->
    <httpErrors errorMode="Detailed" existingResponse="PassThrough" />
    <handlers>
      <add name="iisnode" path="server.js" verb="*" modules="iisnode" />
    </handlers>
    <rewrite>
      <rules>
        <rule name="HTTP to HTTPS Redirect" stopProcessing="true">
          <match url="(.*)" />
          <conditions>
            <add input="{HTTPS}" pattern="off" />
          </conditions>
          <action type="Redirect" url="https://{HTTP_HOST}{REQUEST_URI}" redirectType="Permanent" />
        </rule>
        <rule name="NextJS App" stopProcessing="true">
          <match url=".*" />
          <action type="Rewrite" url="server.js" />
        </rule>
      </rules>
    </rewrite>
    <iisnode loggingEnabled="true" node_env="production" />
  </system.webServer>
</configuration>
```

**Important:**  Replace the bracketed placeholders (e.g., `[Your API URL]`) with your actual environment-specific values in your `web.config` file on the server.  Do *not* commit the `web.config` file with sensitive values to the repository.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

-   [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
-   [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!
