// SCROLLER
const scollers = document.querySelectorAll(".scroller")

if(!window.matchMedia("(prefers-reduced-motion:reduce)").matches) {
    addAnimation();
}

function addAnimation() {
    scollers.forEach(scroller => {
        scroller.setAttribute("data-animated", true)

        const scrollerContent = scroller.querySelector(".scroller-content")
        const scrollerContents = Array.from(scrollerContent.children)

        scrollerContents.forEach(item => {
            const duplicatedItem = item.cloneNode(true) 
            duplicatedItem.setAttribute("aria-hidden", true)
            scrollerContent.appendChild(duplicatedItem)
        })
    })
}

// CLIENT-SIDE REFRESH ON PAGE
if ('fetch' in window && 'DOMParser' in window) {
    // Als er ergens op de pagina een formulier wordt gesubmit..
    // (We maken hier gebruik van Event Delegation)
    document.addEventListener('submit', async function(event) {

        // Hou in een variabele bij welk formulier dat was
        const form = event.target

        // Als dit formulier geen data-enhanced attribuut heeft, doe dan niks
        // Dit doen we, zodat we sommige formulieren op de pagina kunnen 'enhancen'
        // Data attributen mag je zelf verzinnen; dit is dus niet iets speciaals
        // https://developer.mozilla.org/en-US/docs/Learn_web_development/Howto/Solve_HTML_problems/Use_data_attributes
        if (!form.hasAttribute('data-enhanced')) {
            return
        }

        // Voorkom de standaard submit van de browser
        // Let op: hiermee overschrijven we de default Loading state van de browser...
        event.preventDefault()

        form.classList.add("loading")

        // Doe een fetch naar de server, net als hoe de browser dit normaal zou doen
        // Gebruik daarvoor het action en method attribuut van het originele formulier
        // Inclusief alle formulierelementen
        const response = await fetch(form.action, {
            method: form.method,
            body: new URLSearchParams(new FormData(form))
        })

        // De server redirect op de normale manier, en geeft HTML terug
        // (De server weet niet eens dat deze fetch via client-side JavaScript gebeurde)
        const responseText = await response.text()

        // Normaal zou de browser die HTML parsen en weergeven, maar daar moeten we nu zelf iets mee
        // Parse de nieuwe HTML en maak hiervan een nieuw Document Object Model in het geheugen
        const parser = new DOMParser()
        const responseDOM = parser.parseFromString(responseText, 'text/html')

        // Zoek in die nieuwe DOM onze nieuwe state op, die we via Liquid hebben klaargemaakt
        // We gebruiken hiervoor het data-enhanced attribuut, zodat we weten waar we naar moeten zoeken
        // (Hierdoor kunnen we ook meerdere formulieren op dezelfde pagina gebruiken)
        const newState = responseDOM.querySelector('[data-enhanced="' + form.getAttribute('data-enhanced') + '"]')

        // Overschrijf ook het profile ding in de header, met een PLOP animatie

        // Overschrijf ons formulier met de nieuwe HTML
        // Hier wil je waarschijnlijk de Loading state vervangen door een Success state
        form.outerHTML = newState.outerHTML

        // BOOKMARK COUNTER

        // Zoek nieuwe bookmark count in response
        const newBookmarkCountElement = responseDOM.querySelector('.bookmark-count') 

        // Zoek huidige bookmark count op de pagina
        const bookmarkCountElement = document.querySelector('.bookmark-count')

        // Als beide elementen bestaan, activeer de animatie & pas de tekst aan (de count)
        if (newBookmarkCountElement && bookmarkCountElement) {
            bookmarkCountElement.classList.add("bookmark-anim")
            bookmarkCountElement.textContent = newBookmarkCountElement.textContent // Vervang de tekst met de nieuwe tekst uit server response

            // Verwijder animatie class na 1 seconde
            setTimeout(() => {
                bookmarkCountElement.classList.remove("bookmark-anim")
            }, 1000)
        }
    })
}