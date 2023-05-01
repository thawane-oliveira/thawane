import '../styles/global.css';

function Header() {

    return (
        <header className='h-1/4 w-screen container mx-auto'>
            <ul className='flex flex-row justify-around'>
                {/* <li className='text-xl text-violet-900 font-medium'><a href='#home'>Página Inicial</a></li> */}
                <li className='text-xl text-violet-900 font-medium'><a href='#about'>Sobre</a></li>
                <li className='text-xl text-violet-900 font-medium'><a href='#project'>Projetos</a></li>
                <li className='text-xl text-violet-900 font-medium'><a href='#contact'>Contato</a></li>
            </ul>
        </header>
    );
}

export default Header;