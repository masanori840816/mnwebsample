import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
import './App.css';
import { PushNotificationPage } from './PushNotificationPage';

function App() {

  return (
    <>
      <Router basename='/mnweb/'>
        <Routes>
            <Route path='/pages/notifications/' element={<PushNotificationPage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
