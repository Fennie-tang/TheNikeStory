import styled from "styled-components";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
// import CircularProgress from "@mui/material/CircularProgress";

const SearchBar = () => {
  const [value, setValue] = useState("");
  const [items, setItems] = useState([]);

  //we need to get all the items
  useEffect(() => {
    fetch("/getAllSneakers").then((res) => {
      res.json().then((data) => {
        setItems(data.data);
      });
    });
  }, []);

  // we filter through the items so that after 2 inputs have registered
  //then we can see what suggestions gives us
  const matchedSuggestions = items.filter((suggestion) => {
    return (
      suggestion.name.toLowerCase().includes(value.toLowerCase()) &&
      value.length >= 2
    );
  });

  const handleSelect = () => {
    setValue("");
  };
  return (
    <>
      {items.length === 0 ? (
      
          <h1>loading...</h1>
          
      ) : (
        <StyleForm>
          <input
            className="inputSearch"
            type="search"
            placeholder="Search..."
            onChange={(ev) => {
              setValue(ev.target.value);
            }}
            onKeyDown={(ev) => {
              if (ev.key === "Enter") {
                handleSelect(ev.target.value);
              }
            }}
          />
          <i className="fas fa-search" onClick={() => setValue("")}></i>
          <div className="container">
            {matchedSuggestions.length > 0 && (
              <SuggestionsList>
                {matchedSuggestions.map((suggestion, _id, imageSrc) => {
                  return (
                    // We made this a clickable link to go to each item by its id
                    <SuggestionLink
                      key={_id}
                      to={`/items/${suggestion._id}`}
                      onClick={() => handleSelect(suggestion)}
                    >
                      <li className="miniDiv">
                        <Image src={suggestion.imageSrc} alt="miniImages" />
                        {suggestion.name.slice(
                          0,
                          suggestion.name
                            // .toLowerCase()
                            .indexOf(value.toLowerCase()) + value.length
                        )}
                        <Prediction>
                          {suggestion.name.slice(
                            suggestion.name
                              // .toLowerCase()
                              .indexOf(value.toLowerCase()) + value.length
                          )}
                        </Prediction>
                      </li>
                    </SuggestionLink>
                  );
                })}
              </SuggestionsList>
            )}
          </div>
        </StyleForm>
      )}
    </>
  );
};
export default SearchBar
const StyleForm = styled.form`
  background-color: #002b5b;
  position: relative;
  height: 40px;
  z-index: 2;

  :hover .inputSearch {
    width: 350px;
    background: #292c6d;
    border-radius: 10px;
  }

  :hover i {
    opacity: 0;
    z-index: -1;
  }

  i {
    position: absolute;
    top: 50%;
    right: 18px;
    transform: translate(-50%, -50%);
    font-size: 26px;
    color: #e9d5da;
    transition: 0.2s;
  }
  .inputSearch {
    padding: 10px;
    width: 30px;
    height: 30px;
    background: none;
    border: 4px solid #51557e; //test color
    border-radius: 50px;
    box-sizing: border-box;
    font-family: Comic Sans MS;
    font-size: 20px;
    color: #faedf0;
    outline: none;
    transition: 0.5s;
  }
  .inputSearch::placeholder {
    color: rgba(255, 255, 255, 0.5);
    font-size: 18px;
    letter-spacing: 2px;
    font-weight: 100;
  }

  .inputSearch:focus {
    width: 300px;
    border-radius: 0px;
    background-color: transparent;
    border-bottom: 1px solid rgba(255, 255, 255, 0.5);
    transition: all 500ms cubic-bezier(0, 0.11, 0.35, 2);
  }
`;

const SuggestionsList = styled.ul`
  /* margin-top: 250px; */
  z-index: 2;
  .miniDiv {
    width: 100%;
    height: 200px;
    align-items: center;
    background-color: white;
    box-shadow: 5px 10px 20px #888888;
    overflow: hidden;
    overflow-y: auto;
    &::-webkit-scrollbar {
      display: none;
    }
  }

  .miniDiv-first-child {
    background-color: #c996cc;
  }

  .miniDiv:hover {
    background-color: #faf9f6;
    border: 4px solid #0e5e6f;
    transition: 0.3s ease-in-out;
  }
`;
const SuggestionLink = styled(NavLink)`
  text-decoration: none;
  margin: 1rem;
  color: #060930;
  position: relative;
`;

const Prediction = styled.span`
  font-weight: bold;
  display: inline;
  font-weight: bold;

  .price {
    background-color: #faf9f6;
  }
`;

const Image = styled.img`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
  margin-bottom: 20px;
  margin-top: 8px;
  border: 1px solid #0e5e6f;
  border-radius: 10%;
  /* overflow-y: auto; */
  z-index: 2;
  &:hover {
    border: 4px solid #0e5e6f;
    transition: 0.3s ease-in-out;
  }
`;
