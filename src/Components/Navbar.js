import Toolbar from '@mui/material/Toolbar'
import AppBar from '@mui/material/AppBar';
import { Typography } from '@mui/material';
import logo from '../images/Dphi-logo.png';
import '../styles/navbar.css'
export default function Navbar()
{
    return(
        <>
        <AppBar>
            <Toolbar className="nav">
                <div className="logo">
                    <img className="IMG" src={logo} alt=""></img>
                </div>
                <Typography variant="h5">
                    <div className="text">
                  <b>DPhi</b>
                  </div>
                </Typography>
            </Toolbar>
        </AppBar>
        </>
    )
}