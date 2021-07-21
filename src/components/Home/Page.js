import './Page.css';

function Page(props) {

  return (
    <div className="page-container">

      <div className="textBlock" style={props.textBlockStyle}>
        <div className="text-container">
          <div style={props.color}>{props.headline}</div>
          <div className="subtext" style={props.textBlockStyle}>{props.subtext}</div>
        </div>
      </div>

      <div className="imageBlock" style={props.imageBlockStyle}>
      </div>

    </div>
  );
}

export default Page;
