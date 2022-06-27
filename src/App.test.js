import * as React from 'react'
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import App from './App';

describe('Tests for Todo App',()=>{
    // Write tests for Todo App
    // Add and Delete Todo

    const task = "write a unit test for todo app";

    it('initialise todo app', () => {
      render(<App/>);
      expect(screen.getByText(/0/i)).toBeInTheDocument();
    })

    it('create todo item', async() => {
      render(<App/>);
      const inputField = screen.getByPlaceholderText(/New Todo/i);
      const createButton = screen.getByRole('button',{name: 'CREATE'});

      userEvent.type(inputField,task);
      userEvent.click(createButton);
      expect(screen.getByText(/1/i)).toBeInTheDocument();
    })

    it('delete todo item', () => {
      render(<App/>);
      const inputField = screen.getByPlaceholderText(/New Todo/i);
      const createButton = screen.getByRole('button',{name: 'CREATE'});

      userEvent.type(inputField,task);
      userEvent.click(createButton);
      expect(screen.getByText(/1/i)).toBeInTheDocument();

      const deleteButton = screen.getByRole('button',{name: 'DELETE'});
      userEvent.click(deleteButton);
      expect(screen.getByText(/0/i)).toBeInTheDocument();
    })
})
