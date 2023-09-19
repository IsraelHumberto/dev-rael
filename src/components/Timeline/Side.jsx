
const Side = ({ index, year, company, resume }) => {
  return (
    <div className={`mb-8 flex gap-6 sml:gap-0 sml:justify-between items-center w-full ${index%2 == 1 ? 'sml:flex-row-reverse' : ''}`}>
      <div className="order-1 w-5/12 hidden sml:block"></div>
      <div className="z-20 flex items-center order-1 min-w-[2.5rem] min-h-[2.5rem] rounded-full bg-accent-700 ">
        <div className="mx-auto font-semibold text-lg text-white">{index}</div>
      </div>
      <div className={`order-1 rounded-lg w-full sml:w-5/12 py-4 ${index%2 == 1 ? 'sml:text-end' : ''}`}>
        <h4 className="mb-1 font-bold text-accent-500 font-heading">{year}</h4>
        <h3 className="mb-3 text-lg sm:text-xl font-heading font-bold">{company}</h3>
          <p className="text-sm leading-snug tracking-wide text-opacity-100 font-light">{resume}</p>
      </div>
    </div>
  )
}

export default Side