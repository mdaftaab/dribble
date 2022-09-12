import SectionLi from "./SectionLi";

const SectionList = (props) => {
  return (
    <ul className="search-suggestions-hero search-results-suggestions">
      {props.list.map((data) => (
        <SectionLi link={data.navUrl} name={data.listName} />
      ))}
    </ul>
  );
};
export default SectionList;
