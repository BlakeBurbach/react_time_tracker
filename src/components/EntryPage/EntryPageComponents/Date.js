import React, { Component } from 'react';

class Date extends Component {
    render() {
        return (
            <div className="entryPageInput">
                <label>Date</label>
                <input type="date" />
            </div>
        )
    }
}

export default Date;