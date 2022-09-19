import { useState, useEffect } from "react"
import "./App.css"
import axios from "axios"
import Article from "./components/Article"
import Sidebar from "./components/Sidebar"
import Spinner from "./components/Spinner"

const App = () => {
  const [articles, setArticles] = useState([])
  const [category, setCategory] = useState(null)
  const [page, setPage] = useState(1)
  const [loadMore, setLoadMore] = useState(true)
  const [isLoading, setisLoading] = useState(true)
  let pathname = window.location.pathname
  pathname = pathname.replace("/", "")

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

  const loadMoreHandler = (event) => {
    event.preventDefault()
    setPage(page + 1)
  }

  useEffect(() => {
    let url =
      "https://newsapi.org/v2/top-headlines?country=in&apiKey=279ab59f2549409ea8d4dc4c69f2b1d3&page=" +
      page
    if (category) {
      url = url + "&category=" + category
    }
    axios
      .get(url)
      .then((res) => {
        if (res.data.articles.length) {
          setArticles((previousArticles) => {
            return [...previousArticles, ...res.data.articles]
          })
          isLoading && setisLoading(false)
        } else {
          setLoadMore(false)
        }
      })
      .catch((err) => {
        console.log("error here")
      })
  }, [page])
  return (
    <div>
      <div className="header">News App</div>
      {isLoading ? (
        <Spinner />
      ) : (
        <div>
          <div className="header">News App</div>
          <Sidebar category={category} />
          <div className="content">
            {articles &&
              articles.map((article, index) => {
                return article.content != null ? <Article key={index} item={article} /> : null
              })}
          </div>
          {loadMore ? (
            <button className="load-more" onClick={loadMoreHandler}>
              Load More
            </button>
          ) : (
            <h3>No More Articles</h3>
          )}
        </div>
      )}
    </div>
  )
}

export default App
