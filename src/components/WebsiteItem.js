import { h } from 'preact';
import { Button } from 'preact-mdl';
import { Card } from 'preact-mdl';

export default({name, description, link}) => {
	console.log(name,description,link);
	return (
		<Card shadow={3}>
			<Card.Title>{name}</Card.Title>
			<Card.Text>{description}</Card.Text>
			<Card.Actions><a href={link}>{link}</a></Card.Actions>
		</Card>
	);
};
