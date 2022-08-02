import { exampleLog01, exampleResult01 } from "./data/example";

// git log JSON 형태 interface
interface logInfo {
  commit: string[] | null;
  Author: string | null;
  AuthorEmail: string | null;
  AuthorDate: string | null;
  Committer: string | null;
  CommitterEmail: string | null;
  CommitDate: string | null;
  message: string | null;
  fileChanged: object[] | null;
}

interface fileChangedLine {
  addition: number | null;
  deletion: number | null;
  directory: string | null;
}

declare let JSONArray: logInfo[];
declare let eachLine: fileChangedLine;

export function parseToJSON(log: string) {
  // line 별로 분리하기
  const splitByNewLine = log.split(/\r?\n/);

  // 분리한 것들을 쭉 돌면서 각 카테고리별로 담을 예정
  const commits: string[][] = [];
  const Authors: string[] = [];
  const AuthorEmails: string[] = [];
  const AuthorDates: string[] = [];
  const Committers: string[] = [];
  const CommitterEmails: string[] = [];
  const CommitDates: string[] = [];
  const messages: string[] = [];
  // fileChanged의 경우 2명 이상이 될 수 있으므로 배열로 지정
  const fileChangeds: object[][] = [];

  // 각 카테고리로 담은 다음 다시 JSON으로 변환하기 위함
  const JSONArray: logInfo[] = [];

  // commit별 fileChanged를 분리시키기 위한 임시 index
  let commitIdx = -1;

  if (splitByNewLine) {
    splitByNewLine.map((str, idx) => {
      if (str.slice(0, 6) === "commit") {
        fileChangeds.push([]);
        commits.push([str.split(" ")[1], str.split(" ")[2]]);
        commitIdx += 1;
      } else if (str.slice(0, 7) === "Author:") {
        Authors.push(str.split(": ")[1].split("<")[0].trim());
        AuthorEmails.push(
          str.split(": ")[1].split("<")[1].split(">")[0].trim()
        );
      } else if (str.slice(0, 10) === "AuthorDate") {
        AuthorDates.push(str.split(": ")[1].trim());
      } else if (str.slice(0, 7) === "Commit:") {
        Committers.push(str.split(": ")[1].trim());
        CommitterEmails.push(
          str.split(": ")[1].split("<")[1].split(">")[0].trim()
        );
        messages.push(splitByNewLine[idx + 3].trim());
      } else if (str.slice(0, 10) === "CommitDate") {
        CommitDates.push(str.split(": ")[1].trim());
      }
      // fileChanged의 경우 각 commit 별 여러 개가 될 수 있으니 commit 별로 나눠줘야 한다.
      else if (/^\d/.test(str)) {
        const eachLine: fileChangedLine = {
          addition: null,
          deletion: null,
          directory: null,
        };
        eachLine.addition = Number(str.split(" ").join("").split("\t")[0]);
        eachLine.deletion = Number(str.split(" ").join("").split("\t")[1]);
        eachLine.directory = str.split(" ").join("").split("\t")[2];
        fileChangeds[commitIdx].push(eachLine);
      }
    });
  }

  // console.log("commit", commit);
  // console.log("author", Author);
  // console.log("authorEmail", AuthorEmail);
  // console.log("authorDate", AuthorDate);
  // console.log("Committer", Committer);
  // console.log("CommitterEmail", CommitterEmail);
  // console.log("CommitDate", CommitDate);
  // console.log("message", message);
  // console.log("fileChanged", fileChanged);

  // 카테고리 별로 담은 것을 JSON화 시키기
  for (let i = 0; i < commits.length; i++) {
    JSONArray.push({
      commit: null,
      Author: null,
      AuthorEmail: null,
      AuthorDate: null,
      Committer: null,
      CommitterEmail: null,
      CommitDate: null,
      message: null,
      fileChanged: [],
    });
    JSONArray[i]["commit"] = commits[i];
    JSONArray[i]["Author"] = Authors[i];
    JSONArray[i]["AuthorEmail"] = AuthorEmails[i];
    JSONArray[i]["AuthorDate"] = AuthorDates[i];
    JSONArray[i]["Committer"] = Committers[i];
    JSONArray[i]["CommitterEmail"] = CommitterEmails[i];
    JSONArray[i]["CommitDate"] = CommitDates[i];
    JSONArray[i]["message"] = messages[i];
    JSONArray[i]["fileChanged"] = fileChangeds[i];
  }

  console.log(JSONArray);
  return JSONArray;
}
