import Angel from './components/Angel'
import Students from './components/Students'

const students = [
  {
    name: 'Angel',
    lastName: 'Carballo',
    aboutMe: 'Desarrollador de software apasionado por aprender y crear soluciones innovadoras.',
    job: 'Desarrollador de software',
    ageOfExperience: 5,
    colors: { hair: '#263144', skin: '#e8a77c', shadow: '#bd735d', shirt: '#55d6be' },
  },
  {
    name: 'Bruno',
    aboutMe: 'Explorando nuevas ideas y convirtiéndolas en proyectos digitales.',
    job: 'Estudiante de desarrollo',
    ageOfExperience: 0,
    colors: { hair: '#39251f', skin: '#d99a70', shadow: '#a8604c', shirt: '#f5b942' },
  },
  {
    name: 'Maria',
    aboutMe: 'Aprendiendo a diseñar experiencias web útiles y llenas de personalidad.',
    job: 'Estudiante de desarrollo',
    ageOfExperience: 0,
    colors: { hair: '#31243b', skin: '#efbd91', shadow: '#c78370', shirt: '#b69cff' },
  },
  {
    name: 'Alberto',
    aboutMe: 'Creando sus primeras aplicaciones y creciendo con cada reto.',
    job: 'Estudiante de desarrollo',
    ageOfExperience: 0,
    colors: { hair: '#29382c', skin: '#c98562', shadow: '#985641', shirt: '#79c96b' },
  },
]

function App() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#0b1020] px-5 py-12 text-slate-100 sm:px-8 sm:py-16">
      <div className="mx-auto max-w-7xl">
        <header className="relative mb-12 overflow-hidden rounded-3xl border border-white/10 bg-[#121a2d] px-7 py-9 shadow-[0_24px_80px_rgba(0,0,0,0.28)] sm:px-12 sm:py-12">
          <div aria-hidden="true" className="absolute -right-8 -top-12 h-48 w-48 bg-fuchsia-400/10 [clip-path:polygon(25%_0,100%_0,100%_75%,75%_75%,75%_100%,0_100%,0_25%,25%_25%)]" />
          <div aria-hidden="true" className="absolute bottom-0 right-44 h-5 w-5 bg-lime-300/70" />
          <div className="relative max-w-3xl">
            <p className="mb-4 inline-flex items-center gap-2 border border-lime-300/30 bg-lime-300/10 px-3 py-1.5 font-mono text-xs font-bold uppercase tracking-[0.2em] text-lime-200">
              <span className="h-2 w-2 bg-lime-300" />
              Nuestro equipo
            </p>
            <h1 className="text-4xl font-black tracking-tight text-white sm:text-6xl">
              Estudiantes <span className="text-lime-300">en pixel.</span>
            </h1>
            <p className="mt-4 max-w-xl text-base leading-7 text-slate-400 sm:text-lg">
              Cuatro talentos, nuevas ideas y un universo creativo en construcción.
            </p>
            <div className="mt-6 font-mono text-sm text-slate-500">
              <Angel name="Angel" age={28} />
            </div>
          </div>
        </header>

        <section aria-label="Tarjetas de estudiantes" className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {students.map((student, index) => (
            <Students key={student.name} {...student} number={index + 1} />
          ))}
        </section>

        <footer className="mt-10 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.18em] text-slate-500">
          <span className="h-px flex-1 bg-white/10" />
          <span>Press start to create</span>
          <span className="h-px flex-1 bg-white/10" />
        </footer>
      </div>
    </main>
  )
}

export default App
