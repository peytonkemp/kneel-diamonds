import { getSizes } from "./database.js"

const DiamondSizes = getSizes()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "size") {
            window.alert(``)
        }
    }
)

export const DiamondSizes = () => {
    let html = "<ul>"

    // Use .map() for converting objects to <li> elements
    const listItems = DiamondSizes.map(sizes => {
        return `<li>
            <input type="radio" name="size" value="${sizes.id}" /> ${sizes.carets}
        </li>`
    })

    html += listItems.join("")
    html += "</ul>"

    return html
}

