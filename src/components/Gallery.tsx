import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      image: "/2015-10-09 07.36.44 1.jpg",
      title: "Professional Fence Installation",
      category: "Wood Fencing",
      location: "Dallas-Fort Worth, TX"
    },
    {
      id: 2,
      image: "/2015-10-09 07.45.24 1.jpg",
      title: "Quality Fence Construction",
      category: "Wood Fencing",
      location: "Dallas-Fort Worth, TX"
    },
    {
      id: 3,
      image: "/2015-10-09 07.59.04 1.jpg",
      title: "Expert Fence Installation",
      category: "Privacy Fencing",
      location: "Dallas-Fort Worth, TX"
    },
    {
      id: 4,
      image: "/2015-10-16 12.23.17.jpg",
      title: "Residential Fence Project",
      category: "Wood Fencing",
      location: "Dallas-Fort Worth, TX"
    },
    {
      id: 5,
      image: "/2016-01-20 14.17.25.jpg",
      title: "Custom Fence Design",
      category: "Wood Fencing",
      location: "Dallas-Fort Worth, TX"
    },
    {
      id: 6,
      image: "/2016-01-23 12.52.37.jpg",
      title: "Professional Installation",
      category: "Wood Fencing",
      location: "Dallas-Fort Worth, TX"
    },
    {
      id: 7,
      image: "/2016-01-23 22.11.49-1.jpg",
      title: "Quality Craftsmanship",
      category: "Wood Fencing",
      location: "Dallas-Fort Worth, TX"
    },
    {
      id: 8,
      image: "/2016-01-23 22.11.55-1.jpg",
      title: "Detailed Fence Work",
      category: "Wood Fencing",
      location: "Dallas-Fort Worth, TX"
    },
    {
      id: 9,
      image: "/2016-02-22 12.50.08.jpg",
      title: "Fence Installation Project",
      category: "Wood Fencing",
      location: "Dallas-Fort Worth, TX"
    },
    {
      id: 10,
      image: "/2016-04-29 15.56.40-1.jpg",
      title: "Custom Fence Solution",
      category: "Wood Fencing",
      location: "Dallas-Fort Worth, TX"
    },
    {
      id: 11,
      image: "/2016-05-06 12.17.57.jpg",
      title: "Expert Fence Construction",
      category: "Wood Fencing",
      location: "Dallas-Fort Worth, TX"
    },
    {
      id: 12,
      image: "/2017-02-04 18.14.28-1.jpg",
      title: "Custom Wood Fence Installation",
      category: "Wood Fencing",
      location: "Dallas-Fort Worth, TX"
    },
    {
      id: 13,
      image: "/2020-01-15 10.46.36.jpg",
      title: "Modern Fence Installation",
      category: "Wood Fencing",
      location: "Dallas-Fort Worth, TX"
    },
    {
      id: 14,
      image: "/2020-01-24 17.06.15.jpg",
      title: "Professional Fence Project",
      category: "Wood Fencing",
      location: "Dallas-Fort Worth, TX"
    },
    {
      id: 15,
      image: "/2020-02-07 17.54.10.jpg",
      title: "Quality Fence Installation",
      category: "Wood Fencing",
      location: "Dallas-Fort Worth, TX"
    },
    {
      id: 16,
      image: "/2020-02-22 12.12.51.jpg",
      title: "Custom Fence Design",
      category: "Wood Fencing",
      location: "Dallas-Fort Worth, TX"
    },
    {
      id: 17,
      image: "/2020-02-29 17.52.02.jpg",
      title: "Expert Fence Construction",
      category: "Wood Fencing",
      location: "Dallas-Fort Worth, TX"
    },
    {
      id: 18,
      image: "/2020-03-02 10.13.33.jpg",
      title: "Residential Fence Installation",
      category: "Wood Fencing",
      location: "Dallas-Fort Worth, TX"
    },
    {
      id: 19,
      image: "/2020-03-02 14.54.27.jpg",
      title: "Professional Fence Work",
      category: "Wood Fencing",
      location: "Dallas-Fort Worth, TX"
    },
    {
      id: 20,
      image: "/2020-03-06 11.24.19.jpg",
      title: "Quality Fence Project",
      category: "Wood Fencing",
      location: "Dallas-Fort Worth, TX"
    },
    {
      id: 21,
      image: "/2020-03-28 11.39.46.jpg",
      title: "Custom Fence Installation",
      category: "Wood Fencing",
      location: "Dallas-Fort Worth, TX"
    },
    {
      id: 22,
      image: "/2020-03-28 11.39.52.jpg",
      title: "Expert Fence Design",
      category: "Wood Fencing",
      location: "Dallas-Fort Worth, TX"
    },
    {
      id: 23,
      image: "/2020-03-28 15.20.25.jpg",
      title: "Professional Fence Solution",
      category: "Wood Fencing",
      location: "Dallas-Fort Worth, TX"
    },
    {
      id: 24,
      image: "/2020-04-25 13.10.51.jpg",
      title: "Quality Fence Construction",
      category: "Wood Fencing",
      location: "Dallas-Fort Worth, TX"
    },
    {
      id: 25,
      image: "/6ft Mod B.O.B. Stained.jpg",
      title: "6ft Board-on-Board Stained Fence",
      category: "Wood Fencing",
      location: "Dallas-Fort Worth, TX"
    },
    {
      id: 26,
      image: "/Decorative Fencing.jpg",
      title: "Decorative Fence Design",
      category: "Decorative Fencing",
      location: "Dallas-Fort Worth, TX"
    },
    {
      id: 27,
      image: "/Ornamental Steel Fence.jpg",
      title: "Ornamental Steel Fence",
      category: "Ornamental Steel Fencing",
      location: "Dallas-Fort Worth, TX"
    },
    {
      id: 28,
      image: "/Privacy Fencing.jpg",
      title: "Privacy Fence Installation",
      category: "Privacy Fencing",
      location: "Dallas-Fort Worth, TX"
    },
    {
      id: 29,
      image: "/Wood Fencing.jpg",
      title: "Wood Fence Installation",
      category: "Wood Fencing",
      location: "Dallas-Fort Worth, TX"
    }
  ];

  const openModal = (index: number) => {
    setSelectedImage(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % projects.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? projects.length - 1 : selectedImage - 1);
    }
  };

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Recent Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our portfolio of completed fence installations across the Dallas-Fort Worth area. Each project showcases our commitment to quality and attention to detail.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
              onClick={() => openModal(index)}
            >
              <div className="aspect-w-4 aspect-h-3 h-64">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-end">
                <div className="p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="font-semibold mb-1">{project.title}</h3>
                  <p className="text-sm text-gray-200">{project.category}</p>
                  <p className="text-xs text-gray-300">{project.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-full">
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
              >
                <X className="w-8 h-8" />
              </button>
              
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
              >
                <ChevronLeft className="w-8 h-8" />
              </button>
              
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
              >
                <ChevronRight className="w-8 h-8" />
              </button>

              <img
                src={projects[selectedImage].image}
                alt={projects[selectedImage].title}
                className="max-w-full max-h-full object-contain"
              />
              
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-lg font-semibold">{projects[selectedImage].title}</h3>
                <p className="text-sm text-gray-200">{projects[selectedImage].category} • {projects[selectedImage].location}</p>
              </div>
            </div>
          </div>
        )}

        <div className="text-center mt-12">
          <div className="bg-blue-600 text-white px-8 py-3 rounded-lg inline-block">
            Some of Our Recent Projects...
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;