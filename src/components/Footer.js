import email from '../images/email.png';
import github from '../images/github.png';
import linkedin from '../images/linkedin.png';

function Footer() {
  return (
    <footer id='contact' className='h-1/10 w-screen container mx-auto flex items-center -mt-5'>
      <div className='h-full w-4/5 flex flex-row mx-auto px-3 justify-center items-center'>
        <ul className='h-full w-4/5 flex flex-row items-center'>
          <li><a
            href='mailto:thawaneapoliveira@gmail.com'
            target="_blank"
            rel="noreferrer">
            <img src={email} alt="Ícone de e-mail" className='h-full md:w-3/10 lg:w-3/10 md:hover:scale-105 duration-150 ease-in-out sm:w-2/5 mx-auto' />
          </a>
          </li>
          <li><a
            href='https://github.com/thawane-oliveira'
            target="_blank"
            rel="noreferrer">
            <img src={github} alt="Ícone de e-mail" className='h-full md:w-3/10 lg:w-3/10 md:hover:scale-105 duration-150 ease-in-out sm:w-2/5 mx-auto' />
          </a>
          </li>
          <li><a
            href='https://www.linkedin.com/in/thawane'
            target="_blank"
            rel="noreferrer">
            <img src={linkedin} alt="Ícone de e-mail" className='h-full md:w-3/10 lg:w-3/10 md:hover:scale-105 duration-150 ease-in-out sm:w-2/5 mx-auto' />
          </a>
          </li>
        </ul>
        {/* <p className='text-purple-950 pt-8 text-xl font-sans font-semibold h-full w-1/5'>Feito com ReactJS e TailwindCSS</p> */}
      </div>
    </footer>
  );
}

export default Footer;