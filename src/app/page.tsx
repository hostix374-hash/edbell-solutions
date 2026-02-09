'use client';

import React from 'react';
import Link from 'next/link';
import Newsletter from '@/components/Newsletter';
import { 
  GraduationCap, 
  Users, 
  Globe, 
  Award, 
  BookOpen, 
  UserCheck, 
  Plane, 
  DollarSign,
  CheckCircle,
  Star,
  ArrowRight,
  Clock,
  TrendingUp,
  Shield,
  Zap
} from 'lucide-react';

interface Course {
  id: string;
  name: string;
  url: string;
  category: 'Undergraduate' | 'Postgraduate' | 'Specialized';
  duration: string;
  fees: string;
  eligibility: string;
  description: string;
}

export default function Home() {
  // Static course data for frontend-only design
  const courses: Course[] = [
    {
      id: '1',
      name: 'Bachelor of Arts (BA)',
      url: '/courses/bachelor-of-arts',
      category: 'Undergraduate',
      duration: '3 Years',
      fees: '₹15,000',
      eligibility: '12th Pass',
      description: 'Comprehensive liberal arts program covering literature, history, political science, and more with flexible learning options.'
    },
    {
      id: '2',
      name: 'Bachelor of Commerce (B.Com)',
      url: '/courses/bachelor-of-commerce',
      category: 'Undergraduate',
      duration: '3 Years',
      fees: '₹18,000',
      eligibility: '12th Pass',
      description: 'Business-focused program covering accounting, finance, economics, and business management fundamentals.'
    },
    {
      id: '3',
      name: 'Master of Business Administration (MBA)',
      url: '/courses/master-of-business-administration',
      category: 'Postgraduate',
      duration: '2 Years',
      fees: '₹40,000',
      eligibility: 'Graduate',
      description: 'Comprehensive management program preparing leaders for global business challenges and opportunities.'
    },
    {
      id: '4',
      name: 'Bachelor of Science (B.Sc)',
      url: '/courses/bsc',
      category: 'Undergraduate',
      duration: '3 Years',
      fees: '₹20,000',
      eligibility: '12th Pass (Science)',
      description: 'Science-focused undergraduate program with specializations in various scientific disciplines.'
    },
    {
      id: '5',
      name: 'Bachelor of Computer Applications (BCA)',
      url: '/courses/bsc-cs',
      category: 'Undergraduate',
      duration: '3 Years',
      fees: '₹25,000',
      eligibility: '12th Pass',
      description: 'Computer applications program focusing on programming, software development, and IT skills.'
    },
    {
      id: '6',
      name: 'Digital Marketing Certification',
      url: '/courses/digital-marketing',
      category: 'Specialized',
      duration: '6 Months',
      fees: '₹12,000',
      eligibility: 'Any Graduate',
      description: 'Professional certification in digital marketing strategies, SEO, social media, and online advertising.'
    }
  ];

  const services = [
    {
      icon: <BookOpen className="h-8 w-8 text-indigo-600" />,
      title: "Online Degree Programs",
      description: "UGC-approved degrees with flexible learning."
    },
    {
      icon: <UserCheck className="h-8 w-8 text-indigo-600" />,
      title: "Career Counseling",
      description: "Expert guidance for your career path."
    },
    {
      icon: <Plane className="h-8 w-8 text-indigo-600" />,
      title: "Study Abroad Services",
      description: "International education assistance."
    },
    {
      icon: <DollarSign className="h-8 w-8 text-indigo-600" />,
      title: "Scholarship Assistance",
      description: "Financial aid and scholarship support."
    },
    {
      icon: <Award className="h-8 w-8 text-indigo-600" />,
      title: "Test Preparations",
      description: "Competitive exam preparation."
    },
    {
      icon: <Shield className="h-8 w-8 text-indigo-600" />,
      title: "PSC/UPSC Coaching",
      description: "Government job exam coaching."
    }
  ];

  const whyChooseUs = [
    {
      icon: <CheckCircle className="h-6 w-6 text-indigo-600" />,
      title: "UGC Approved",
      description: "Recognized nationwide programs."
    },
    {
      icon: <Users className="h-6 w-6 text-indigo-600" />,
      title: "Expert Faculty",
      description: "Experienced professors."
    },
    {
      icon: <Globe className="h-6 w-6 text-indigo-600" />,
      title: "100% Online",
      description: "Flexible learning schedule."
    },
    {
      icon: <Award className="h-6 w-6 text-indigo-600" />,
      title: "Placement Support",
      description: "Career guidance included."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Clean Envato Style */}
      <section className="relative bg-gradient-to-b from-blue-50 to-white py-24 overflow-hidden min-h-[600px] lg:min-h-[700px]">
        {/* Simple Background Pattern */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-100 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative w-full px-4 sm:px-6 lg:px-12 xl:px-16 h-full flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center max-w-[1600px] mx-auto w-full">
            {/* Left Content - 3 columns */}
            <div className="lg:col-span-3 text-center lg:text-left">
              <div className="inline-flex items-center bg-blue-100 rounded-full px-4 py-2 mb-4">
                <span className="text-sm font-medium text-blue-700">🎓 Trusted by 25,000+ Students</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight text-gray-900">
                Guiding Students to the
                <span className="block text-blue-600">Right Education Path</span>
              </h1>
              <p className="text-base sm:text-lg text-gray-600 mb-6 leading-relaxed">
                UGC-approved online degrees with expert guidance.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                <Link href="/courses" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-md hover:shadow-lg text-center">
                  Explore Courses
                </Link>
                <Link href="/contact" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg font-semibold transition-all duration-300 text-center">
                  Get Free Consultation
                </Link>
              </div>
            </div>
            
            {/* Right Content - Professional Image - 2 columns */}
            <div className="lg:col-span-2 relative">
              <div className="w-full h-96 sm:h-[450px] lg:h-[500px] rounded-xl relative overflow-hidden shadow-lg">
                <img 
                  src="/hero-professional.jpg" 
                  alt="EDBELL Professional" 
                  className="w-full h-full object-cover"
                />
                {/* Overlay with gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                {/* Text inside image at bottom */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <p className="text-base font-bold text-white text-center">
                    ADV. ARIF WAFY VARAMBATTA
                  </p>
                  <p className="text-sm text-blue-200 text-center">
                    Managing Director, EDBELL EDUSOLUTIONS LLP
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - Simple */}
      <section className="py-8 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center">
              <Shield className="h-8 w-8 text-white mb-2" />
              <div className="text-xl font-bold text-white">UGC Approved</div>
              <div className="text-sm text-blue-100">Quality Education</div>
            </div>
            
            <div className="flex flex-col items-center">
              <Users className="h-8 w-8 text-white mb-2" />
              <div className="text-2xl font-bold text-white">25,000+</div>
              <div className="text-sm text-blue-100">Happy Students</div>
            </div>
            
            <div className="flex flex-col items-center">
              <Globe className="h-8 w-8 text-white mb-2" />
              <div className="text-2xl font-bold text-white">50+</div>
              <div className="text-sm text-blue-100">University Partners</div>
            </div>
            
            <div className="flex flex-col items-center">
              <Award className="h-8 w-8 text-white mb-2" />
              <div className="text-2xl font-bold text-white">95%</div>
              <div className="text-sm text-blue-100">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Simple */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
              Our Student Support Services
            </h2>
            <p className="text-base text-gray-600">
              Educational solutions for your academic success
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-sm text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Section - Animated */}
      <section className="py-12 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Animated Header */}
          <div className="text-center mb-8 animate-fade-in-up">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 animate-slide-in-left">
              Courses & Education Pathways
            </h2>
            <p className="text-base text-gray-600 animate-slide-in-right animation-delay-200">
              UGC-approved programs for your success
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 - Higher Secondary */}
            <div className="bg-gradient-to-br from-indigo-600 to-indigo-700 rounded-lg p-6 text-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 animate-fade-in-up animation-delay-300 group">
              <div className="relative">
                <GraduationCap className="h-12 w-12 mx-auto mb-4 transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-500" />
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full animate-ping opacity-75"></div>
              </div>
              <h3 className="text-xl font-bold mb-2 text-center transform group-hover:scale-105 transition-transform duration-300">
                Higher Secondary
              </h3>
              <p className="text-sm text-indigo-100 mb-4 text-center">Foundation programs</p>
              <div className="space-y-2">
                <div className="flex items-center space-x-2 transform translate-x-0 group-hover:translate-x-2 transition-transform duration-300 animation-delay-100">
                  <CheckCircle className="h-4 w-4 text-green-300 animate-bounce-slow" />
                  <span className="text-sm">Science Stream</span>
                </div>
                <div className="flex items-center space-x-2 transform translate-x-0 group-hover:translate-x-2 transition-transform duration-300 animation-delay-200">
                  <CheckCircle className="h-4 w-4 text-green-300 animate-bounce-slow animation-delay-100" />
                  <span className="text-sm">Commerce Stream</span>
                </div>
                <div className="flex items-center space-x-2 transform translate-x-0 group-hover:translate-x-2 transition-transform duration-300 animation-delay-300">
                  <CheckCircle className="h-4 w-4 text-green-300 animate-bounce-slow animation-delay-200" />
                  <span className="text-sm">Arts Stream</span>
                </div>
              </div>
              {/* Animated Background Circles */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-white opacity-5 rounded-full transform translate-x-10 -translate-y-10 group-hover:scale-150 transition-transform duration-700"></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 bg-white opacity-5 rounded-full transform -translate-x-8 translate-y-8 group-hover:scale-150 transition-transform duration-700"></div>
            </div>

            {/* Card 2 - Degree & PG Programs */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg p-6 text-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 animate-fade-in-up animation-delay-500 group">
              <div className="relative">
                <BookOpen className="h-12 w-12 mx-auto mb-4 transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-500" />
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-400 rounded-full animate-ping opacity-75 animation-delay-200"></div>
              </div>
              <h3 className="text-xl font-bold mb-2 text-center transform group-hover:scale-105 transition-transform duration-300">
                Degree & PG Programs
              </h3>
              <p className="text-sm text-blue-100 mb-4 text-center">UG and PG degrees</p>
              <div className="space-y-2">
                <div className="flex items-center space-x-2 transform translate-x-0 group-hover:translate-x-2 transition-transform duration-300 animation-delay-100">
                  <CheckCircle className="h-4 w-4 text-green-300 animate-bounce-slow animation-delay-300" />
                  <span className="text-sm">BA, B.Com, B.Sc</span>
                </div>
                <div className="flex items-center space-x-2 transform translate-x-0 group-hover:translate-x-2 transition-transform duration-300 animation-delay-200">
                  <CheckCircle className="h-4 w-4 text-green-300 animate-bounce-slow animation-delay-400" />
                  <span className="text-sm">MA, M.Com, MBA</span>
                </div>
                <div className="flex items-center space-x-2 transform translate-x-0 group-hover:translate-x-2 transition-transform duration-300 animation-delay-300">
                  <CheckCircle className="h-4 w-4 text-green-300 animate-bounce-slow animation-delay-500" />
                  <span className="text-sm">Professional Courses</span>
                </div>
              </div>
              {/* Animated Background Circles */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-white opacity-5 rounded-full transform translate-x-10 -translate-y-10 group-hover:scale-150 transition-transform duration-700"></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 bg-white opacity-5 rounded-full transform -translate-x-8 translate-y-8 group-hover:scale-150 transition-transform duration-700"></div>
            </div>

            {/* Card 3 - Skill & Counseling */}
            <div className="bg-gradient-to-br from-teal-600 to-teal-700 rounded-lg p-6 text-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 animate-fade-in-up animation-delay-700 group">
              <div className="relative">
                <Award className="h-12 w-12 mx-auto mb-4 transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-500" />
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-orange-400 rounded-full animate-ping opacity-75 animation-delay-400"></div>
              </div>
              <h3 className="text-xl font-bold mb-2 text-center transform group-hover:scale-105 transition-transform duration-300">
                Skill & Counseling
              </h3>
              <p className="text-sm text-teal-100 mb-4 text-center">Career guidance & skills</p>
              <div className="space-y-2">
                <div className="flex items-center space-x-2 transform translate-x-0 group-hover:translate-x-2 transition-transform duration-300 animation-delay-100">
                  <CheckCircle className="h-4 w-4 text-green-300 animate-bounce-slow animation-delay-600" />
                  <span className="text-sm">Career Counseling</span>
                </div>
                <div className="flex items-center space-x-2 transform translate-x-0 group-hover:translate-x-2 transition-transform duration-300 animation-delay-200">
                  <CheckCircle className="h-4 w-4 text-green-300 animate-bounce-slow animation-delay-700" />
                  <span className="text-sm">Skill Development</span>
                </div>
                <div className="flex items-center space-x-2 transform translate-x-0 group-hover:translate-x-2 transition-transform duration-300 animation-delay-300">
                  <CheckCircle className="h-4 w-4 text-green-300 animate-bounce-slow animation-delay-800" />
                  <span className="text-sm">Test Preparation</span>
                </div>
              </div>
              {/* Animated Background Circles */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-white opacity-5 rounded-full transform translate-x-10 -translate-y-10 group-hover:scale-150 transition-transform duration-700"></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 bg-white opacity-5 rounded-full transform -translate-x-8 translate-y-8 group-hover:scale-150 transition-transform duration-700"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials - Simple */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-lg p-6 shadow-md">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                  <Users className="h-6 w-6 text-indigo-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Priya Nair</h4>
                  <p className="text-gray-600 text-sm">MBA Graduate</p>
                </div>
              </div>
              <p className="text-gray-700">
                "Great career counseling and flexible MBA program."
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 shadow-md">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                  <Users className="h-6 w-6 text-indigo-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Rahul Kumar</h4>
                  <p className="text-gray-600 text-sm">B.Com Graduate</p>
                </div>
              </div>
              <p className="text-gray-700">
                "Excellent study abroad support. Now in Canada!"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Simple */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Why Choose Edbell
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Expert guidance for your academic and career goals.
              </p>
              
              <div className="space-y-4">
                {whyChooseUs.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-blue-100 to-indigo-200 rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="/campus-modern.jpg" 
                  alt="Modern Campus - EDBELL EDUSOLUTIONS" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextElementSibling?.classList.remove('hidden');
                  }}
                />
                <div className="hidden w-full h-full flex items-center justify-center">
                  <div className="text-center">
                    <Globe className="h-16 w-16 text-indigo-600 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">Modern Campus</h3>
                    <p className="text-gray-600">State-of-the-art facilities</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 via-transparent to-transparent flex items-end">
                  <div className="p-6 text-white w-full">
                    <h3 className="text-2xl font-bold mb-2">Modern Campus</h3>
                    <p className="text-blue-100">State-of-the-art facilities</p>
                  </div>
                </div>
              </div>
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