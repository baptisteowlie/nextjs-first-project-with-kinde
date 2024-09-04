import {createPost} from "@/app/actions/actions";

export default function Form() {

    return (
        <form className="h-10 space-x-2 mt-10" action={createPost}>
            <input className="border rounded px-3 h-full" type="text" name="title" placeholder="Title for new post" required/>
            <textarea name="body" placeholder="Body..." className="border rounded px-3 h-full" rows={6} required></textarea>
            <button>Submit</button>
        </form>
    )
}

