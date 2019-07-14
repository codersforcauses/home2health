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
          <div class="row">
            <h1 style={{ marginTop: 0, marginBottom: 0 }}>John Doe</h1>
          </div>
          <div class="row">
            <h6 style={{ marginTop: 0, marginBottom: 0 }}>
              Professor, BSc Calcutta, MSc Kanpur, MTech PhD IIT Madras
            </h6>
          </div>
          <div class="row" style={{ marginBottom: 0 }}>
            <h6 style={{ marginTop: 0, marginBottom: 0 }}>
              Professor at University of Western Australia
            </h6>
          </div>
        </div>
        <div class="divider" />
        <div class="section">
          <div class="row" style={{ marginBottom: 0 }}>
            <h6 style={{ marginTop: 0, marginBottom: 0 }}>
              Email WWW Twitter Facebook
            </h6>
          </div>
        </div>
      </div>
    </div>
  </div>
)
