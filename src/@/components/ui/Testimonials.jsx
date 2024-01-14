import React from 'react';

const testimonials = [
  {
    id: 1,
    name: 'Joyce Wothaya',
    comment: 'I brought my car to Proxy Auto Garage, and they provided excellent service. The staff was friendly, and my car was fixed in no time.',
    image: '/images/joyce.png', // Add the image path for Joyce
  },
  {
    id: 2,
    name: 'Jamin Kairu',
    comment: 'Proxy Auto Garage exceeded my expectations. The mechanics were knowledgeable, and the prices were reasonable. Highly recommended!',
    image: '/images/jamin.png', // Add the image path for Jamin
  },
  {
    id: 3,
    name: 'Vincent Nyaga',
    comment: 'As a car enthusiast, I am very particular about where I take my vehicle. Proxy Auto Garage has become my go-to place for all car repairs. Top-notch service!',
    image: '/images/vincent.png', // Add the image path for Vincent
  },
];

const Testimonials = () => {
  return (
    <div className="bg-red-500 py-16">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-white mb-8">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-md">
              <img
                src={process.env.PUBLIC_URL + testimonial.image}
                alt={`${testimonial.name} Avatar`}
                className="w-16 h-16 rounded-full mx-auto mb-4"
              />
              <p className="text-gray-600 mb-4">{testimonial.comment}</p>
              <p className="font-bold">{testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
