export default function ({ href, title }) {
    return (
        <li>
            <a href={href}>{title}</a>
        </li>
    );
}