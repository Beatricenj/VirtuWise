import React, { useState } from 'react';
import {
  BookOpen,
  Clock,
  TrendingUp,
  Shield,
  CheckCircle,
  Star,
  Lightbulb
} from 'lucide-react';
import ServiceBookingForm from './ServiceBookingForm';

const VirtualAssistancePage = ({ navigateTo }) => {
  const [selectedService, setSelectedService] = useState(null);
  const [customService, setCustomService] = useState('');
  const [customSubmitted, setCustomSubmitted] = useState(false);

  const virtualServices = [
    {
      id: 1,
      icon: <BookOpen className="w-8 h-8" />,
      title: 'Email Management',
      description: 'Efficient handling of your inbox to ensure timely, professional communication.',
      features: [
        'Organize folders and labels',
        'Draft and respond to emails',
        'Filter spam and prioritize messages',
        'Set up auto-responders and templates',
        'Manage subscriptions and follow-ups'
      ],
      rating: 4.9
    },
    {
      id: 2,
      icon: <Clock className="w-8 h-8" />,
      title: 'Calendar Management',
      description: 'Keep your schedule organized and optimized for productivity.',
      features: [
        'Schedule and manage events',
        'Coordinate across time zones',
        'Send invites and reminders',
        'Prevent double-bookings',
        'Prepare calendar summaries'
      ],
      rating: 4.8
    },
    {
      id: 3,
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Project Management',
      description: 'Stay on top of tasks, deadlines, and deliverables with structured support.',
      features: [
        'Track timelines and progress',
        'Set milestones and priorities',
        'Use task boards like Trello/Asana',
        'Maintain documentation',
        'Send updates and reminders'
      ],
      rating: 4.9
    },
    {
      id: 4,
      icon: <Shield className="w-8 h-8" />,
      title: 'Research & Documentation',
      description: 'Accurate, organized, and professional-level information gathering and formatting.',
      features: [
        'Conduct topic-based research',
        'Summarize findings into reports',
        'Cite sources (APA, MLA, Chicago, etc.)',
        'Prepare documents and briefs',
        'Ensure consistency and clarity'
      ],
      rating: 5.0
    }
  ];

  const handleBookService = (service) => {
    setSelectedService(service);
  };

 const handleCustomSubmit = async () => {
  if (customService.trim() !== '') {
    console.log('📤 Submitting virtual assistance request:', customService); // ✅ Log to verify

    try {
      const res = await fetch('http://localhost:5000/send-custom-virtual-assistance', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ request: customService })
});


      if (res.ok) {
        console.log('✅ Virtual assistance request sent!');
        setCustomSubmitted(true);
        setCustomService('');
      } else {
        console.error('❌ Virtual assistance request failed');
        alert('Something went wrong. Try again.');
      }
    } catch (err) {
      console.error('❌ Error sending virtual assistance request:', err);
      alert('Error occurred while sending request.');
    }
  } else {
    alert('Please describe your request before submitting.');
  }
};



  return (
    <main className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Virtual Assistance Services</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Get organized, stay ahead, and let us take care of the rest — from managing your inbox to handling complex research tasks.
        </p>
      </div>

      {!selectedService ? (
        <div className="grid md:grid-cols-2 gap-8">
          {virtualServices.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-purple-100 rounded-xl flex items-center justify-center text-blue-600">
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                  <div className="flex items-center space-x-2 mt-1">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(service.rating)
                              ? 'text-yellow-400 fill-current'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">{service.rating}</span>
                  </div>
                </div>
              </div>

              <p className="text-gray-600 mb-6 text-lg">{service.description}</p>

              <div className="space-y-3 mb-6">
                {service.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => handleBookService(service)}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
              >
                Book This Service
              </button>
            </div>
          ))}

          {/* Other Service Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-100 to-pink-100 rounded-xl flex items-center justify-center text-yellow-600">
                <Lightbulb className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Other Service</h3>
                <p className="text-sm text-gray-600">Custom virtual assistance request</p>
              </div>
            </div>

            <textarea
              rows={4}
              placeholder="Describe the service you need..."
              className="w-full border border-gray-300 rounded-lg p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={customService}
              onChange={(e) => setCustomService(e.target.value)}
            />

            <button
              onClick={handleCustomSubmit}
              className="w-full bg-gradient-to-r from-yellow-500 to-pink-500 text-white py-3 px-6 rounded-lg font-semibold hover:from-yellow-600 hover:to-pink-600 transition-all duration-200"
            >
              Request Custom Service
            </button>

            {customSubmitted && (
              <p className="mt-4 text-green-600 font-medium">
                Thank you! We’ve received your request and will follow up shortly.
              </p>
            )}
          </div>
        </div>
      ) : (
        <ServiceBookingForm service={selectedService} onBack={() => setSelectedService(null)} />
      )}
    </main>
  );
};

export default VirtualAssistancePage;
