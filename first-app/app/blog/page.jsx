import Link from "next/link";

const blogs = [
    {slug:"nextjs", title:"NextJs Basic"},
    {slug:"react", title:"React Basic"},
    {slug:"node", title:"Node Basic"},
]

const BlogPage = () => {
  return (
    <div>blog page
      {
        blogs.map((blog) => (
          <li key={blog.slug}>
            <Link href={`/blog/${blog.slug}`}>
            {blog.title}
            </Link>
          </li>
        ))
      }
    </div>
  )
}

export default BlogPage