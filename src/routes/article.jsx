import LoadingIndicator from '../components/LoadingIndicator';
import Body from "../components/articleBody";
import Site from "../site"

async function Article({ id }) {
    const res = await this.$fetch(Site.blog.post(id));
    const post = await res.json();
    return (
        <Body title={post.title} body={post.body} image={post.image} category={post.category} />
    );
}

export default async function* ({ id }) {
    if (this.$isClient) yield <LoadingIndicator />;
    for await (const _ of this) {
        yield <Article id={id} />;
    }
}
