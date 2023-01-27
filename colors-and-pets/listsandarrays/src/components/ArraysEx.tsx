import { useState } from "react";

export function ArraysEx() {
    const [colors, setColors] = useState<string[]>(["red", "orange", "purple", "green"])
    const [pets, setPets] = useState(
        [{name: "Strudel", type: "dog", id: 1 },
        { name: "Timmy", type: "turtle", id: 2 },
        { name: "Coco", type: "cat", id: 3 }]);

        function addColor(color:string) : void {
            setColors([...colors, color]);
        }

interface Pets {
    name:string,
    type:string,
    id:number
}

return (
<>
<div>
    <ol>
        {colors.map((color, index) => <li key={index}>{color}</li>)}
    </ol>
    <button onClick={() => addColor('Voilet')}>Voilet</button>
    <button onClick={() => addColor('Blue')}>Blue</button>
    <button onClick={() => addColor('Yellow')}>Yellow</button>
</div>
<h2>Pets</h2>
<table>
    {pets.map((pet) => (<tr key={pet.id}> {pet.name} - {pet.type}</tr>))}
    </table>
</>
)};