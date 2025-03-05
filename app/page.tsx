// app/page.tsx
import Home from './home/page';
import HomeLayout from './home/layout'; // Import the layout

export default async function HomeRoot() {
  return (
    <HomeLayout>
  <div className='bg-ColorPrincipal'>
    <Home />
    <div className='bg-[#EDEFF0] rounded-t-[8rem]'>
      {/* CT is now rendered from layout */}
    </div>
  </div>
</HomeLayout>
  );
}
