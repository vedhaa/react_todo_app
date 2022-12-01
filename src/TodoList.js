import Todo from './Todo';


export default function TodoList({ todos,handleEdit,handleDelete }) {

	return (

	<div>
	  <h3>Tasks</h3>

		{ 
			todos.map( 
				(todo,index) => (
					<Todo key={index} todo={ todo } rowIndex={index} handleEdit={handleEdit} handleDelete={handleDelete}/> 
						)
				)
		}
	</div>
	)
}