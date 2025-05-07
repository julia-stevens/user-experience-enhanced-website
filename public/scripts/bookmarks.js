if ('fetch' in window && 'DOMParser' in window) {
    document.addEventListener('submit', async function(event) {
        const form = event.target

        if (!form.hasAttribute('data-enhanced')) {
            return
        }

        event.preventDefault()

        form.classList.add("loading")

        // lijst met alle webinars
        const webinarList = document.querySelectorAll(".webinar-article");

        // als het aangeklikte form de laatste is op de pagina, ga naar de normale POST (en dus niet client-side)
        if (webinarList.length === 1) {
            form.submit() // trigger POST submit (server-side) en pagina reload ---> empty state ingeladen
            return // verlaat script
        }

        const response = await fetch(form.action, {
            method: form.method,
            body: new URLSearchParams(new FormData(form))
        })

        const responseText = await response.text()

        const parser = new DOMParser()
        const responseDOM = parser.parseFromString(responseText, 'text/html')

        
        // BOOKMARK COUNT
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
            })
        }
        
        // SINGLE PAGE VIEW TRANSITION
        const webinarArticle = form.closest('.webinar-article');

        if (document.startViewTransition) {
            webinarArticle.classList.add('removing');
            
            document.startViewTransition(() => {
                webinarArticle.remove();
            });
            
            event.preventDefault();
        }
    })
}