import Article from "../components/articleBody"
import Cards from "../components/cards"
import Showcase from "../components/showcase"
import { Fragment } from "@bikeshaving/crank"

export default function () {
    return (
        <Fragment>
            <div class="block md:flex md:space-x-2 px-2 lg:p-0">
                <Showcase />
            </div>
            <div class="block lg:flex lg:space-x-2 px-2 lg:p-0 mt-10 mb-10">
                <Cards />
            </div>
        </Fragment>
    );
}
