import { useEffect, useState } from 'react';
import './App.css';

function PokemonCard({id}) {

	const [pokeObj, setPokeObj] = useState(null);

	useEffect(() => {

		async function getData(){
			let res = await fetch('https://pokeapi.co/api/v2/pokemon/' + id)
			let data = await res.json();
			setPokeObj(data);
		}

		getData();

	},[pokeObj])

	if (!pokeObj) return null;
	
	return (
		<div>
			<h2>{pokeObj.name}| id: {id} </h2>
			<img src={pokeObj.sprites.front_default} />
		</div>
	)
}

function App() {

	// const [newID,setNewID] = useState('');
	const [formData, setFormData] = useState({})
	const [ids, setIds] = useState([]);
	const showPokemonCards = ids.map(id => <PokemonCard id={id} />)

	const handleChange = (e) => {
		// setNewID(e.target.value);

		let value = e.target.value;
		let prop = e.target.name;

		setFormData(prev => ({...prev, [prop]: value}))
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(formData);
	}

	return (
		<div className="App-header">
			These are my pokemon:

			{/* My current ID: {newID} */}

			{/* <input onChange={updateID} value={newID} />
			<button onClick={addID}>Add ID</button> */}

			<form onSubmit={handleSubmit}>
				<input name='id' onChange={handleChange} type="number" />
				<input name='shirtSize' onChange={handleChange} type="text" />
				<button>Add ID</button>
			</form>

			{showPokemonCards}

		</div>
	);
}

export default App;



// Put the id in it's own variable. Then it's just a matter of compiling the images. 
// How is the user interacting?
  // Input a number 
  // Have that number go in an id
  // Append it to the fetch
// We also need a submit button
// Have a pokemon card. Whenever it creates a card, then it can run the useEffect. If you have it on the main file it will run when the app mounts. 

  
