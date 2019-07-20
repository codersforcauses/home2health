import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import { withRouter } from "next/router";

import LongPost from "../components/longpost";

const LongPostPage = withRouter(props => {
	return <LongPost postid={props.router.query.postid} />;
});

export default LongPostPage;
