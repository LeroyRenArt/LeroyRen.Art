
import Head from 'next/head';

export default function Layout({ children, title = 'LeroyRen.Art | ScrollGrid' }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="utf-8" />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-black to-gray-900 text-white font-sans">
        {children}
      </div>
    </>
  );
}
