import path from "path"

import { validateGitRepo, getGitLog } from "./git-handler"

export async function collect(repoName: string): Promise<string> {
  const repoPath = path.resolve(process.cwd(), 'git-repos', repoName);

  const { isValid, error } = await validateGitRepo(repoPath);
  if (!isValid) {
    throw error;
  }

  return getGitLog(repoPath);
}