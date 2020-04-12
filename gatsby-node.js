/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const axios = require('axios')

const getApiData = async () => {
	const { data } = await axios.get('http://github-stats-api.test')
	return { ...data }
}

exports.createPages = async ({ actions: { createPage } }) => {
	const { last_updated, data } = await getApiData()

	createPage({
		path: `/`,
		component: require.resolve("./src/templates/index.js"),
		context: { last_updated, data },
	})
}
