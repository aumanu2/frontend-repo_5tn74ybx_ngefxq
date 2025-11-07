import React, { useMemo, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SearchBar from './components/SearchBar';
import AuthModals from './components/AuthModals';
import RoadmapView from './components/RoadmapView';

const App = () => {
  const [route, setRoute] = useState('home'); // 'home' | 'topic'
  const [query, setQuery] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  const handleSearch = (q) => {
    setQuery(q);
    setRoute('topic');
  };

  const handleAuthenticated = () => {
    setIsAuthenticated(true);
    setShowLogin(false);
    setShowSignup(false);
    setRoute('home');
  };

  const onLogout = () => {
    setIsAuthenticated(false);
    setRoute('home');
  };

  const content = useMemo(() => {
    if (route === 'topic' && query) {
      return (
        <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-950 to-black">
          <Navbar
            isAuthenticated={isAuthenticated}
            onLoginClick={() => setShowLogin(true)}
            onSignupClick={() => setShowSignup(true)}
            onLogoutClick={onLogout}
            onProfileClick={() => setRoute('home')}
          />
          <div className="pt-24">
            <div className="max-w-3xl mx-auto px-4">
              <SearchBar onSubmit={handleSearch} />
            </div>
            <RoadmapView query={query} />
          </div>
        </div>
      );
    }

    // Home route
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-950 to-black">
        <Navbar
          isAuthenticated={isAuthenticated}
          onLoginClick={() => setShowLogin(true)}
          onSignupClick={() => setShowSignup(true)}
          onLogoutClick={onLogout}
          onProfileClick={() => setRoute('home')}
        />
        <div className="pt-20">
          <Hero>
            <SearchBar onSubmit={handleSearch} />
          </Hero>
        </div>
      </div>
    );
  }, [route, query, isAuthenticated]);

  return (
    <>
      {content}
      <AuthModals
        openLogin={showLogin}
        openSignup={showSignup}
        onClose={() => { setShowLogin(false); setShowSignup(false); }}
        onAuthenticated={handleAuthenticated}
      />
    </>
  );
};

export default App;
