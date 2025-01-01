```javascript
// pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app!</h1>
      <Link href="/about">
        <a>Go to About Page</a>
      </Link>
    </div>
  );
}
```
```javascript
// pages/about.js

export default function About() {
  // This will cause an error if the About component tries to use getServerSideProps or getStaticProps
  // but does not export them.
  console.log('Hello from the about page!');
  return <p>This is the about page.</p>;
}
```