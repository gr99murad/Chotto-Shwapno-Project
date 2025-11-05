// ContactDetailPage.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axiosInstance from '../../utils/axiosInstance';

const ContactDetailPage = () => {
  const { id } = useParams(); // Get the contact ID from URL
  const [contact, setContact] = useState(null);

  useEffect(() => {
    const fetchContactDetails = async () => {
      try {
        const response = await axiosInstance.get(`/emergency/${id}`);
        if (response.data.success) {
          setContact(response.data.data);
        }
      } catch (error) {
        console.error("Error fetching contact details:", error);
      }
    };

    fetchContactDetails();
  }, [id]);

  return (
    <div className="bg-gradient mx-auto px-4 py-24 text-[#c24824]">
      {contact ? (
        <div>
          <h2 className="text-2xl font-bold mb-4">{contact.Title}</h2>
          <p><strong>Location:</strong> {contact.Location}</p>
          <p><strong>Phone Numbers:</strong> {contact.PhoneNumbers}</p>
          <p><strong>Type:</strong> {contact.Type}</p>
          {contact.Latitude && contact.Longitude && (
            <p><strong>Coordinates:</strong> {contact.Latitude}, {contact.Longitude}</p>
          )}
        </div>
      ) : (
        <p>Loading contact details...</p>
      )}
    </div>
  );
};

export default ContactDetailPage;
