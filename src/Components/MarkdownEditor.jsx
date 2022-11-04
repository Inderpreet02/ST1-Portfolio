import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import "./MarkdownEditor.css";

const MarkdownEditor = () => {
  const [markdown, setMarkdown] = useState(`# hello`);
  return (
    <div className="markdown">
      <div className="markdown__container">
        <div className="main__h2">Markdown Editor</div>

        <div className="markdown__edit">
          <div className="markdown__left">
            <textarea
              id="markdown"
              cols="30"
              rows="10"
              className="markdown__input"
              value={markdown}
              onChange={(e) => setMarkdown(e.target.value)}
            ></textarea>
          </div>
          <div className="markdown__right">
            <ReactMarkdown className="markdown__view" children={markdown} remarkPlugins={[remarkGfm]} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarkdownEditor;
