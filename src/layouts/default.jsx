import Header from "./_header";
import Footer from './_footer';

export default function ({ children }) {
    return (
        <div class="max-w-screen-xl mx-auto">
            <Header />
            <main class="mt-10">
                {children}
            </main>
            <Footer />
        </div >
    );
}
