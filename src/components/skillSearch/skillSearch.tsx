import * as React from "react";
import "./skillSearch.scss";
interface OwnProps {
  searchWord: string;
  updateSearchWord: (v: string) => void;
  fetch: (v: string) => void;
}

type MainProps = OwnProps;

const SkillSearch: React.SFC<MainProps> = (props: MainProps) => {
  return (
    <section className="input-area">
      <input
        type="text"
        placeholder="検索ワード"
        className="input-area__textbox"
        value={props.searchWord}
        onChange={e => {
          props.updateSearchWord(e.target.value);
          props.fetch(e.target.value);
        }}
      />
    </section>
  );
};

export default SkillSearch;
