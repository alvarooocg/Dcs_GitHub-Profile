import '../App.css'

import Filter from './Filter'

const Header = ({ filter, handleFilterChange, profile }) => 
    <header className="header">
        <Filter filter={filter} handleFilterChange={handleFilterChange} profile={profile} />
    </header>

export default Header