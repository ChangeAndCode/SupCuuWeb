import Image from 'next/image'

const teamMembers = [
  { name: 'Kevin Koym', title: 'CEO TECH RANCH', image: '/engineTeam/1.webp' },
  { name: 'Angela Pack Zia', title: 'Economic Development Consultant, Tech Ranch.', image: '/engineTeam/2.webp' },
  { name: 'Emma Reyes', title: 'Program Manager, Tech Ranch', image: '/engineTeam/3.webp' },
  { name: 'Andrés Guzmán', title: 'CEO, Startup Chihuahua', image: '/engineTeam/4.webp' },
  { name: 'Ana Victoria Gutiérrez', title: 'Ecosystem Intelligence, Startup Chihuahua', image: '/engineTeam/5.webp' },
  { name: 'Información', title: 'pendiente', image: '/engineTeam/61.webp' },
  { name: 'Ulises Fernández', title: 'Innovation and Economic Development Secretariat, Chihuahua State Government', image: '/engineTeam/7.webp' },
  { name: 'JOSÉ JORDÁN OROZCO', title: 'DIRECTOR OF ECONOMIC DEVELOPMENT AND COMPETITIVENESS, MUNICIPAL GOVERNMENT OF CHIHUAHUA', image: '/engineTeam/8.webp' },
]

const Team = () => {
  return (
    <>
      <div className='flex justify-center'>
        <Image
          src='/engineTeam/titulo.webp'
          alt='Company Logo'
          width={670}
          height={570}
          quality={80}
          loading='lazy'
        />
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-12 lg:gap-16 px-4 md:px-8 max-w-7xl mx-auto'>
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className={`flex flex-col items-center h-full ${
              index >= 6 ? 'xl:col-span-1 xl:translate-x-1/2' : ''
            }`}
          >
            <Image
              src={member.image}
              alt={member.name}
              width={300}
              height={200}
              quality={80}
              loading='lazy'
              className='w-auto h-[320px] object-cover'
            />
            <div className='w-[300px]'>
              <p className='font-pragmatica main-Tipography uppercase text-[1.4rem]'>{member.name}</p>
              <p className='font-poppins uppercase text-[1.2rem]'>{member.title}</p>
            </div>
          </div>
        ))}
      </div>
      <div className='absolute flex justify-center lg:justify-between w-full'>
        <Image
          src='/alwais/manzana.webp'
          alt='Company Logo'
          width={390}
          height={290}
          quality={80}
          loading='lazy'
          className='hidden lg:block'
        />
        <Image
          src='/alwais/cinta.webp'
          alt='Company Logo'
          width={670}
          height={270}
          quality={80}
          loading='lazy'
        />
      </div>
    </>
  )
}

export default Team
