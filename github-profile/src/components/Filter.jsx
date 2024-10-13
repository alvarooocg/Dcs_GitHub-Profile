import SearchLogo from '../assets/dccl--javascript-github-profile/dccl--javascript-github-profile/Search.svg'

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
                    value={filter} />
            </div>
        </div>
    </form>

export default Filter