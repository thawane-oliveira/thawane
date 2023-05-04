import Footer from "../components/Footer";
import Header from "../components/Header";

function Contact() {
  return (
    <>
      <div className='h-screen w-screen overflow-auto flex items-center flex-col justify-between container mx-auto'>
        <Header />
        <div className='flex flex-col justify-around items-center bg-gradient-to-r from-violet-200 to-yellow-50 h-2/4 w-4/5 shadow-lg shadow-violet-400 py-4 px-6 mx-4 rounded-md'>
          <h1 className='text-3xl text-violet-900 font-semibold'>Contato</h1>

        </div>
        <Footer />
      </div>
    </>
  );
}

export default Contact;
