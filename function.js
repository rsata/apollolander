async function onTrack(event, settings) {
	switch (event.event) {
		case 'Rotate Left':
			fetch(`${settings.endpoint}/left`);
			break;
		case 'Rotate Right':
			fetch(`${settings.endpoint}/right`);
			break;
		case 'Add Thrust':
			fetch(`${settings.endpoint}/thrust`);
			break;
		case 'Start Game':
			fetch(`${settings.endpoint}/start`);
			break;
		default:
			console.log('bad command');
	}
}
