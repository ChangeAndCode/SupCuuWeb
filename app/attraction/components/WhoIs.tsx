const WhoIs = () => {
  return (
    <div className="flex flex-col items-center justify-center pt-[6rem] md:pt-[9rem] xl:pt-[13rem] pb-[9rem] sm:pb-[11rem] md:pb-[17rem] px-[2rem] sm:px-[4rem] md:px-[4rem] lg:px-[6rem] 2xl:px-0">
      <h2 className='font-pragmatica main-Tipography text-ColorPrincipal uppercase text-[1.5rem] sm:text-[2rem] md:text-[3rem]'>what is chihuahua?</h2>
      <div className="mt-[3rem] w-full max-w-[1200px] border-[.4rem] border-ColorPrincipal">
        {/* Contenedor responsivo */}
        <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="YouTube Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default WhoIs;
