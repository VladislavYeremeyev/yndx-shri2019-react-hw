import axios from "axios";
import _ from "lodash";
import { pathToName } from "../helper/helper.js";

const origin = "http://localhost:3000";

export const getGitRepos = () => {
	return axios
		.get(origin + "/api/repos")
		.then(function(response) {
			let formatted = response.data.repos.map(item => {
				let splitedName = item.split("/");

				return { name: splitedName[splitedName.length - 1] };
			});

			return formatted;
		})
		.catch(function(error) {
			console.log(error);
			return [];
		});
};

export const getFileData = (repoName, path) => {
	let branch = "master/";
	return axios
		.get(origin + "/api/repos/" + repoName + "/blob/" + branch + path)
		.then(function(response) {
			let data;
			if (typeof response.data === "string") {
				data = response.data;
			} else if (typeof response.data === "object") {
				data = JSON.stringify(response.data, null, 2);
			} else {
				data = "Invalid file format";
			}

			return data;
		})
		.catch(function(error) {
			console.log(error);
			return "";
		});
};

export const getGitTreeContent = (action, onLoader, name, path) => {
	onLoader(true);
	let filePath = path ? "/" + path : "";

	return axios
		.get(origin + "/api/repos/" + name + "/tree/master" + filePath + '/')
		.then(function(response) {
			let files = response.data.data;

			let formatted = files.map(item => {
				let splitedName = item.split("\t");
				let splitedType = splitedName[0].split(" ");
				let filePath = splitedName[1];
				let name = pathToName(filePath);

				return {
					name: name,
					isFolder: splitedType[1] === "tree",
					commit: "d53dsv",
					commit_info: "by Alexey Besedin, 4 s ago",
					message: "[vcs] move http to arc",
					committer: "noxoomo",
					updated: "4 s ago"
				};
			});

			action(
				// TODO Replace with native Array.prototype.sort
				_.sortBy(formatted, [
					function(o) {
						return !o.isFolder;
					}
				])
			);
		})
		.catch(function(error) {
			console.log(error);
			return [];
		})
		.finally(function() {
			onLoader(false);
		});
};

export const getGitBranches = repo => {
	return axios
		.get(origin + "/api/branches/" + repo)
		.then(function(response) {
			let branches = response.data.branches;

			branches.pop();

			let formatted = branches.map(item => {
				let splitedItem = item.split("@");

				return {
					brunch: splitedItem[0],
					committer: splitedItem[2],
					time: splitedItem[1],
					lastCommit: splitedItem[3]
				};
			});

			return formatted;
		})
		.catch(function(error) {
			console.log(error);

			return [];
		});
};
