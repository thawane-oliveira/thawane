import '../styles/global.css';
import trivia from '../images/trivia.png';
import wallet from '../images/wallet.png';
import adopt from '../images/adopt-pets.png';

function Projects() {
  return (
    <div id="project" className='overflow-auto h-screen w-screen flex justify-center container mx-auto -mt-30'>
      <div className='flex flex-col justify-around items-center bg-gradient-to-r from-violet-200 to-yellow-50 h-2/4 w-4/5 shadow-lg shadow-violet-400 py-4 px-6 mx-4 rounded-md'>
        <h1 className='text-3xl text-violet-900 font-semibold'>Projetos</h1>
      </div>
    </div>
  );
}

export default Projects;
