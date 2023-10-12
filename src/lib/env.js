// src/lib/Env.js
import { dev } from '$app/environment';
import { browser } from '$app/environment';

//

export let isDev = dev;

export const API_URL = dev
	? 'https://ship-6527f44a69156500134a0316.paralect.net'
	: 'https://ship-prod-6527f44a69156500134a0316.paralect.net';

// export const API_URL = 'https://ship-prod-6527f44a69156500134a0316.paralect.net';

export let GOOGLE_LOGIN_URL = browser
	? `${API_URL}/auth/google/url?redirect_to=${window.document.location.href}`
	: null;

export let getGoogleLoginUrl = () => {
	return browser ? `${API_URL}/auth/google/url?redirect_to=${window.document.location.href}` : null;
};
