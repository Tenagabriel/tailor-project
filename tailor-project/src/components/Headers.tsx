import { useState } from 'react';
import {useNavigate} from 'react-router'
import HeadersBottom from './headersBottom';
import SideBar from './sideBar';
import './header.css'



function Headers() {
 const [isShowing, setIsShowing] = useState(false)
 const [search, setSearch] = useState('')

 const navigate = useNavigate()

    function searchInput(event: React.ChangeEvent<HTMLInputElement>){
      setSearch(event.target.value)
    }

    function searchItem() {
      navigate(`/trend?search=${search}`)
    }


    function cancelButton() {
       setIsShowing(false)
   }

     function MenuButton() {
     setIsShowing(true)
  }

  return (
    <>
    <SideBar isShowing={isShowing} cancelButton={cancelButton} />
      <div className="closet-header">
        <div className="header-top">
          <div className="closet-left-section">
            <div className="menu-box">
              <button className="menu-btn" onClick={MenuButton}>
                <img
                  className="menu-img"
                  src="images/icons/hamburger-menu.png"
                  alt=""
                />
              </button>
            </div>
            <h1 className="brand-name">My-Tailor</h1>
            <p className="closet-motto">
              Finding you the best tailors for any outfit!
            </p>
          </div>
          <div className="closet-middle-section">
            <input
              className="search-bar js-search-bar"
              placeholder="Search your occasion"
              type="text"
              onChange={searchInput}
            />
            <span>
              <img
                className="search-icon"
                src="images/icons/search-icon.png"
                alt=""
                onClick={searchItem}
              />
            </span>
          </div>
          <div className="closet-right-section">
            <a className="trend-pnk" href="/trend">
              <button className="see-brand-button js-trend-button">
                See top brands ➔
              </button>
            </a>
            <img
              className="right-search-icon"
              src="images/icons/search.png"
              alt=""
            />
            <button className="user-icon-button">
              <img className="user-icon-img" src="images/icons/people.png" />
              <div className="user-arrow">
                <img
                  className="down-arrow-img"
                  src="images/icons/down-arrow.png"
                  alt=""
                />
                <img
                  className="up-arrow-img"
                  src="images/icons/up-arrow-angle.png"
                  alt=""
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      <HeadersBottom />
    </>
  );
}

export default Headers;
