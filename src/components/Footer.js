import FooterCard from './FooterCard';

const names = ['E-mail', 'LinkedIn', 'GitHub'];
const links = ['mailto:thawaneapoliveira@gmail.com', 'https://www.linkedin.com/in/thawane', 'https://github.com/thawane-oliveira'];

function Footer() {

  return (
    <footer id='contact' className='h-1/6 w-screen container mx-auto flex items-center'>
      <div className='h-full w-4/5 flex flex-row mx-auto px-3'>
      <h1 className='text-purple-950 pt-8 text-xl font-sans font-semibold h-full w-2/6'>Contato</h1>
      <ul className='h-full w-5/6 flex flex-row'>
      {
            names.map((it, index) => (
              <FooterCard
                key={it} imgs={it} name={names[index]}
                href={links[index]} 
              />
            ))}
      </ul>
      {/* <p className='text-purple-950 pt-8 text-xl font-sans font-semibold h-full w-1/5'>Feito com ReactJS e TailwindCSS</p> */}
      </div>
    </footer>
  );
}

export default Footer;