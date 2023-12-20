const Coreo = ({ number, title, musica, genero, profesor, asistente, solista, interpretes }) => {
  return (
    <div className={'lg-bg-grey rounded-md shadow-md my-4 p-6 space-y-2'}>
      <div className={'font-extralight lg-text-gold-80 text-5xl'}>{number}</div>
      <h1 className={'lg-text-gold text-3xl'}>{title}</h1>
      {musica &&
        <div>
          <p className={'lg-text-gold-80 text-sm uppercase'}>Música</p>
          <p className={'font-light lg-text-grey'}>{musica}</p>
        </div>
      }
      <p className={'lg-text-gold-80 text-sm uppercase'}> {genero == 'm' ? 'Profesor' : 'Profesora' } </p>
      <p className={'font-light lg-text-grey'}>{profesor}</p>
      {asistente &&
        <div>
          <p className={'lg-text-gold-80 text-sm uppercase'}>Asistente</p>
          <p className={'font-light lg-text-grey'}>{asistente}</p>
        </div>
      }
      <p className={'lg-text-gold-80 text-sm uppercase'}> {solista == 'si' ? 'Intérprete' : 'Intérpretes' } </p>
      <p className={'font-light lg-text-grey'}>{interpretes}</p>
    </div>

  );
}

export default Coreo;