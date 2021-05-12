import React, { useState, useEffect, useContext } from "react";
import { withRouter, useParams, Link } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

export const Modal = props => {
	const { store, actions } = useContext(Context);
	const [state, setState] = useState({
		//initialize state here
	});
	let { id } = useParams();

	console.log(id);

	// const eraseContact = () => {
	// 	let myHeaders = new Headers();
	// 	var requestOptions = {
	// 		method: "DELETE",
	// 		headers: myHeaders
	// 	};
	// 	fetch(`"https://assets.breatheco.de/apis/fake/contact/alvaro_agenda/${id}"`, requestOptions)
	// 	.then(response => response.json())
	// 	.then(result => console.log(result));
	// },

	return (
		<div className="modal" tabIndex="-1" role="dialog" style={{ display: props.show ? "inline-block" : "none" }}>
			<div className="modal-dialog" role="document">
				<div className="modal-content">
					<div className="modal-header">
						<h5 className="modal-title">Are you sure?</h5>
						{props.onClose ? (
							<button
								onClick={() => props.onClose()}
								type="button"
								className="close"
								data-dismiss="modal"
								aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
						) : (
							""
						)}
					</div>
					<div className="modal-body">
						<p>Warning: unknown consequences after this point... Kidding!</p>
					</div>
					<div className="modal-footer">
						<Link to="/">
							<button type="button" className="btn btn-primary">
								Oh no!
							</button>
						</Link>
						<button
							type="button"
							className="btn btn-secondary"
							data-dismiss="modal"
							onClick={actions.removeContact(id)}>
							Do it!
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
/**
 * Define the data-types for
 * your component's properties
 **/
Modal.propTypes = {
	history: PropTypes.object,
	onClose: PropTypes.func,
	show: PropTypes.bool,
	id: PropTypes.string
};

/**
 * Define the default values for
 * your component's properties
 **/
Modal.defaultProps = {
	show: false,
	onClose: null
};
