import React from 'react';
import ReactDOM from 'react-dom';
import AddTutorAds from '../AddTutorAds';


it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<AddTutorAds></AddTutorAds>, div)
})