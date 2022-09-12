import { useState, useEffect } from "react"
import "./App.css"
import axios from "axios"
import Article from "./components/Article"
import Sidebar from "./components/Sidebar"

const App = () => {
  const [articles, setArticles] = useState(null)
  const [category, setCategory] = useState(null)
  let pathname = window.location.pathname
  pathname = pathname.replace("/", "")
  console.log(pathname)

  const isValidCategory = (pathname) => {
    return [
      "business",
      "entertainment",
      "general",
      "health",
      "science",
      "sports",
      "technology"
    ].includes(pathname)
  }
  if (pathname && isValidCategory(pathname)) {
    if (pathname != category) setCategory(pathname)
  }

  useEffect(() => {
    let url =
      "https://newsapi.org/v2/top-headlines?country=in&apiKey=279ab59f2549409ea8d4dc4c69f2b1d3"
    if (category) {
      url = url + "&category=" + category
    }
    console.log(url)
    axios
      .get(url)
      .then((res) => {
        setArticles(res.data.articles)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])
  return (
    <div>
      <div className="header">News App</div>
      <Sidebar category={category} />
      <div className="content">
        {articles &&
          articles.map((article) => {
            return article.content != null ? <Article item={article} /> : null
          })}
      </div>
    </div>
  )
}

export default App
