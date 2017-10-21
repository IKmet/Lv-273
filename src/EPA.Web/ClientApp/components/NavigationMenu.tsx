﻿import * as React from 'react';
import { Link, NavLink } from 'react-router-dom';

export class NavigationMenu extends React.Component<{}, {}> {
    public render() {
        return <div>
        <nav className="navbar navbar-inverse ">
            <div className = "container-fluid ">
                <div className="navbar-header">
                    <a className="navbar-brand" href="#">EPA</a>
                </div>
                <ul className="nav navbar-nav">
                    <li><Link  to={'/'}>Усі Університети</Link></li>
                    <li><Link  to={'/profTest'}>Профорієнтаційні Тести</Link></li>
                    <li><Link to={'/'}>Обрати Університет</Link></li>
                </ul>
                <ul className="nav navbar-nav navbar-right">
                    <li><Link  to={'/'}>Вхід</Link></li>
                    <li><Link to={'/'}>Реєстрація</Link></li>
                </ul>
            </div>
        </nav>
</div>
    }
}