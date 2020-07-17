import { Fragment } from "@bikeshaving/crank"
import Site from "../site";

function Card({ title, children, author, publish_date, image, author_photo, href }) {
    return (
        <a class="block rounded w-full lg:flex mb-10"
            href={href}
        >
            <div
                class="h-48 lg:w-48 flex-none bg-cover text-center overflow-hidden opacity-75"
                style={`background-image: url('${image}')`}
                title="deit is very important"
            >
            </div>
            <div class="bg-white rounded px-4 flex flex-col justify-between leading-normal">
                <div>
                    <div class="mt-3 md:mt-0 text-gray-700 font-bold text-2xl mb-2">
                        {title}
                    </div>
                    <p class="text-gray-700 text-base">
                        {children}
                    </p>
                </div>
                <div class="flex mt-3">
                    <img src={author_photo}
                        class="h-10 w-10 rounded-full mr-2 object-cover" />
                    <div>
                        <p class="font-semibold text-gray-700 text-sm capitalize"> {author} </p>
                        <p class="text-gray-600 text-xs"> {publish_date} </p>
                    </div>
                </div>
            </div>
        </a>
    )
}

export default async function () {
    const res = await this.$fetch(Site.blog.posts);
    const posts = await res.json();

    return (
        <Fragment>
            {posts.slice(0, 3).map((post) => (
                <Card title={post.title} author={post.author} title={post.title} image={post.image} category={post.category} publish_date={post.pub_date} author_photo={`https://randomuser.me/api/portraits/men/${post.id}.jpg`} image="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80" href={`/blog/${post.id}`}>
                    {post.body}
                </Card>
            ))}
        </Fragment>
    )
}