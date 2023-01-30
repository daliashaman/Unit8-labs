import { useState } from "react";

export function ArraysEx() {
    const [colors, setColors] = useState<string[]>(["red", "orange", "purple", "green"])
    const [pets, setPets] = useState<Pets[]>(
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

<div>
    <h2>Pets</h2>
        <table>
            <tr>
                <th>Name</th>
                <th>Type</th>
            </tr>
            {pets.map((pet, i) => (
                <tr key={pet.id}>
                    <td>{pet.name}</td>
                    <td>{pet.type}</td>
                </tr>
                ))}
        </table>
</div>
</>
)};