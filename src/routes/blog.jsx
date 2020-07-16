import LoadingIndicator from '../components/LoadingIndicator';
import ListEntry from "../components/listEntry";

async function Blog() {
    const res = await this.$fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await res.json();

    return (
        <ul class="list-disc">
            {posts.map((post) => (
                <ListEntry href={`/blog/${post.id}`} title={post.title} />
            ))}
        </ul>
    );
}

export default async function* () {
    if (this.$isClient) yield <LoadingIndicator />;
    for await (const _ of this) {
        yield <Blog />;
    }
}
