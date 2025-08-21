import GalleryImage from "./GalleryImage";
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const toBase = (path: string) =>
  decodeURIComponent(path.replace(/^\//, "")).replace(/\.(jpe?g|png)$/i, "");

const webp = (base: string, w: 400 | 800 | 1200 | 1600 = 1200) =>
  `/gallery/${encodeURIComponent(base)}-${w}.webp`;

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      image: "/07Rev-Wood Fencing_Irving.jpg",
      title: "Professional Fence Installation",
      category: "Wood Fencing",
      location: "Irving, TX"
    },
    {
      id: 2,
      image: "/07Rev-Side-by-Side.jpg",
      title: "Quality Fence Construction",
      category: "Wood Fencing",
      location: "Dallas-Fort Worth, TX"
    },
    {
      id: 3,
      image: "/07Rev-Richardson Fence2.jpg",
      title: "Expert Fence Installation",
      category: "Privacy Fencing",
      location: "Richardson, TX"
    },
    {
      id: 4,
      image: "/07Rev-Privacy Fencing_Hurst.jpg",
      title: "Residential Fence Project",
      category: "Wood Fencing",
      location: "HEB-Hurst, TX"
    },
    {
      id: 5,
      image: "/07Rev-Stained-BOB-Las-Colinas.jpg",
      title: "Custom Fence Design",
      category: "Wood Fencing",
      location: "Irving - Las Colinas, TX"
    },
    {
      id: 6,
      image: "/07Rev-Garland Fence.jpg",
      title: "Professional Installation",
      category: "Wood Fencing",
      location: "Garland, TX"
    },
    {
      id: 7,
      image: "/07Rev-Grand Prairie Fence.jpg",
      title: "Quality Craftsmanship",
      category: "Wood Fencing",
      location: "Grand Prairie, TX"
    },
    {
      id: 8,
      image: "/07Rev-Euless Fence.jpg",
      title: "Detailed Fence Work",
      category: "Wood Fencing",
      location: "HEB - Euless, TX"
    },
    {
      id: 9,
      image: "/07Rev-6ft Mod S-B-S No Stain_Dallas.jpg",
      title: "Fence Installation Project",
      category: "Wood Fencing",
      location: "Dallas-Fort Worth, TX"
    },
    {
      id: 10,
      image: "/07Rev-8ft Mod S.B.S._Plano.jpg",
      title: "Custom Fence Solution",
      category: "Wood Fencing",
      location: "Plano, TX"
    },
    {
      id: 11,
      image: "/07Rev-Cedar Fence_Cedar Hill.jpg",
      title: "Expert Fence Construction",
      category: "Wood Fencing",
      location: "Cedar Hill, TX"
    },
    {
      id: 12,
      image: "/07Rev-Decorative Fencing.jpg",
      title: "Custom Wood Fence Installation",
      category: "Wood Fencing",
      location: "Dallas-Fort Worth, TX"
    },
    {
      id: 13,
      image: "/07Rev-Farmers Branch Fence.jpg",
      title: "Modern Fence Installation",
      category: "Wood Fencing",
      location: "Farmers Branch, TX"
    },
    {
      id: 14,
      image: "/07Rev-Flower Mound Fence.jpg",
      title: "Professional Fence Project",
      category: "Wood Fencing",
      location: "Flower Mound, TX"
    },
    {
      id: 15,
      image: "/07Rev-Ft Worth Fence.jpg",
      title: "Quality Fence Installation",
      category: "Wood Fencing",
      location: "Fort Worth, TX"
    },
    {
      id: 16,
      image: "/07Rev-Garland Fence2.jpg",
      title: "Custom Fence Design",
      category: "Wood Fencing",
      location: "Garland, TX"
    },
    {
      id: 17,
      image: "/07Rev-Grand Prairie Fence2.jpg",
      title: "Expert Fence Construction",
      category: "Wood Fencing",
      location: "Grand Prairie, TX"
    },
    {
      id: 18,
      image: "/07Rev-Grapevine Fence.jpg",
      title: "Residential Fence Installation",
      category: "Wood Fencing",
      location: "Grapevine, TX"
    },
    {
      id: 19,
      image: "/07Rev-Grapevine Fence2.jpg",
      title: "Professional Fence Work",
      category: "Wood Fencing",
      location: "Grapevine, TX"
    },
    {
      id: 20,
      image: "/07Rev-Hurst Fence.jpg",
      title: "Quality Fence Project",
      category: "Wood Fencing",
      location: "Hurst, TX"
    },
    {
      id: 21,
      image: "/07Rev-Las Colinas Fence.jpg",
      title: "Custom Fence Installation",
      category: "Wood Fencing",
      location: "Irving-Las Colinas, TX"
    },
    {
      id: 22,
      image: "/07Rev-Lewisville Fence.jpg",
      title: "Expert Fence Design",
      category: "Wood Fencing",
      location: "Lewisville, TX"
    },
    {
      id: 23,
      image: "/07Rev-Mansfield Fence.jpg",
      title: "Professional Fence Solution",
      category: "Wood Fencing",
      location: "Mansfield, TX"
    },
    {
      id: 24,
      image: "/07Rev-Flower Mound Fence.jpg",
      title: "Quality Fence Construction",
      category: "Wood Fencing",
      location: "Flower Mound, TX"
    },
    {
      id: 25,
      image: "/07Rev-6ft Mod S-B-S No Stain_Dallas.jpg",
      title: "6ft Side-by-Side Cedar Fence",
      category: "Wood Fencing",
      location: "Dallas, TX"
    },
    {
      id: 26,
      image: "/07Rev-Decorative Fencing.jpg",
      title: "Decorative Fence Design",
      category: "Decorative Fencing",
      location: "Dallas-Fort Worth, TX"
    },
    {
      id: 27,
      image: "/07Rev-Grapevine Fence.jpg",
      title: "Awesome Cedar Fence",
      category: "Ornamental Steel Fencing",
      location: "Grapevine, TX"
    },
    {
      id: 28,
      image: "/07Rev-Privacy Fencing_Hurst.jpg",
      title: "Privacy Fence Installation",
      category: "Privacy Fencing",
      location: "HEB-Hurst, TX"
    },
    {
      id: 29,
      image: "/07Rev-Wood Fencing_Irving.jpg",
      title: "Wood Fence Installation",
      category: "Wood Fencing",
      location: "Irving, TX"
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
      {/* the image */}
      <GalleryImage
        name={toBase(project.image)}   // turns "/file.jpg" into "file"
        eager={index < 4}              // first row loads fast
        alt={project.title}
        w={1200}
        h={800}
      />

      {/* the hover overlay text */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-colors duration-300 flex items-end">
        <div className="p-4 text-white translate-y-full group-hover:translate-y-0 transition-transform duration-300">
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
  src={webp(toBase(projects[selectedImage].image), 1600)}
  srcSet={[
    `${webp(toBase(projects[selectedImage].image), 800)} 800w`,
    `${webp(toBase(projects[selectedImage].image), 1200)} 1200w`,
    `${webp(toBase(projects[selectedImage].image), 1600)} 1600w`,
  ].join(", ")}
  sizes="100vw"
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