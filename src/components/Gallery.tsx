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
      alt:   "custom cedar fence with smooth finish and reinforced posts",
      title: "Custom cedar wood fence built for lasting privacy",
      category: "Wood Fencing",
      location: ""
    },
    {
      id: 2,
      image: "/07Rev-Side-by-Side.jpg",
      alt:   "modern styles for a clean design and strong framing",
      title: "Premium fence with modern, sleek design",
      category: "Wood Fencing",
      location: ""
    },
    {
      id: 3,
      image: "/07Rev-Richardson Fence2.jpg",
      alt:   "cedar privacy fence built for long-lasting durability",
      title: "Detailed craftsmanship on full cedar replacement",
      category: "Privacy Fencing",
      location: ""
    },
    {
      id: 4,
      image: "/07Rev-Privacy Fencing_Hurst.jpg",
      alt:   "residential backyard fence with natural wood texture",
      title: "Privacy fence with smooth finish and reinforced posts",
      category: "Wood Fencing",
      location: ""
    },
    {
      id: 5,
      image: "/07Rev-Stained-BOB-Las-Colinas.jpg",
      alt:   "stained wood fence showcasing rich grain and smooth panels",
      title: "Decorative fence for great curb appeal",
      category: "Wood Fencing",
      location: ""
    },
    {
      id: 6,
      image: "/07Rev-Garland Fence.jpg",
      alt:   "classic board-on-board fence built for privacy and strength",
      title: "Quality cedar fence stained for weather resistance",
      category: "Wood Fencing",
      location: ""
    },
    {
      id: 7,
      image: "/07Rev-Grand Prairie Fence.jpg",
      alt:   "custom-built fence with detailed craftsmanship and alignment",
      title: "Board-on-board fence for improved strength and privacy",
      category: "Wood Fencing",
      location: ""
    },
    {
      id: 8,
      image: "/07Rev-Euless Fence.jpg",
      alt:   "wood fence featuring clean top trim and balanced structure",
      title: "Gate installation with matching fence design",
      category: "Wood Fencing",
      location: ""
    },
    {
      id: 9,
      image: "/07Rev-6ft Mod S-B-S No Stain_Dallas.jpg",
      alt:   "sturdy and modern board-on-board cedar fence",
      title: "Classic vertical fence for timeless curb appeal",
      category: "Wood Fencing",
      location: ""
    },
    {
      id: 10,
      image: "/07Rev-8ft Mod S.B.S._Plano.jpg",
      alt:   "cedar picket fence with clean lines with the option of weather protection",
      title: "Modern cedar fence offering full backyard enclosure",
      category: "Wood Fencing",
      location: ""
    },
    {
      id: 11,
      image: "/07Rev-Cedar Fence_Cedar Hill.jpg",
      alt:   "eight-foot fence with solid framing for added security",
      title: "Handcrafted wood fence with durable post supports",
      category: "Wood Fencing",
      location: ""
    },
    {
      id: 12,
      image: "/07Rev-Decorative Fencing.jpg",
      alt:   "cedar picket fence with clean lines and weather protection",
      title: "Expertly installed wood privacy fences",
      category: "Wood Fencing",
      location: ""
    },
    {
      id: 13,
      image: "/07Rev-Farmers Branch Fence.jpg",
      alt:   "decorative wood fence with metal post, standard",
      title: "Stained fence project designed for long-term protection",
      category: "Wood Fencing",
      location: ""
    },
    {
      id: 14,
      image: "/07Rev-Flower Mound Fence.jpg",
      alt:   "modern cedar fence highlighting fine wood grain detail",
      title: "Looking for a custom fence to secure your yard and property?",
      category: "Wood Fencing",
      location: ""
    },
    {
      id: 15,
      image: "/07Rev-Ft Worth Fence.jpg",
      alt:   "wood fence installation with precision and consistent height",
      title: "Residential fencing upgrade using premium cedar boards",
      category: "Wood Fencing",
      location: ""
    },
    {
      id: 16,
      image: "/07Rev-Garland Fence2.jpg",
      alt:   "privacy fence designed for durability and elegant appearance",
      title: "Detailed board-on-board fence PLUS we offer Ready-Seal finishes",
      category: "Wood Fencing",
      location: ""
    },
    {
      id: 17,
      image: "/07Rev-Grand Prairie Fence2.jpg",
      alt:   "premium cedar fence showcasing professional installation quality",
      title: "Elegant privacy fence to make your neighborhood jealous",
      category: "Wood Fencing",
      location: ""
    },
    {
      id: 18,
      image: "/07Rev-Grapevine Fence.jpg",
      alt:   "high-end wooden fence project with neat finishing touches",
      title: "Durable wood fences with 1 walk thru gate included",
      category: "Wood Fencing",
      location: ""
    },
    {
      id: 19,
      image: "/07Rev-Grapevine Fence2.jpg",
      alt:   "residential fence installation emphasizing durability and design",
      title: "Wood + metal fencing for a distinctive backyard look",
      category: "Wood Fencing",
      location: ""
    },
    {
      id: 20,
      image: "/07Rev-Hurst Fence.jpg",
      alt:   "cedar fence with reinforced corners and even panel flow",
      title: "All our fences are crafted for lasting performance",
      category: "Wood Fencing",
      location: ""
    },
    {
      id: 21,
      image: "/07Rev-Las Colinas Fence.jpg",
      alt:   "smooth-stained fence built for both privacy and curb appeal",
      title: "Smooth-finish fence built for durability and beauty",
      category: "Wood Fencing",
      location: ""
    },
    {
      id: 22,
      image: "/07Rev-Lewisville Fence.jpg",
      alt:   "custom wood fence designed for visual appeal and security",
      title: "Cedar fence installation featuring precision alignment",
      category: "Wood Fencing",
      location: ""
    },
    {
      id: 23,
      image: "/07Rev-Mansfield Fence.jpg",
      alt:   "professional-grade wood fence with tight panel alignment",
      title: "Cedar wood fences to make your backyard stand out",
      category: "Wood Fencing",
      location: ""
    },
    {
      id: 24,
      image: "/07Rev-Flower Mound Fence.jpg",
      alt:   "strong and attractive cedar fence installation for homeowners",
      title: "Upgraded residential fence with enhanced curb appeal",
      category: "Wood Fencing",
      location: ""
    },
    {
      id: 25,
      image: "/07Rev-6ft Mod S-B-S No Stain_Dallas.jpg",
      alt:   "decorative wooden fence highlighting attention to detail",
      title: "High-quality privacy fencing with modern design lines",
      category: "Wood Fencing",
      location: ""
    },
    {
      id: 26,
      image: "/07Rev-Decorative Fencing.jpg",
      alt:   "modern cedar fence built with premium craftsmanship",
      title: "Precision fence construction for security and style",
      category: "Decorative Fencing",
      location: ""
    },
    {
      id: 27,
      image: "/07Rev-Grapevine Fence.jpg",
      alt:   "durable privacy fence made with high-quality cedar materials",
      title: "Expertly built cedar fence with attention to detail",
      category: "Ornamental Steel Fencing",
      location: ""
    },
    {
      id: 28,
      image: "/07Rev-Privacy Fencing_Hurst.jpg",
      alt:   "board-on-board fence designed for privacy and long-term use",
      title: "Full property enclosure combining privacy, strength and beauty",
      category: "Privacy Fencing",
      location: ""
    },
    {
      id: 29,
      image: "/07Rev-Wood Fencing_Irving.jpg",
      alt:   "custom cedar fence project built with expert craftsmanship",
      title: "Custom-designed wood fences for beauty and durability",
      category: "Wood Fencing",
      location: ""
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
        alt={project.alt}
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
  alt={projects[selectedImage].alt}
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
	  <div className="bg-gray-800 text-white px-8 py-3 rounded-lg inline-block hover:bg-gray-700 transition-colors">
            Some of Our Recent Projects...
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;