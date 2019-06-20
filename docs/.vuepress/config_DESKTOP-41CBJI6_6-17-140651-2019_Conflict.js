module.exports = {
	title: 'NGJS',
	description: 'Powered by Vuepress',
	host: '192.168.0.2',
	port: 8080,
	themeConfig: {
		sidebar: {
			'/requirement/' : [
				''
			],
			'/interface/' : [
				''
			],
			'/postgres/': [
				'',
				'logical-replication.md',
				'procedure.md'
			],
			'/about/': [
				''
			]
/*			,
			'/': [
				''
			]
*/		

		},
		nav: [
			{ text: 'Home', link: '/' },
			{ text: 'Requirement', link: '/requirement/' },
			{ text: 'Interface', link: '/interface/'},
			{ text: 'Postgres', link: '/postgres/'},
			{ text: 'About', link: '/about/'}
		],
	},
	markdown: {
		lineNumbers: false
	},

}
