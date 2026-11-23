
interface StudentsProps {
  name: string
  lastName?: string
  aboutMe: string
  job: string
  ageOfExperience: number
  number: number
  colors: {
    hair: string
    skin: string
    shadow: string
    shirt: string
  }
}

const portrait = [
  '0000111100',
  '0001111110',
  '0011111111',
  '0011222211',
  '0112222221',
  '0112323221',
  '0012222210',
  '0001222100',
  '0000440000',
  '0004444000',
  '0044444400',
  '0444444440',
]

function Students({ name, lastName, aboutMe, job, ageOfExperience, number, colors }: StudentsProps) {
  const palette: Record<string, string> = {
    '1': colors.hair,
    '2': colors.skin,
    '3': colors.shadow,
    '4': colors.shirt,
  }

  return (
    <article className="group relative overflow-hidden border border-white/10 bg-[#151c30] shadow-[0_14px_38px_rgba(0,0,0,0.22)] transition duration-300 hover:-translate-y-1.5 hover:border-lime-300/50 hover:shadow-[0_22px_50px_rgba(0,0,0,0.38)]">
      <div className="absolute right-0 top-0 h-16 w-16 border-b border-l border-white/5 bg-white/[0.02] [clip-path:polygon(100%_0,100%_100%,0_0)]" />
      <div className="flex items-center justify-between border-b border-white/[0.07] px-5 py-3">
        <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">
          Player {String(number).padStart(2, '0')}
        </span>
        <span className="h-2 w-2 bg-lime-300 shadow-[0_0_10px_rgba(190,242,100,0.8)]" />
      </div>

      <div className="relative flex h-52 items-center justify-center overflow-hidden bg-[radial-gradient(ellipse_at_50%_100%,rgba(71,85,105,0.3),transparent_65%)]">
        <div aria-hidden="true" className="absolute bottom-8 h-3 w-36 bg-black/20 blur-md" />
        <div aria-label={`Retrato pixel art de ${name}`} role="img" className="relative grid grid-cols-[repeat(10,12px)] grid-rows-[repeat(12,12px)] drop-shadow-[0_12px_12px_rgba(0,0,0,0.32)]">
          {portrait.flatMap((row, rowIndex) =>
            [...row].map((pixel, columnIndex) => (
              <span
                key={`${rowIndex}-${columnIndex}`}
                className="h-3 w-3"
                style={pixel === '0' ? undefined : { backgroundColor: palette[pixel] }}
              />
            )),
          )}
        </div>
        <span className="absolute bottom-4 right-4 font-mono text-[10px] text-slate-600">8-BIT / 01</span>
      </div>

      <div className="p-5">
        <p className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-lime-300">
          {job}
        </p>
        <h2 className="mt-2 text-2xl font-black tracking-tight text-white">
          {name}{lastName ? ` ${lastName}` : ''}
        </h2>
        <p className="mt-3 min-h-14 text-sm leading-6 text-slate-400">{aboutMe}</p>

        <div className="mt-5 flex items-center justify-between border-t border-white/[0.08] pt-4">
          <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-slate-500">
            Experiencia
          </span>
          <span className="font-mono text-xs font-bold text-slate-200">
            {ageOfExperience > 0 ? `${ageOfExperience} años` : 'En formación'}
          </span>
        </div>
      </div>
    </article>
  )
}

export default Students