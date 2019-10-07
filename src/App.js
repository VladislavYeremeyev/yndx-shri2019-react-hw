import React, { useState } from "react";
import Layout from "./components/Layout/Layout";
import Header from "./components/Header/Header";
import MainContentContainer from "./components/MainContentContainer/MainContentContainer";
import Breadcrumbs from "./components/Breadcrumbs/Breadcrumbs";
import DirectoryTitle from "./components/DirectoryTitle/DirectoryTitle";
import DirectorySubTitle from "./components/DirectorySubTitle/DirectorySubTitle";
import TabMenu from "./components/TabMenu/TabMenu";
import Grid from "./components/Grid/Grid";
import Blob from "./components/Blob/Blob";
import Footer from "./components/Footer/Footer";
import NotFound from "./components/NotFound/NotFound";
import "./components/Theme/Theme.css";
import "./components/Grid/Menu/Grid-Menu.css";
import withPathProp from "./HOCs/withPathProp.jsx";
import { Route, Switch, BrowserRouter, Redirect } from "react-router-dom";

const GridWithPathProp = withPathProp(Grid);
const BlobWithPathProp = withPathProp(Blob);

function App() {
	// const [state, setState]= useState({ isLoading: true });
	return (
		<>
			<Layout
				mix={[
					"Theme",
					{ color: "project-default", space: "default", font: "default" }
				]}
			>
				<Header mix={["Layout-Container", { border: "b", "space-h": "xxl" }]} />

				<MainContentContainer mix={["Layout-Container", { "space-h": "xxl" }]}>
					<BrowserRouter>
						<Breadcrumbs mod={{ border: "b" }} />
						<DirectoryTitle />
						<DirectorySubTitle />
						<TabMenu
							mod={{ border: "b" }}
							mix={["Grid-Menu"]}
							tabs={["FILES", "BRANCHES"]}
						/>
						<Switch>
							<Route exact path="/tree/:path(.*)?" component={GridWithPathProp} />
							<Route exact path="/blob/:path(.+)" component={BlobWithPathProp} />
							<Redirect from="/" to="/tree/" />
							<Route component={NotFound} />
						</Switch>
					</BrowserRouter>
				</MainContentContainer>
				<Footer mix={["Layout-Container", { border: "t", "space-h": "l" }]} />
			</Layout>
		</>
	);
}

export default App;
