import React from "react";
import "../css/materialize.min.css";
import "./post-form.css";

const Form = () => {
	return (
		<div class="card white darken-1 form">
			<div class="row">
				<form class="col s12" onSubmit={submitHandler}>
					<div class="row">
						<div class="input-field col s6">
							<input id="input_text" type="text" data-length="10" />
							<label for="input_text">Title</label>
						</div>

						<div class="input-field col s12">
							<textarea id="textarea1" class="materialize-textarea" />
							<label for="textarea1">Content</label>
						</div>
					</div>

					<div class="file-field input-field">
						<div class="btn">
							<i class="material-icons left">attach_file</i>
							<span>File</span>
							<input type="file" multiple />
						</div>
						<div class="file-path-wrapper">
							<input
								class="file-path validate"
								type="text"
								placeholder="Upload one or more files"
							/>
						</div>
					</div>

					<div class="chips chips-autocomplete input-field">
						<input class="input" />
					</div>

					<div class="form-btns">
						<button
							class="btn waves-effect waves-light form-btn"
							onClick={PostForm.showForm}
						>
							Cancel
							<i class="material-icons left">close</i>
						</button>

						<button
							class="btn waves-effect waves-light form-btn"
							type="submit"
							name="action"
						>
							Submit
							<i class="material-icons right">send</i>
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

const submitHandler = e => {
	e.preventDefault();
};

class PostForm extends React.Component {
	state = {
		UserID: 0,
		IsAllowedToPost: true,
		CreateForm: false
	};

	showForm = () => {
		this.setState(prevState => ({
			CreateForm: !prevState.CreateForm
		}));
	};

	render() {
		return (
			<div>
				{this.state.IsAllowedToPost ? (
					<div>
						{this.state.CreateForm ? <Form /> : ""}
						<a class="waves-effect waves-light btn" onClick={this.showForm}>
							Create a post
						</a>
					</div>
				) : (
					""
				)}
			</div>
		);
	}
}

export default PostForm;
