import { useRouter } from "next/router";

export default function BlogDetailsPage() {
  const router = useRouter();
  return (
    <div>
      <h1>Blog details : {router.query.blogId}</h1>
    </div>
  );
}
