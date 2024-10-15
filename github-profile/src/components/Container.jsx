import chield from '../assets/dccl--javascript-github-profile/dccl--javascript-github-profile/Chield_alt.svg'
import fork from '../assets/dccl--javascript-github-profile/dccl--javascript-github-profile/Nesting.svg'
import fav from '../assets/dccl--javascript-github-profile/dccl--javascript-github-profile/Star.svg'

const Container = ({ profile, repos }) => 
    <div className="container">
        <div className="container__header">
            <div className="header__profile">
                <img src={profile.avatar_url} alt="Profile photo" className="profile__img" />
            </div>
            <div className="header__stats">
                <div className="stats__wrapper">
                    <p className="wrapper__text">Followers</p>
                    <p className="wrapper__data">{profile.followers}</p>
                </div>
                <div className="stats__wrapper">
                    <p className="wrapper__text">Following</p>
                    <p className="wrapper__data">{profile.following}</p>
                </div>
                <div className="stats__wrapper">
                    <p className="wrapper__text">Location</p>
                    <p className="wrapper__data">{profile.location}</p>
                </div>
            </div>
            <div className="header__username">
                <p className="username__text">{profile.login}</p>
                <p className="username__description">{profile.bio}</p>
            </div>
        </div>
        <div className="container__main">
            <div className="main__repos">
                {Array.isArray(repos) && repos.length > 0 ? (
                    repos.map(item => 
                    <div className="repos__repo">
                    <p className="repo__name">{item.name}</p>
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
                )
            ) : (
                <p>No repositories found.</p> /* Mensaje alternativo */
            )
            }
            </div>
            <div className="repos__link">
                <a href="#" className="link__a">View all repositories</a>
            </div>
        </div>
    </div>

export default Container