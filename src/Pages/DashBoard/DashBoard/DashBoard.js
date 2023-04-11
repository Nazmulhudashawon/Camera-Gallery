import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import orders from '../order/Orders';
import { Button } from '@mui/material';
import useAuth from '../../../Hooks/useAuth';
import { Switch, Route, Link, useRouteMatch } from 'react-router-dom';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import AddProducts from '../AddProduct/AddProducts';
import ManageOrders from '../ManageOrders/ManageOrders';
import Payment from '../Payment';
import Orders from '../order/Orders';
import MyOrders from '../MyOrders/MyOrders';
import AdminRoute from '../AdminRoute/AdminRoute';

const drawerWidth = 240;

function DashBoard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { logOut, admin } = useAuth();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  let { path, url } = useRouteMatch();

  const drawer = (
    <div style={{backgroundColor:"#484d78"}}>
      <Toolbar style={{backgroundColor:"#484d78"}}  />
      <Divider />
      <List style={{display:'flex',flexDirection:'column',alignItems:'left',}}>
        <ListItem >
          <Link style={{ textDecoration: 'none'}} to="/">
            {' '}
            <Button variant="contained">Home</Button>
          </Link>
        </ListItem>

        <ListItem >
          <Link to={`${url}`} style={{ textDecoration: 'none'}}>
            <Button variant="contained">Dashboard</Button>
          </Link>
        </ListItem>

        {admin? (
          <Box>
            <ListItem>
              <Link to={`${url}/makeAdmin`} style={{ textDecoration: 'none'}}>
                <Button variant="contained">Make Admin</Button>
              </Link>
            </ListItem>

            <ListItem>
              <Link to={`${url}/addproduct`} style={{ textDecoration: 'none'}}>
                <Button variant="contained">Add Product</Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link to={`${url}/manageorder`} style={{ textDecoration: 'none'}}>
                <Button variant="contained">Manage Orders</Button>
              </Link>
            </ListItem>
          </Box>
        ) : (
          <Box>
            <ListItem>
            <Link to={`${url}/myorder`} style={{ textDecoration: 'none'}}>
                <Button variant="contained">My Order</Button>
              </Link>
            </ListItem>
            <ListItem>
              <Button variant="contained">Review</Button>
            </ListItem>
            <ListItem>
              <Link to={`${url}/pay`} style={{ textDecoration: 'none'}}>
                <Button variant="contained">Pay</Button>
              </Link>
            </ListItem>
          </Box>
        )}

        <ListItem>
          <Button style={{ backgroundColor: 'tomato' }} variant="contained" onClick={logOut}>
            Logout
          </Button>
        </ListItem>
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          backgroundColor:"#484d78"
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block', fontWeight: '700' } }}
          >
            CAMERA{' '}
            <span style={{ color: 'tomato', fontWeight: '700' }}>GALLERY</span>
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer 
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
              backgroundColor:"#484d78"
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Switch>
          <Route exact path={path}>
            <Orders></Orders>
          </Route>
          <AdminRoute path={`${path}/makeAdmin`}>
            <MakeAdmin></MakeAdmin>
          </AdminRoute>
          <AdminRoute path={`${path}/addproduct`}>
            <AddProducts></AddProducts>
          </AdminRoute>
          <Route path={`${path}/manageorder`}>
            <ManageOrders></ManageOrders>
          </Route>
          <Route path={`${path}/pay`}>
            <Payment></Payment>
          </Route>
          <Route path={`${path}/myorder`}>
            <MyOrders></MyOrders>
          </Route>
        </Switch>
      </Box>
    </Box>
  );
}

export default DashBoard;
