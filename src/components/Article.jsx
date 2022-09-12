import "./Article.css"
import moment from "moment"

const Article = (props) => {
  console.log(moment().format("MMMM Do YYYY, h:mm:ss a"))
  let publishedAt = new Date(props.item.publishedAt)
  console.log(
    `${publishedAt.toLocaleString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true
    })} on ${publishedAt.getDate()} ${publishedAt.getMonth()}`
  )
  console.log()
  const source = ` by ${props.item.author} / ${props.item.publishedAt}`
  return (
    <div className="news-card">
      <img src={props.item.urlToImage} className="news-card-image" />
      <div>
        <h3>{props.item.title}</h3>
        <div className="news-card-author-time">
          <b>story</b>
          {source}
        </div>
        <p>{props.item.description}</p>
        <a href={props.item.url} target="_blank">{`read more at ${props.item.source.name}`}</a>
      </div>
    </div>
  )
}

export default Article
