import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

function Category() {
  return (
    <List>
      <NavLink>
        <FaPizzaSlice to={"/cuisine/Italian"} />
        <h4>Italian</h4>
      </NavLink>
      <NavLink>
        <FaHamburger to={"/cuisine/American"} />
        <h4>American</h4>
      </NavLink>
      <NavLink>
        <GiNoodles to={"/cuisine/Thai"} />
        <h4>Thai</h4>
      </NavLink>
      <NavLink>
        <GiChopsticks to={"/cuisine/Japanese"} />
        <h4>Japanese</h4>
      </NavLink>
    </List>
  );
}

const List = styled.NavLink`
  display: flex;
  justify-content: center;
  margin: 2rem 0rem;
`;

export default Category;
