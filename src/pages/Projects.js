import '../styles/global.css';
import trivia from '../images/trivia.png';
import wallet from '../images/wallet.png';
import adopt from '../images/adopt-pets.png';

function Projects() {
  return (
    <div id="project" className='overflow-auto h-screen w-screen flex justify-center container mx-auto -mt-72'>
      <div className='flex flex-col justify-around items-center bg-gradient-to-r from-violet-200 to-yellow-50 h-fit w-4/5 shadow-lg shadow-violet-400 py-4 px-6 mx-4 rounded-md'>
        <h1 className='text-3xl text-violet-900 font-semibold'>Projetos</h1>
        <div className="carousel w-full mt-10">
          <div id="slide1" className="carousel-item relative w-full flex justify-scenter items-center flex-col">
            <img src={adopt} alt='Imagem demonstrativa da aplicação Adote um Pet' className="w-4/5" />
            <figcaption class="mt-4 text-base text-center text-violet-950 w-3/5"><b>Adote um pet</b> - Projeto pessoal que simula um site de adoção de pets. É possível escolher se quer ver gatos ou cachorros, ler sobre a proposta e valores da ONG, além de doar valores através de um formulário.
            <br/>
            Feito com: React.JS, Javascript, CSS e TailwindCSS. Clique <a href="https://thawane-oliveira.github.io/adopt-pets/" target="_blank" rel="noreferrer"><b>aqui</b></a> para visualizar.</figcaption>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide3" className="btn btn-circle">❮</a>
              <a href="#slide2" className="btn btn-circle">❯</a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full flex justify-scenter items-center flex-col">
            <img src={trivia} alt='Imagem demonstrativa da aplicação Trivia' className="w-4/5" />
            <figcaption class="mt-4 text-base text-center text-violet-950 w-3/5"><b>Trivia</b> - Projeto realizado em grupo durante o curso da Trybe. A aplicação é baseada nos jogos de perguntas e respostas múltiplas, que geram pontuação baseada em seus acertos. No final, é exibido um ranking com a pontuação dos usuários. É possível começar a jogar, escolhendo um e-mail e nome de usuário.
            <br/>
            Feito com: React.JS, Javascript e CSS. Clique <a href="https://trivia-liard-theta.vercel.app/" target="_blank" rel="noreferrer"><b>aqui</b></a> para visualizar.</figcaption>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle">❮</a>
              <a href="#slide3" className="btn btn-circle">❯</a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full flex justify-scenter items-center flex-col">
            <img src={wallet} alt='Imagem demonstrativa da aplicação Your Wallet' className="w-4/5" />
            <figcaption class="mt-4 text-base text-center text-violet-950 w-3/5"><b>Your Wallet</b> - Projeto realizado durante o módulo de front-end da Trybe. A aplicação simula uma carteira digital, que permite adicionar, editar ou excluir despesas. Também é possível categorizar a despesa e escolher uma moeda diferente do real para guardá-la. 
            <br/>
            Feito com: React.JS, Javascript e CSS. Clique <a href="https://thawane-oliveira.github.io/wallet/" target="_blank" rel="noreferrer"><b>aqui</b></a> para visualizar.</figcaption>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle">❮</a>
              <a href="#slide1" className="btn btn-circle">❯</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
