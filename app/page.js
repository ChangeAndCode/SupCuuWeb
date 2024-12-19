import Home from './home/page';
import CT from './home/component/CT';
import Form from './form/page';

export default function HomeRoot() {
  return (
    <>
    <div className='bg-ColorPrincipal'>
      <Home />
      <div className='bg-[#EDEFF0] rounded-t-[8rem]'>
        <CT />
      </div>
    </div>
    </>
  );
}
