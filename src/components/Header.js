import '../styles/global.css';

function Header() {

    return (
        <header className='h-1/10 w-screen container mx-auto mt-6'>
            <ul className='flex flex-row items-end justify-around'>
            <li className='bg-violet-500 text-white rounded-md px-4 py-2 shadow-lg shadow-violet-500 transition ease-in-out delay-150 hover:bg-violet-600 duration-300'><a href='#about'>Sobre</a></li>
            <li className='bg-violet-500 text-white rounded-md px-4 py-2 shadow-lg shadow-violet-500 transition ease-in-out delay-150 hover:bg-violet-600 duration-300'><a href='#project'>Projetos</a></li>
            <li className='bg-violet-500 text-white rounded-md px-4 py-2 shadow-lg shadow-violet-500 transition ease-in-out delay-150 hover:bg-violet-600 duration-300'><a href='#contact'>Contato</a></li>
            </ul>
        </header>
    );
}

export default Header;