import { getGitLog } from "./spawnLog";
import { parseToJSON } from "./logToJson";

export function logParse() {
  getGitLog().then((value) => parseToJSON(value));
}

logParse();
