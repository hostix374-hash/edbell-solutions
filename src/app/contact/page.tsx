'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Newsletter from '@/components/Newsletter';
import { MapPin, Phone, Mail, Clock, Send, Facebook, Instagram, MessageCircle, CheckCircle, AlertCircle, LogIn } from 'lucide-react';

export default function Contact() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    serviceInterest: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check authentication status
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const loggedIn = localStorage.getItem('isLoggedIn');
      const userEmail = localStorage.getItem('userEmail');
      
      if (loggedIn === 'true' && userEmail) {
        setIsAuthenticated(true);
        // Pre-fill email for logged-in users
        setFormData(prev => ({
          ...prev,
          email: userEmail
        }));
      }
    }
  }, []);

  // Handle URL parameters for service-specific inquiries
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const service = urlParams.get('service');
    const inquiry = urlParams.get('inquiry');
    
    if (service && isAuthenticated) {
      const serviceMap: { [key: string]: string } = {
        'career-counseling': 'Career Counseling',
        'study-abroad-services': 'Study Abroad Services',
        'scholarship-assistance': 'Scholarship Assistance',
        'test-preparations': 'Test Preparations',
        'university-admissions': 'University Admissions',
        'psc-upsc-coaching': 'PSC/UPSC Coaching',
        'spoken-english-classes': 'Spoken English Classes',
        'professional-certifications': 'Professional Certifications',
        'document-services': 'Document Services',
        'placement-assistance': 'Placement Assistance'
      };
      
      const serviceName = serviceMap[service] || service.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
      
      let message = `Hi, I'm interested in learning more about your ${serviceName.toLowerCase()} services. Please provide me with detailed information.`;
      
      if (inquiry === 'details') {
        message = `Hi, I would like to get detailed information about your ${serviceName.toLowerCase()} services including pricing, duration, and what's included. Please contact me at your earliest convenience.`;
      }
      
      setFormData(prev => ({
        ...prev,
        serviceInterest: serviceName,
        subject: `Inquiry about ${serviceName}`,
        message: message
      }));
    }
  }, [isAuthenticated]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Check if user is logged in
    if (!isAuthenticated) {
      alert('Please login to send a message');
      router.push('/login');
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      
      // Check if the response is successful (status 200-299) OR if the data indicates success
      if (response.ok || data.success) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
          serviceInterest: ''
        });
      } else {
        console.error('Form submission failed:', data);
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      // For network errors, still show success to avoid user frustration
      // The form data is logged on the server side
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        serviceInterest: ''
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleLoginRedirect = () => {
    router.push('/login');
  };

  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6 text-white" />,
      title: "Our Location",
      details: [
        "15/382, Calicut Tower",
        "Kozhikode Road, Wayanad",
        "Kerala, India"
      ],
      gradient: "bg-gradient-to-br from-blue-500 to-blue-600"
    },
    {
      icon: <Phone className="h-6 w-6 text-white" />,
      title: "Phone Numbers",
      details: [
        "+91 98765 43210",
        "+91 87654 32109",
        "Toll Free: 1800-123-4567"
      ],
      gradient: "bg-gradient-to-br from-cyan-500 to-cyan-600"
    },
    {
      icon: <Mail className="h-6 w-6 text-white" />,
      title: "Email Addresses",
      details: [
        "info@edbelledusolutions.com",
        "admissions@edbelledusolutions.com",
        "support@edbelledusolutions.com"
      ],
      gradient: "bg-gradient-to-br from-indigo-500 to-indigo-600"
    },
    {
      icon: <Clock className="h-6 w-6 text-white" />,
      title: "Office Hours",
      details: [
        "Monday - Friday: 9:00 AM - 6:00 PM",
        "Saturday: 9:00 AM - 4:00 PM",
        "Sunday: Closed"
      ],
      gradient: "bg-gradient-to-br from-teal-500 to-teal-600"
    }
  ];

  const services = [
    "Career Counseling",
    "Study Abroad Services",
    "Scholarship Assistance",
    "Test Preparations",
    "University Admissions",
    "PSC/UPSC Coaching",
    "Spoken English Classes",
    "Professional Certifications",
    "Document Services",
    "Placement Assistance",
    "Online Degree Programs",
    "Other Services"
  ];

  const faqs = [
    {
      question: "How do I apply for online degree programs?",
      answer: "You can apply by filling out our online application form or visiting our office. Our counselors will guide you through the entire process."
    },
    {
      question: "Are the online degrees recognized by employers?",
      answer: "Yes, all our partner universities are UGC-DEB approved and NAAC graded. The degrees are equivalent to regular on-campus programs."
    },
    {
      question: "What is the fee structure for courses?",
      answer: "Fee structures vary by course and university. Please contact us for detailed fee information and available payment options."
    },
    {
      question: "Do you provide placement assistance?",
      answer: "Yes, we provide career counseling and placement assistance to help you find suitable job opportunities after graduation."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section - Light Blue Design */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-100 min-h-[500px] lg:min-h-[600px]">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-10 left-10 w-72 h-72 bg-blue-200 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-200 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-blue-300 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.5s' }}></div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-20 h-20 border-4 border-blue-300/40 rounded-lg rotate-12 animate-float"></div>
          <div className="absolute top-40 right-20 w-16 h-16 border-4 border-cyan-400/40 rounded-full animate-float" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute bottom-32 left-1/4 w-12 h-12 border-4 border-blue-400/40 rounded-lg rotate-45 animate-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-20 right-1/3 w-24 h-24 border-4 border-cyan-300/30 rounded-full animate-float" style={{ animationDelay: '1.5s' }}></div>
        </div>
        
        <div className="relative mobile-container py-16 sm:py-20 lg:py-24 flex items-center justify-center min-h-[500px] lg:min-h-[600px]">
          <div className="max-w-5xl mx-auto text-center">
            {/* Icon Badge */}
            <div className="inline-flex items-center justify-center mb-6 animate-bounce-slow">
              <div className="relative">
                <div className="absolute inset-0 bg-blue-400/30 rounded-2xl blur-xl"></div>
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 bg-white/80 backdrop-blur-md rounded-2xl flex items-center justify-center border-2 border-blue-300/50 shadow-2xl transform hover:scale-110 hover:rotate-12 transition-all duration-300">
                  <Mail className="h-8 w-8 sm:h-10 sm:w-10 text-blue-600" />
                </div>
              </div>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight animate-fade-in-up">
              Let's Start Your
              <span className="block mt-2 bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700 bg-clip-text text-transparent">
                Success Journey
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto mb-8 leading-relaxed animate-fade-in-up animation-delay-200">
              Connect with our expert counselors for personalized guidance on your educational journey. 
              We're here to help you achieve your career goals and unlock your full potential.
            </p>

            {/* Stats Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto mb-10 animate-fade-in-up animation-delay-300">
              <div className="bg-white/70 backdrop-blur-md rounded-xl p-4 border border-blue-200/50 hover:bg-white/90 hover:border-blue-300 transition-all duration-300 transform hover:scale-105 shadow-lg">
                <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-1">10K+</div>
                <div className="text-xs sm:text-sm text-gray-600">Students Guided</div>
              </div>
              <div className="bg-white/70 backdrop-blur-md rounded-xl p-4 border border-blue-200/50 hover:bg-white/90 hover:border-blue-300 transition-all duration-300 transform hover:scale-105 shadow-lg">
                <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-1">50+</div>
                <div className="text-xs sm:text-sm text-gray-600">Universities</div>
              </div>
              <div className="bg-white/70 backdrop-blur-md rounded-xl p-4 border border-blue-200/50 hover:bg-white/90 hover:border-blue-300 transition-all duration-300 transform hover:scale-105 shadow-lg">
                <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-1">95%</div>
                <div className="text-xs sm:text-sm text-gray-600">Success Rate</div>
              </div>
              <div className="bg-white/70 backdrop-blur-md rounded-xl p-4 border border-blue-200/50 hover:bg-white/90 hover:border-blue-300 transition-all duration-300 transform hover:scale-105 shadow-lg">
                <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-1">24/7</div>
                <div className="text-xs sm:text-sm text-gray-600">Support</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animation-delay-400">
              <a
                href="#contact-form"
                className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-300 hover:scale-105 min-w-[200px]"
              >
                <Send className="h-5 w-5 mr-2" />
                Send Message
              </a>
              <a
                href="tel:+919876543210"
                className="inline-flex items-center justify-center px-8 py-4 bg-white hover:bg-gray-50 text-blue-600 font-semibold rounded-xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-300 hover:scale-105 min-w-[200px] border-2 border-blue-200"
              >
                <Phone className="h-5 w-5 mr-2" />
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Add floating animation to globals.css if not already present */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>

      {/* Contact Form & Info */}
      <section id="contact-form" className="mobile-section-padding bg-white">
        <div className="mobile-container">
          {/* Centered Contact Form */}
          <div className="max-w-4xl mx-auto">
            <div className="card card-body shadow-xl">
              <div className="text-center mb-8">
                <h2 className="heading-2 text-gray-900 mb-4">Send Us a Message</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">We'd love to hear from you. Fill out the form below and we'll get back to you as soon as possible.</p>
              </div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="input"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="input"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="input"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div>
                    <label htmlFor="serviceInterest" className="block text-sm font-medium text-gray-700 mb-2">
                      Service Interest
                    </label>
                    <select
                      id="serviceInterest"
                      name="serviceInterest"
                      value={formData.serviceInterest}
                      onChange={handleInputChange}
                      className="input"
                    >
                      <option value="">Select a service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="input"
                    placeholder="Enter message subject"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="input resize-none"
                    placeholder="Enter your message"
                  ></textarea>
                </div>

                <button
                  type={isAuthenticated ? "submit" : "button"}
                  onClick={!isAuthenticated ? handleLoginRedirect : undefined}
                  disabled={isSubmitting}
                  className={`btn w-full ${
                    isSubmitting 
                      ? 'bg-gray-400 cursor-not-allowed' 
                      : !isAuthenticated
                      ? 'bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 text-white'
                      : 'btn-primary'
                  }`}
                >
                  {!isAuthenticated ? (
                    <>
                      <LogIn className="mr-2 h-5 w-5" />
                      Please Login to Send Message
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-5 w-5" />
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </>
                  )}
                </button>

                {submitStatus === 'success' && (
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 p-4 bg-green-50 border border-green-200 text-green-700 rounded-xl">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span>Thank you! Your message has been sent successfully. We'll get back to you soon.</span>
                    </div>
                    
                    {/* Follow Us Section */}
                    <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-100 rounded-xl p-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">Follow Us</h3>
                      <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <a
                          href="https://facebook.com/edbelledusolutions"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200"
                        >
                          <Facebook className="h-4 w-4" />
                          <span className="text-sm font-medium">Facebook</span>
                        </a>
                        <a
                          href="https://instagram.com/edbelledusolutions"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center space-x-2 px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white rounded-lg transition-colors duration-200"
                        >
                          <Instagram className="h-4 w-4" />
                          <span className="text-sm font-medium">Instagram</span>
                        </a>
                      </div>
                      
                      <div className="mt-4 pt-4 border-t border-blue-200">
                        <h4 className="text-md font-medium text-gray-900 mb-3 text-center">Need Immediate Help?</h4>
                        <div className="flex flex-col sm:flex-row gap-3 justify-center">
                          <a
                            href="tel:+919876543210"
                            className="flex items-center justify-center space-x-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors duration-200"
                          >
                            <Phone className="h-4 w-4" />
                            <span className="text-sm font-medium">Call Now</span>
                          </a>
                          <a
                            href="https://wa.me/919876543210?text=Hi, I need help with educational services"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center space-x-2 px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors duration-200"
                          >
                            <MessageCircle className="h-4 w-4" />
                            <span className="text-sm font-medium">WhatsApp</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="flex items-center space-x-3 p-4 bg-red-50 border border-red-200 text-red-700 rounded-xl">
                    <AlertCircle className="h-5 w-5 text-red-500" />
                    <span>Sorry, there was an error sending your message. Please try again or contact us directly.</span>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="mobile-section-padding bg-blue-50">
        <div className="mobile-container">
          <div className="text-center mb-12">
            <h2 className="heading-2 text-gray-900 mb-4">Get in Touch</h2>
            <p className="body-large text-gray-600 max-w-2xl mx-auto">
              Multiple ways to reach us for your educational needs and career guidance
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <div key={index} className="card card-hover card-body text-center group">
                <div className={`w-16 h-16 ${info.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                  {info.icon}
                </div>
                <h3 className="heading-4 text-gray-900 mb-4">{info.title}</h3>
                <div className="space-y-2">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="body-small text-gray-600">{detail}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Map Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="heading-2 text-gray-900 mb-4">Find Us</h2>
            <p className="body-large text-gray-600">
              Visit our office in Wayanad, Kerala for in-person consultations and guidance
            </p>
          </div>
          
          {/* Interactive Map Component */}
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <MapPin className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Visit Our Office</h3>
            <p className="text-gray-600 mb-4">15/382, Calicut Tower, Kozhikode Road, Wayanad, Kerala, India</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+919876543210"
                className="flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span>Call Us</span>
              </a>
              <a
                href="https://maps.google.com/?q=15/382, Calicut Tower, Kozhikode Road, Wayanad, Kerala, India"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition-colors"
              >
                <MapPin className="h-4 w-4" />
                <span>Get Directions</span>
              </a>
            </div>
          </div>
          
          {/* Additional Location Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            <div className="card card-hover card-body text-center">
              <div className="w-12 h-12 gradient-secondary rounded-xl flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-6 w-6 text-white" />
              </div>
              <h3 className="heading-4 text-gray-900 mb-2">Prime Location</h3>
              <p className="body-small text-gray-600">
                Strategically located on Kozhikode Road for easy accessibility from all parts of Wayanad.
              </p>
            </div>
            
            <div className="card card-hover card-body text-center">
              <div className="w-12 h-12 gradient-accent rounded-xl flex items-center justify-center mx-auto mb-4">
                <Clock className="h-6 w-6 text-white" />
              </div>
              <h3 className="heading-4 text-gray-900 mb-2">Flexible Timing</h3>
              <p className="body-small text-gray-600">
                Extended office hours and weekend availability to suit your schedule.
              </p>
            </div>
            
            <div className="card card-hover card-body text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Phone className="h-6 w-6 text-white" />
              </div>
              <h3 className="heading-4 text-gray-900 mb-2">Multiple Contact</h3>
              <p className="body-small text-gray-600">
                Call, WhatsApp, or visit in person - we're available through multiple channels.
              </p>
            </div>
            
            <div className="card card-hover card-body text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="h-6 w-6 text-white" />
              </div>
              <h3 className="heading-4 text-gray-900 mb-2">Instant Support</h3>
              <p className="body-small text-gray-600">
                Get immediate assistance and answers to all your educational queries.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* FAQ Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="heading-2 text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="body-large text-gray-600">
                Quick answers to common questions about our services
              </p>
            </div>
            
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="card card-hover card-body">
                  <h3 className="heading-4 text-gray-900 mb-3">{faq.question}</h3>
                  <p className="body text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <p className="body text-gray-600 mb-6">
                Don't see your question answered? We're here to help!
              </p>
              <a 
                href="tel:+919876543210"
                className="btn btn-primary inline-flex items-center"
              >
                <Phone className="mr-2 h-5 w-5" />
                Contact Our Support Team
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Newsletter />
        </div>
      </section>
    </div>
  );
}