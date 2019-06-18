import React from 'react';
import { ipcRenderer } from 'electron';

const updateOnlineStatus = () => {
	ipcRenderer.send('online-status-changed', navigator.onLine ? 'online' : 'offline');
};

const internet = () => {
	window.addEventListener('online', updateOnlineStatus);
	window.addEventListener('offline', updateOnlineStatus);
	return (
		<div>
			<p style={{ textAlign: 'center' }}>
				{' '}
				{navigator.onLine ? (
					'Online , Connection established.'
				) : (
					<span> offline , check your Connection </span>
				)}{' '}
			</p>
		</div>
	);
};
export default internet;
