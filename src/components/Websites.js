import { h, Component } from 'preact';
import { Card,Icon,Button, Layout } from 'preact-mdl';

import WebsiteItem from './WebsiteItem';

const websites = require('./Websites.json');

export default class App extends Component {
	render() {
		console.log(websites);
		return (
			<div>
				<h3>Learn Programming Today</h3>
				<ul>{ websites.map(website => (
					<li><WebsiteItem
							name={website.name}
							description={website.description}
							link={website.link}/>
					</li>
				)) }
			</ul>
		</div>
		);
	}
}
