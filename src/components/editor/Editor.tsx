import React, { Component } from "react";
import ReactQuill from "react-quill";
import debounce from "../../helpers";
import BorderColorIcon from "@material-ui/icons/BorderColor";

import "./Editor.css";

interface IProps {
  noteUpdate: any;
  selectedNote: any;
  selectedNoteIndex: any;
  notes: any;
}

interface IState {
  text: any;
  title: any;
  id: any;
}

class EditorComponent extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      text: "",
      title: "",
      id: "",
    };
  }

  render() {
    return (
      <div className="editor__container">
        <BorderColorIcon className="edit__icon"></BorderColorIcon>
        <input
          className="title__input"
          placeholder="Note title..."
          value={this.state.title ? this.state.title : ""}
          onChange={(e) => this.updateTitle(e.target.value)}
        ></input>
        <ReactQuill
          value={this.state.text}
          onChange={this.updateBody}
        ></ReactQuill>
      </div>
    );
  }

  componentDidMount = () => {
    this.setState({
      text: this.props.selectedNote.body,
      title: this.props.selectedNote.title,
      id: this.props.selectedNote.id,
    });
  };

  componentDidUpdate = () => {
    if (this.props.selectedNote.id !== this.state.id) {
      this.setState({
        text: this.props.selectedNote.body,
        title: this.props.selectedNote.title,
        id: this.props.selectedNote.id,
      });
    }
  };

  updateBody = async (val: any) => {
    this.setState({ text: val });
    this.update();
  };

  updateTitle = async (txt: any) => {
    this.setState({ title: txt });
    this.update();
  };

  update = debounce(() => {
    this.props.noteUpdate(this.state.id, {
      title: this.state.title,
      body: this.state.text,
    });
  }, 1500);
}

export default EditorComponent;
