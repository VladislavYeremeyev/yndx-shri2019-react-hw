import axios from 'axios';
import _ from 'lodash';
import { pathToName } from '../helper/helper';

const origin = 'http://localhost:3000';

export const getGitRepos = () => {
  return axios
    .get(origin + '/api/repos')
    .then(function(response) {
      return response.data;
    })
    .catch(function(error) {
      console.log(error);
      return [];
    });
};

export const getFileData = (repoName: string, path: string) => {
  const branch = 'master/';
  return axios
    .get(origin + '/api/repos/' + repoName + '/blob/' + branch + path)
    .then(function(response) {
      let data;
      if (typeof response.data === 'string') {
        data = response.data;
      } else if (typeof response.data === 'object') {
        data = JSON.stringify(response.data, null, 2);
      } else {
        data = 'Invalid file format';
      }

      return data;
    })
    .catch(function(error) {
      console.log(error);
      return '';
    });
};

export const getGitTreeContent = (
  action: (files: string[]) => void,
  onLoader: (status: boolean) => void,
  name: string,
  path: string
) => {
  onLoader(true);
  const filePath = path ? '/' + path : '';
  if (name) {
    return axios
      .get(origin + '/api/repos/' + name + '/tree/master' + filePath + '/')
      .then(function(response) {
        const files = response.data.data;

        const formatted = files.map((item: string) => {
          const splitedName = item.split('\t');
          const splitedType = splitedName[0].split(' ');
          const filePath = splitedName[1];
          const name = pathToName(filePath);

          return {
            name: name,
            isFolder: splitedType[1] === 'tree',
            commit: 'd53dsv',
            commit_info: 'by Alexey Besedin, 4 s ago',
            message: '[vcs] move http to arc',
            committer: 'noxoomo',
            updated: '4 s ago',
          };
        });

        action(
          // TODO Replace with native Array.prototype.sort
          _.sortBy(formatted, [
            function(o) {
              return !o.isFolder;
            },
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
  } else return;
};

// export const getGitBranches = repo => {
// 	return axios
// 		.get(origin + "/api/branches/" + repo)
// 		.then(function(response) {
// 			let branches = response.data.branches;

// 			branches.pop();

// 			let formatted = branches.map(item => {
// 				let splitedItem = item.split("@");

// 				return {
// 					brunch: splitedItem[0],
// 					committer: splitedItem[2],
// 					time: splitedItem[1],
// 					lastCommit: splitedItem[3]
// 				};
// 			});

// 			return formatted;
// 		})
// 		.catch(function(error) {
// 			console.log(error);

// 			return [];
// 		});
// };
