import "../styles/scholarship.css";

const scholarship = ({ props }) => {
  return (
    <div className="scholarship-card">
      <div>
        <h3 style={{ marginBottom: "0px" }}>{props.name}</h3>
        <h5 style={{ marginTop: "0px" }}>{props.organization}</h5>
      </div>
      <div className="scholarship-img">
        <img
          src="https://www.nnjcf.org/wp-content/uploads/2015/12/Andrea-Fund-Photo-626x1024.jpg"
          alt="Scholarship Image"
          srcset=""
        />
      </div>
      <div className="scholarship-details">
        <div className="d-col">
          <span>Opens</span>
          <span>{props.start_date ? `${props.start_date}` : "N/A"}</span>
        </div>
        <div className="d-col">
          <span>Ends</span>
          <span>{props.end_date ? `${props.end_date}` : "N/A"}</span>
        </div>
        <div className="d-col">
          <span>Amount</span>
          <span>$500</span>
        </div>
      </div>
    </div>
  );
};

export default scholarship;
