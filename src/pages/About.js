import Footer from "../components/Footer";
import Header from "../components/Header";

function About() {
  return (
    <>
      <div className='h-screen w-screen overflow-auto flex items-center flex-col justify-between container mx-auto'>
        <Header />
        <div className='flex flex-col items-center bg-gradient-to-r from-violet-200 to-yellow-50 h-3/5 w-4/5 shadow-lg shadow-violet-400 py-4 px-6 mx-4 rounded-md'>
          <h1 className='text-3xl h-1/4 text-violet-900 font-semibold'>Sobre mim</h1>
          <p className='h-3/4 overflow-auto text-justify w-4/5 leading-8'>
            Olá, meu nome é Thawane e sou uma desenvolvedora front-end apaixonada por design e usabilidade voltado ao usuário. Atualmente moro em São Paulo, mas sou natural de São Vicente, litoral de SP. Me formei inicialmente em Design de Moda e fiz a transição de carreira da área administrativa em uma prefeitura municipal para me dedicar ao desenvolvimento web. Estou estudando na Trybe e agora estou no módulo de back-end, mas já concluí os módulos de fundamentos e front-end, nos quais desenvolvi mais de 20 projetos, tanto individualmente quanto em equipe.
            <br />
            Tenho grande interesse em tecnologia desde criança, quando me fascinava com os bichinhos virtuais e a arte em pixels que os compunham, despertando a minha curiosidade sobre como eles funcionavam e eram criados. Acredito que a união de um bom design com uma ótima experiência do usuário é essencial para o sucesso de um projeto web. Estou sempre em busca de aprimorar minhas habilidades e explorar novas tecnologias para desenvolver projetos incríveis que atendam às necessidades dos usuários.
          </p>
        </div>
        <Footer />
      </div>
    </>
  );
}
export default About;
