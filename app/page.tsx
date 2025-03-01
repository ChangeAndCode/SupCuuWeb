// app/page.tsx
import Home from './home/page';
import HomeLayout from './home/layout'; // Import the layout
import CT from './home/component/CT';

export default async function HomeRoot() {
  return (
    <HomeLayout> {/* Wrap Home with HomeLayout */}
      <div className='bg-ColorPrincipal'>
        <Home />
        <div className='bg-[#EDEFF0] rounded-t-[8rem]'>
          {/* <CT /> */}
        </div>
      </div>
    </HomeLayout>
  );
}
