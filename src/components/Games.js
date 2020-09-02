import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { loadGames } from "../services/loadGamesService";
import Thumbnail from "./Thumbnail";
import each from "lodash/each";
import All from "./common/allFilter";
import New from "./common/newFilter";
import Top from "./common/topFilter";
import SearchBar from "./common/search";
import { GAME_CATEGORY } from "../config/constants";
import { filterByCategory, filterByTitle } from "../utils/common";

class Games extends Component {
  state = {
    games: [],
    filteredGames: [],
    selectedCategory: GAME_CATEGORY.ALL,
  };

  componentDidMount() {
    const games = loadGames();
    this.setState({ games, filteredGames: games });
  }

  handleOnFilter = (category) => {
    this.setState({
      filteredGames: filterByCategory(this.state.games, category),
      selectedCategory: category,
    });
  };

  handleSearchByName = (title) => {
    this.setState({
      filteredGames: filterByTitle(this.state.games, title),
    });
  };

  // This function will render [lastIndex - start] number of games from the Starting index passed to it
  renderMultipleGames = (start, lastIndex) => {
    let thumbNails = [];
    each(this.state.filteredGames, (game, i) => {
      if (i >= start && i < lastIndex) {
        thumbNails.push(
          <Thumbnail
            key={game.id}
            game={game}
            type={
              lastIndex - start > 2
                ? Thumbnail.types.MULTIPLE
                : Thumbnail.types.TWO
            }
          />
        );
      }
    });
    return thumbNails;
  };

  // This function will render 1 game for the index passed to it
  renderSingleGame = (start) => {
    let thumbNails = [];
    each(this.state.filteredGames, (game, i) => {
      if (i === start) {
        thumbNails.push(
          <Thumbnail key={game.id} game={game} type={Thumbnail.types.SINGLE} />
        );
      }
    });
    return thumbNails;
  };

  render() {
    const { filteredGames } = this.state;
    const length = filteredGames ? filteredGames.length : 0;

    return (
      <>
        <Navbar expand="lg" style={{ padding: "0px" }}>
          <Navbar.Brand href="#home" className="navbar-link-heading">
            SLOTS
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto"></Nav>
            <Nav.Link className="navbar-link-padding">
              <All
                onFilter={this.handleOnFilter}
                category={this.state.selectedCategory}
              />
            </Nav.Link>
            <Nav.Link className="navbar-link-padding">
              <New
                onFilter={this.handleOnFilter}
                category={this.state.selectedCategory}
              />
            </Nav.Link>
            <Nav.Link className="navbar-link-padding">
              <Top
                onFilter={this.handleOnFilter}
                category={this.state.selectedCategory}
              />
            </Nav.Link>
            <SearchBar onSearch={this.handleSearchByName} />
          </Navbar.Collapse>
        </Navbar>
        <div></div>
        <div className="row">
          {/* If filtered games result is less than wqual to 4 pictures then we can
          do the below piece of code to adjust picture's width according to search result length
           */}
          {/* <div
            className={
              length <= 4
                ? "width-100"
                : length <= 5
                ? "width-50"
                : "width-col-2"
            }
          > */}
          <div className="width-col-2">
            {length > 0 ? this.renderMultipleGames(0, 4) : ""}
          </div>
          <div className="width-col-2">
            {length > 4 ? this.renderSingleGame(4) : ""}
          </div>
          <div className="width-col-2">
            {length > 5 ? this.renderMultipleGames(5, 9) : ""}
          </div>
          <div className="width-col-1">
            {length > 9 ? this.renderMultipleGames(9, 11) : ""}
          </div>
        </div>

        <div className="row">
          <div className="width-col-2">
            {length > 11 ? this.renderMultipleGames(11, 15) : ""}
          </div>
          <div className="width-col-2">
            {length > 15 ? this.renderMultipleGames(15, 19) : ""}
          </div>
          <div className="width-col-2">
            {length > 19 ? this.renderSingleGame(19) : ""}
          </div>
          <div className="width-col-1">
            {length > 20 ? this.renderMultipleGames(20, 22) : ""}
          </div>
        </div>
      </>
    );
  }
}

export default Games;
