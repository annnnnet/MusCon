import React from 'react';
import {
	CollapsibleComponent,
	CollapsibleHead,
	CollapsibleContent,
} from 'react-collapsible-component';
import './Test.css';
import SongsList from './SongsList';

export default class Test extends React.Component {
	render() {
		return (
			<div>
				<CollapsibleComponent>
					<CollapsibleHead className='additionalClassForHead'>
						<h4>Singer</h4>
					</CollapsibleHead>
					<CollapsibleContent className='additionalClassForContent'>
						<SongsList />
					</CollapsibleContent>

					<CollapsibleHead isExpanded={true}>
						<h4>Singer</h4>
					</CollapsibleHead>
					<CollapsibleContent isExpanded={true}>
						<SongsList />
					</CollapsibleContent>

					<CollapsibleHead>
						<h4>Singer</h4>
					</CollapsibleHead>
					<CollapsibleContent>
						<SongsList />
					</CollapsibleContent>
				</CollapsibleComponent>
			</div>
		);
	}
}
