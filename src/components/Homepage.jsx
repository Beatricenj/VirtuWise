import React from 'react';
import { BookOpen, Users, Shield, Award, Clock, ArrowRight } from 'lucide-react';

const Homepage = ({ navigateTo }) => {
  const stats = [
    { number: '10,000+', label: 'Students Helped' },
    { number: '500+', label: 'Expert Tutors' },
    { number: '98%', label: 'Success Rate' },
    { number: '24/7', label: 'Support Available' }
  ];

  const features = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Secure & Confidential',
      description: 'Your academic information is protected with enterprise-grade security'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Expert Tutors',
      description: 'Work with qualified professionals and subject matter experts'
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: 'Fast Turnaround',
      description: 'Quick response times to meet your urgent academic deadlines'
    }
  ];

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <section className="py-20 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          Expert in {' '}
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Academic Support and Virtual Assistance</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
          Achieve more with personalized academic support and professional virtual assistant services — designed to help you excel, stay organized, and reduce stress.
        </p>

        {/* Service Selection Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          <div
            className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:scale-105"
            onClick={() => navigateTo('academic-support')}
          >
            <div className="w-20 h-20 bg-gradient-to-r from-blue-100 to-blue-200 rounded-xl flex items-center justify-center mx-auto mb-6">
              <BookOpen className="w-10 h-10 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Academic Support</h3>
            <p className="text-gray-600 mb-6">
              Get help with assignments, essays, research papers, and more. Upload your documents and get expert assistance.
            </p>
            <button className="flex items-center justify-center space-x-2 w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-6 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all">
              <span>Request Support</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          <div
            className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:scale-105"
            onClick={() => navigateTo('virtual-assistance')}
          >
            <div className="w-20 h-20 bg-gradient-to-r from-purple-100 to-purple-200 rounded-xl flex items-center justify-center mx-auto mb-6">
              <Users className="w-10 h-10 text-purple-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Virtual Assistance</h3>
            <p className="text-gray-600 mb-6">
              Services include email and calendar management, project coordination, research, document preparation, professional presentations, meeting minutes, and phone/message handling — helping you stay organized, productive, and stress-free.
            </p>
            <button className="flex items-center justify-center space-x-2 w-full bg-gradient-to-r from-purple-600 to-purple-700 text-white py-3 px-6 rounded-lg hover:from-purple-700 hover:to-purple-800 transition-all">
              <span>Explore Services</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white rounded-2xl shadow-lg mb-16">
        <div className="grid md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index}>
              <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Why Choose VirtuWise?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Homepage;
