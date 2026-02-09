'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Newsletter from '@/components/Newsletter';
import { 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Camera, 
  Users, 
  GraduationCap, 
  Award,
  Calendar,
  MapPin,
  Eye,
  Download,
  Share2
} from 'lucide-react';

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  title: string;
  category: 'events' | 'campus' | 'graduation' | 'activities' | 'achievements';
  date: string;
  location?: string;
  description: string;
}

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [galleryImages, setGalleryImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchGalleryImages();
  }, []);

  const fetchGalleryImages = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/gallery?published=true');
      const data = await response.json();
      
      if (data.success) {
        // Transform API data to match component interface
        const transformedImages = data.images.map((img: any) => ({
          id: img._id,
          src: img.imageUrl,
          alt: img.imageAlt,
          title: img.title,
          category: img.category,
          date: img.eventDate || img.createdAt,
          location: img.location,
          description: img.description
        }));
        setGalleryImages(transformedImages);
      } else {
        console.error('Failed to fetch gallery images:', data.error);
        setGalleryImages([]);
      }
    } catch (error) {
      console.error('Error fetching gallery images:', error);
      setGalleryImages([]);
    } finally {
      setLoading(false);
    }
  };

  const categories = [
    { id: 'all', name: 'All Photos', icon: Camera },
    { id: 'events', name: 'Events', icon: Calendar },
    { id: 'campus', name: 'Campus', icon: MapPin },
    { id: 'graduation', name: 'Graduation', icon: GraduationCap },
    { id: 'activities', name: 'Activities', icon: Users },
    { id: 'achievements', name: 'Achievements', icon: Award }
  ];

  const filteredImages = selectedCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  const openLightbox = (image: GalleryImage) => {
    setSelectedImage(image);
    setCurrentImageIndex(filteredImages.findIndex(img => img.id === image.id));
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const nextIndex = (currentImageIndex + 1) % filteredImages.length;
    setCurrentImageIndex(nextIndex);
    setSelectedImage(filteredImages[nextIndex]);
  };

  const prevImage = () => {
    const prevIndex = (currentImageIndex - 1 + filteredImages.length) % filteredImages.length;
    setCurrentImageIndex(prevIndex);
    setSelectedImage(filteredImages[prevIndex]);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center mobile-container">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 sm:h-16 sm:w-16 border-b-2 border-blue-600 mx-auto mb-4 sm:mb-6"></div>
          <h3 className="mobile-heading-4 text-gray-900 mb-2">Loading Gallery</h3>
          <p className="mobile-body text-gray-600">Please wait while we load your photos...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
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
            <div className="lg:col-span-3 text-center lg:text-left fade-in">
              <div className="inline-flex items-center bg-blue-100 rounded-full px-4 py-2 mb-4">
                <Camera className="h-4 w-4 text-blue-700 mr-2" />
                <span className="text-sm font-medium text-blue-700">Campus Life & Events</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight text-gray-900">
                Photo Gallery
              </h1>
              <p className="text-base sm:text-lg text-gray-700 mb-6 leading-relaxed">
                Explore the vibrant moments from our educational journey - capturing memorable events, 
                campus life, student achievements, graduation ceremonies, and the inspiring stories 
                of academic excellence and personal growth.
              </p>
              
              {/* Gallery Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
                <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-sm text-center">
                  <div className="flex items-center justify-center w-10 h-10 bg-blue-100 rounded-lg mx-auto mb-2">
                    <Calendar className="h-5 w-5 text-blue-600" />
                  </div>
                  <p className="text-2xl font-bold text-gray-900">{galleryImages.length}+</p>
                  <p className="text-xs text-gray-600">Photos</p>
                </div>
                
                <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-sm text-center">
                  <div className="flex items-center justify-center w-10 h-10 bg-cyan-100 rounded-lg mx-auto mb-2">
                    <Users className="h-5 w-5 text-cyan-600" />
                  </div>
                  <p className="text-2xl font-bold text-gray-900">50+</p>
                  <p className="text-xs text-gray-600">Events</p>
                </div>
                
                <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-sm text-center">
                  <div className="flex items-center justify-center w-10 h-10 bg-indigo-100 rounded-lg mx-auto mb-2">
                    <GraduationCap className="h-5 w-5 text-indigo-600" />
                  </div>
                  <p className="text-2xl font-bold text-gray-900">100+</p>
                  <p className="text-xs text-gray-600">Graduates</p>
                </div>
                
                <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-sm text-center">
                  <div className="flex items-center justify-center w-10 h-10 bg-teal-100 rounded-lg mx-auto mb-2">
                    <Award className="h-5 w-5 text-teal-600" />
                  </div>
                  <p className="text-2xl font-bold text-gray-900">25+</p>
                  <p className="text-xs text-gray-600">Awards</p>
                </div>
              </div>
            </div>
            
            {/* Right Content - Campus Image - 2 columns */}
            <div className="lg:col-span-2 relative">
              <div className="w-full h-72 sm:h-80 lg:h-96 rounded-xl relative overflow-hidden shadow-lg">
                <img 
                  src="/about-campus.jpg" 
                  alt="Campus Gallery" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="bg-white border-b border-gray-100 sticky top-0 z-20 shadow-sm">
        <div className="mobile-container py-6 sm:py-8">
          <div className="flex flex-col gap-4 sm:gap-6">
            <div className="flex items-center justify-center sm:justify-start space-x-3">
              <Camera className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600" />
              <span className="mobile-heading-4 text-gray-900">Browse by Category:</span>
            </div>
            <div className="flex flex-wrap gap-2 sm:gap-3 justify-center sm:justify-start">
              {categories.map((category) => {
                const IconComponent = category.icon;
                return (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`mobile-touch-target flex items-center space-x-1 sm:space-x-2 px-3 sm:px-4 py-2 sm:py-3 rounded-xl font-medium transition-all duration-300 text-xs sm:text-sm transform hover:scale-105 ${
                      selectedCategory === category.id
                        ? 'bg-blue-600 text-white shadow-lg scale-105'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    <IconComponent className="h-3 w-3 sm:h-4 sm:w-4" />
                    <span className="hidden xs:inline">{category.name}</span>
                    <span className="xs:hidden">{category.name.split(' ')[0]}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="text-center mb-12 opacity-0 animate-[fadeIn_0.6s_ease-out_forwards]">
            <h2 className="heading-2 text-gray-900 mb-4">
              {selectedCategory === 'all' ? 'All Photos' : categories.find(c => c.id === selectedCategory)?.name}
            </h2>
            <p className="body-large text-gray-600">
              {filteredImages.length} photo{filteredImages.length !== 1 ? 's' : ''} found
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image, index) => (
              <div
                key={image.id}
                className="card card-hover cursor-pointer overflow-hidden group opacity-0 animate-[fadeInUp_0.6s_ease-out_forwards] border border-gray-200 hover:border-blue-300"
                style={{ animationDelay: `${index * 0.05}s` }}
                onClick={() => openLightbox(image)}
              >
                <div className="relative overflow-hidden bg-gray-100">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      e.currentTarget.src = '/api/placeholder/600/400';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 transform scale-75 group-hover:scale-100 transition-transform duration-300">
                      <Eye className="h-6 w-6 text-white" />
                    </div>
                  </div>
                </div>
                
                <div className="card-body">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`badge text-xs ${
                      image.category === 'events' ? 'bg-blue-100 text-blue-800' :
                      image.category === 'campus' ? 'bg-blue-100 text-blue-800' :
                      image.category === 'graduation' ? 'bg-cyan-100 text-cyan-800' :
                      image.category === 'activities' ? 'bg-indigo-100 text-indigo-800' :
                      'bg-blue-100 text-blue-800'
                    }`}>
                      {image.category.charAt(0).toUpperCase() + image.category.slice(1)}
                    </span>
                    <span className="body-small text-gray-500">{formatDate(image.date)}</span>
                  </div>
                  
                  <h3 className="heading-4 text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors duration-300">
                    {image.title}
                  </h3>
                  
                  {image.location && (
                    <div className="flex items-center space-x-2 body-small text-gray-500 mb-3">
                      <MapPin className="h-4 w-4 flex-shrink-0" />
                      <span className="truncate">{image.location}</span>
                    </div>
                  )}
                  
                  <p className="body text-gray-600 line-clamp-2">
                    {image.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="text-center py-16">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-100 rounded-full mb-6">
                <Camera className="h-10 w-10 text-gray-400" />
              </div>
              <h3 className="heading-3 text-gray-900 mb-4">No Photos Found</h3>
              <p className="body-large text-gray-600 mb-8">
                No photos available in the selected category. Try selecting a different category.
              </p>
              <button
                onClick={() => setSelectedCategory('all')}
                className="btn btn-primary transform hover:scale-105 transition-transform duration-300"
              >
                View All Photos
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full">
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 bg-white bg-opacity-20 hover:bg-opacity-30 text-white rounded-full p-2 transition-all duration-200"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Navigation Buttons */}
            {filteredImages.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white rounded-full p-2 transition-all duration-200"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white rounded-full p-2 transition-all duration-200"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </>
            )}

            {/* Image */}
            <div className="bg-white rounded-lg overflow-hidden shadow-2xl">
              <div className="aspect-w-16 aspect-h-9 bg-gray-100 flex items-center justify-center">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="w-full h-96 sm:h-[500px] object-cover"
                  onError={(e) => {
                    // Fallback to placeholder if image fails to load
                    e.currentTarget.src = '/api/placeholder/800/600';
                  }}
                />
              </div>
              
              {/* Image Info */}
              <div className="p-6">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-3">
                      <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                        selectedImage.category === 'events' ? 'bg-blue-100 text-blue-800' :
                        selectedImage.category === 'campus' ? 'bg-blue-100 text-blue-800' :
                        selectedImage.category === 'graduation' ? 'bg-cyan-100 text-cyan-800' :
                        selectedImage.category === 'activities' ? 'bg-indigo-100 text-indigo-800' :
                        'bg-blue-100 text-blue-800'
                      }`}>
                        {selectedImage.category}
                      </span>
                      <span className="text-sm text-gray-500">{formatDate(selectedImage.date)}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {selectedImage.title}
                    </h3>
                    
                    {selectedImage.location && (
                      <div className="flex items-center space-x-2 text-sm text-gray-600 mb-3">
                        <MapPin className="h-4 w-4" />
                        <span>{selectedImage.location}</span>
                      </div>
                    )}
                    
                    <p className="text-gray-600 leading-relaxed">
                      {selectedImage.description}
                    </p>
                  </div>
                  
                  <div className="flex flex-row sm:flex-col gap-2">
                    <button className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                      <Download className="h-4 w-4" />
                      <span className="hidden sm:inline">Download</span>
                    </button>
                    <button className="flex items-center space-x-2 bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                      <Share2 className="h-4 w-4" />
                      <span className="hidden sm:inline">Share</span>
                    </button>
                  </div>
                </div>
                
                {filteredImages.length > 1 && (
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <div className="text-sm text-gray-500 text-center">
                      Photo {currentImageIndex + 1} of {filteredImages.length}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="section bg-gradient-to-br from-blue-700 via-blue-800 to-blue-900">
        <div className="container text-center">
          <div className="max-w-4xl mx-auto opacity-0 animate-[fadeIn_0.8s_ease-out_forwards]">
            <h2 className="heading-2 text-white mb-6">
              Be Part of Our Story
            </h2>
            <p className="body-large text-blue-100 mb-8">
              Join our vibrant community and create your own memorable moments. 
              Start your educational journey with us today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-white text-blue-600 hover:bg-blue-50 font-semibold py-4 px-8 rounded-xl transition-all duration-300 inline-flex items-center justify-center space-x-2 shadow-lg transform hover:scale-105">
                <Users className="h-5 w-5" />
                <span>Join Our Community</span>
              </Link>
              <Link href="/courses" className="bg-blue-600 hover:bg-blue-500 border-2 border-white text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 inline-flex items-center justify-center space-x-2 shadow-lg transform hover:scale-105">
                <GraduationCap className="h-5 w-5" />
                <span>Explore Courses</span>
              </Link>
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