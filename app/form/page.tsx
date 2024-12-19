'use client';
import Image from 'next/image';
import { useState } from 'react';
import InputField from './components/InputField';
import ContactUs from './components/ContacUs';
import RedesSociales from './components/RedesSociales';

export default function Form() {
  const [formData, setFormData] = useState({
    name: '',
    topicsOfInterest: '',
    email: '',
    phone: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="relative bg-ColorPrincipal rounded-t-7xl px-[2rem] md:px-[3rem] lg:px-0 py-[10rem]">
      <div className="absolute top-[-4rem] left-[4rem] md:left-[10rem] xl:left-[15rem] 2xl:left-[23rem]">
        <Image
          src="/logoE.webp"
          alt="logo"
          width={150}
          height={150}
          className="object-contain"
          quality={80}
        />
      </div>
      <div className="px-[.3rem] md:px-[4rem] lg:px-[11rem] xl:px-[19rem] 2xl:px-[30rem] mb-[1rem]">
        <h2 className="font-pragmatica text-white md:text-[1.8rem] xl:text-[2.2rem] uppercase">
          I’m ready to discover more
        </h2>
      </div>
      <div className="flex flex-col items-center">
        <form onSubmit={handleSubmit} className="space-y-8 w-full md:w-10/12 lg:w-8/12 xl:w-7/12 2xl:w-6/12">
          <InputField 
            label="Name" 
            id="name" 
            value={formData.name} 
            onChange={handleChange} 
            required 
          />
          
          <InputField 
            label="Topics of Interest" 
            id="topicsOfInterest" 
            value={formData.topicsOfInterest} 
            onChange={handleChange} 
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-[1.5rem] md:gap-[3rem]">
            <InputField 
              label="E-mail" 
              id="email" 
              type="email" 
              value={formData.email} 
              onChange={handleChange} 
              required 
            />

            <InputField 
              label="Phone" 
              id="phone" 
              type="tel" 
              value={formData.phone} 
              onChange={handleChange} 
              required 
            />
          </div>

          <button 
            type="submit"
            className="relative z-50 w-full bg-white hover:bg-gray-100 text-ColorPrincipal font-pragmatica uppercase rounded-2xl py-4"
          >
            Enviar
          </button>
          <div className="flex flex-col lg:flex-row justify-between">
            <ContactUs />
            <RedesSociales />
          </div>
        </form>
      </div>
    </div>
  );
}
