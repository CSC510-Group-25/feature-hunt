/*

LICENSE GOES HERE

*/

import React from "react";
import { render, screen, fireEvent, getByTestId } from "@testing-library/react";
import { Route as RRoute } from "react-router-dom";
import { Router as RRouter } from "react-router-dom";
import Router from "react-router-dom";
import { createMemoryHistory } from "history";
import "@testing-library/jest-dom/extend-expect";

import SignUp from "../Components/SignUp";

import "../setupTests";

/**
 * This file tests SignUp.js
 *
 * GitHub repository: CSC510-Group-25/feature-hunt
 *
 * Authored by: Group 25
 *
 * NAME (GitHub ID: GHID)
 *
 * */

/*
SignUp.js test IDs:
data-testid="signup_button"           -- signup button
data-testid="signup_dialog_title"     -- dialog title
data-testid="signup_dialog_text"      -- dialog text
data-testid="signup_name"             -- name text field
"data-testid": "signup_inputName"     -- name input prop
data-testid="signup_email"            -- email text field
"data-testid": "signup_inputEmail"    -- email input prop
data-testid="signup_password"         -- password text field
"data-testid": "signup_inputPassword" -- password input prop
data-testid="signup_cancel"           -- cancel button
data-testid="signup_submit"           -- submit button
data-testid="signup_error"            -- alert error
data-testid="TEXT" -- short description

*/

describe("SignUp tests", () => {
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