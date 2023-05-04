import email from '../images/email.png';
import github from '../images/github.png';
import linkedin from '../images/linkedin.png';

function Footer() {
  return (
    <footer className='h-1/10 w-screen container mx-auto flex items-center -mt-5'>
      <div className='h-full w-4/5 flex flex-row mx-auto px-3 justify-center items-center'>
        <ul className='h-full w-4/5 flex flex-row items-center'>
          <li><a
            href='mailto:thawaneapoliveira@gmail.com'
            target="_blank"
            rel="noreferrer">
            <img src={email} alt="Ícone de e-mail" className='h-full md:w-3/10 lg:w-3/10 sm:w-2/5 mx-auto' />
          </a>
          </li>
          <li><a
            href='https://github.com/thawane-oliveira'
            target="_blank"
            rel="noreferrer">
            <img src={github} alt="Ícone de e-mail" className='h-full md:w-3/10 lg:w-3/10 sm:w-2/5 mx-auto' />
          </a>
          </li>
          <li><a
            href='https://www.linkedin.com/in/thawane'
            target="_blank"
            rel="noreferrer">
            <img src={linkedin} alt="Ícone de e-mail" className='h-full md:w-3/10 lg:w-3/10 sm:w-2/5 mx-auto' />
          </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;