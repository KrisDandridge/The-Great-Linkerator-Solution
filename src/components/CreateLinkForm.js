import React from "react";
import {
  Checkbox,
  TextField,
  Button,
  TextareaAutosize,
  Container, 
} from "@material-ui/core";
import { useHistory } from 'react-router-dom';
import { useEffect, useState } from "react";
const CreateLinkForm = (props) => {
  const [link, setLink] = useState("");
  const [comment, setComment] = useState("");
  const [tag, setTag] = useState("");
  const history = useHistory();

  const routeChange = () =>{ 
    let path = '/'; 
    history.push(path);
  }
  useEffect(() => {
    setLink(props.link || "");
    setComment(props.comment || "");
    setTag(props.tag || "");
  });

  function clearForm() {
    setLink("");
    setComment("");
    setTag("");
  }

  return (
    <div>
      <form
        className="createLinkForm"
        onSubmit={async (event) => {
          event.preventDefault();

          if (title.length === 0) {
            setIsDirty(true);
            return;
          }

          const payload = {
            post: {
              link,
              comment,
              tag,
            },
          };
          //   try {
          //     if (_id) {
          //       const result = await hitAPI('POST', `/posts/${_id}`, payload)
          //       updatePost(result.post)
          //       setEditablePost({})
          //     } else {
          //       const result = await hitAPI('POST', '/posts', payload)
          //       addNewPost(result.post)
          //       clearForm()
          //     }
          //   } catch (error) {
          //     console.log(error)
          //   }
        }}
      >
        <label>URL</label>
        <TextField
          type="text"
          value={link}
          placeholder="Link here"
          onChange={(event) => {
            setLink(event.target.value);
          }}
        />
        <label>Comment</label>
        <TextField
          type="text"
          value={comment}
          placeholder="Comment here"
          onChange={(event) => {
            setComment(event.target.value);
          }}
        />
          <label>Tags</label>
        <TextField
          type="text"
          value={tag}
          placeholder="Comment here"
          onChange={(event) => {
            setTag(event.target.value);
          }}
        />
        <div>
            <Button type="onSubmit"> create</Button>
            <Button onClick={routeChange} >Cancel</Button>
        </div>
      </form>
    </div>
  );
};

export default CreateLinkForm;
