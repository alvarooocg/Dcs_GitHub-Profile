import logo from '../assets/github_logo.png'
import chield from '../assets/dccl--javascript-github-profile/dccl--javascript-github-profile/Chield_alt.svg'
import fork from '../assets/dccl--javascript-github-profile/dccl--javascript-github-profile/Nesting.svg'
import fav from '../assets/dccl--javascript-github-profile/dccl--javascript-github-profile/Star.svg'

const Container = () => 
    <div className="container">
        <div className="container__header">
            <div className="header__profile">
                <img src={logo} alt="Profile photo" className="profile__img" />
            </div>
            <div className="header__stats">
                <div className="stats__wrapper">
                    <p className="wrapper__text">Followers</p>
                    <p className="wrapper__data">27839</p>
                </div>
                <div className="stats__wrapper">
                    <p className="wrapper__text">Following</p>
                    <p className="wrapper__data">0</p>
                </div>
                <div className="stats__wrapper">
                    <p className="wrapper__text">Location</p>
                    <p className="wrapper__data">San Francisco, CA</p>
                </div>
            </div>
            <div className="header__username">
                <p className="username__text">GitHub</p>
                <p className="username__description">How people build software.</p>
            </div>
        </div>
        <div className="container__main">
            <div className="main__repos">
                <div className="repos__repo">
                    <p className="repo__name">.github</p>
                    <p className="repo__description">Community health files for the @GitHub organization</p>
                    <div className="repo__buttons">
                        <div className="buttons__div">
                            <img src={chield} alt="License icon" />
                            <p className='div__text'>MIT</p>
                        </div>
                        <div className="buttons__div">
                            <img src={fork} alt="Fork icon" />
                            <p className="div__text">2,369</p>
                        </div>
                        <div className="buttons__div">
                            <img src={fav} alt="Fav icon" />
                            <p className="div__text">703</p>
                        </div>
                        <div className="buttons__div">
                            <p className='update__text'>updated 4 days ago</p>
                        </div>
                    </div>
                </div>
                <div className="repos__repo">
                    <p className="repo__name">.github</p>
                    <p className="repo__description">Community health files for the @GitHub organization</p>
                    <div className="repo__buttons">
                        <div className="buttons__div">
                            <img src={chield} alt="License icon" />
                            <p className='div__text'>MIT</p>
                        </div>
                        <div className="buttons__div">
                            <img src={fork} alt="Fork icon" />
                            <p className="div__text">2,369</p>
                        </div>
                        <div className="buttons__div">
                            <img src={fav} alt="Fav icon" />
                            <p className="div__text">703</p>
                        </div>
                        <div className="buttons__div">
                            <p className='update__text'>updated 4 days ago</p>
                        </div>
                    </div>
                </div>
                <div className="repos__repo">
                    <p className="repo__name">.github</p>
                    <p className="repo__description">Community health files for the @GitHub organization</p>
                    <div className="repo__buttons">
                        <div className="buttons__div">
                            <img src={chield} alt="License icon" />
                            <p className='div__text'>MIT</p>
                        </div>
                        <div className="buttons__div">
                            <img src={fork} alt="Fork icon" />
                            <p className="div__text">2,369</p>
                        </div>
                        <div className="buttons__div">
                            <img src={fav} alt="Fav icon" />
                            <p className="div__text">703</p>
                        </div>
                        <div className="buttons__div">
                            <p className='update__text'>updated 4 days ago</p>
                        </div>
                    </div>
                </div>
                <div className="repos__repo">
                    <p className="repo__name">.github</p>
                    <p className="repo__description">Community health files for the @GitHub organization</p>
                    <div className="repo__buttons">
                        <div className="buttons__div">
                            <img src={chield} alt="License icon" />
                            <p className='div__text'>MIT</p>
                        </div>
                        <div className="buttons__div">
                            <img src={fork} alt="Fork icon" />
                            <p className="div__text">2,369</p>
                        </div>
                        <div className="buttons__div">
                            <img src={fav} alt="Fav icon" />
                            <p className="div__text">703</p>
                        </div>
                        <div className="buttons__div">
                            <p className='update__text'>updated 4 days ago</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="repos__link">
                <a href="#" className="link__a">View all repositories</a>
            </div>
        </div>
    </div>

export default Container