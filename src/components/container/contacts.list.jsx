import React from 'react'
import ContactStatus  from '../pure/contact'
import { Contacts } from '../../models/contact.class'



export const ContactsList = () => {

  const firstContact = new Contacts('David', 'Sanchez', false )
   
  
  return (
    <div>
      <h1>Tu contacto</h1>

      <div>
        <ContactStatus Contacts={firstContact}/>
      </div>
    </div>
  )
}

