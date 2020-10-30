import React from "react";
import { FacebookShareButton, LinkedinShareButton, TwitterShareButton } from 'react-share';

const style = {
  padding: '4px 10px',
  borderRadius: '5px',
}

export const ShareButtons = ({ url, title, tags }) => {
  return (
    <>
      <div className="post-social">
        <FacebookShareButton
          style={style}
          url={url}
          className="button is-outlined is-rounded facebook" >
          <span className="icon pr-2">
            <i className="fab fa-facebook-square"></i>
          </span>
          <span className="text">Facebook</span>
        </FacebookShareButton>
        <TwitterShareButton
          url={url}
          style={style}
          className="button is-outlined is-rounded twitter"
          title={title}
          via={`reactgrid`}
          hashtags={tags}
        >
          <span className="icon pr-2">
            <i className="fab fa-twitter"></i>
          </span>
          <span className="text">Twitter</span>
        </TwitterShareButton>
        <LinkedinShareButton
          url={url}
          style={style}
          className="button is-outlined is-rounded linkedin"
          title={title} >
          <span className="icon pr-2">
            <i className="fab fa-linkedin"></i>
          </span>
          <span className="text">LinkedIn</span>
        </LinkedinShareButton>
      </div>
    </>
  )
}