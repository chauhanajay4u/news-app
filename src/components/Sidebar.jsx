import { useState } from "react"
import "./Sidebar.css"
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai"

const Sidebar = (props) => {
  const [sidebar, setSidebar] = useState(props.category)
  const handleSidebar = (event) => {
    event.preventDefault()
    sidebar ? setSidebar(false) : setSidebar(true)
  }
  return (
    <div className="sidebar">
      {sidebar ? (
        <nav>
          Categories
          <a className={!props.category ? "category selected" : "category"} href="/">
            All News
          </a>
          <a
            className={props.category == "business" ? "category selected" : "category"}
            href="business"
          >
            Business
          </a>
          <a
            className={props.category == "entertainment" ? "category selected" : "category"}
            href="entertainment"
          >
            Entertainment
          </a>
          <a
            className={props.category == "general" ? "category selected" : "category"}
            href="general"
          >
            General
          </a>
          <a
            className={props.category == "health" ? "category selected" : "category"}
            href="health"
          >
            Health
          </a>
          <a
            className={props.category == "science" ? "category selected" : "category"}
            href="science"
          >
            Science
          </a>
          <a
            className={props.category == "sports" ? "category selected" : "category"}
            href="sports"
          >
            Sports
          </a>
          <a
            className={props.category == "technology" ? "category selected" : "category"}
            href="technology"
          >
            Technology
          </a>
        </nav>
      ) : null}
      <button
        className="sidebar-button"
        style={{ backgroundColor: sidebar ? "black" : "white", color: sidebar ? "white" : "black" }}
        onClick={handleSidebar}
      >
        {sidebar ? <AiOutlineClose /> : <AiOutlineMenu />}
      </button>
    </div>
  )
}

export default Sidebar
