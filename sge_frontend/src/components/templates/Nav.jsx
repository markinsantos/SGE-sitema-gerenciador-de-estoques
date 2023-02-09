import './Nav.css'

const Nav =() =>{

    return(
        <aside className="menu-area">
        <nav className='menu'>
            <a href="/">
                <i className='fa fa-home'></i> Início
            </a>
            <a href="/produtos">
                <i className='fa fa-sliders'></i> Produtos
            </a>
            <a href="/movimentos">
                <i className='fa fa-calendar'></i> Movimentos
            </a>
            <a href="/usuarios">
                <i className='fa fa-users'></i> Usuarios
            </a>
        </nav>
    </aside>
    )
}

export default Nav;