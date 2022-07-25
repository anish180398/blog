import { Link } from "gatsby";
import React from "react";
import AlertTriangle from "react-feather/dist/icons/alert-triangle";
import Helmet from "react-helmet";
import { siteTitle } from "../../constants";
import Layout from "../components/Layout";

// eslint-disable-next-line react/display-name
export default () => (
	<Layout>
		<Helmet>
			<title>404 – Page Not Found</title>
		</Helmet>
		<section className="section thick">
			<div className="container skinny text-center">
				<p>
					<AlertTriangle size="5rem" />
				</p>
				<h1>404 - Page Not Found</h1>
				<p>
					We can&apos;t find the page you are looking for!
					<br />
					Head back to <Link to="/">{siteTitle}</Link>
				</p>
			</div>
		</section>
	</Layout>
);
