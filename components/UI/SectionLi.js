const SectionLi = (props) => {
  return (
    <li className="search-results-suggestion search-results-suggestion-heading">
      <a href={props.link}>{props.name}</a>
    </li>
  );
};
export default SectionLi;
