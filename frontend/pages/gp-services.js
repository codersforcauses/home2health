import { LinkCards } from '../components/LinkCards'
import SEO from '../components/SEO'

const GpServices = () => {
  return (
    <>
      <SEO title={`Home2Health - GP Services`}></SEO>
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

        <LinkCards
          cardDetails={[
            {
              src: '/logos/partner-hh.png',
              link: 'https://homelesshealthcare.org.au/ ',
              reportTitle: 'Homeless Healthcare'
            },
            {
              src:
                'https://lh3.google.com/u/0/d/173EVQLf6nbQYGcl3zybhRD3xE9j8JKu1=w250-h238-p-k-nu-iv3',
              link:
                'https://drive.google.com/open?id=173EVQLf6nbQYGcl3zybhRD3xE9j8JKu1',
              reportTitle: 'Hospital Collaboration Paper (Wood et al 2018)'
            },
            {
              src:
                'https://lh3.google.com/u/0/d/11gs5tfjJxk5eJiQ4r978P-UUEHKSAWgO=w250-h238-p-k-nu-iv1',
              link:
                'https://drive.google.com/open?id=11gs5tfjJxk5eJiQ4r978P-UUEHKSAWgO',
              reportTitle:
                'Homeless health care- meeting the challenges of providing primary care (Davies and Wood 2018)'
            },
            {
              src:
                'https://lh3.google.com/u/0/d/1WAipRfU9G98Vxort7YFMhKF6CcDAyKb4=w250-h238-p-k-nu-iv1',
              link:
                'https://drive.google.com/open?id=1WAipRfU9G98Vxort7YFMhKF6CcDAyKb4',
              reportTitle: 'Homeless Healthcare Clinical Senate (Nov 2016)'
            },
            {
              src:
                'https://lh3.google.com/u/0/d/1kVyTp4LeIsP3zB1CsG3_9BkJeFy0ElyE=w300-h285-p-k-nu-iv1',
              link:
                'https://drive.google.com/file/d/1kVyTp4LeIsP3zB1CsG3_9BkJeFy0ElyE/view?usp=sharing',
              reportTitle: 'Homeless Healthcare Evaluation Report 1 (Oct 2018)'
            },
            {
              src:
                'https://lh3.google.com/u/0/d/1Gy0arFU5gilL4L7g9Og10O-l-fua_9zC=w300-h285-p-k-nu-iv1',
              link:
                'https://drive.google.com/file/d/1Gy0arFU5gilL4L7g9Og10O-l-fua_9zC/view?usp=sharing',
              reportTitle: 'Homeless Healthcare Summary of Report 1 (Oct 2018)'
            },
            {
              src:
                'https://lh3.google.com/u/0/d/1do43kATRBb8L4MbSx9F0WZowiC8W9aVn=w300-h285-p-k-nu-iv3',
              link:
                'https://drive.google.com/file/d/1do43kATRBb8L4MbSx9F0WZowiC8W9aVn/view?usp=sharing',
              reportTitle: 'Street Health Infographic (Mar 2019)'
            }
          ]}
        />
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
