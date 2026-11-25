import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAnalytics, isSupported, logEvent } from 'firebase/analytics';

const firebaseConfig = {
	apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
	authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
	projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
	storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
	messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
	appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
	measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID,
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

// Analytics only works in the browser, so callers get null during server rendering.
async function getAnalyticsClient() {
	if (typeof window === 'undefined' || !(await isSupported())) {
		return null;
	}

	return getAnalytics(app);
}

async function logScreenView(screenName) {
	const analytics = await getAnalyticsClient();

	if (analytics) {
		logEvent(analytics, 'screen_view', { firebase_screen: screenName });
	}
}

export { app, getAnalyticsClient, logScreenView };
