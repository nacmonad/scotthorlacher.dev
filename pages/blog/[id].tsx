import { useRouter } from 'next/router';

const BlogEntryPage = () => {
  const router = useRouter();
  const { id } = router.query;

  // Fetch blog entry data based on the `id` parameter

  // Placeholder data for demonstration
  const blogEntry = {
    id: id,
    title: `Blog Entry ${id}`,
    content: `Content of Blog Entry ${id}`,
  };

  return (
    <div>
      <h1>{blogEntry.title}</h1>
      <p>{blogEntry.content}</p>
    </div>
  );
};

export default BlogEntryPage;
