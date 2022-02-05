import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  MetaFunction,
  Link,
} from 'remix';

export const meta: MetaFunction = () => {
  return {
    title: 'New Remix App',
    description: 'A new remix app',
    url: 'https://remix.app',
  };
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <Link to="admin" style={{ display: 'block' }}>
          Admin
        </Link>
        {process.env.NODE_ENV === 'development' && <LiveReload />}
      </body>
    </html>
  );
}
