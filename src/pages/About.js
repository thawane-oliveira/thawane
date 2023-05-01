import '../styles/global.css';

function About() {
  return (
    <div className='overflow-auto h-screen w-screen flex justify-center container mx-auto -m-20'>
      <div className='flex flex-col justify-around items-center bg-gradient-to-r from-violet-200 to-yellow-50 h-2/4 w-4/5 shadow-lg shadow-violet-400 py-4 px-6 mx-4 rounded-md'>
        <h1 className='text-3xl text-violet-900 font-semibold'>Sobre mim</h1>
        <p id="about" className='h-fit overflow-auto text-justify w-4/5'>
          Olá, meu nome é Thawane, tenho 26 anos, atualmente moro em São Paulo, mas sou natural de São Vicente, litoral de SP. Sou inicialmente formada em Design de Moda. Sou desenvolvedora front-end e em breve, full stack.
          <br />
          Sempre tive um grande interesse em tecnologia. Desde criança, era fascinada com os bichinhos virtuais e como eles funcionavam. Eu também tinha curiosidade sobre a arte em pixels era contida neles e como ela era criada.
          <br />
          Já exerci atividades de atendimento SAC e suporte técnico em callcenter. Estou em transição de carreira e venho da área administrativa (exercida em prefeitura municipal). Durante meu tempo na prefeitura, aprendi muito sobre administração de tempo e entender a demanda que um cliente precisa, porém os processos eram bastante engessados e sentia a necessidade de explorar mais meu lado criativo. Percebi que queria combinar meu hobby, que é desenhar, com a tecnologia para trazer uma melhor experiência para as pessoas.
          <br />
          Foi então que decidi estudar desenvolvimento web na Trybe, influenciada pelo meu namorado, que estudou e trabalha na empresa. Atualmente, estou no módulo de back-end, e estou adorando cada momento, já foram feitos mais de 20 projetos nos módulos anteriores: fundamentos e front-end, tanto individuais quanto em grupo.
        </p>
      </div>
    </div>
  );
}

export default About;
