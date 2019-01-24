import App from 'components/app'
import CreativeHub from 'containers/pages/creativeHub'

const routes = [
    {
        component: App,
        routes:[
            {
                component: CreativeHub,
                exact: true,
                path:'/'
            },
            {
				path      : '*',
				component : CreativeHub
			}
        ]
    }
]

export default routes