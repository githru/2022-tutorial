import { execSync } from "child_process";

const logPrefix = "@start@";
const delimiter = "=";

const format = {
  commitHash: "%H",
  treeHash: "%T",
  parentHash: "%P",
  author: "%an",
  authorEmail: "%ae",
  date: "%aD",
  message: "%s",
} as const;

const formatString = [
  format.commitHash,
  format.treeHash,
  format.parentHash,
  format.author,
  format.authorEmail,
  format.date,
  format.message,
].join(delimiter);

const cmd = `git log --pretty=format:${logPrefix}${formatString} --stat`;

export function gitLogToJsonParser(
  { debug }: { debug: boolean } = { debug: true }
) {
  const stdout = execSync(cmd).toString();

  const commits = stdout.split(logPrefix).filter(Boolean);
  return commits.map((commit) => {
    const [hash, tree, parent, author, email, date, rest] =
      commit.split(delimiter);

    const [message, ...fileChange] = rest.split("\n").filter(Boolean);

    const changedFiles = fileChange
      .slice(0, -1)
      .map((x) => x.split("| ")[0].trim());

    const fileDffString = fileChange.slice(-1)[0] ?? "";
    const insertions = fileDffString.match(/(\d+) insertions\S+/)?.[1] ?? 0;
    const deletions = fileDffString.match(/(\d+) deletions/)?.[1] ?? 0;

    const logInfo = {
      commitHash: hash,
      treeHash: tree,
      parentHash: parent,
      author,
      email,
      date,
      message,
      stats: {
        fileChanged: changedFiles.length,
        files: changedFiles,
        insertions,
        deletions,
      },
    };

    if (debug) {
      console.log(logInfo);
    }

    return JSON.parse(JSON.stringify(logInfo));
  });
}
