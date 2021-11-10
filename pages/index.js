import Head from 'next/head'

//demo of fetching data from graphQL
const post = [
  {title: 'React Testing', excerpt: 'Learn React Testing'},
  {title: 'React with Tailwind', excerpt: 'Learn React with Tailwind'},
];

export default function Home() {
  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>NEXT GraphQL Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
        {post.map((post, index) => (
          <div>
            {post.title}
            {post.excerpt}
          </div>
        ))}
      </div>

    </div>
  )
}
