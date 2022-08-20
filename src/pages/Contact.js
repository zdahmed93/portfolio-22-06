import React from 'react'

function Contact() {
  const contactInformations = {
    email: 'ahmed@devmastery.tech',
    phoneNumber: '+216 50 122 128',
    address: {
      city: 'Sfax',
      country: 'Tunisia',
      street: 'ROUTE AFRANE KM 2',
      postalCode: 3089
    }
  }
  return (
    <div>
      <p> <i class="bi bi-envelope"></i> {contactInformations.email} </p>
      <p> <i class="bi bi-telephone"></i> {contactInformations.phoneNumber} </p>
      <p> <i class="bi bi-geo-alt"></i> {contactInformations.address.street}; {contactInformations.address.postalCode} {contactInformations.address.city}; {contactInformations.address.country} </p>
    </div>
  )
}

export default Contact