import Image from 'next/image'
import { teamMembers } from '../data/dataTeamMembers'

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
              teamMembers.length === 1 || (teamMembers.length % 3 === 1 && index === teamMembers.length - 1)
                ? 'xl:col-start-2 xl:col-span-1 xl:translate-x-0'
                : teamMembers.length === 2 || (teamMembers.length % 3 !== 0 && index >= teamMembers.length - (teamMembers.length % 3))
                  ? 'xl:col-span-1 xl:translate-x-1/2'
                  : ''
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
