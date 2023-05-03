import avatar from '../images/avatar-bg.png';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/global.css';

function Home() {
  return (
    <>
    <div className='h-screen w-screen overflow-auto flex items-center flex-col justify-between container mx-auto'>
    <Header />
      <div className='bg-gradient-to-r from-violet-200 to-yellow-50 h-2/4 w-4/5 shadow-lg shadow-violet-400 py-4 px-6 mx-4 rounded-md'>
        <div className='flex justify-around flex-row items-center w-full h-full'>
          <img className='w-3/10 rounded-full'
            alt="User Avatar"
            src={avatar} />
          <div className='w-3/5 h-auto'>
            <h1 className='font-semibold text-3xl font-sans text-center text-purple-950'>Thawane Oliveira</h1>
            <h2 className='text-purple-950 pt-8 text-xl font-sans text-center'>Desenvolvedora Front-End</h2>
            <h3 className='text-xl text-center mt-5'>Olá, boas-vindas ao meu portfólio. 😃</h3>
          </div>
        </div>
      </div>
    <Footer />
    </div>
    </>
  );
}

export default Home;
