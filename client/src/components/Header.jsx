import {AppBar, Toolbar, styled} from '@mui/material';
import { Link } from 'react-router-dom';

 const StyledAppBar = styled(AppBar)({
    background : "#2d2d2d",
    height : 64,
    '& > div > *' :{
            textDecoration: 'none',
            marginRight: 20,
            color: 'inherit',
            fontSize: 14
    }
 })
const Header = () => {
    const logo = "https://get-staffed.com/wp-content/uploads/2020/07/indeed-logo.png";
    return (
        <StyledAppBar>
            <Toolbar>
                <Link>
                <img src={logo} style={{width: 95, marginBottom: 6}} /> </Link>
                <Link to='/post'>Find a Job</Link>
                <Link to="/create"> Post a Job</Link>

            </Toolbar>
        </StyledAppBar>
    );
}
export default Header;