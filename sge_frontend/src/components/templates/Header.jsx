import './Header.css'
import Logout from './Logout'

const Header = ({ ...props }) => {


    return (
        <header className="header d-none d-sm-flex" flex-column>
            <div className='esquerda'>
                <h1 className="mt-3">
                    <i className={`fa fa-${props.icon}`}></i> {props.title}
                    <p className='lead text-muted'>{props.subtitle}</p>
                </h1>
            </div>
            <div className='direita' >
                <Logout />
            </div>

        </header>

    )
}

export default Header;