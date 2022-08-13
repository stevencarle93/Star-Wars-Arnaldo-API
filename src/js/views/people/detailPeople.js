import React from 'react'

export default function DetailFilms(){
    return (<h1>DetailFilms</h1>)
}

/*export default function Form() {

	const [tasks, setTask] = useState([])
	const [input, setInput] = useState("")
	const apiUrl="https://assets.breatheco.de/apis/fake/todos/user/stevenc"
	
	useEffect(()=>{
		// componentDidMount
		fetch(apiUrl)
		.then(res=>{
			if(res.ok) return res.json()
			else{
				// Crear la lista con post
				crearLista()
			}	
		})
		.then(data=>setTask(data))
		.catch(error=>console.error(error))
	},[])

	useEffect(()=>{
		// componentDidUpdate
		fetch(apiUrl,{
			method:"PUT",
			body:JSON.stringify(tasks),
			headers:{"Content-Type":"application/json"}
		})
		.then(res=>{
			console.log(res.status + ": " + res.statusText)
		})
		.catch(error=>console.error(error))
	},[tasks])

	const crearLista= ()=>{
		fetch(apiUrl,{
			method:"POST",
			body:JSON.stringify([]),
			headers:{
				"Content-Type":"application/json"
			}
		}).then(res=>console.log(res.status))
		.catch(error=>console.error(error))
	}

	const handleChange = (event) => {
		setInput(event.target.value)
	}

	const infoSubmited = (event) => {
		event.preventDefault()
		const data = new FormData(event.target)
		setTask([...tasks, data.get("task")])	
		event.target.reset()
	}

	const removeTask = indexItem => {
		setTask(prevState =>
			prevState.filter((todo, index) => index !== indexItem)
		);
	};

	let allTasks = tasks.map((elements, index) => {
		if(tasks != "")
			return(<li key={index} className="list-group-item d-flex justify-content-between"> 
				{elements.label}: {elements.done?"Listo":"Pendiente"}
				<button onClick={() => removeTask(index)}>
					Remove
				</button>
			</li>)
		else 
			return "No task"
		
	})
				

	return (

        <div className="text-center" style={{ marginTop: "1rem" }}>
			
			<form id="Form" onSubmit={infoSubmited}>
				<div className="form-group d-flex justify-content-center" id = 'font-link'>	
                        <input className="form-control" type="text" 
							name="task" style={{width: "50rem"}}
							id="task" placeholder="what do you want to do?"
							value={input} onChange={(handleChange)}/>
				</div>
				<div className="form-group" style={{ marginTop: "1rem" }}>					
                        <button type="submit" className="btn btn-light" 
						    style={{background: "white"}}>
							Submit
						</button>
				</div>
			</form>

			{
				//<TaskList tasks={allTasks}/>
				allTasks
			}
			<h3>
				Tasks pending: {tasks.length}
			</h3>
		</div>
	);
};*/