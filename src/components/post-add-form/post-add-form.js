import React from "react";

import "./post-add-form.css"
const PostAddForm = () => {
    return (
        <form className="bottom-panel d-flex mt-5">
            <input
                type="text"
                placeholder="О чем вы думаете сейчас?"
                className="form-control new-post-label"

            />
            <button
                type="submit"
                className="btn btn-light">
                Добавить</button>
        </form>
    )
}
export default PostAddForm;