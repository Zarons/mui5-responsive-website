import styled from '@emotion/styled';
import { Mail, Notifications, Pets } from '@mui/icons-material';

import {
	AppBar,
	Avatar,
	Badge,
	Box,
	InputBase,
	Toolbar,
	Typography,
} from '@mui/material';
import React from 'react';

const StyledToolbar = styled(Toolbar)({
	display: 'flex',
	justifyContent: 'space-between',
});

const Search = styled('div')(() => ({
	backgroundColor: 'white',
	padding: '0 10px',
	borderRadius: '5px',
	width: '40%',
}));

const Icons = styled(Box)({
	alignItems: 'center',
	gap: '20px',
});

const UserBox = styled(Box)({
	display: 'flex',
	alignItems: 'center',
	gap: '10px',
});
const Navbar = () => {
	return (
		<AppBar position='sticky'>
			<StyledToolbar>
				<Typography variant='h6' sx={{ display: { xs: 'none', sm: 'block' } }}>
					GERYENKO
				</Typography>
				<Pets sx={{ display: { xs: 'block', sm: 'none' } }} />
				<Search>
					<InputBase placeholder='search...' />
				</Search>
				<Icons sx={{ display: { xs: 'none', sm: 'flex' } }}>
					<Badge badgeContent={4} color='error'>
						<Mail></Mail>
					</Badge>
					<Badge badgeContent={2} color='error'>
						<Notifications></Notifications>
					</Badge>
					<Avatar sx={{ width: '30px', height: '30px' }} src='' />
				</Icons>
				<UserBox>
					<Avatar sx={{ width: '30px', height: '30px' }} src='' />
					<Typography variant='body1 '>Gery</Typography>
				</UserBox>
			</StyledToolbar>
		</AppBar>
	);
};

export default Navbar;
