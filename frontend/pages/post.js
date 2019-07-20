import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import { withRouter } from "next/router";

import LongPost from "../components/longpost";

//Uses Routing withRouter Function to Extract PostID from URL
const LongPostPage = withRouter(props => {
	return <LongPost postid={props.router.query.postid} />;
});

export default LongPostPage;
