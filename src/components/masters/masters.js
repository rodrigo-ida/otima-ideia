import StyledMasters from "./styledMasters";
import TitleGenerator from "../../util/titleGenerator";
import masterData from "../../assets/masters/mastersData";

const Masters = () => {
  const allMasters = masterData.map((e, i) => {
    return (
      <li key={'master' + e.title} className="list-item">
        <article>
          <figure>
            <img src={e.photo} alt='master' />
            <figcaption>{e.title}</figcaption>
            <p className="subtitle">{e.subtitle}</p>
          </figure>
        </article>
      </li>
    );
  });

  return (
    <StyledMasters>
      <div className="title-wrapper">

      <TitleGenerator title="Masters" backgroundLetters="Masters" />
      </div>
      <div className="masters-gallery">
        <ul className="masters-list">
            {allMasters}
        </ul>
      </div>
    </StyledMasters>
  );
};

export default Masters;
