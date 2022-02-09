function Header() {
    return (
        <nav className='green darken-1'>
            <div className='nav-wrapper'>
                <a href='/' className='brand-logo'>
                    React Shop Sanzhar
                </a>
                <ul id='nav-mobile' className='right hide-on-med-and-down'>
                    <li>
                        <a
                            href='https://github.com/Sanjibek/react-shop'
                            target='_blank'
                        >
                            Repo Sanzhi
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export { Header };
