import './styles/global.css';

function App() {
  return (
    <div className='container h-screen w-screen mx-auto flex items-center justify-center'>
      <div className='flex flex-col bg-yellow-50 shadow-lg shadow-purple-400 py-4 px-6 mx-4 rounded-md'>
        <div className='flex flex-row items-center'>
          <img className='w-60 rounded-full'
          alt="User Avatar"
          src="https://avatars.githubusercontent.com/u/108832719?v=4"/>
          <div className='ml-4'>
            <h3 className='font-semibold text-xl'>Thawane Oliveira</h3>
            <h4 className='text-purple-950 pt-1'>Front-End Developer</h4>
          </div>
        </div>
        <div className='mt-6'>
            <h2 className='font-semibold text-2xl'>Bio</h2>
            <p className='text-purple-950 font-li
             mt-1 max-w-lg text-justify'>
              Tenho 26 anos e sou natural de São Vicente/SP, mas agora resido em São Paulo/SP.
            </p>
          </div>
        </div>
    </div>
  );
}

export default App;
