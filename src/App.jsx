import React, { useState } from 'react';
import Homepage from './components/Homepage';
import AuthPage from './components/AuthPage';
import AcademicSupportPage from './components/AcademicSupportPage';
import VirtualAssistancePage from './components/VirtualAssistancePage';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [user, setUser] = useState(null);

  const navigateTo = (page) => {
    setCurrentPage(page);
  };

  const renderPage = () => {
    switch(currentPage) {
      case 'home':
        return <Homepage navigateTo={navigateTo} />;
      case 'auth':
        return <AuthPage navigateTo={navigateTo} setUser={setUser} />;
      case 'academic-support':
        return <AcademicSupportPage navigateTo={navigateTo} />;
      case 'virtual-assistance':
        return <VirtualAssistancePage navigateTo={navigateTo} />;
      default:
        return <Homepage navigateTo={navigateTo} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex flex-col">
      <Header currentPage={currentPage} navigateTo={navigateTo} user={user} setUser={setUser} />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer navigateTo={navigateTo} />
    </div>
  );
};

export default App;
