import LoadingIndicator from '../components/LoadingIndicator';

async function Blog() {
    const res = await this.$fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await res.json();

    return (
        <ul>
            {posts.map((post) => (
                <li>
                    <a href={`/blog/${post.id}`}>{post.title}</a>
                </li>
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
