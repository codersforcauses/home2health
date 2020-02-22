import { LinkCards } from '../components/LinkCards'

const GpServices = () => {
  return (
    <>
      {style}
      <div className="container">
        {/* <h1>GP Services</h1> */}
        <h3>Homeless Healthcare</h3>

        <p>
          Homeless Healthcare is a primary health service for people
          experiencing, or at risk of, homelessness. It offers a variety of
          services to help people experiencing homelessness in Perth including:
          <ul>
            <li>
              • Street health: Nurses providing care in public places within the
              Perth CBD and Fremantle to target rough sleepers’ medical needs
            </li>
            <li>
              • Mobile GP: Clinics are provided at homeless drop-in centres
              throughout the Perth CBD
            </li>
            <li>
              • After-hours support services (AHSS): 24-hour support program
              provided to 50 Lives 50 Homes clients
            </li>
            <li>
              • RPH in-reach: Supports patients and connects them with community
              services.
            </li>
            <li>
              • Dual diagnosis service (HODDS) The Home2Health research team has
              been conducting an ongoing evaluation of these services since
              2016.
            </li>
          </ul>
        </p>
        <p>
          The Home2Health research team has been conducting an ongoing
          evaluation of these services since 2016.
        </p>
      </div>
    </>
  )
}

const style = (
  <style jsx="true">{`
    h1 {
      color: red;
    }
  `}</style>
)

export default GpServices
