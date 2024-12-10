import Home from './home/page';
import CT from './home/component/CT';

export default function HomeRoot() {
  return (
    <>
    <div className='bg-ColorPrincipal'>
      <Home />
      <div className='bg-[#EDEFF0] rounded-t-7xl'>
        <CT />
      </div>
    </div>
    </>
  );
}
