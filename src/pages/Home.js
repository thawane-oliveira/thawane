import '../styles/global.css';
import avatar from '../images/avatar-bg.png';

function Home() {
  return (
    <div id="home" className='h-screen w-screen overflow-auto flex items-center justify-center container mx-auto -m-10'>
      <div className='bg-gradient-to-r from-violet-200 to-yellow-50 h-2/4 w-4/5 shadow-lg shadow-violet-400 py-4 px-6 mx-4 rounded-md'>
        <div className='flex justify-around flex-row items-center w-full h-full'>
          <img className='w-3/10 rounded-full'
            alt="User Avatar"
            src={avatar} />
          <div className='w-3/5 h-auto'>
            <h1 className='font-semibold text-3xl font-sans text-center text-purple-950'>Thawane Oliveira</h1>
            <h2 className='text-purple-950 pt-8 text-xl font-sans text-center'>Desenvolvedora Front-End</h2>
            <h3 className='text-xl text-center mt-20'>Olá, boas-vindas ao meu portfólio. 😃</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
