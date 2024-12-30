import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { LoginPage } from './views/LoginPage';
import HomePage from './views/HomePage';
import PaymentsPage from './views/PaymentsPage';
import SessionView from './views/SessionView';
import { CourseView } from './views/CourseView';
import { VisionPage } from './views/VisionPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/pagos' element={<PaymentsPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/vision" element={<VisionPage />} />
        <Route path="/vision/:courseId" element={<CourseView />} />
        <Route path="/vision/:courseId/:videoId" element={<SessionView />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;