import React from 'react';
import ReactDOM from 'react-dom';
import AddTutor from '../AddTutor';

import { render, cleanup, getByAltText } from '@testing-library/react';
import "jest-dom/extend-expect";
import renderer from "react-test-renderer";

afterEach(cleanup);

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<AddTutor></AddTutor>, div)
})

it("renders button correctly", () => {
    const { getByTestId } = render(<AddTutor></AddTutor>);
    expect(('tutor-submit')).toHaveTextContent("Save");
})

it("matches snapshot 1", () => {
    const tree = renderer.create(<AddTutor></AddTutor>).toJSON();
    expect(tree).toMatchInlineSnapshot();
})

it("matches snapshot 2", () => {
    const tree = renderer.create(<AddTutor></AddTutor>).toJSON();
    expect(tree).toMatchInlineSnapshot();
})
