import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';

const Search = styled('div')({
    position: 'relative',
    borderRadius: '4px', 
    backgroundColor: alpha('#fff', 0.15),
    '&:hover': {
        backgroundColor: alpha('#fff', 0.25),
    },
    marginRight: '16px', 
    marginLeft: 0,
    width: '100%',
});

const SearchIconWrapper = styled('div')({
    padding: '0 16px', 
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
});

const StyledInputBase = styled(InputBase)({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: '6px 30px 6px 0', 
        transition: 'width 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms', 
        width: '100%',
        color: 'white',
    },
});

export default function SearchTextField() {
    return (
        <Box m={2}>
            <Search>
                <SearchIconWrapper>
                    <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                    placeholder="Search…"
                    inputProps={{ 'aria-label': 'search' }}
                />
            </Search>
        </Box>
    );
}