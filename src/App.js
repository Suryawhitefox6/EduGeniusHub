import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Features from './components/Features';
import CommunityGuidelines from './components/communityGuidelines/CommunityGuidelines';
import Join from './components/Join';
import LearnMore from './components/LearnMore';
import AiContentCreation from './components/features/AiContentCreation';
import ImmersiveLearning from './components/features/ImmersiveLearning';
import AiLearningRecommendations from './components/features/AiLearningRecommendations';
import CodeWithMe from './components/features/CodeWithMe';
import AiSandbox from './components/features/AiSandbox';
import Navbar from './components/Navbar';
import UserProfile from './components/UserProfile';
import ContactUs from './components/ContactUs';
import Terms   from "./components/pages/terms";
import Privacy from "./components/pages/privacy";

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/features" element={<Features />} />
                <Route path="/community-guidelines" element={<CommunityGuidelines />} />
                <Route path="/join" element={<Join />} />
                <Route path="/learn-more" element={<LearnMore />} />
                <Route path="/features/ai-content-creation" element={<AiContentCreation />} />
                <Route path="/features/immersive-learning" element={<ImmersiveLearning />} />
                <Route path="/features/ai-learning-recommendations" element={<AiLearningRecommendations />} />
                <Route path="/features/code-with-me" element={<CodeWithMe />} />
                <Route path="/features/ai-sandbox" element={<AiSandbox />} />
                <Route path="/profile" element={<UserProfile />} />
                <Route path="/contact" element={<ContactUs />} />
                <Route exact path="/terms" component={Terms} />
                <Route exact path="/privacy" component={Privacy} />
            </Routes>
        </Router>
    );
}

export default App;
