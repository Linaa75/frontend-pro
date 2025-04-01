import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography
} from '@mui/material';
import { Link as RouterLink } from 'react-router';

interface navigationProps {
  listItems: {
    label: string,
    path: string
  }[],
  handleDrawerToggle: () => void
}

const Navigation = ({listItems, handleDrawerToggle} :navigationProps) => {
  return (
  <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
    <Typography variant="h6" sx={{ my: 2 }}>
      Booking
    </Typography>
    <List>
      {listItems.map((item) => (
        <ListItem key={item.label} disablePadding>
          <ListItemButton
            component={RouterLink}
            to={item.path}
            sx={{ textAlign: 'center' }}
          >
            <ListItemText primary={item.label} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  </Box>
)};

export default Navigation;