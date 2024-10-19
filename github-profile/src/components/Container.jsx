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
                {repos.length > 0 ? (
                    repos.map(item => 
                    <a className="repos__repo" href={item.html_url} target='_blank'>
                        <p className="repo__name">{item.name}</p>
                        <p className="repo__description">{item.description}</p>
                        <div className="repo__buttons">
                            {item.license != null ? (<div className="buttons__div">
                                <img src={chield} alt="License icon" />
                                <p className='div__text'>{item.license.spdx_id}</p>
                            </div>) : (<></>)}
                            <div className="buttons__div">
                                <img src={fork} alt="Fork icon" />
                                <p className="div__text">{item.forks}</p>
                            </div>
                            <div className="buttons__div">
                                <img src={fav} alt="Fav icon" />
                                <p className="div__text">{item.stargazers_count}</p>
                            </div>
                            <div className="buttons__div">
                                <p className='update__text'>updated 4 days ago</p>
                            </div>
                        </div>
                    </a>
                )
            ) : (
                <p>No repositories found.</p>
            )
            }
            </div>
            <div className="repos__link">
                <a href={profile.html_url} target="_blank" className="link__a">View all repositories</a>
            </div>
        </div>
    </div>

export default Container