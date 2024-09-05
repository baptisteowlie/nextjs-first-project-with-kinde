import Link from "next/link";
import prisma from "@/lib/db";
import Form from "@/components/form";

export default async function PostsList() {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const randomLimit = Math.floor(Math.random() * 10) + 1;
  const posts = await prisma.post.findMany({
    take: randomLimit,
  });
  return (
    <>
      <ul>
        {posts.map((post) => (
          <li key={post.id} className="mb-2">
            <Link className="text-2xl font-bold" href={`/posts/${post.id}`}>
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
      <Form />
    </>
  );
}
