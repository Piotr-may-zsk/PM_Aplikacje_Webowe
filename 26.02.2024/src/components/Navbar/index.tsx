import {Link} from "react-router-dom";
import {routes} from "../../Helpers/routing.tsx";
import styled from "styled-components";

function Navbar() {
    const ListItem = styled.li`
      background-color: lightblue;
      padding: 20px;
      list-style: none;
        margin: 5px;
  `
    const List = styled.ul`
        display: flex;
        justify-content: space-around;`

    const Nav = styled.nav `
        width: 100%;
        background-color: lightcoral;`

    return (
        <Nav>
            <List>
                {routes.map((route)=> (
                    <ListItem key={route.path}>
                        <Link to={route.path}>{route.label}</Link>
                    </ListItem>
                ))}
            </List>
        </Nav>
    )
}

export default Navbar