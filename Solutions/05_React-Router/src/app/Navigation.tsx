// Navigation.jsx
// Copyright © 2018 NextStep IT Training. All rights reserved.
//
//
// Navigation renders the menu bar underneath the banner of the application: the buttons that allow
// the user to move from view to view. The bar must be re-rendered each time, because the props can
// change. There is an incentive to merely use a closure because it needs to be wrapped by withBrowser,
// but that would be a mistake. The closure would be re-created every time the user preses a menu
// button, and why? We would get exatly the same JSX. So, the JSX as been moved into a method.
//

import React, { Component, ReactElement, ReactNode } from 'react';
import { RouteComponentProps, withRouter } from 'react-router';

import cart from '../assets/images/cart.png';

interface NavigationProps extends RouteComponentProps<null> {

}

class Navigation extends Component<NavigationProps> {

	private history: History | null = null;

	public constructor(props: NavigationProps) {

		super(props);

		this.pushCheckout = this.pushCheckout.bind(this);
		this.pushHome = this.pushHome.bind(this);
		this.pushMenu = this.pushMenu.bind(this);
	}

	public render(): ReactNode {

        return (
			<div className="navigation">
				<div className="navigation-left">
					<button className={ this.props.location.pathname === '/' ? 'navbutton-selected' : 'navbutton' }
						onClick={ this.pushHome }>Home</button>
					<button className={ this.props.location.pathname === '/menu' ? 'navbutton-selected' : 'navbutton' }
						onClick={ this.pushMenu }>Menu</button>
				</div>
				<div className="navigation-right">
					<input type="image" src={ cart } onClick={ this.pushCheckout } />
				</div>
				<div className="clear-all"></div>
			</div>
		)
	}
	
	private pushHome(): void {

		this.props.history.push('/')
	}

	private pushMenu(): void {

		this.props.history.push('/menu')
	}

	private pushCheckout(): void {

		this.props.history.push('/checkout')
	}
}

export default withRouter(Navigation);