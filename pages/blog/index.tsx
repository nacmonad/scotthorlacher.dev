import Link from 'next/link';

const BlogIndexPage = () => {
  // Sample data for blog entries
  const blogEntries = [
    { id: '1', title: 'Blog Entry 1' },
    { id: '2', title: 'Blog Entry 2' },
    { id: '3', title: 'Blog Entry 3' },
  ];

  return (
    <div>
      <h1>Blog Entries</h1>
      <ul>
        {blogEntries.map((entry) => (
          <li key={entry.id}>
            <Link href={`/blog/${entry.id}`}>
              <a>{entry.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogIndexPage;
