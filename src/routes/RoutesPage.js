import React from "react";
import {
	AdminPage,
	ContactsPage,
	EducationPage,
	ErrorPage,
	HomePage,
	InspirationPage,
	JobsPage,
	LandingPage,
	LoginPage,
	MentorshipPage,
	ProfilePage,
	RegisterPage,
} from "../pages";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const RoutesPage = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<LandingPage />} />
				<Route path="/LoginPage" element={<LoginPage />} />
				<Route path="/RegisterPage" element={<RegisterPage />} />
				<Route path="/HomePage" element={<HomePage />} />
				<Route path="/MentorshipPage" element={<MentorshipPage />} />
				<Route path="/InspirationPage" element={<InspirationPage />} />
				<Route path="/EducationPage" element={<EducationPage />} />
				<Route path="/JobsPage" element={<JobsPage />} />
				<Route path="/ContactsPage" element={<ContactsPage />} />
				<Route path="/ProfilePage" element={<ProfilePage />} />
				<Route path="/AdminPage" element={<AdminPage />} />
				<Route path="*" element={<ErrorPage />} />
			</Routes>
		</BrowserRouter>
	);
};

export default RoutesPage;
