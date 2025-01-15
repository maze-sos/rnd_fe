import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { AuthProvider } from './Components/AuthContext';
import ProtectedRoute from './Components/ProtectedRoute';
import ProtectedProjectRoute from './Components/ProtectedProjectRoute';
import Membership from './Components/Membership';
import Internship from './Components/Internship';
import Login from './Components/Login';
import ProjectSignup from './Components/ProjectSignup';
import ProjectLogin from './Components/ProjectLogin';
import ProjectDash from './Components/ProjectDash';
import ProjectUpload1 from './Components/ProjectUploads';
import ProjectInformation from './Components/ProjectInformation'; 
import ProjectDetails from './Components/ProjectDetails';
import ProjectPayment from './Components/ProjectPayment'; 
import AdminSignup from './Components/AdminSignup';
import AdminLogin from './Components/AdminLogin'; 
import AdminDash from './Components/AdminDash'; 
import ResearchAreas from './Components/ResearchAreas';
import ProjectList from './Components/StudentProjectList';
import StaffMembership from './Components/StaffMembership';
import StudentMembership from './Components/StudentMembership';
import ExternalMembership from './Components/ExternalMembership';
import InternalInternship from './Components/InternalInternship';
import ExternalInternship from './Components/ExternalInternship';
import AdminStaffMembership from './Components/AdminStaffMembership';
import AdminStudentMembership from './Components/AdminStudentMembership';
import AdminStudentProject from './Components/AdminStudentProject';
import AdminViewStudentProjects from './Components/AdminViewStudentProjects';
import AdminExternalMembership from './Components/AdminExternalMembership';
import AdminInternalInternship from './Components/AdminInternalInternship';
import AdminExternalInternship from './Components/AdminExternalInternship';
import AdminProjectInformation from './Components/AdminProjectInformation';
import AdminViewProjectInformation from './Components/AdminViewProjectInformation'; 
import AdminViewProjectDetails from './Components/AdminViewProjectDetails'; 
import AdminProjectPayment from './Components/AdminProjectPayment';
import AdminViewProjectPayment from './Components/AdminViewProjectPayment';
import AdminProjectUploads from './Components/AdminProjectUploads';
import AdminViewReceipts from './Components/AdminViewReceipts';
import AdminViewStudents from './Components/AdminViewStudents';
import Lincoln from './Components/Lincoln';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';



const App = () => {
  return (
    <AuthProvider>
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Lincoln />} />
          <Route path="/researchareas" element={<ResearchAreas />} />
          <Route path="/projectlist" element={<ProjectList />} /> 
          <Route path="/membership" element={<Membership />} />
          <Route path="/login" element={<Login />} />
          <Route path="/login/projectsignup" element={<ProjectSignup />} />
          <Route path="/login/projectlogin" element={<ProjectLogin />} />
          <Route path="/projectdash" element={<ProtectedProjectRoute><ProjectDash /></ProtectedProjectRoute>} />
          <Route path="/projectdash/projectinformation" element={<ProtectedProjectRoute><ProjectInformation /></ProtectedProjectRoute>} />
          <Route path="/projectdash/projectupload1" element={<ProtectedProjectRoute><ProjectUpload1 /></ProtectedProjectRoute>} />
          <Route path="/projectdash/projectpayment" element={<ProtectedProjectRoute><ProjectPayment /></ProtectedProjectRoute>} />
          <Route path="/projectdash/projectdetails/:id" element={<ProtectedProjectRoute><ProjectDetails /></ProtectedProjectRoute>} />
          <Route path="/login/adminsignup" element={<AdminSignup />} />
          <Route path="/login/adminlogin" element={<AdminLogin />} />
          <Route path="/admindash" element={<ProtectedRoute><AdminDash /></ProtectedRoute>} />
          <Route path="/membership/staffmembership" element={<StaffMembership />} />
          <Route path="/membership/studentmembership" element={<StudentMembership />} />
          <Route path="/membership/externalmembership" element={<ExternalMembership />} />
          <Route path="/internship" element={<Internship />} />
          <Route path="/internship/internalinternship" element={<InternalInternship />} />
          <Route path="/internship/externalinternship" element={<ExternalInternship />} />
          <Route path="/admindash/adminexternalinternship" element={<ProtectedRoute><AdminExternalInternship /></ProtectedRoute>} />
          <Route path="/admindash/admininternalinternship" element={<ProtectedRoute><AdminInternalInternship /></ProtectedRoute>} />
          <Route path="/admindash/adminexternalmembership" element={<ProtectedRoute><AdminExternalMembership /></ProtectedRoute>} />
          <Route path="/admindash/adminstaffmembership" element={<ProtectedRoute><AdminStaffMembership /></ProtectedRoute>} />
          <Route path="/admindash/adminstudentmembership" element={<ProtectedRoute><AdminStudentMembership /></ProtectedRoute>} />
          <Route path="/admindash/adminstudentproject" element={<ProtectedRoute><AdminStudentProject /></ProtectedRoute>} />
          <Route path="/admindash/adminviewstudentprojects" element={<ProtectedRoute><AdminViewStudentProjects /></ProtectedRoute>} />
          <Route path="/admindash/adminprojectinformation" element={<ProtectedRoute><AdminProjectInformation /></ProtectedRoute>} /> 
          <Route path="/admindash/adminprojectpayment" element={<ProtectedRoute><AdminProjectPayment /></ProtectedRoute>} />
          <Route path="/admindash/adminviewprojectpayment" element={<ProtectedRoute><AdminViewProjectPayment /></ProtectedRoute>} />
          <Route path="/admindash/adminviewprojectinformation" element={<ProtectedRoute><AdminViewProjectInformation /></ProtectedRoute>} /> 
          <Route path="/admindash/adminviewprojectdetails/:id" element={<ProtectedRoute><AdminViewProjectDetails /></ProtectedRoute>} />
          <Route path="/admindash/adminprojectuploads" element={<ProtectedRoute><AdminProjectUploads /></ProtectedRoute>} />
          <Route path="/admindash/adminviewreceipts" element={<ProtectedRoute><AdminViewReceipts /></ProtectedRoute>} />
          <Route path="/admindash/adminviewstudents" element={<ProtectedRoute><AdminViewStudents /></ProtectedRoute>} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
    </AuthProvider>
  );
};

export default App;

