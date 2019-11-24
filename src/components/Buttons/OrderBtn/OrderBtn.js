import React, {Component} from 'react';
import {ButtonToolbar, ToggleButtonGroup, ToggleButton} from 'react-bootstrap';

import './OrderBtn.css';

class OrderBtn extends Component {
    render() {
        return (
            <ButtonToolbar className='OrderBtn'>
            <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
              <ToggleButton
                value={1}
                // onClick={this.props.handleBuy}
                className="loginBtn bb"
              >
                Buy
              </ToggleButton>
              <ToggleButton
                value={2}
                // onClick={this.props.handleRent}
                className="loginBtn bb"
              >
                Rent
              </ToggleButton>
            </ToggleButtonGroup>
          </ButtonToolbar>
        )
    }
}

export default OrderBtn;