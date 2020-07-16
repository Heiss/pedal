import Header from "../components/header";
import Footer from '../components/footer';

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
