

export default function Todo(props) {
		return (

		<div>
			<dl className="row">
			  <dt className="col-sm-3">{ props.todo.name  }</dt>
			  <dd className="col-sm-6">{ props.todo.description  }</dd>
			  <dd className="col-sm-3">
			  		<button type="button" className="btn btn-outline-primary " onClick={()=>props.handleEdit(props.rowIndex)} >Edit</button>
					<button type="button" className="btn btn-outline-danger "  onClick={()=>props.handleDelete(props.rowIndex)} >Del</button>
			  </dd>
			</dl>
		</div>

		)
}