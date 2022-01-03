import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

import { Wrapper, LinkWrapper } from './styles';

const Drawer: React.FC = () => {
    const [open, setOpen] = React.useState<boolean>(false);
  return (
    <div>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="open drawer"
        onClick={() => setOpen(true)}
      >
        <MenuIcon />
      </IconButton>
      <SwipeableDrawer
        anchor="left"
        open={open}
        onClose={() => {setOpen(false)}}
        onOpen={() => {}}
      >
          <Wrapper>
              <Box textAlign="center" p={2}
                >
                Меню
                </Box>
                <Divider />
                <List>
                    <LinkWrapper to="/About">
                        <ListItem button>
                            <ListItemText primary={'Хранилища'} />
                        </ListItem>
                    </LinkWrapper>
                    <LinkWrapper to="/About">
                        <ListItem button>
                            <ListItemText primary={'Заказы'} />
                        </ListItem>
                    </LinkWrapper>
                    <LinkWrapper to="/About">
                        <ListItem button>
                            <ListItemText primary={'Шаблоны'} />
                        </ListItem>
                    </LinkWrapper>
                    <LinkWrapper to="/About">
                        <ListItem button>
                            <ListItemText primary={'История'} />
                        </ListItem>
                    </LinkWrapper>
                    <LinkWrapper to="/About">
                        <ListItem button>
                            <ListItemText primary={'Карта'} />
                        </ListItem>
                    </LinkWrapper>
                    <LinkWrapper to="/About">
                        <ListItem button>
                            <ListItemText primary={'Настройки'} />
                        </ListItem>
                    </LinkWrapper>
                </List>
          </Wrapper>
      </SwipeableDrawer>
    </div>
  );
};

export default Drawer;
