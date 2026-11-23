interface AngelProps {
  name: string;
  age: number;
}

function Angel({name, age}: AngelProps) {
  return (
    <div>
      Me llamo {name} y tengo {age} años
    </div>
  )
}

export default Angel
