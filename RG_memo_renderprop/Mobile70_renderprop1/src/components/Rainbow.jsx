import './Rainbow.css';

export default function Rainbow(props) {

  return (
    <div className="Frame1">
      <div className="Frame2">
        <div className="Frame3">
          {props.getInner()}
        </div>
      </div>
    </div>
  );

}
