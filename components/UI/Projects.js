const Projects = (props) => {
  return (
    <li className="shot-thumbnail js-thumbnail shot-thumbnail-container">
      <div className="js-thumbnail-base shot-thumbnail-base disabled-shot-section dribbble-shot dribbble  ">
        <figure className="js-thumbnail-placeholder shot-thumbnail-placeholder">
          <img src={props.imagePath} />
        </figure>

        <div className="shot-thumbnail-overlay">
          <div className="shot-thumbnail-overlay-content">
            <div className="shot-title">{props.shotTitle}</div>
          </div>
        </div>
      </div>
      <div className="shot-details-container js-shot-details-container">
        <div className="user-information">
          <a className="hoverable url" rel="contact" href="sansbrothers.html">
            <img
              className="photo"
              width="24"
              height="24"
              src={props.profilePic}
            />
            <span className="display-name">{props.displayName}</span>
          </a>
        </div>
      </div>
    </li>
  );
};
export default Projects;
