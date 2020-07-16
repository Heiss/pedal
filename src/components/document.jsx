import Site from "../site"

export default function ({ children }) {
    return (
        <html style="overflow-y: scroll;">
            <head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>{Site.title}</title>
                <link rel="stylesheet" href="./client.css"></link>
            </head>
            <body>
                <div id="app">{children}</div>
                <script src="./client.js" type="module"></script>
            </body>
        </html>
    );
}
