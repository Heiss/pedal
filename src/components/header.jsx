import Nav from './nav';

export default function () {
    return (
        <header class="flex items-center justify-between py-2 border-b">
            <a href="#" class="px-2 lg:px-0 font-bold">
                Tech Blog
            </a>
            <Nav />
        </header>
    );
}
