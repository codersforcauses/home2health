import React from 'react'
import SEO from '../../components/SEO'
import Link from 'next/link'
import { LinkCards } from '../../components/LinkCards'
import SocialShare from './../../components/SocialShare'

export default () => {
  const m0 = {
    marginLeft: 0,
    marginRight: 0,
    marginTop: 50,
  }
  return (
    <React.Fragment>
      <SEO title="Home2Health - Dual Diagnosis Services - HODDS"></SEO>
      <div className="container">
        <h4 style={{ marginBottom: 0 }}>
          Homeless Outreach Dual Diagnosis Service (HODDS)
        </h4>
        <p>
          In February 2019 Homeless Healthcare (HHC) commenced the pilot of the
          Homeless Outreach Dual Diagnosis Service (HODDS); an outreach service
          that works with people experiencing homelessness in Perth who have a
          dual diagnosis of mental health and alcohol and other drug (AOD)
          issues. The HODDS team comprises of a Mental Health and AOD trained
          doctor and nurse. The team works alongside the HHC GP clinic that are
          in settings familiar to individuals experiencing homelessness. This
          integrated approach between primary care and specialist mental
          health/AOD care works effectively to manage all medical ,
          psychological and addiction issues in the community.
        </p>
        <p>
          HODDS has a flexible and integrated model of care, which is
          particularly suitable for this complex, multi-morbid patient
          population. It is centred around providing long-term GP care linked
          with access to specialist dual diagnosis care. HODDS recognises that
          tri-morbidity, trauma and a raft of social determinants are common
          among their patients, and ensure the care they provide extends beyond
          the medical sphere. The HODDS pilot is funded by a Department of
          Health Research Translation Projects Grant (Round 12), and is being
          evaluated by the Home2Health Team at UWA.
        </p>
        <p> More Details Below</p>
        <LinkCards
          cardDetails={[
            {
              alt: 'HODDS Snapshot',
              src: '/images/Dual-Diagnosis-Services/HODDS_Snapshot.png',
              link:
                '/research_papers/HODDS_snapshot_final_Jan_2020_electronic_version.pdf',
              reportTitle: 'HODDS Snapshot Jan 2020',
            },
          ]}
        />
      </div>
      <SocialShare></SocialShare>
    </React.Fragment>
  )
}
