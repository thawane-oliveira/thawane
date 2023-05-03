function ProjectCard({ imgs, names, slide, desc, to, nextSlide, prevSlide }) {
  return (
    <div id={slide} className="carousel-item relative w-full flex justify-scenter items-center flex-col">
      <img src={imgs} alt='Imagem demonstrativa da aplicação Adote um Pet' className="w-4/5 mt-2" />
      <figcaption className="text-base text-center text-violet-950 w-3/5 mt-1"><b>{names}</b> {desc} - Clique <a href={to} target="_blank" rel="noreferrer"><b>aqui</b></a> para visualizar.</figcaption>
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href={prevSlide} className="btn btn-circle">❮</a>
        <a href={nextSlide} className="btn btn-circle">❯</a>
      </div>
    </div>
  )
}

export default ProjectCard;