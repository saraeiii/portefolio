'use client';
import { useSelector } from 'react-redux';
import Link from 'next/link';


export default function TestimonialsPage() {
  const { testimonials } = useSelector(state => state.testimonials);
  const { currentUser } = useSelector(state => state.auth);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Témoignages</h1>
      
      {currentUser && (
        <Link 
          href="/testimonials/create" 
          className="inline-block bg-blue-600 text-white px-4 py-2 rounded mb-6"
        >
          Ajouter un témoignage
        </Link>
      )}

      <div className="space-y-4">
        {testimonials.map(testimonial => (
          <div key={testimonial.id} className="border p-4 rounded-lg">
            <div className="flex justify-between">
              <h3 className="font-semibold">{testimonial.author}</h3>
              <span className="text-sm text-gray-500">
                {new Date(testimonial.date).toLocaleDateString()}
              </span>
            </div>
            <p className="mt-2">{testimonial.message}</p>
            
            {currentUser?.email === testimonial.authorEmail && (
              <Link 
                href={`/testimonials/edit/${testimonial.id}`}
                className="text-blue-600 hover:underline text-sm"
              >
                Modifier
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}