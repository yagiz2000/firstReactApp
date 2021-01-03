import React, { Component, Image } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
export default class ProfileSection extends Component {
  render() {
    return (
      <div>
        
        <ListGroup>
          {this.props.profile.map((profileItem) => (
            <ListGroupItem
              tag="a"
              href="#"
              action
              onClick={() => {
                this.props.changeCategoryName(profileItem);
              }}
              active={profileItem === this.props.categoryName ? true : false}
            >
              {profileItem}
            </ListGroupItem>
          ))}
        </ListGroup>
      </div>
    );
  }
}
