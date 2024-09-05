import { createPost } from "@/app/actions/actions";
import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation"
import Form from "@/components/form";

export default async function CreatePost() {
    const { isAuthenticated } = getKindeServerSession();
    if (!(await isAuthenticated())) {
        redirect('/api/auth/login?post_login_redirect_url=/create-post')
    }

    return (
        <main className="text-center pt-32 px-5 mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-5">Create Post</h1>
            <Form />
        </main>
    );
}
