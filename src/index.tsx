import 'typeface-roboto'
import 'typeface-inconsolata'
import 'typeface-quicksand'

import React from 'react'
import ReactDOM from 'react-dom'

import App from './Components/App'
import { register } from './serviceWorker'

ReactDOM.render(<App />, document.getElementById('root'))

// ? source: https://developers.google.com/{register}/pwa/introduction-to-push-notifications#notifications_api
if ('Notification' in window && navigator.serviceWorker) {
    Notification.requestPermission().then(permission => {
        if (permission === 'granted') {
            register({
                onSuccess: registration => {
                    registration.showNotification('App nun offline verfügbar')
                },
                onUpdate: registration => {
                    registration.showNotification('Eine neue Version ist verfügbar')
                },
            })
        }
    })
}
