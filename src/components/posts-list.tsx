import Link from "next/link";
import prisma from "@/lib/db"
import Form from "@/components/form";

export default async function PostsList () {

    const posts = await prisma.post.findMany()
    console.log('response:', posts)
    return (
        <>
            <ul>
                {
                    posts.map(post => (
                        <li key={post.id} className="mb-2">
                            <Link className="text-2xl font-bold" href={`/posts/${post.id}`}>{post.title}</Link>
                        </li>
                    ))
                }
            </ul>
            <Form />
        </>
    );
}