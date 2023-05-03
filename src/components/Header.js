function Header() {

    return (
        <header className='h-1/6 w-screen container mx-auto pt-10'>
            <ul className='flex flex-row justify-around'>
                <li className='text-xl text-violet-900 font-medium'><a href='#about'>Sobre</a></li>
                <li className='text-xl text-violet-900 font-medium'><a href='#project'>Projetos</a></li>
                <li className='text-xl text-violet-900 font-medium'><a href='#contact'>Contato</a></li>
            </ul>
        </header>
    );
}

export default Header;