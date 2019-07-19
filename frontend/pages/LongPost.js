import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const LongPost = (title, author, date, details, categ) => {
	/*const router = useRouter();
	var postid = router.query.postid;
	console.log(postid);*/
	return (
		<div>
			<h1 className="center-align">{title}</h1>
			<h2 className="center-align">
				By: {author} on {date}
			</h2>

			<p>{details}</p>
		</div>
	);
};

/*
let PostSample = {
	postid: 1,
	title: "Healthcare Awareness For 2019",
	author: "author1",
	date: "date1",
	details:
		"Consectetur est consequat incididunt anim ex quis pariatur commodo laborum laborum occaecat anim ea incididunt. Eiusmod ullamco est consequat ipsum aliqua ea qui irure aute commodo voluptate. Nisi incididunt fugiat exercitation et ea consectetur.Tempor minim minim cillum dolor reprehenderit adipisicing et eu veniam incididunt cupidatat duis. Consectetur velit duis anim sint ad commodo deserunt ex anim minim pariatur veniam tempor. Deserunt irure do ullamco amet consequat occaecat esse reprehenderit nulla sit ea. Sunt labore adipisicing commodo laboris sint ullamco.Ex nisi sint esse do nulla Lorem in tempor veniam ea. Id minim sint quis tempor ea in Lorem ullamco eu incididunt labore exercitation nostrud occaecat. Id Lorem ea eiusmod velit ad velit minim irure. Aliqua est mollit eu consectetur dolor cupidatat cupidatat elit.",
	categ: ["categ1-1", "categ1-2"]
};
*/

class LongPosts extends React.Component {
	/*
	state = {
		data: {
			postid: useRouter().query,
			title: "Healthcare Awareness For 2019",
			author: "author1",
			date: "date1",
			details:
				"Consectetur est consequat incididunt anim ex quis pariatur commodo laborum laborum occaecat anim ea incididunt. Eiusmod ullamco est consequat ipsum aliqua ea qui irure aute commodo voluptate. Nisi incididunt fugiat exercitation et ea consectetur.Tempor minim minim cillum dolor reprehenderit adipisicing et eu veniam incididunt cupidatat duis. Consectetur velit duis anim sint ad commodo deserunt ex anim minim pariatur veniam tempor. Deserunt irure do ullamco amet consequat occaecat esse reprehenderit nulla sit ea. Sunt labore adipisicing commodo laboris sint ullamco.Ex nisi sint esse do nulla Lorem in tempor veniam ea. Id minim sint quis tempor ea in Lorem ullamco eu incididunt labore exercitation nostrud occaecat. Id Lorem ea eiusmod velit ad velit minim irure. Aliqua est mollit eu consectetur dolor cupidatat cupidatat elit.",
			categ: ["categ1-1", "categ1-2"]
		}
	};

	componentDidMount() {
		/*this.setState({ loading: true });
		fetch("https://hplussport.com/api/products/order/price/sort/asc/qty/1")
			.then(data => data.json())
			.then(data => this.setState({ data, loading: false }));*/
}
/*
	render() {
		const { postid, title, author, date, details, categ } = this.state.data;

		console.log(postid);
		return (
			<div>
				<h1 className="center-align">{title}</h1>
				<h2 className="center-align">
					By: {author} on {date}
				</h2>

				<p>{details}</p>
			</div>
		);
	}
}
*/
export default LongPost;
