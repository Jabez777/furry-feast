import React, { useState } from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    Drawer,
    List,
    ListItem,
    ListItemText,
    CssBaseline,
    Box,
    IconButton,
    useTheme,
    ListItemIcon,
    Divider,
} from '@mui/material';
import {
    Menu as MenuIcon,
    Work as WorkIcon,
    VolunteerActivism as VolunteerIcon,
    Pets as PetsIcon,
    Settings as SettingsIcon,
    ExitToApp as LogoutIcon,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const menuItems = [
    { text: "Manage Work", icon: <WorkIcon /> },
    { text: "Manage Volunteer", icon: <VolunteerIcon /> },
    { text: "Manage Rescue", icon: <PetsIcon /> },
    { text: "Manage Gallery", icon: <PetsIcon /> },
    { text: "Manage Donation", icon: <PetsIcon /> },
    { text: "Manage Pet Dog", icon: <PetsIcon /> },
    { text: "Manage Pet Request", icon: <PetsIcon /> },
    { text: "Manage Vaccination", icon: <PetsIcon /> },
    { text: "Manage Veterinary", icon: <PetsIcon /> },
    { text: "Settings", icon: <SettingsIcon />, route: '/SettingsPage' }, // Link SettingsPage
];

const drawerWidth = 240;

const AdminDashboard = () => {
    const navigate = useNavigate();
    const theme = useTheme();

    const [selectedIndex, setSelectedIndex] = useState(0);

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    };

    const handleMenuItemClick = (index) => {
        setSelectedIndex(index);
        const menuItem = menuItems[index].text.toLowerCase().replace(/\s/g, '-');
        navigate(`/admin/${menuItem}`);
    };

    return (
        <div style={{ display: 'flex' }}>
            <CssBaseline />
            <Drawer
                variant="permanent"
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                        backgroundColor: theme.palette.background.default,
                        color: theme.palette.text.primary,
                    },
                }}
            >
                <Toolbar />
                <Box sx={{ overflow: 'auto' }}>
                    <List>
                        {menuItems.map((item, index) => (
                            <ListItem
                                button
                                key={index}
                                onClick={() => handleMenuItemClick(index)}
                                selected={index === selectedIndex}
                                sx={{
                                    '&.Mui-selected': {
                                        backgroundColor: theme.palette.action.selected,
                                        color: theme.palette.primary.main,
                                    },
                                    '&.Mui-selected:hover': {
                                        backgroundColor: theme.palette.action.hover,
                                    },
                                }}
                            >
                                <ListItemIcon
                                    sx={{
                                        color: index === selectedIndex ? theme.palette.primary.main : 'inherit',
                                    }}
                                >
                                    {item.icon}
                                </ListItemIcon>
                                <ListItemText primary={item.text} />
                            </ListItem>
                        ))}
                    </List>
                </Box>
                <Divider />
                <List>
                    <ListItem button onClick={handleLogout}>
                        <ListItemIcon>
                            <LogoutIcon />
                        </ListItemIcon>
                        <ListItemText primary="Logout" />
                    </ListItem>
                </List>
            </Drawer>

            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    padding: theme.spacing(3),
                    backgroundColor: theme.palette.background.paper,
                    minHeight: '100vh',
                }}
            >
                <AppBar
                    position="fixed"
                    sx={{
                        zIndex: (theme) => theme.zIndex.drawer + 1,
                        backgroundColor: theme.palette.background.default,
                        color: theme.palette.text.primary,
                        boxShadow: 'none',
                    }}
                >
                    <Toolbar>
                        <IconButton edge="start" sx={{ marginRight: 2 }}>
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" sx={{ flexGrow: 1 }}>
                            Admin Dashboard
                        </Typography>
                        <Button color="inherit" onClick={handleLogout}>
                            Logout
                        </Button>
                    </Toolbar>
                </AppBar>
                <Toolbar />
            </Box>
        </div>
    );
};

export default AdminDashboard;
