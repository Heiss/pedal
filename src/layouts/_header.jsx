import Nav from '../components/nav';
import Site from "../site"

export default function () {
    return (
        <header class="flex items-center justify-between py-2 border-b">
            <a href="#" class="px-2 lg:px-0 font-bold">
                {Site.navbarTitle}
            </a>
            <Nav />
        </header>
    );
}
