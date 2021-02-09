import React, { Component } from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import DeleteIcon from "@material-ui/icons/Delete";
import { removeHTMLTags } from "../../helpers";

import "./SidebarItem.css";

interface IProps {
  _note: any;
  _index: any;
  selectedNoteIndex: any;
  selectNote: any;
  deleteNote: any;
}

interface IState {}

class SidebarItemComponent extends Component<IProps, IState> {
  render() {
    const { _note, _index, selectedNoteIndex } = this.props;
    return (
      <div key={_index}>
        <ListItem
          className="list__item"
          selected={selectedNoteIndex === _index}
          alignItems="flex-start"
        >
          <div
            className="text__section"
            onClick={() => this.selectNote(_note, _index)}
          >
            <ListItemText
              primary={_note.title}
              secondary={removeHTMLTags(_note.body.substring(0, 30)) + "..."}
            ></ListItemText>
          </div>
          <DeleteIcon
            onClick={() => this.deleteNote(_note)}
            className="delete__icon"
          ></DeleteIcon>
        </ListItem>
      </div>
    );
  }

  selectNote = (note: any, index: any) => {
    this.props.selectNote(note, index);
  };

  deleteNote = (note: any) => {
    if (window.confirm(`Are you sure you want to delete: ${note.title}`)) {
      this.props.deleteNote(note);
    }
  };
}

export default SidebarItemComponent;
