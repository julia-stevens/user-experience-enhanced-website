import express from "express"
import { Liquid } from "liquidjs"
import methodOverride from "method-override"

const app = express()
app.use(express.urlencoded({ extended: true }))
app.use(express.static("public"))

const engine = new Liquid()
app.engine("liquid", engine.express())
app.set("views", "./views")

app.use(methodOverride("_method"))

// HOME
app.get("/", (req, res) => {
    res.render("index.liquid")
})

// WEBINARS
app.get("/webinars", (req, res) => {
    res.render("webinars.liquid")
})

// BOOKMARKS
app.get("/bookmarks", (req, res) => {
    res.render("bookmarks.liquid")
})

// WEBINAR/:SLUG
app.get("/webinars/:slug", (req, res) => {
    res.render("webinar.liquid")
})

app.set("port", process.env.PORT || 8000)
app.listen(app.get("port"), () => {
    console.log(`Application started on https://localhost:${"port"}`)
})