function Card({ title, children, author, publish_date, photo, author_photo }) {
    return (
        <a class="block rounded w-full lg:flex mb-10"
            href="./blog-single-1.html"
        >
            <div
                class="h-48 lg:w-48 flex-none bg-cover text-center overflow-hidden opacity-75"
                style={`background-image: url('${photo}')`}
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

export default function () {
    return (
        <div class="w-full lg:w-2/3">
            <Card title="Aliquam venenatis nisl id purus rhoncus, in efficitur sem hendrerit." author="eduard franz" publish_date="14 Aug" author_photo="https://randomuser.me/api/portraits/men/86.jpg" photo="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80">
                Duis euismod est quis lacus elementum, eu laoreet dolor consectetur.
                Pellentesque sed neque vel tellus lacinia elementum. Proin consequat ullamcorper eleifend.
            </Card>
            <Card title="Aliquam venenatis nisl id purus rhoncus, in efficitur sem hendrerit." author="eduard franz" publish_date="14 Aug" author_photo="https://randomuser.me/api/portraits/men/86.jpg" photo="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80">
                Duis euismod est quis lacus elementum, eu laoreet dolor consectetur.
                Pellentesque sed neque vel tellus lacinia elementum. Proin consequat ullamcorper eleifend.
            </Card>
            <Card title="Aliquam venenatis nisl id purus rhoncus, in efficitur sem hendrerit." author="eduard franz" publish_date="14 Aug" author_photo="https://randomuser.me/api/portraits/men/86.jpg" photo="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80">
                Duis euismod est quis lacus elementum, eu laoreet dolor consectetur.
                Pellentesque sed neque vel tellus lacinia elementum. Proin consequat ullamcorper eleifend.
            </Card>
        </div>
    )
}