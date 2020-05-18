import React, { useState, useRef } from 'react';
import {
  Button, ButtonGroup, ClickAwayListener, Grow, Paper, Popper, MenuItem, MenuList
} from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

const domains = [
  'All Domains',
  'Production',
  'Inputs',
  'Food Safety',
  'Trade',
  'Food Balance',
  'Population',
  'Emission-Agriculture',
  'Macro-Statistics',
  'Investment',
  'Emissions-Land Use',
  'Agri-Environmental Indicators',
  'ASTI R&D Indicators',
  'Prices',
  'Forestry'
];

const SplitButton = () => {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleClick = () => domains[selectedIndex];

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setOpen(false);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };
  return (
    <div>
      <ButtonGroup color="inherit" ref={anchorRef} aria-label="domains">
        <Button conClick={handleClick}>{domains[selectedIndex]}</Button>
        <Button
          color="inherit"
          size="small"
          aria-controls={open ? 'split-button-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-label="select domain"
          aria-haspopup="menu"
          onClick={handleToggle}
        >
          <ArrowDropDownIcon />
        </Button>
      </ButtonGroup>
      <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList id="split-button-menu">
                  {domains.map((domain, index) => (
                    <MenuItem
                      key={domain}
                      selected={index === selectedIndex}
                      onClick={(event) => handleMenuItemClick(event, index)}
                    >
                      {domain}
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </div>
  );
};

export default SplitButton;
