import React, { Component } from 'react'
import { Link } from 'gatsby'
import { Menu, X } from 'react-feather'
import Logo from './Logo'
import Logo2 from './Logo2'
import './Nav.css'

export default class Nav extends Component {
	state = {
		active: false
	};

	handleMenuToggle = () => this.setState({ active: !this.state.active });

	// Only close nav if it is open
	handleLinkClick = () => this.state.active && this.handleMenuToggle();

	render() {
		const { active } = this.state;

		const NavLink = ({ className, children, ...props }) => (
			<Link
				{...props}
				className={`NavLink ${className || ''}`}
				onClick={this.handleLinkClick}
			>
				{children}
			</Link>
		);

		return (
			<nav className={`Nav ${active ? 'Nav-active' : ''}`}>
				<div className="Nav--Container container">
					<Link to="/" onClick={this.handleLinkClick}>
						<Logo />
					</Link>
					<div className="Nav--Links">
						<NavLink to="/" exact>
							NEWS
						</NavLink>
						<NavLink to="/merch/" exact>
							MERCH
						</NavLink>
						<NavLink to="/sekta/" exact>
							SEKTA
						</NavLink>
					</div>
					<button
						className="Button-blank Nav--MenuButton"
						onClick={this.handleMenuToggle}
					>
						{active ? <X /> : <Menu />}
					</button>

					<Link to="/" onClick={this.handleLinkClick}>
					<Logo2 />
				</Link>
				</div>
			</nav>
		)
	}
}
