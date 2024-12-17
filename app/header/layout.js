import Logo from './components/Logo';
import NavLinks from './components/NavLink';

export default function HeaderLayout({ children }) {
  return (
    <>
      <header className='fixed top-0 left-0 w-full flex items-center justify-between py-6 px-14 bg-ColorPrincipal z-50'>
        <Logo />
        <NavLinks />
      </header>
      <div>{children}</div>
    </>
  );
}
