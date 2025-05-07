De instructie vind je in: [INSTRUCTIONS.md](https://github.com/fdnd-task/enhanced-website/blob/main/docs/INSTRUCTIONS.md)

# Enhanced website - Oncollaboration 
Ontwerp en maak een interactieve website die snel laadt en prettig te gebruiken is.

<img width="200" alt="image" src="https://github.com/user-attachments/assets/5336f86f-f712-439d-b013-3bb22e3aa841" />
<img width="700" alt="image" src="https://github.com/user-attachments/assets/47c3f77f-6f0b-4512-b248-a86664c3a9c4" />


## Inleiding
### About _Oncollaboration_
Oncollaboration is een ontwerp voor een online platform voor samenwerking en kennisdeling tussen Indonesische en Nederlandse radiotherapeuten.

Dit platform is het afstudeerwerk van oud-CMD student Sergio Eijben. Hij is in opdracht van Judi van Diessen van het Antoni van Leeuwenhoek ziekenhuis afgestudeerd op de vraag hoe de samenwerking en kennisdeling tussen radiotherapeuten in Nederland en Indonesië verbeterd kan worden.

### Uitdaging
Ontwerp en ontwikkel het online platform Oncollaboration om kennisoverdracht en interactie tussen Nederlandse en Indonesische radiotherapeuten te stimuleren.

### Oplossing
Mijn oplossing voor de uitdaging omvat 3 pagina's, namelijk: home, webinars en bookmarks. Deze sprint ben ik verder gegaan met het werk vanuit voorgaande sprints. Nieuw is de bookmark counter in de heading die bijhoudt hoeveel webinars gebookmarked zijn door de gebruiker. Daarnaast heb ik gewerkt aan de performace door o.a. te werken met responsive images en heb ik view transitions toegevoegd. 

[Bekijk hier de live site](https://user-experience-enhanced-website-sn2w.onrender.com/)

## Inhoudsopgave
  * [Beschrijving](#beschrijving)
  * [Kenmerken](#kenmerken)
  * [Installatie](#installatie)
  * [Bronnen](#bronnen)
  * [Licentie](#licentie)

## Beschrijving
Op de `home` pagina staat een uitleg over _Oncollaboration_ en toelichting over de internationele samenwerking en betrokken partners. Ook is hier de meest recente webinar te vinden. 

https://github.com/user-attachments/assets/2d280fa7-a891-4386-a679-ce6e4001de1c

Op de `webinars` pagina staat het hele overzicht van alle webinars die gegeven zijn. Per webinar staat de titel, duur, spreker en de categorie beschreven. Ook is hier de mogelijkheid om een webinar te bookmarken met de knop 'bookmark'.

<img width="700" alt="image" src="https://github.com/user-attachments/assets/a04d0e57-80d8-42cd-9959-70ea1fcb1a08" />
<img width="200" alt="image" src="https://github.com/user-attachments/assets/317cce6d-2577-467a-8db2-8f206c435203" />

Op de `bookmarks` pagina komen alle gebookmarkte webinars te staan en kunnen deze verwijderd worden.

<img width="700" alt="image" src="https://github.com/user-attachments/assets/9df7fad6-45e6-41f0-a205-0e6820ecee8f" />

Daarnaast kunnen de webinars gesorteerd en gefilterd worden aan de hand van de sort & filter.

https://github.com/user-attachments/assets/26a92382-dbdc-4464-89c0-1752cb378393

### Responsive
De website is gebouwd vanuit het mobile-first principe. Onderstaande afbeelding laat de verschillende layouts zien. Op het kleinste formaat heb ik gewerkt met een one column layout, en naar mate de schermbreedte groter wordt, wordt er meer content horizontaal geplaatst en uitgelijnd.

![image](https://github.com/user-attachments/assets/5367ec07-5941-4998-966e-a1debafffd81)

### Ontwerpkeuzes
#### Algemeen 
* *Kleur*: de blauwe en geel/groene kleur heb ik overgenomen vanuit het logo van het Indonesische ziekenhuis. Dit om nadruk te leggen dat Indonesië onderdeel maakt van de samenwerking.
* *Typografie*: de typografie heb ik overgenomen vanaf de website van het AVL, om te benadrukken dat dit ziekenhuis onderdeel maakt van de samenwerking.
* *UI*: ik maak veel gebruik van afgeronde border om een speelse, vriendelijke sfeer te creëeren.
* *Logo's in header*: in de header heb ik 2 logo's staan om wederom nadruk te leggen op de internationale samenwerking. 

#### Nieuwe huisstijl
Deze sprint ben ik verder gegaan met het bewerken van de huisstijl van het platform. Ik heb kleine aanpassingen gemaakt in vergelijking met vorige sprint. 

Zo heb ik de header bijvoorbeeld aangepast, omdat ik dit te rommelig vond met de iconen en de dikgedrukte tekst. Ik heb dit nu rustiger gemaakt door de iconen te verwijderen en de links minder ruimte in te laten nemen en een andere `font weight` te gebruiken. 

![image](https://github.com/user-attachments/assets/407cae3c-def6-4c62-af14-c81046ecb17c)

#### Contrast
Voor dit herontwerp was het belangrijk om het kleur contrast te testen i.v.m. toegankelijkheid. Op basis van de resultaten heb ik een aantal teksten een andere kleur gegeven om aan de toegankelijkheids eisen te voldoen. 

<img width="350" alt="Image" src="https://github.com/user-attachments/assets/a3948783-2675-4130-86f8-41cea1757cc1" />

<img width="350" src="https://github.com/user-attachments/assets/2df1c116-1955-4e46-8e2c-2e2086d20528">

### Belangrijke features
#### Bookmark counter
In de `header` bij 'Bookmarks' staat nu aangegeven hoeveel webinars de gebruiker heeft gebookmarked. Bij het toevoegen en verwijderen wordt een animatie afgespeeld (feedback). 

https://github.com/user-attachments/assets/4283a706-81e1-436c-b9b1-59b463e5eb1e

#### Responsive images
Om de performance te verbeteren heb ik gebruik gemaakt van responsive images. Bijvoorbeeld bij de `hero` afbeelding op de `home` pagina en de afbeeldingen van de webinars. 

In onderstaand voorbeeld is te zien hoe bij een scherm breedte tussen 300px en 400px een passende afbeelding wordt geladen van 400px.

https://github.com/user-attachments/assets/7c54370f-3999-4c8d-a554-4da34e6bc681

#### View transitions
Om de perceived performance voor de gebruiker te verbeteren heb ik view transitions toegepast. 
##### Multi page
Bij het navigeren naar een andere pagina 'schuift' de oude pagina van het beeld af naar links en 'schuift' de nieuwe pagina vanuit rechts in beeld. 

https://github.com/user-attachments/assets/d5dde650-78f2-4b5a-8270-a537c0fa7f91

##### Single page
Bij het verwijderen van een webinar op de `bookmarks` pagina beweegt de card omhoog en 'verdwijnt'. Hier heb ik nog te maken met een issue waarbij de pagina refresht. Dit neem ik mee naar de volgende sprint. 

https://github.com/user-attachments/assets/1b1fecb9-da74-451b-bed0-3463c200942c

## Kenmerken
In dit project maak ik gebruik van Node.js en Express om een webserver op te zetten. Ik gebruik Liquid als template-engine voor het genereren van dynamische HTML-pagina's.

### Routes en dataverwerking
* [`app.get("/")`](https://github.com/julia-stevens/user-experience-enhanced-website/blob/6349fac114943a7e780f57603039212a030cf82a/server.js#L25-L49): Haalt gegevens op voor webinars en contourings via de Directus API, verzamelt alle resources van webinars en rendert de gegevens in index.liquid.
* [`app.get("/webinars")`](https://github.com/julia-stevens/user-experience-enhanced-website/blob/6349fac114943a7e780f57603039212a030cf82a/server.js#L81-L134): Haalt webinars op, past sorteermogelijkheden toe op basis van de querystring (zoals nieuwste, oudste, alfabetisch of op aantal views), en filtert op een geselecteerde categorie. De gerenderde gegevens worden weergegeven in webinars.liquid.
* [`app.get("/bookmarks")`](https://github.com/julia-stevens/user-experience-enhanced-website/blob/6349fac114943a7e780f57603039212a030cf82a/server.js#L160-L190): Haalt de opgeslagen bookmarks op en toont ze in bookmarks.liquid.
* [`app.post("/")`](https://github.com/julia-stevens/user-experience-enhanced-website/blob/6349fac114943a7e780f57603039212a030cf82a/server.js#L51-L79): Verwerkt het toevoegen en verwijderen van bookmarks en stuurt de gegevens naar de Directus API.
* [`app.post("/webinars")`](https://github.com/julia-stevens/user-experience-enhanced-website/blob/6349fac114943a7e780f57603039212a030cf82a/server.js#L192-L220): Verwerkt het toevoegen en verwijderen van bookmarks en stuurt de gegevens naar de Directus API.
* [`app.post("/bookmarks")`](https://github.com/julia-stevens/user-experience-enhanced-website/blob/6349fac114943a7e780f57603039212a030cf82a/server.js#L237-L266): Verwerkt het toevoegen en verwijderen van bookmarks en stuurt de gegevens naar de Directus API.

### Data ophalen en HTML renderen
* De gegevens worden opgehaald via fetch()-aanvragen naar verschillende Directus API-eindpunten, zoals voor webinars, contourings en categorieën. [Hier is een voorbeeld van het ophalen van alle webinars](https://github.com/julia-stevens/user-experience-enhanced-website/blob/6349fac114943a7e780f57603039212a030cf82a/server.js#L108-L109).
* Na verwerking van de data wordt de HTML gegenereerd met behulp van Liquid templates. [Hier wordt bijvoorbeeld de detailpagina van een webinar gerenderd](https://github.com/julia-stevens/user-experience-enhanced-website/blob/6349fac114943a7e780f57603039212a030cf82a/server.js#L126-L133).
* De gerenderde HTML wordt gegenereerd via Liquid, waarbij variabelen worden doorgegeven aan de templates. [Zie bijvoorbeeld het overzicht van alle webinars in webinars.liquid](https://github.com/julia-stevens/user-experience-enhanced-website/blob/6349fac114943a7e780f57603039212a030cf82a/views/webinars.liquid#L22-L29)

### Uitleg _Progressive Enhancements_
Progressive Enhancement is een coding strategie, waarmee je er voor kunt zorgen dat je website het altijd doet, voor iedereen. 

1. Bepaal de _core functionality_.
2. Bouw de functionaliteit met de simpelste techniek (dit is meestal HTML en CSS met huisstijl).
3. Voeg daarna extra enhancements toe met CSs en client-side JS om de UX te verbeteren. 

### Uitleg _NodeJS, Express en Liquid_
#### NodeJS
Met NodeJS kun je JavaScript op een server draaien. Hiermee kun je get en post request/responses bouwen om met bv. databases te communiceren. Zoals wij in dit project hebben gedaan.

#### Express
Express is een hulpmiddel binnen NodeJS, waarmee een webserver gebouwd kan worden. Je kunt bijvoorbeeld instellen welke pagina's en data getoond wordt.

#### Liquid
Liquid is een template-engine waarmee je dynamische HTML-pagina's kunt genereren.

## Installatie
Zoals beschreven bij Kenmerken is bij dit project gebruik gemaakt van NodeJS. Om aan dit project te werken moet NodeJS geïnstalleerd zijn. Eenmal geïnstalleerd kan het project geopend worden in de code editor.

Voer in de terminal `npm install` uit om alle afhankelijkheden te installeren.

Voer vervolgens `npm start` uit om de server te starten.

Ga in je browser naar `http://localhost:8000` om het project te bekijken.

## Bronnen
* [FDND Agency](https://github.com/fdnd-agency/oncollaboration/wiki/Design-Challenge)

## Licentie
This project is licensed under the terms of the [MIT license](./LICENSE).
