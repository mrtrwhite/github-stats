/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it

import React from 'react'

export const onRenderBody = ({ setPostBodyComponents }) => {
    setPostBodyComponents([
        <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.3/Chart.bundle.min.js" />,
        <script src="./chart.js" />
    ])
}