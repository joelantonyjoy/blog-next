import Link from "next/link";
function BlogsPage() {
  return (
    <>
      <h1>Blogs Page</h1>
      <ul>
        <li>
          <Link href="blogs/How to center anything with CSS">
            How to center anything with CSS
          </Link>
        </li>
        <li>
          <Link href="blogs/Becoming a Frontend Engineer">
            Becoming a Frontend Engineer : A Little day by day
          </Link>
        </li>
        <li>
          <Link href="blogs/overbetting on a framework">
            The pitfalls of overbetting on a framework
          </Link>
        </li>
        <li>
          <Link href="blogs/Javascript and its internal">
            Javascript and its internal
          </Link>
        </li>
      </ul>
    </>
  );
}

export default BlogsPage;
