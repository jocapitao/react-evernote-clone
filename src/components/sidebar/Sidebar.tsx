import React, { Component } from "react";
import List from "@material-ui/core/List";
import { Divider, Button } from "@material-ui/core";
import SidebarItemComponent from "../sidebar-item/SidebarItem";

import "./Sidebar.css";

interface IProps {
  notes: any;
  selectedNoteIndex: any;
  newNote: any;
  selectNote: any;
  deleteNote: any;
}

interface IState {
  addingNote: any;
  title: any;
}

class SidebarComponent extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      addingNote: false,
      title: null,
    };
  }

  render() {
    const { notes, selectedNoteIndex } = this.props;
    if (notes) {
      return (
        <div className="sidebarContainer">
          <Button onClick={this.newNoteBtnClick} className="newNoteBtn">
            {this.state.addingNote ? "Cancel" : "New Note"}
          </Button>
          {this.state.addingNote ? (
            <div>
              <input
                type="text"
                className="newNoteInput"
                placeholder="Enter note title"
                onKeyUp={(e: any) => this.updateTitle(e.target.value)}
              ></input>
              <Button
                className="newNoteSubmitBtn"
                onClick={this.newNote}
              >
                Submit Note
              </Button>
            </div>
          ) : null}
          <List>
            {notes.map((_note: any, _index: any) => {
              return (
                <div key={_index}>
                  <SidebarItemComponent
                    _note={_note}
                    _index={_index}
                    selectedNoteIndex={selectedNoteIndex}
                    selectNote={this.selectNote}
                    deleteNote={this.deleteNote}
                  ></SidebarItemComponent>
                  <Divider></Divider>
                </div>
              );
            })}
          </List>
        </div>
      );
    } else {
      return <div></div>;
    }
  }

  newNoteBtnClick = () => {
    this.setState({ title: null, addingNote: !this.state.addingNote });
  };

  updateTitle = (txt: any) => {
    this.setState({ title: txt });
  };

  newNote = () => {
    this.props.newNote(this.state.title);
    this.setState({ title: null, addingNote: false });
  };

  selectNote = (note: any, index: any) => {
    this.props.selectNote(note, index);
  };

  deleteNote = (note: any) => {
    this.props.deleteNote(note);
  };
}

export default SidebarComponent;
