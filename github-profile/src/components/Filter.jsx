import SearchLogo from '../assets/dccl--javascript-github-profile/dccl--javascript-github-profile/Search.svg'
import { useState } from 'react'

const Filter = ({ filter, handleFilterChange, profile }) => {
    const [isVisible, setIsVisible] = useState(false)

    return (
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
                        placeholder='username'
                        onFocus={() => setIsVisible(true)}
                        onBlur={() => setIsVisible(false)} />
                </div>
            </div>

            {isVisible ? (<a className="form__result">
                <img src={profile.avatar_url} alt="Profile photo" className="result__img" />
                <div className="result__text">
                    <p className="text__username">{profile.login}</p>
                    <p className="text__description">{profile.bio}</p>
                </div>
            </a>) : <></>}
        
        </form>
    )
}
export default Filter