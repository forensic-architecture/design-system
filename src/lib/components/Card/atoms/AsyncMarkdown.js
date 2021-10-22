import React, { useState, useEffect } from "react";
import marked from "marked";

// TODO could this be a security vulnerability?
const CardAsyncMarkdown = ({ title, value }) => {
  const [content, setContent] = useState('...')

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(value)
      const text = await result.text()
      setContent(text);
    }

    fetchData()
  })

  return (
    <div className="card-cell">
      {title ? <h4>{title}</h4> : null}
      <div dangerouslySetInnerHTML={{ __html: marked(`${content}`) }} />
    </div>
  );
};

export default CardAsyncMarkdown;
