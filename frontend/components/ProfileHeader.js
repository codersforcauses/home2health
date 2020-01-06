export default props => (
  <div
    class="row grey lighten-1"
    style={{ borderRadius: '1rem', marginTop: '2rem', padding: '1rem' }}
  >
    <div class="col m3">
      <img class="responsive-img" src={props.info.img} />
    </div>
    <div class="col m9">
      <div style={{ marginLeft: '1rem' }}>
        <div class="section">
          <div class="row" style={{marginBottom: 0}}>
            <h3 style={{ marginTop: 0, marginBottom: 0 }}>{props.info.name}</h3>
          </div>
          <div class="row">
            <p style={{ marginTop: 0, marginBottom: 0 }}>{props.info.title}
            </p>
          </div>
          <div class="row" style={{ marginBottom: 0 }}>
            <h6 style={{ marginTop: 0, marginBottom: 0 }}>{props.info.profession} at {props.info.workplace}
            </h6>
          </div>
        </div>
        <div class="divider" />
        <div class="section">
          <div class="row" style={{ marginBottom: 0 }}>
            <h6 style={{ marginTop: 0, marginBottom: 0 }}>
              Contact:
            </h6>
          </div>
        </div>
      </div>
    </div>
  </div>
)
