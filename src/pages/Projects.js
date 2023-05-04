import trivia from '../images/trivia.png';
import wallet from '../images/wallet.png';
import adopt from '../images/adopt-pets.png';
import ProjectCard from '../components/ProjectCard';
import {
  adoptDescription,
  adoptLink,
  walletDescription,
  walletLink,
  triviaDescription,
  triviaLink
} from '../components/ProjectDescription';
import Header from '../components/Header';
import Footer from '../components/Footer';

const images = [adopt, wallet, trivia];
const projectName = ['Adote um Pet', 'Your Wallet', 'Trivia'];
const position = ['slide1', 'slide2', 'slide3'];
const href = ['#slide1', '#slide2', '#slide3'];
const description = [adoptDescription, walletDescription, triviaDescription];
const link = [adoptLink, walletLink, triviaLink];

function Projects() {
  return (
    <div className='h-screen w-screen overflow-auto flex items-center flex-col justify-between container mx-auto'>
      <Header />
      <div className='flex flex-col justify-between items-center bg-gradient-to-r from-violet-200 to-yellow-50 h-3/4 w-4/5 shadow-lg shadow-violet-400 py-4 px-6 mx-4 rounded-md'>
        <h1 className='text-3xl text-violet-900 font-semibold'>Projetos</h1>
        <div className="carousel w-full">
          {
            images.map((it, index) => (
              <ProjectCard
                key={it} imgs={it} names={projectName[index]}
                slide={position[index]} nextSlide={href[index + 1] ? href[index + 1] : href[0]}
                prevSlide={href[index - 1] ? href[index - 1] : href[href.length - 1]}
                desc={description[index]} to={link[index]}
              />
            ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Projects;
