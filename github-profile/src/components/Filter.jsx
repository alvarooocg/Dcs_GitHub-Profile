import SearchLogo from '../assets/dccl--javascript-github-profile/dccl--javascript-github-profile/Search.svg'
import logo from '../assets/github_logo.png'

const Filter = ({ filter, handleFilterChange }) => 
    <form class="header__form">
        <div class="form__filterbox">
            <div class="filterbox__container--img">
                <img src={SearchLogo} alt="Search logo" class="filterbox__img" />
            </div>
            
            <div class="filterbox__container--input">
                <input 
                    class="filterbox__input"
                    type="text"
                    onChange={handleFilterChange}
                    value={filter}
                    placeholder='username' />
            </div>
        </div>

        <div class="form__result">
            <img src={logo} alt="Profile photo" class="result__img" />
            <div className="result__text">
                <p className="text__username">GitHub</p>
                <p className="text__description">How people build software.</p>
            </div>
        </div>
    </form>

export default Filter