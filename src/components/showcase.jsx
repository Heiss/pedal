import { Fragment } from "@bikeshaving/crank"
function ShowcaseLeft() {
    return (
        <a
            class="mb-4 md:mb-0 w-full md:w-2/3 relative rounded inline-block"
            style="height: 24em;"
            href="./blog.html"
        >
            <div class="absolute left-0 bottom-0 w-full h-full z-10"
                style="background-image: linear-gradient(180deg,transparent,rgba(0,0,0,.7));"></div>
            <img src="https://images.unsplash.com/photo-1493770348161-369560ae357d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80" class="absolute left-0 top-0 w-full h-full rounded z-0 object-cover" />
            <div class="p-4 absolute bottom-0 left-0 z-20">
                <span class="px-4 py-1 bg-black text-gray-200 inline-flex items-center justify-center mb-2">Nutrition</span>
                <h2 class="text-4xl font-semibold text-gray-100 leading-tight">
                    Pellentesque a consectetur velit, ac molestie ipsum. Donec sodales, massa et auctor.
            </h2>
                <div class="flex mt-3">
                    <img src="https://randomuser.me/api/portraits/men/97.jpg"
                        class="h-10 w-10 rounded-full mr-2 object-cover" />
                    <div>
                        <p class="font-semibold text-gray-200 text-sm"> Mike Sullivan </p>
                        <p class="font-semibold text-gray-400 text-xs"> 14 Aug </p>
                    </div>
                </div>
            </div>
        </a>
    )
}

function ShowcaseRight() {
    return (
        <a class="w-full md:w-1/3 relative rounded"
            style="height: 24em;"
            href="./blog.html"
        >
            <div class="absolute left-0 top-0 w-full h-full z-10"
                style="background-image: linear-gradient(180deg,transparent,rgba(0,0,0,.7));"></div>
            <img src="https://images.unsplash.com/photo-1543362906-acfc16c67564?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1301&q=80" class="absolute left-0 top-0 w-full h-full rounded z-0 object-cover" />
            <div class="p-4 absolute bottom-0 left-0 z-20">
                <span class="px-4 py-1 bg-black text-gray-200 inline-flex items-center justify-center mb-2">Science</span>
                <h2 class="text-3xl font-semibold text-gray-100 leading-tight">Lorem ipsum dolor sit amet, consectetur
              adipisicing elit.</h2>
                <div class="flex mt-3">
                    <img
                        src="https://images-na.ssl-images-amazon.com/images/M/MV5BODFjZTkwMjItYzRhMS00OWYxLWI3YTUtNWIzOWQ4Yjg4NGZiXkEyXkFqcGdeQXVyMTQ0ODAxNzE@._V1_UX172_CR0,0,172,256_AL_.jpg"
                        class="h-10 w-10 rounded-full mr-2 object-cover" />
                    <div>
                        <p class="font-semibold text-gray-200 text-sm"> Chrishell Staus </p>
                        <p class="font-semibold text-gray-400 text-xs"> 15 Aug </p>
                    </div>
                </div>
            </div>
        </a >
    )
}

export default function () {
    return (
        <Fragment>
            <ShowcaseLeft />
            <ShowcaseRight />
        </Fragment>
    )
}