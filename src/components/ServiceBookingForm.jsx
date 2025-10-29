import React, { useState } from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

const ServiceBookingForm = ({ service, onBack }) => {
  const [bookingData, setBookingData] = useState({
    name: '',
    email: '',
    preferredDate: '',
    preferredTime: '',
    duration: '1',
    specificNeeds: '',
    contactMethod: 'email'
  });

  const [booked, setBooked] = useState(false);

  const handleInputChange = (e) => {
    setBookingData({ ...bookingData, [e.target.name]: e.target.value });
  };

  const handleBooking = async () => {
    const payload = {
      name: bookingData.name,
      email: bookingData.email,
      service: service.title,
      preferredDate: bookingData.preferredDate,
      preferredTime: bookingData.preferredTime,
      duration: bookingData.duration,
      contactMethod: bookingData.contactMethod,
      needs: bookingData.specificNeeds
    };

    try {
      const res = await fetch('http://localhost:5000/send-virtual-assistance', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      if (res.ok) {
        console.log('✅ Booking email sent!');
        setBooked(true);
        setTimeout(() => setBooked(false), 3000);
      } else {
        console.error('❌ Failed to send booking');
        alert('Booking submission failed. Try again.');
      }
    } catch (err) {
      console.error('❌ Error submitting booking:', err);
      alert('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <button
        onClick={onBack}
        className="mb-6 flex items-center space-x-2 text-blue-600 hover:text-blue-700"
      >
        <ArrowRight className="w-5 h-5 transform rotate-180" />
        <span>Back to Services</span>
      </button>

      {booked && (
        <div className="mb-8 p-6 bg-green-50 border border-green-200 rounded-xl">
          <div className="flex items-center space-x-3">
            <CheckCircle className="w-8 h-8 text-green-600" />
            <div>
              <h3 className="text-lg font-semibold text-green-800">Booking Confirmed!</h3>
              <p className="text-green-600">We'll send you a confirmation email with session details.</p>
            </div>
          </div>
        </div>
      )}

      <div className="bg-white rounded-2xl shadow-xl p-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Book {service.title}</h2>
          <p className="text-gray-600">{service.description}</p>
        </div>

        <div className="space-y-6">
          {/* Name and Email */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
              <input
                type="text"
                name="name"
                value={bookingData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                placeholder="Your name"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
              <input
                type="email"
                name="email"
                value={bookingData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                placeholder="you@example.com"
                required
              />
            </div>
          </div>

          {/* Preferred Date & Time */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Date *</label>
              <input
                type="date"
                name="preferredDate"
                value={bookingData.preferredDate}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Time *</label>
              <select
                name="preferredTime"
                value={bookingData.preferredTime}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                required
              >
                <option value="">Select time</option>
                <option value="09:00">9:00 AM</option>
                <option value="10:00">10:00 AM</option>
                <option value="11:00">11:00 AM</option>
                <option value="12:00">12:00 PM</option>
                <option value="13:00">1:00 PM</option>
                <option value="14:00">2:00 PM</option>
                <option value="15:00">3:00 PM</option>
                <option value="16:00">4:00 PM</option>
                <option value="17:00">5:00 PM</option>
                <option value="18:00">6:00 PM</option>
                <option value="19:00">7:00 PM</option>
                <option value="20:00">8:00 PM</option>
              </select>
            </div>
          </div>

          {/* Duration & Contact Method */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Session Duration</label>
              <select
                name="duration"
                value={bookingData.duration}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg"
              >
                <option value="1">1 Hour</option>
                <option value="2">2 Hours</option>
                <option value="3">3 Hours</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Contact Method</label>
              <select
                name="contactMethod"
                value={bookingData.contactMethod}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg"
              >
                <option value="email">Email</option>
                <option value="phone">Phone</option>
                <option value="zoom">Zoom</option>
                <option value="teams">Microsoft Teams</option>
              </select>
            </div>
          </div>

          {/* Specific Needs */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Specific Needs/Topics</label>
            <textarea
              name="specificNeeds"
              value={bookingData.specificNeeds}
              onChange={handleInputChange}
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg"
              placeholder="Please describe what you'd like to focus on during the session..."
            />
          </div>

          {/* Submit Button */}
          <button
            type="button"
            onClick={handleBooking}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-6 rounded-lg font-semibold text-lg"
          >
            Confirm Booking
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceBookingForm;
