import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { auth } from '../store'
import { withRouter, Link } from 'react-router-dom'

export default class Auth extends React.Component {
	constructor() {
		this.state = {}
	}
	render() {
		const { name, displayName, handleSubmit, error } = props

		return (
			<div className="login-content">
				<div className="container">
					<div className="row">
						<div className="col-sm-4 col-sm-offset-4 well">
							<h2 className="title text-center login-title">{displayName}</h2>
							<form className="" onSubmit={handleSubmit} name={name}>
								<div className="form-group">
									<label htmlFor="email">Email</label>
									<input name="email" className="form-control" type="text" />
								</div>
								<div className="form-group">
									<label htmlFor="password">Password</label>
									<input
										name="password"
										className="form-control"
										type="password"
									/>
								</div>
								<div>
									<button className="btn btn-default" type="submit">
										{displayName}
									</button>
								</div>
								{error && error.response && (
									<div>
										{' '}
										{error.response.data ===
											'Validation error: Validation isEmail on email failed' &&
											'Please Enter A Valid Email'}{' '}
									</div>
								)}
								{error && error.response && (
									<div>
										{' '}
										{error.response.data ===
											'Validation error: Validation notEmpty on password failed' &&
											'Please Enter A Valid Password'}{' '}
									</div>
								)}
								{error && error.response && (
									<div>
										{' '}
										{error.response.data ===
											'Validation error: Validation isEmail on email failed,\nValidation error: Validation notEmpty on password failed' &&
											'Please Enter A Valid Email and Password'}{' '}
									</div>
								)}
							</form>
							{name === 'login' ? (
								<p className="signup-login-link">
									Don't have an account? <Link to="/signup">Sign Up</Link>
								</p>
							) : (
								<p className="signup-login-link">
									Already have an account? <Link to="/login">Login</Link>
								</p>
							)}
						</div>
					</div>
				</div>
			</div>
		)
	}
}

const mapLogin = (state) => {
	return {
		name: 'login',
		displayName: 'Login',
		error: state.user.error,
	}
}

const mapSignup = (state) => {
	return {
		name: 'signup',
		displayName: 'Sign Up',
		error: state.user.error,
	}
}

const mapDispatch = (dispatch) => {
	return {
		handleSubmit(evt) {
			evt.preventDefault()
			const formName = evt.target.name
			const email = evt.target.email.value
			const password = evt.target.password.value
			dispatch(auth(email, password, formName))
		},
	}
}

export const Login = connect(mapLogin, mapDispatch)(Auth)
export const Signup = connect(mapSignup, mapDispatch)(Auth)

Auth.propTypes = {
	name: PropTypes.string.isRequired,
	displayName: PropTypes.string.isRequired,
	handleSubmit: PropTypes.func.isRequired,
	error: PropTypes.object,
}
