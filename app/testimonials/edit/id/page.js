'use client';
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { updateTestimonial } from '@/app/redux/slices/testimonialSlice.js';
import { useEffect, useState } from 'react';

export default function EditTestimonial({ params }) {
  const { id } = params;
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();
  const dispatch = useDispatch();
  const { testimonials } = useSelector(state => state.testimonials);
  const { currentUser } = useSelector(state => state.auth);

  useEffect(() => {
    const testimonial = testimonials.find(t => t.id === Number(id));
    if (!testimonial || testimonial.authorEmail !== currentUser?.email) {
      router.push('/temoignages');
    } else {
      setMessage(testimonial.message);
    }
  }, [id, testimonials, currentUser, router]);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!message.trim()) {
      setError('Le message est requis');
      return;
    }

    dispatch(updateTestimonial({
      id: Number(id),
      message
    }));

    router.push('/temoignages');
  };

  return (
    <div className="container mx-auto p-4 max-w-2xl">
      <h1 className="text-2xl font-bold mb-4">Modifier le témoignage</h1>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-2">Votre message</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full p-2 border rounded"
            rows={5}
          />
          {error && <p className="text-red-500 text-sm">{error}</p>}
        </div>
        
        <div className="flex gap-4">
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            Enregistrer
          </button>
          <button
            type="button"
            onClick={() => router.push('/temoignages')}
            className="border px-4 py-2 rounded"
          >
            Annuler
          </button>
        </div>
      </form>
    </div>
  );
}