import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from './global/Navbar/Navbar';
import Dashboard from './pages/Dashboard/Dashboard';
import JobPostingDashboard from './pages/JobPostingDashboard/JobPostingDashboard';
import ApplicationManagement from './pages/ApplicationManagement/ApplicationManagement';
import Candidates from './pages/Candidates/Candidates';

const AppContainer = styled.div`
  font-family: 'Arial', sans-serif;
  background-color: #f5f5f5;
  min-height: 100vh;
`;

const ContentContainer = styled.div`
  padding: 20px;
  margin-left: 250px; // Adjust based on your Navbar width
`;

function App() {
  return (
    <Router>
      <AppContainer>
        <Navbar />
        <ContentContainer>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/job-postings" element={<JobPostingDashboard />} />
            <Route path="/candidates" element={<Candidates />} />
            <Route
              path="/job-applications/:postingId"
              element={<ApplicationManagement />}
            />
          </Routes>
        </ContentContainer>
      </AppContainer>
    </Router>
  );
}

export default App;

