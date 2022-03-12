import Landing from './components/landing/landing';
import menu from '../../constant/menu';
import './home.scss';

function Home(props) {
    return (
        <div className="d-flex flex-wrap py-3">
            {menu.filter(menu => menu.isShow).map((menu, index) => <Landing key={index} menuItem={menu} />)}
        </div>
    );
}

export default Home;