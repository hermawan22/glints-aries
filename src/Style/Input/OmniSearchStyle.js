import styled from 'styled-components';

import { Device } from '../../Utils/StyleConfig';

import { SecondaryColor } from '../Colors';

export const OmniSearchContainer = styled.div`
  position: relative;
  box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.12);
`;

export const OmniSearchBar = styled.div`
  display: flex;
  align-items: center;
  
  @media ${Device.mobileL} {
    flex-direction: column;
  }

  input { 
    padding: 25px 8em 25px 30px;
    background: ${SecondaryColor.white};
    border: 3px solid ${SecondaryColor.darkgrey};
    font-size: 1.5em;
    line-height: 1.5;
    color: ${SecondaryColor.lightblack};
    width: 100%;
    
    @media ${Device.mobileL} {
      padding: 1em;
    }

    &:focus {
      outline: none;
    }

    &:hover,
    &:focus {
      border: 3px solid ${SecondaryColor.actionblue};
    }
  }

  button {
    position: absolute;
    padding: 30px 0;
    right: 3px;
    font-size: 1.5em;
    font-weight: normal;

    @media ${Device.mobileL} {
      top: 5em;
      right: 0;
      width: 100%;
    }

    svg {
      margin-left: 1em;
    }
  }
`;

export const OmniSearchBody = styled.div`
  position: relative;
  display: ${({ open }) => open ? 'block' : 'none'};
`;

export const OmniSearchResultContainer = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: auto auto auto;
  padding: 25px 30px;
  font-size: 1.1em;
  background: ${SecondaryColor.white};
  border: 1px solid ${SecondaryColor.lightgrey};
  z-index: 9999;
  
  @media ${Device.mobileL} {
    grid-template-columns: auto;
    grid-gap: 2em;
  }
`;

export const OmniSearchListItem = styled.div`
  position: relative;

  label {
    color: ${SecondaryColor.lightblack};
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: .3px;
  }

  ul {
    padding: 0;
    margin: 0;

    li {
      display: flex;
      align-items: center;
      margin-bottom: .6em;
      cursor: pointer;
      list-style-type: none;

      &:first-child {
        margin-top: .5em;
      }

      &:last-child {
        margin-bottom: 0;
      }

      svg,
      img {
        margin-right: 1em;
      }

      img {
        object-fit: cover;
        border-radius: 50%;
      }
    }
  }
`;

export const OmniSearchItemWrapper = styled.li`
  position: relative;
`;
