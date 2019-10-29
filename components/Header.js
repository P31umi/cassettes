import Mixlr from './Mixlr';

const Header = () => (
  <header className="header">
    <div className="header__left">
      <img className="header__logo" src="/static/logo.png" alt="Syntax" />
    </div>
    <div className="header__right">
      <div className="title">
        <h1 className="tagline">Audio Sermons from The New</h1>
      </div>
    </div>

    <Mixlr />
  </header>
);

export default Header;
