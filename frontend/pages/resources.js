import React, { Component, Fragment } from 'react'
import Link from 'next/link'
import './resources.css'


class Resources extends Component {
  render() {
    return (
      <Fragment>

        <div className="section" id="index-banner">
          <div className="container">
            <div className="row" style={{ marginBottom: 0 }}>
                <a className="resourcesLink" href="research_papers/50_Lives_Infographic_June_2017.pdf">50 Lives Infographic June 2017</a>
                <a className="resourcesLink" href="research_papers/50_Lives_First_Report_June_2017.pdf">50 Lives First Report June 2017</a>
                <a className="resourcesLink" href="research_papers/50_Lives_Second_Report_Sept_2018.pdf">50 Lives Second Report Sept 2018</a>
                <a className="resourcesLink" href="research_papers/50_Lives_Snapshot_April_2018.pdf">50 Lives Snapshot April 2018</a>
                <a className="resourcesLink" href="research_papers/Choices_First_Evaluation_Report_-_Oct_2018.pdf">Choices First Evaluation Report - Oct 2018</a>
                <a className="resourcesLink" href="research_papers/Davies,_Wood_2018_-_Homeless_health_care_meeting_the_challenges_of_providing_primary_care_MJA.pdf">Davies, Wood 2018 - Homeless health care meeting the challenges of providing primary care MJA</a>
                <a className="resourcesLink" href="research_papers/Homeless_Healthcare_-_Street_Health_Summary_-_March_2019.pdf">Homeless Healthcare - Street Health Summary - March 2019</a>
                <a className="resourcesLink" href="research_papers/Homeless_Healthcare_Clinical_Senate_Poster_-_Nov_2016.pdf">Homeless Healthcare Clinical Senate Poster - Nov 2016</a>
                <a className="resourcesLink" href="research_papers/Homeless_Healthcare_Report_-_Oct_2018.pdf">Homeless Healthcare Report - Oct 2018</a>
                <a className="resourcesLink" href="research_papers/Homeless_Healthcare_Summary_Report_-_Oct_2018.pdf">Homeless Healthcare Summary Report - Oct 2018</a>
                <a className="resourcesLink" href="research_papers/RPH_Homeless_Team_infographic_-_May_2018.pdf">RPH Homeless Team infographic - May 2018</a>
                <a className="resourcesLink" href="research_papers/RPH_Homeless_Team_Eval_Summary_2_-_Feb_2019.pdf">RPH Homeless Team Eval Summary 2 - Feb 2019</a>
                <a className="resourcesLink" href="research_papers/SVHM_-_CHOPS_Infographic.pdf">SVHM - CHOPS Infographic</a>
                <a className="resourcesLink" href="research_papers/Wood_et_al_2018_-_Hospital_Collaboration_with_a_Housing_First_program.pdf">Wood et al 2018 - Hospital Collaboration with a Housing First program</a>
            </div>
          </div>
        </div>
        
      </Fragment>
    )
  }
}

export default Resources
