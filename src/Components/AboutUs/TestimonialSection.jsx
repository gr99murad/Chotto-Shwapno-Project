import React from 'react';

const testimonials = [
  {
    title: 'Kindness',
    text: '“At Chotto Shwapno, we believe that kindness is the key to building a compassionate society. It’s not just about being nice, it’s about spreading love, support, and warmth to others in their time of need. Whether through a simple smile, lending a hand, or showing empathy, kindness has the power to transform lives and create a better community.”',
    name: 'John Doe',
    role: 'Volunteer Coordinator',
    image: 'https://i.ibb.co/6RWhvYHY/jhon-doe.jpg',
  },
  {
    title: 'Humanity',
    text: '“Humanity is at the heart of everything we do at Chotto Shwapno. It’s about standing together, offering help in times of need, and being there for each other, no matter the situation. Our work promotes human connection, support, and kindness, helping communities thrive through compassion and care.”',
    name: 'Jack Harry',
    role: 'Program Manager',
    image: 'https://i.ibb.co/PsGcmY2z/0015-harry.jpg',
  },
  {
    title: 'Ethics & Morality',
    text: '“Chotto Shwapno has always stood firm on ethical values and morality, ensuring that every action we take is rooted in fairness, integrity, and justice. By adhering to strong ethical principles, we are committed to creating a just world where respect, dignity, and responsibility are integral to our interactions with each other.”',
    name: 'Sakib Hossain',
    role: 'Community Outreach Specialist',
    image: 'https://i.ibb.co/CG9B1Jb/0x0.webp',
  },
];


const TestimonialSection = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-white via-[#fff9f7] to-[#fef3f2]">
      <div className="max-w-7xl mx-auto mb-10">
        <p className="text-sm text-[#C24C2E] font-semibold mb-2">Tetimonial</p>
        <h2 className="text-4xl font-bold text-gray-800">What People Say<br />About Us</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {testimonials.map((item, idx) => (
          <div key={idx} className="border border-[#C24C2E] rounded-md p-6 bg-white">
            <span className="text-4xl text-[#C24C2E] leading-none">“</span>
            <h3 className="text-xl font-semibold mt-4 mb-2">{item.title}</h3>
            <p className="text-sm text-gray-600">{item.text}</p>
            <div className="flex items-center gap-3 mt-6">
              <img
                src={item.image}
                alt={item.name}
                className="w-12 h-12 rounded-full object-cover border border-gray-300"
              />
              <div className="text-left">
                <p className="text-sm font-semibold text-gray-800">{item.name}</p>
                <p className="text-xs text-gray-500">{item.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialSection;
