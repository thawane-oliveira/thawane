function Header() {

    return (
        <header className='h-1/10 w-screen container mx-auto pt-10'>
            <ul className='flex flex-row justify-around'>
                <li className='text-xl text-violet-900 font-medium md:hover:scale-110 duration-150 ease-in-out'><a href='/'>Página Inicial</a></li>
                <li className='text-xl text-violet-900 font-medium md:hover:scale-110 duration-150 ease-in-out'><a href='/sobre'>Sobre</a></li>
                <li className='text-xl text-violet-900 font-medium md:hover:scale-110 duration-150 ease-in-out'><a href='/projetos'>Projetos</a></li>
                <li className='text-xl text-violet-900 font-medium md:hover:scale-110 duration-150 ease-in-out'><a href='/contato'>Contato</a></li>
            </ul>
        </header>
    );
}

export default Header;