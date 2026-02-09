import Link from 'next/link';
import Newsletter from '@/components/Newsletter';
import { 
  UserCheck, 
  Plane, 
  DollarSign, 
  BookOpen, 
  GraduationCap, 
  Users, 
  CheckCircle,
  ArrowRight,
  Globe,
  Award,
  Target,
  MessageCircle,
  Phone,
  Mail,
  Calendar,
  FileText,
  Briefcase,
  Star
} from 'lucide-react';

export default function Services() {
  const mainServices = [
    {
      icon: <UserCheck className="h-12 w-12 text-blue-600" />,
      title: "Career Counseling",
      description: "Expert guidance to help you choose the right career path and achieve your professional goals.",
      features: [
        "One-on-one counseling sessions",
        "Career assessment tests",
        "Industry trend analysis",
        "Personalized career roadmap",
        "Resume and interview preparation"
      ],
      benefits: [
        "Make informed career decisions",
        "Identify your strengths and interests",
        "Understand market opportunities",
        "Build confidence for job interviews"
      ],
      pricing: "₹2,000 - ₹5,000",
      duration: "2-4 sessions"
    },
    {
      icon: <Plane className="h-12 w-12 text-cyan-600" />,
      title: "Study Abroad Services",
      description: "Complete assistance for international education opportunities worldwide.",
      features: [
        "University selection guidance",
        "Application process support",
        "Visa assistance and documentation",
        "Scholarship identification",
        "Pre-departure orientation"
      ],
      benefits: [
        "Access to global education",
        "Simplified application process",
        "Higher chances of visa approval",
        "Comprehensive support throughout"
      ],
      pricing: "₹15,000 - ₹50,000",
      duration: "3-6 months"
    },
    {
      icon: <DollarSign className="h-12 w-12 text-indigo-600" />,
      title: "Scholarship Assistance",
      description: "Help securing financial aid and scholarships for your education.",
      features: [
        "Scholarship database access",
        "Application preparation",
        "Document verification",
        "Follow-up and tracking",
        "Alternative funding options"
      ],
      benefits: [
        "Reduce education costs",
        "Access to merit-based funding",
        "Government scheme guidance",
        "Increased approval chances"
      ],
      pricing: "₹3,000 - ₹10,000",
      duration: "1-3 months"
    },
    {
      icon: <BookOpen className="h-12 w-12 text-teal-600" />,
      title: "Test Preparations",
      description: "Comprehensive preparation for various competitive and entrance exams.",
      features: [
        "Structured study materials",
        "Mock tests and practice papers",
        "Expert faculty guidance",
        "Performance analysis",
        "Doubt clearing sessions"
      ],
      benefits: [
        "Improved exam scores",
        "Better time management",
        "Increased confidence",
        "Strategic exam approach"
      ],
      pricing: "₹5,000 - ₹25,000",
      duration: "2-6 months"
    }
  ];

  const additionalServices = [
    {
      icon: <GraduationCap className="h-8 w-8 text-blue-600" />,
      title: "University Admissions",
      description: "End-to-end support for university admission processes",
      details: [
        "Application form assistance",
        "Document preparation",
        "Entrance exam guidance",
        "Interview preparation"
      ],
      pricing: "₹2,000 - ₹8,000"
    },
    {
      icon: <Users className="h-8 w-8 text-cyan-600" />,
      title: "PSC/UPSC Coaching",
      description: "Specialized coaching for government job examinations",
      details: [
        "Comprehensive syllabus coverage",
        "Current affairs updates",
        "Mock interviews",
        "Answer writing practice"
      ],
      pricing: "₹10,000 - ₹30,000"
    },
    {
      icon: <Globe className="h-8 w-8 text-indigo-600" />,
      title: "Spoken English Classes",
      description: "Improve your communication skills with professional training",
      details: [
        "Grammar and vocabulary building",
        "Pronunciation improvement",
        "Conversation practice",
        "Business English training"
      ],
      pricing: "₹3,000 - ₹12,000"
    },
    {
      icon: <Award className="h-8 w-8 text-teal-600" />,
      title: "Professional Certifications",
      description: "Industry-recognized certification programs",
      details: [
        "Digital marketing certifications",
        "Office administration courses",
        "Hospital management programs",
        "Teacher training courses"
      ],
      pricing: "₹8,000 - ₹25,000"
    },
    {
      icon: <FileText className="h-8 w-8 text-sky-600" />,
      title: "Document Services",
      description: "Professional assistance with educational documentation",
      details: [
        "Transcript verification",
        "Document translation",
        "Attestation services",
        "Educational certificates"
      ],
      pricing: "₹500 - ₹3,000"
    },
    {
      icon: <Briefcase className="h-8 w-8 text-blue-600" />,
      title: "Placement Assistance",
      description: "Job placement support and career development",
      details: [
        "Resume building",
        "Interview preparation",
        "Job matching",
        "Skill development"
      ],
      pricing: "₹2,000 - ₹10,000"
    }
  ];

  const process = [
    {
      step: "1",
      title: "Initial Consultation",
      description: "Free consultation to understand your goals and requirements"
    },
    {
      step: "2",
      title: "Service Planning",
      description: "Customized service plan based on your specific needs"
    },
    {
      step: "3",
      title: "Implementation",
      description: "Expert execution of services with regular progress updates"
    },
    {
      step: "4",
      title: "Follow-up Support",
      description: "Continued support until you achieve your desired outcomes"
    }
  ];

  const testimonials = [
    {
      name: "Priya Nair",
      role: "MBA Graduate",
      content: "The career counseling service helped me identify my true passion and guided me towards the right career path. Highly recommended!",
      rating: 5
    },
    {
      name: "Rahul Kumar",
      role: "Engineering Student",
      content: "Thanks to their study abroad services, I'm now pursuing my Master's in Canada. The visa process was smooth and hassle-free.",
      rating: 5
    },
    {
      name: "Anjali Menon",
      role: "B.Com Graduate",
      content: "I secured a scholarship worth ₹2 lakhs with their assistance. Their team knows exactly what scholarship providers are looking for.",
      rating: 5
    }
  ];

  const faqs = [
    {
      question: "What is included in career counseling sessions?",
      answer: "Our career counseling includes aptitude tests, personality assessments, industry analysis, career roadmap creation, and ongoing support for career decisions."
    },
    {
      question: "How long does the study abroad process take?",
      answer: "The study abroad process typically takes 3-6 months, depending on the country, university, and program. We provide timeline-specific guidance for each case."
    },
    {
      question: "Do you guarantee scholarship approval?",
      answer: "While we cannot guarantee approval, our expertise significantly increases your chances. We have a 70% success rate in scholarship applications."
    },
    {
      question: "Are your test preparation materials updated?",
      answer: "Yes, all our study materials and mock tests are regularly updated to reflect the latest exam patterns and syllabus changes."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 py-24 overflow-hidden min-h-[600px] lg:min-h-[700px]">
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
                <span className="text-sm font-medium text-blue-700">🎓 Comprehensive Educational Services</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight text-gray-900">
                Educational & Career Services
              </h1>
              <p className="text-base sm:text-lg text-gray-700 mb-6 leading-relaxed">
                Empowering your educational journey with expert guidance, comprehensive support, 
                and personalized solutions for academic and career success.
              </p>
              
              {/* Key Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="flex items-start space-x-3 bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-sm">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <UserCheck className="h-5 w-5 text-blue-600" />
                  </div>
                  <div className="text-left">
                    <h3 className="font-semibold text-gray-900 text-sm">Expert Counseling</h3>
                    <p className="text-xs text-gray-600">Personalized career guidance</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3 bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-sm">
                  <div className="flex-shrink-0 w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center">
                    <Globe className="h-5 w-5 text-cyan-600" />
                  </div>
                  <div className="text-left">
                    <h3 className="font-semibold text-gray-900 text-sm">Study Abroad</h3>
                    <p className="text-xs text-gray-600">Global education opportunities</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3 bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-sm">
                  <div className="flex-shrink-0 w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
                    <DollarSign className="h-5 w-5 text-indigo-600" />
                  </div>
                  <div className="text-left">
                    <h3 className="font-semibold text-gray-900 text-sm">Scholarships</h3>
                    <p className="text-xs text-gray-600">Financial aid assistance</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3 bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-sm">
                  <div className="flex-shrink-0 w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center">
                    <BookOpen className="h-5 w-5 text-teal-600" />
                  </div>
                  <div className="text-left">
                    <h3 className="font-semibold text-gray-900 text-sm">Test Prep</h3>
                    <p className="text-xs text-gray-600">Competitive exam training</p>
                  </div>
                </div>
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
                >
                  <MessageCircle className="h-5 w-5 mr-2" />
                  Book Free Consultation
                </Link>
                <a
                  href="tel:+919876543210"
                  className="inline-flex items-center justify-center px-6 py-3 bg-white hover:bg-gray-50 text-gray-900 font-semibold rounded-xl shadow-md hover:shadow-lg border border-gray-200 transition-all duration-300"
                >
                  <Phone className="h-5 w-5 mr-2 text-green-600" />
                  Call Us Now
                </a>
              </div>
            </div>
            
            {/* Right Content - Education Image - 2 columns */}
            <div className="lg:col-span-2 relative">
              <div className="w-full h-72 sm:h-80 lg:h-96 rounded-xl relative overflow-hidden shadow-lg">
                <img 
                  src="/about-team.jpg" 
                  alt="Educational Services" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 opacity-0 animate-[fadeIn_0.6s_ease-out_forwards]">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive educational solutions tailored to your needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {mainServices.map((service, index) => (
              <div 
                key={index} 
                className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 opacity-0 animate-[fadeInUp_0.6s_ease-out_forwards] group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start space-x-4 mb-6">
                  <div className="flex-shrink-0 transform group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                      <CheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                      Key Features
                    </h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start text-gray-600 text-sm">
                          <span className="text-blue-600 mr-2">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                      <Award className="h-5 w-5 text-blue-600 mr-2" />
                      Benefits
                    </h4>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start text-gray-600 text-sm">
                          <span className="text-blue-600 mr-2">•</span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div>
                      <p className="text-sm text-gray-500">Starting from</p>
                      <p className="text-xl font-bold text-blue-600">{service.pricing}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-500">Duration</p>
                      <p className="text-sm font-semibold text-gray-900">{service.duration}</p>
                    </div>
                  </div>
                  
                  <Link 
                    href={`/contact?service=${encodeURIComponent(service.title.toLowerCase().replace(/\s+/g, '-'))}`}
                    className="block w-full bg-blue-600 hover:bg-blue-700 text-white text-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Additional Services
            </h2>
            <p className="text-xl text-gray-600">
              More services for your educational journey
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 group opacity-0 animate-[fadeInUp_0.6s_ease-out_forwards]"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="transform group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">{service.title}</h3>
                </div>
                <p className="text-gray-600 mb-4 text-sm">{service.description}</p>
                <div className="space-y-2 mb-4">
                  {service.details.map((detail, detailIndex) => (
                    <div key={detailIndex} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                      <span className="text-sm text-gray-600">{detail}</span>
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <span className="text-blue-600 font-semibold text-sm">{service.pricing}</span>
                  <Link 
                    href={`/contact?service=${encodeURIComponent(service.title.toLowerCase().replace(/\s+/g, '-'))}`}
                    className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center group-hover:translate-x-1 transition-transform duration-300"
                  >
                    Learn More <ArrowRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How We Work
            </h2>
            <p className="text-xl text-gray-600">
              Our systematic approach for best outcomes
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div 
                key={index} 
                className="text-center relative opacity-0 animate-[fadeInUp_0.6s_ease-out_forwards]"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-2xl flex items-center justify-center mx-auto mb-6 text-2xl font-bold shadow-lg transform hover:scale-110 transition-transform duration-300">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
                {index < process.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full">
                    <ArrowRight className="h-6 w-6 text-blue-300 mx-auto" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Students Say
            </h2>
            <p className="text-xl text-gray-600">
              Success stories from our students
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 opacity-0 animate-[fadeInUp_0.6s_ease-out_forwards]"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center">
                    <Users className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Common questions about our services
            </p>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all duration-300 opacity-0 animate-[fadeInUp_0.6s_ease-out_forwards]"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-start">
                  <MessageCircle className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                  {faq.question}
                </h3>
                <p className="text-gray-600 ml-8">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Get in Touch
            </h2>
            <p className="text-xl text-gray-600">
              Contact us for personalized assistance
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 text-center group transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Phone className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Call Us</h3>
              <p className="text-gray-600 mb-4">Speak directly with our counselors</p>
              <div className="space-y-2">
                <a href="tel:+919876543210" className="block text-blue-600 hover:text-blue-800 font-semibold transition-colors duration-300">
                  +91 98765 43210
                </a>
                <a href="tel:+918765432109" className="block text-blue-600 hover:text-blue-800 font-semibold transition-colors duration-300">
                  +91 87654 32109
                </a>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 text-center group transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-100 to-cyan-200 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Mail className="h-8 w-8 text-cyan-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Email Us</h3>
              <p className="text-gray-600 mb-4">Send us your queries anytime</p>
              <a href="mailto:info@edbelledusolutions.com" className="text-cyan-600 hover:text-cyan-800 font-semibold transition-colors duration-300 break-all">
                info@edbelledusolutions.com
              </a>
            </div>
            
            <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 text-center group transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-100 to-indigo-200 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Calendar className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Schedule Meeting</h3>
              <p className="text-gray-600 mb-4">Book a consultation session</p>
              <Link href="/contact" className="inline-block bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105">
                Book Appointment
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Book a free consultation and take the first step towards your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact?service=consultation&inquiry=details"
              className="bg-white text-blue-600 hover:bg-blue-50 font-semibold py-4 px-8 rounded-xl transition-all duration-300 inline-flex items-center justify-center transform hover:scale-105 shadow-lg"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Book Free Consultation
            </Link>
            <a 
              href="tel:+919876543210"
              className="bg-blue-500 hover:bg-blue-400 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 inline-flex items-center justify-center transform hover:scale-105 shadow-lg"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call Us Now
            </a>
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