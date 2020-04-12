import React from "react"
import Helmet from "react-helmet"
import moment from "moment"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Page = ({ pageContext }) => {
    return (
        <Layout>
            <SEO title="Github Stats" />
            <div className="container">
                <div className="intro">
                    <h1 className="title">Github Stats</h1>
                    <p className="text">
                        This page lists the top 1000 most-starred Github repos alongside the date on which they were last committed to and released.
                        Its purpose is to help developers decide which open source tools to use in their own projects.
                    </p>
                    <p>Last updated: {pageContext.last_updated}</p>
                </div>
                <div className="chart-container" style={{ position: 'relative', width: '100%' }}>
                    <canvas id="chart"></canvas>
                </div>
                <div className="table">
                    <div className="table-row table-headers">
                        <div className="table-cell name">Name</div>
                        <div className="table-cell stars">Stars</div>
                        <div className="table-cell forks">Forks</div>
                        <div className="table-cell last-commit">Last Commit</div>
                        <div className="table-cell last-release">Last Release</div>
                    </div>
                    {
                        pageContext.data.map((item, key) => {
                            const lastCommit = () => {
                                if (!item.lastCommitDate) {
                                    return;
                                }

                                return moment(item.lastCommitDate).format('Do MMMM YYYY');
                            }
                            const lastRelease = () => {
                                if (!item.lastReleaseDate) {
                                    return;
                                }

                                return moment(item.lastReleaseDate).format('Do MMMM YYYY');
                            }

                            return (
                                <div className="table-row" key={key}>
                                    <div className="table-cell name">{item.name}</div>
                                    <div className="table-cell stars">{item.stars}</div>
                                    <div className="table-cell forks">{item.forks}</div>
                                    <div className="table-cell last-commit">{ lastCommit() }</div>
                                    <div className="table-cell last-release">{ lastRelease() }</div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <script
                dangerouslySetInnerHTML={{
                    __html: `
                        window.apiData = ${JSON.stringify(pageContext.data)};
                    `
                }}
            />
        </Layout>
    )
}

export default Page