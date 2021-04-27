import { getMetals, getOrders, getSizes, getStyles } from "./database.js"

document.addEventListener(
    "click",
    (event) => {
    }
)

export const KneelDiamonds = () => {
    return `
        <h1>Kneel Diamonds</h1>

        <article class="choices">
            <section class="choices__metals options">
                <h2>Metals</h2>
                ${getMetals()}
            </section>
            <section class="choices__sizes options">
                <h2>Sizes</h2>
                ${getSizes()}
            </section>
            <section class="choices__styles options">
                <h2>Styles</h2>
                ${getStyles()}
            </section>
        </article>

        <article>
            <button id="orderButton">Create Custom Order</button>
        </article>

        <article class="customOrders">
            <h2>Custom Jewelry Orders</h2>
            ${getOrders}
        </article>
    `
}

