/*

LICENSE GOES HERE

*/

import React from "react";
import { render, screen, fireEvent, getByTestId } from "@testing-library/react";
import { Route as RRoute } from "react-router-dom";
import { Router as RRouter } from "react-router-dom"; // NOT A TYPO
import Router from "react-router-dom";
import { createMemoryHistory } from "history";
import "@testing-library/jest-dom/extend-expect";

import Login from "../Components/Login";

import "../setupTests";

/**
 * This file tests Login.js
 *
 * GitHub repository: CSC510-Group-25/feature-hunt
 *
 * Authored by: Group 25
 *
 * NAME (GitHub ID: GHID)
 *
 * */

/*
Login.js test IDs:

data-testid="login_button"            -- login button
data-testid="login_title"             -- dialog title
data-testid="login_text"              -- dialog text
data-testid="login_email"             -- email text field
"data-testid": "login_inputEmail"     -- email input prop
data-testid="login_password"          -- password text field
"data-testid": "login_inputPassword"  -- password input prop
data-testid="login_cancel"            -- cancel button
data-testid="login_submit"            -- submit button
data-testid="login_error"             -- login error
data-testid="TEXT" -- short description

*/

describe("Login tests", () => {

  it("renders login", () => {
    render(<Login />);
    const login = screen.getByText(/Login/i);
    expect(login).toBeInTheDocument();
  });

  it("does things1", () => {
    /*
      const history = createMemoryHistory();
      history.push('/:id');
      const { getByTestId } = render(
        <RRouter history={history}>
          <Thing />
        </RRouter>
      );
      const thing1 = getByTestId("thing1");
      //expect(thing1.children.length).toBe(4);
      */
  });

  it("does things2", () => {
    /*
      const history = createMemoryHistory();
      history.push('/:id');
      const { getByTestId } = render(
        <RRouter history={history}>
          <Thing />
        </RRouter>
      );
      const thing1 = getByTestId("thing1");
      //expect(thing1.children.length).toBe(4);
      */
  });
});