import { MapPin, BedDouble, Scaling, CheckCircle2, Heart } from 'lucide-react';
import { Property } from '../types';
import { motion } from 'motion/react';

interface PropertyCardProps {
  key?: string;
  property: Property;
  index: number;
}

export function PropertyCard({ property, index }: PropertyCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
    >
      <div className="relative aspect-[4/3] overflow-hidden cursor-pointer">
        <img
          src={property.imageUrl}
          alt={property.title}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4 flex gap-2">
          <span className="bg-white/95 backdrop-blur-sm px-3 py-1 text-xs font-semibold rounded-full text-indigo-700 shadow-sm uppercase tracking-wider">
            For {property.type}
          </span>
          {property.isVerified && (
            <span className="bg-emerald-500/95 backdrop-blur-sm px-2 py-1 text-xs font-medium rounded-full text-white shadow-sm flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3" />
              Verified
            </span>
          )}
        </div>
        <button className="absolute top-4 right-4 p-2 bg-white/50 hover:bg-white backdrop-blur-md rounded-full text-gray-700 hover:text-rose-500 transition-colors">
          <Heart className="w-4 h-4" />
        </button>
      </div>

      <div className="p-5 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="font-heading font-bold text-lg text-gray-900 group-hover:text-indigo-600 transition-colors line-clamp-1">
              {property.title}
            </h3>
            <div className="flex items-center text-gray-500 text-sm mt-1">
              <MapPin className="w-3.5 h-3.5 mr-1 flex-shrink-0" />
              <span className="line-clamp-1">{property.location}</span>
            </div>
          </div>
        </div>

        <div className="mt-4 mb-4 flex items-center gap-4 text-sm text-gray-600 border-y border-gray-100 py-3">
          <div className="flex items-center gap-1.5 flex-1">
            <BedDouble className="w-4 h-4 text-indigo-500" />
            <span className="font-medium">{property.bhk}</span>
          </div>
          <div className="w-px h-4 bg-gray-200"></div>
          <div className="flex items-center gap-1.5 flex-1 justify-end">
            <Scaling className="w-4 h-4 text-indigo-500" />
            <span className="font-medium">{property.area}</span>
          </div>
        </div>

        <div className="mt-auto">
          <div className="flex flex-wrap gap-2 mb-4">
            {property.tags.map((tag, i) => (
              <span
                key={i}
                className="bg-gray-50 text-gray-600 text-[10px] uppercase tracking-wider font-semibold px-2 py-1 rounded border border-gray-100"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="flex items-end justify-between mt-2">
            <div className="font-heading font-bold text-2xl text-indigo-900">
              {property.price}
              {property.type === 'Rent' && <span className="text-sm text-gray-500 font-sans font-normal">/month</span>}
            </div>
            <button className="text-sm font-semibold text-indigo-600 hover:text-indigo-700 hover:underline underline-offset-4">
              View Details
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
