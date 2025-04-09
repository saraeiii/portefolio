'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { addTestimonial } from '@/app/redux/slices/testimonialSlice.js';

export default function CreateTestimonial() {
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();
  const dispatch = useDispatch();
  const { currentUser } = useSelector(state => state.auth);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!message.trim()) {
      setError('Le message est requis');
      return;
    }

    dispatch(addTestimonial({
      message,
      author: currentUser.name,
      authorEmail: currentUser.email
    }));

    router.push('/testimonials');
  };

  return (
    <div className="container mx-auto p-4 max-w-2xl">
      <h1 className="text-2xl font-bold mb-4">Nouveau Témoignage</h1>
      
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
            Publier
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