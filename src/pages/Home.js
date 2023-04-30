import '../styles/global.css';

function Home() {
  return (
    <div className='h-screen w-screen overflow-auto flex items-center justify-center container mx-auto'>
      <div className='flex flex-col bg-yellow-50 h-2/4 w-4/5 shadow-lg shadow-purple-400 py-4 px-6 mx-4 rounded-md'>
        <div className='flex justify-around flex-row items-center w-full h-full'>
          <img className='w-3/10 rounded-full'
            alt="User Avatar"
            src="https://avatars.githubusercontent.com/u/108832719?v=4" />
          <div className='w-3/5 h-auto'>
            <h3 className='font-semibold text-4xl font-sans text-center'>Thawane Oliveira</h3>
            <h4 className='text-purple-950 pt-8 text-2xl font-sans text-center'>Front-End Developer</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
