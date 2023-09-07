import { useState } from "react"
import { Input } from "./input"


export const List = () => {
    const contentsList = [
        { id: 1, name: 'HTML', seen: true },
        { id: 2, name: 'CSS', seen: true },
        { id: 3, name: 'javaScript', seen: true },
        { id: 4, name: 'Node', seen: true },
        { id: 5, name: 'React', seen: true }
    ]
    const [contents, setContents] = useState(contentsList)

    /*const addContent = () => {
        setContents([...contents, { id: 6, name: 'Express', seen: false }])
    }*/

    const onAddTask = (value) => {
        console.log(value)
        if (value < 1) return;
        setContents([...contents, { id: contents.length + 1 , name: value, seen: false }])
    }
    return (
        <>
            <h1>Listado de contenidos</h1>
          {/* <Input setContents={setContents} /> */}
          <Input onAddTask={onAddTask} />
            <ol>
                {contents.map(content => <li key={content.id}> {content.name} {content.seen && '✔️'}</li>)}
            </ol>
            {/* <button onClick={addContent}> Agregar Contenido</button> */}
        </>
    )
}