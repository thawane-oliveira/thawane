import html from '../images/html.png';
import css from '../images/css-3.png';
import javascript from '../images/js.png';
import react from '../images/react.png';
import redux from '../images/redux.png';
import bootstrap from '../images/bootstrap.png';
import tailwind from '../images/tailwind.png';
import git from '../images/git.png';
import github from '../images/githublogo.png';
import typescript from '../images/typescript.png';
import docker from '../images/docker.png';
import mysql from '../images/mysql.png';
import node from '../images/node-js.png';
import jest from '../images/jest.png';

function Skills() {
  const xablau = [
    { src: html, string: 'HTML' },
    { src: css, string: 'CSS' },
    { src: javascript, string: 'Javascript' },
    { src: react, string: 'ReactJS' },
    { src: redux, string: 'Redux' },
    { src: bootstrap, string: 'Bootstrap' },
    { src: tailwind, string: 'TailwindCSS' },
  ]
  return (
    <div className='h-2/5 w-full container mx-auto flex items-center flex-col overflow-auto'>
      <h1 className='text-3xl h-1/3 text-violet-900 font-semibold flex items-center'>Tecnologias</h1>
      <div className='h-2/3 md:w-4/5 sm:w-full mx-auto md:px-3'>
        <ul className='h-full w-full flex justify-center flex-wrap items-center'>
          {xablau.map(({ src, string }) => (
            <li className='xsm:w-1/3 mx-[5%] h-full'>
              <img src={src} alt={`Ícone do ${string}`} className='h-3/5' />
              <figcaption className='text-center w-full'>{string}</figcaption>
            </li>

          ))}
        </ul>
      </div>
   {/*    <div className='h-full w-4/5 mx-auto px-3'>
        <ul className='h-full w-full flex items-center'>
          <li>
            <img src={git} alt="Ícone do Git" className='h-full md:w-1/3 lg:w-1/3 sm:w-2/5 mx-auto' />
            <figcaption className='text-center'>Git</figcaption>
          </li>
          <li>
            <img src={github} alt="Ícone do Github" className='h-full md:w-1/3 lg:w-1/3 sm:w-2/5 mx-auto' />
            <figcaption className='text-center'>GitHub</figcaption>
          </li>
          <li>
            <img src={typescript} alt="Ícone do TypeScript" className='h-full md:w-1/3 lg:w-1/3 sm:w-2/5 mx-auto' />
            <figcaption className='text-center'>TypeScript</figcaption>
          </li>
          <li>
            <img src={docker} alt="Ícone de Docker" className='h-full md:w-1/3 lg:w-1/3 sm:w-2/5 mx-auto' />
            <figcaption className='text-center'>Docker</figcaption>
          </li>
          <li>
            <img src={node} alt="Ícone de NodeJS" className='h-full md:w-1/3 lg:w-1/3 sm:w-2/5 mx-auto' />
            <figcaption className='text-center'>NodeJS</figcaption>
          </li>
          <li>
            <img src={mysql} alt="Ícone de MySQL" className='h-full md:w-1/3 lg:w-1/3 sm:w-2/5 mx-auto' />
            <figcaption className='text-center'>MySQL</figcaption>
          </li>
          <li>
            <img src={jest} alt="Ícone de Jest" className='h-full md:w-1/3 lg:w-1/3 sm:w-2/5 mx-auto' />
            <figcaption className='text-center'>Jest</figcaption>
          </li>
        </ul>
      </div> */}
    </div>
  );
}

export default Skills;