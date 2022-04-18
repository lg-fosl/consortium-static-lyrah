import '@babel/polyfill'
import dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'
import path from 'path'
dotenv.config()

const app = express()
const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || 5000

app.use(cors())

app.use(express.static(path.join(__dirname, '/../public')))

// About People Page
app.use(
  '/about-people',
  express.static(path.join(__dirname, '/../public/about-people.html')),
)

// About Purpose Page
app.use(
  '/about-purpose',
  express.static(path.join(__dirname, '/../public/about-purpose.html')),
)

// Our People Page
app.use(
  '/our-people',
  express.static(path.join(__dirname, '/../public/our-people.html')),
)

// Framing Our Work Page
app.use(
  '/framing-our-work',
  express.static(path.join(__dirname, '/../public/framing-our-work.html')),
)

// What We Do Page
app.use(
  '/what-we-do',
  express.static(path.join(__dirname, '/../public/what-we-do.html')),
)

// Our Research Page
app.use(
  '/our-research',
  express.static(path.join(__dirname, '/../public/our-research.html')),
)

// Research Impact Page
app.use(
  '/research-impact',
  express.static(path.join(__dirname, '/../public/research-impact.html')),
)

// Search Results Page
app.use(
  '/search-results',
  express.static(path.join(__dirname, '/../public/search-results.html')),
)

// Spotlight Page
app.use(
  '/spotlight-page',
  express.static(path.join(__dirname, '/../public/spotlight-page.html')),
)

// News and Events Page
app.use(
  '/news-and-events',
  express.static(path.join(__dirname, '/../public/news-and-events.html')),
)

// Math With Team form
app.use(
  '/match-with-team-form',
  express.static(path.join(__dirname, '/../public/match-with-team-form.html')),
)

app.use(function(req, res, next) {
  res.status(404).sendFile(path.join(__dirname, '/../public/404.html'))
})

app.listen(port, () => {
  console.log(`Server running on: http://localhost:${port}`)
})
