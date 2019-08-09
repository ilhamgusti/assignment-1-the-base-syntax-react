import React from 'react'
import './UserOutput.css'

const useroutput = props => {
	return (
		<div className="UserOutput">
			<span>
				your username is <b>{props.username}</b>
			</span>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia provident dolore adipisci
				accusantium officiis voluptates dolorum, natus qui rerum reiciendis eveniet ea consectetur!
				Consequatur quis enim voluptatibus animi, odio minima commodi necessitatibus quo non
				pariatur explicabo nemo eaque molestias ea velit quae aliquam minus suscipit culpa
				laboriosam? Earum qui, veritatis autem natus alias ipsum facere vero nobis. Nobis, veritatis
				maiores.
			</p>
		</div>
	)
}

export default useroutput
