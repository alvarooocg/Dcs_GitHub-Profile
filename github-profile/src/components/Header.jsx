import '../App.css'

import Filter from './Filter'

const Header = ({ filter, handleFilterChange }) => 
    <header class="header">
        <Filter filter={filter} handleFilterChange={handleFilterChange} />
    </header>

export default Header