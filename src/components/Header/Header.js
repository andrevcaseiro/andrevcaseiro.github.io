import './Header.css';
import socialMedia from "../../data/socialMedia.json";
import SocialMediaButton from './SocialMediaButton';

function Header() {
  return (
    <header>
      <h1>André Caseiro</h1>
      <div>
        {
          socialMedia.list.map(e => (
            <SocialMediaButton
              title={e.title}
              icon={e.icon}
              link={e.link}
            />
          ))
        }
      </div>
    </header>
  );
}

export default Header;
