import React from 'react';

function Header(props) {
  const { addColor } = props;
  const color = React.createRef();

  return (
    <header>
      <nav className="c-nav">
        <div className="c-nav-item">
          <a href="https://github.com/mikebarnhardt/paalette">Paalette</a>
        </div>

        <div className="c-nav-item is-expanded" />

        <div className="c-nav-item">
          <form
            onSubmit={(event) => {
              event.preventDefault();
              addColor(color.current.value);
            }}
          >
            <div className="o-layout is-horizontal">
                <div className="o-layout-item">
                  <input className="c-text-input" ref={color}/>
                </div>

                <div className="o-layout-item">
                  <button
                    className="c-button"
                    type="submit"
                  >
                    Add Color
                  </button>
                </div>
            </div>
          </form>
        </div>
      </nav>
    </header>
  )
}

export default Header;
