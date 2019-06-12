import * as React from "react";
import "./markdown.scss";
import marked from "marked";
const hljs = require("highlightjs");
interface OwnProps {
  markdown: string;
}

type MainProps = OwnProps;

class Markdown extends React.Component<MainProps> {
  componentDidUpdate = () => {
    marked.setOptions({
      highlight: function(code, lang) {
        return (hljs as any).highlightAuto(code, [lang]).value;
      }
    });
  };
  render = () => {
    const html = marked(this.props.markdown);
    return (
      <div
        className="markdown-area"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    );
  };
}

export default Markdown;
