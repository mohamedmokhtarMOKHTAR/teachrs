
import './App.css';
import TestiMonials from './components/TestiMonials/TestiMonials';
import Formulaire from './components/formulaire/Formulaire';


import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';


const drawerWidth = 240;


function App() {
  
  return (
    <Box sx={{ display: 'flex'}} >
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px`  }}
      >

      </AppBar>
      <Drawer

        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          }
        }}
        variant="permanent"
        anchor="left"
      >

          <img src="https://static.data.gouv.fr/avatars/4e/84c636dac740c3a10c8fe7df39f482.png" alt="Logo" width="200px" height="200px" />
        <List  style={{color:"black" , fontWeight:"bold" , fontFamily:"Verdana" }} >
            {['❶ Votre demande ', '② Nos propositions ', '③ Paiement '].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}

        </List>



      </Drawer>

      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
        <Toolbar />
        <TestiMonials >
        </TestiMonials>

          <Formulaire >
          </Formulaire>

      </Box>

    </Box>
  );
}

export default App;
