const Header: React.FC = () => {
    return (
        <div className="mt-20 flex bg-gray-100 min-h-[100vh] pb-[15vh] items-center justify-center relative">
            <h1 className="font-PerformanceMark absolute w-full text-center text-white text-[20vw]" style={{ top: '35%' }}>Stronger</h1>
            <div className="flex w-full relative z-10 flex-wrap md:flex-nowrap">
                <div className="w-1/2 flex justify-center items-center">
                    <img src="CT/cuarta.webp" alt="Imagen" className="w-3/4 md:w-full h-auto object-cover" />
                    {/* <img src="Bg/bgTitulo.webp" alt="Imagen" className="absolute w-[50%] h-auto bottom-[-33%] left-[10vh]"/> */}
                </div>
                <div className="w-1/2 flex justify-center items-center text-center p-4">
                    <div>
                        <h2 className="text-[1.3rem] sm:text-[2.5rem] md:text-[4rem] xl:text-[4rem] 2xl:text-[5rem] text-right text-ColorPrincipal font-bold font-pragmatica font-bold leading-[1]">TOGETHER</h2>
                        <h2 className="text-[1.3rem] sm:text-[2.5rem] md:text-[4rem] xl:text-[4rem] 2xl:text-[5rem] text-right text-ColorPrincipal font-bold font-pragmatica font-bold leading-[1]">WE ARE</h2>
                        <h2 className="text-[1.3rem] sm:text-[2.5rem] md:text-[4rem] xl:text-[4rem] 2xl:text-[5rem] text-right text-ColorPrincipal font-bold font-PerformanceMark leading-[1]">STRONGER</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;