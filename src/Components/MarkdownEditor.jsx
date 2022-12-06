import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import "./MarkdownEditor.css";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { db } from "../firebase"
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const MarkdownEditor = () => {
  const [markdown, setMarkdown] = useState(`# hello`);

  const handleSubmit = async (e) => {

    e.preventDefault();

    try{
      const docRef = await addDoc(collection(db, "blogs"), {
        title: "Markdown Title",
        markdown: markdown,
        author: "Joe Hitler",
        img: "https://images.unsplash.com/photo-1667977602009-ddd5e7b7c2c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        timestamp: serverTimestamp(),
      })

      console.log(docRef.id);
    } catch(e) {
      console.error("Error adding doc: ", e);
    }
  }
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
            <ReactMarkdown
              className="markdown__view"
              children={markdown}
              remarkPlugins={[remarkGfm]}
              components={{
                code({ node, inline, className, children, ...props }) {
                  const match = /language-(\w+)/.exec(className || "");
                  return !inline && match ? (
                    <SyntaxHighlighter
                      children={String(children).replace(/\n$/, "")}
                      style={vscDarkPlus}
                      language={match[1]}
                      PreTag="div"
                      {...props}
                    />
                  ) : (
                    <code className={className} {...props}>
                      {children}
                    </code>
                  );
                },
              }}
            />
          </div>
        </div>

        <button className="markdown__btn" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default MarkdownEditor;
