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
  const technologies = [
    { src: html, string: 'HTML' },
    { src: css, string: 'CSS' },
    { src: javascript, string: 'Javascript' },
    { src: react, string: 'ReactJS' },
    { src: redux, string: 'Redux' },
    { src: bootstrap, string: 'Bootstrap' },
    { src: tailwind, string: 'TailwindCSS' },
    { src: git, string: 'Git' },
    { src: github, string: 'GitHub' },
    { src: typescript, string: 'Typescript' },
    { src: docker, string: 'Docker' },
    { src: mysql, string: 'MySQL' },
    { src: node, string: 'NodeJS' },
    { src: jest, string: 'Jest' },
  ]
  return (
    <>
      <h1 className='text-3xl h-1/10 text-violet-900 font-semibold flex items-center'>Tecnologias</h1>
      <div className='h-2/5 w-full container mx-auto flex items-center flex-col overflow-auto'>
        <div className='h-2/3 w-full mx-auto md:px-3'>
          <ul className='h-full w-full flex justify-center flex-wrap items-center'>
            {technologies.map(({ src, string }) => (
              <li className='xsm:w-1/3 md:w-1/10 mx-[5%] h-full'>
                <img src={src} alt={`Ícone do ${string}`} className='h-3/5 mx-auto' />
                <figcaption className='text-center w-full'>{string}</figcaption>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Skills;