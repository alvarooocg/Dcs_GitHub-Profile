import SearchLogo from '../assets/dccl--javascript-github-profile/dccl--javascript-github-profile/Search.svg'
import logo from '../assets/github_logo.png'

const Filter = ({ filter, handleFilterChange, profile }) => 
    <form className="header__form">
        <div className="form__filterbox">
            <div className="filterbox__container--img">
                <img src={SearchLogo} alt="Search logo" className="filterbox__img" />
            </div>
            
            <div className="filterbox__container--input">
                <input 
                    className="filterbox__input"
                    type="text"
                    onChange={handleFilterChange}
                    value={filter}
                    placeholder='username' />
            </div>
        </div>

        <div className="form__result">
            <img src={profile.avatar_url} alt="Profile photo" className="result__img" />
            <div className="result__text">
                <p className="text__username">{profile.login}</p>
                <p className="text__description">{profile.bio}</p>
            </div>
        </div>
    </form>

export default Filter