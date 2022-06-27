import * as React from 'react'
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import App from './App';

describe('Tests for Login Form',()=>{
    it('submitting the form calls onSubmit with username and password', () => {
      const username = "capillary";
      const password = "password";
      
      function handleSubmit(submittedData) {
        expect(submittedData.username).toEqual(username);
        expect(submittedData.password).toEqual(password);
      }
      render(<App onSubmit={handleSubmit}/>)

      const usernameField = screen.getByLabelText('Username', {selector: 'input'});
      const passwordField = screen.getByLabelText('Password', {selector: 'input'});

      userEvent.type(usernameField,username);
      userEvent.type(passwordField,password);

      const submitButton = screen.getByRole('button', {name: /submit/i});
      userEvent.click(submitButton);

        // create a variable called "submittedData" and a handleSubmit function that
        // accepts the data and assigns submittedData to the data that was submitted
        // Hint: if you need a hand, here's what the handleSubmit function should do:
        // const handleSubmit = data => (submittedData = data)
        //
        // render the login with your handleSubmit function as the onSubmit prop
        //
        // get the username and password fields via `getByLabelText`
        // use `await userEvent.type...` to change the username and password fields to
        //    whatever you want
        //
        // click on the button with the text "Submit"
        //
        // assert that submittedData is correct
        // Hint: use `toEqual` from Jest: 📜 https://jestjs.io/docs/en/expect#toequalvalue
      })
})
