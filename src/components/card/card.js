import "./card.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Card(props) {
  return (
    <div className="card">
      <div className="card-header">
        <div className="card-image">
          <FontAwesomeIcon icon={props.icon} size={props.iconSize} style={{ color: props.iconColor }}/>
        </div>
        <div className="card-title">
          <h3 className="card-lang">{props.name}</h3>
          <p className="card-desc">{props.desc}</p>
        </div>
      </div>
      <div className="card-body">
        {props.libraries && <p>{props.libraries}</p>}
      </div>
    </div>
  );
}

export default Card;
