import { useEffect, type JSX } from 'react';
import { initializeApp } from 'firebase/app';

export function PushNotificationPage(): JSX.Element {
    
    useEffect(() => {
        const firebaseConfig = {
            apiKey: '{API_KEY}',
            authDomain: '{AUTH_DOMAIN}',
            projectId: 'mn-web-sample',
            storageBucket: '{STORAGE_BUCKET}',
            messagingSenderId: '{MESSAGING_SENDER_ID}',
            appId: '{APP_ID}'
        };
        const app = initializeApp(firebaseConfig);
        console.log(app);
        Notification.requestPermission().then(p => {
            console.log("request");
            console.info(p)
        });
    }, []);
    return <div>
        <h1>Push Notifications</h1>

    </div>
}