import { collect } from "./collector"
import { parse } from "./parser"
import { save } from "./repository"

const repoName = '<GIT-REPO>';

(async () => {
  try {
    const gitLog = await collect(repoName);
    parse();
    save();
  } catch(e) {
    console.error('e : ', e);
  }
})();
