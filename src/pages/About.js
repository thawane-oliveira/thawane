function About() {
  return (
    <div id="about" className='overflow-auto h-screen w-screen flex justify-center items-center container mx-auto'>
      <div className='flex flex-col justify-around items-center bg-gradient-to-r from-violet-200 to-yellow-50 h-2/4 w-4/5 shadow-lg shadow-violet-400 py-4 px-6 mx-4 rounded-md'>
        <h1 className='text-3xl text-violet-900 font-semibold'>Sobre mim</h1>
        <p className='h-fit overflow-auto text-justify w-4/5 leading-8'>
          Olá, meu nome é Thawane, tenho 26 anos, atualmente moro em São Paulo, mas sou natural de São Vicente, litoral de SP. Sou inicialmente formada em Design de Moda. Sou desenvolvedora front-end e em breve, full stack.
          <br />
          Sempre tive um grande interesse em tecnologia. Desde criança, era fascinada com os bichinhos virtuais e como eles funcionavam. Eu também tinha curiosidade sobre a arte em pixels era contida neles e como ela era criada.
          <br />
          Estou em transição de carreira e venho da área administrativa (exercida em prefeitura municipal). Estudo desenvolvimento web na Trybe. Atualmente, estou no módulo de back-end, já fiz feitos mais de 20 projetos nos módulos anteriores: fundamentos e front-end, tanto individuais quanto em grupo.
        </p>
      </div>
    </div>
  );
}

export default About;
