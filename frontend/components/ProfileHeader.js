export default props => (
  <div
    className="row grey lighten-1"
    style={{ borderRadius: '1rem', marginTop: '2rem', padding: '1rem' }}
  >
    <div className="col m3">
      <img className="responsive-img" src={props.info.img} />
    </div>
    <div className="col m9">
      <div style={{ marginLeft: '1rem' }}>
        <div className="section">
          <div className="row" style={{marginBottom: 0}}>
            <h3 style={{ marginTop: 0, marginBottom: 0 }}>{props.info.name}</h3>
          </div>
          <div className="row">
            <p style={{ marginTop: 0, marginBottom: 0 }}>{props.info.title}
            </p>
          </div>
          <div className="row" style={{ marginBottom: 0 }}>
            <h6 style={{ marginTop: 0, marginBottom: 0 }}>{props.info.profession} at {props.info.workplace}
            </h6>
          </div>
        </div>
        <div className="divider" />
        <div className="section">
          <div className="row" style={{ marginBottom: 0 }}>
            <h6 style={{ marginTop: 0, marginBottom: 0 }}>
              Contact:
            </h6>
          </div>
        </div>
      </div>
    </div>
  </div>
)
