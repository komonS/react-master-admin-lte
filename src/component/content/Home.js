import React from 'react'
import '../../css/Home.css'
//import BoxInfo from '../widget/BoxInfo'
import BoxinfoWorkflow from '../widget/BoxinfoFlow'
import ContentHeader from '../widget/ContentHeader'
import WorkflowTable from '../widget/WorkflowTable'

export default function Home() {
    return (
        <div className="home ">
            <div className="container-fluid">
                <ContentHeader name="Dashboard" />
                <BoxinfoWorkflow />
                <div>
                    <WorkflowTable />
                </div>
            </div>


        </div>
    )
}
