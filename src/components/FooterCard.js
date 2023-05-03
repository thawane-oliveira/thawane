function FooterCard({ name, href }) {
  return (
    <li className='text-purple-950 pt-8 text-base font-sans h-full w-1/3'>
      <a
        href={href}
        target="_blank"
        rel="noreferrer">
        {name}
      </a>
    </li>
  )
}

export default FooterCard;