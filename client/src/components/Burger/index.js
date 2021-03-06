import styled from 'styled-components';
import { bool, func } from 'prop-types';

const StyledBurger = styled.div`
    position: absolute;
    top: 5%;
    right: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 2rem;
    height: 2rem;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    z-index: 10;

    div {
    width: 2rem;
    height: 0.20rem;
    background: #869598;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
        transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    :nth-child(2) {
        opacity: ${({ open }) => open ? '0' : '1'};
        transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'}
    }

    :nth-child(3) {
        transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
    }
`;

const Burger = ({ open, setOpen }) => {

    return (
        <StyledBurger open={open} onClick={() => setOpen(!open)}>
            <div />
            <div />
            <div />
        </StyledBurger>
    )
}
Burger.propTypes = {
    open: bool.isRequired,
    setOpen: func.isRequired,
};
export default Burger;