function Link({ to, isActive, children }) {
    return (
        <li class="px-2 md:px-4">
            <a class="text-purple-600 font-semibold hover:text-purple-500 ${isActive ? 'bg-gray-700 text-white' : ''}" href={to}>
                {children}
            </a>

        </li>
    );
}

export default function* () {
    let active;
    const isActive = (str) => active === str;

    for (const _ of this) {
        active = this.$route.split('/')[1] || 'home';
        yield (
            <nav class="px-2">
                <ul class="inline-flex items-center">

                    <Link to="/" isActive={isActive('home')}>
                        home
                        </Link>
                    <Link to="/about" isActive={isActive('about')}>
                        about
                        </Link>
                    <Link to="/blog" isActive={isActive('blog')}>
                        blog
                        </Link>
                    <Link to="/imprint" isActive={isActive('imprint')}>
                        Imprint
                        </Link>
                </ul>
            </nav>
        );
    }
}
