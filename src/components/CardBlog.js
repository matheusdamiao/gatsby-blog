import React, { useEffect, useState } from "react"
import HashTag from "./HashTag"
import TagIcon from "./../images/tags-icon.svg"

const CardBlog = ({
  link,
  title,
  imagem,
  data,
  description,
  hashtags,
  avatar,
  author,
}) => {
  const [tags, setTags] = useState(["separação", "casamento", "pensão"])

  useEffect(() => {
    if (hashtags) {
      let tag1 = hashtags[0]
      let tag2 = hashtags[1]
      let tag3 = hashtags[2]

      setTags([tag1, tag2, tag3])
      // console.log(tags)
    }
  }, [hashtags])

  return (
    <a className="link-div" href={link}>
      <div className="blog-card">
        <div className="div-foto">
          <img src={imagem} alt="" />
        </div>
        <small> {data} </small>
        <h3> {title}</h3>

        <div className="hashTags-div">
          <div className="icons-div">
            <img src={TagIcon} id="tag-icon" alt="" />
          </div>
          <HashTag backgroundColor={"#FEFFD9"}> {tags[0]}</HashTag>
          <HashTag backgroundColor={"#FEEBFF"}> {tags[1]} </HashTag>
          <HashTag backgroundColor={"#EAEAEA"}> {tags[2]} </HashTag>
        </div>
        {/* <p> {description}</p> */}
        <div className="avatar-blog-card">
          <img src={avatar} width={40} alt="" />
          <p> {author} </p>
        </div>
      </div>
    </a>
  )
}

export default CardBlog
