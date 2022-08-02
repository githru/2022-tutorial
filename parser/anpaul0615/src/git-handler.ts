import ps from "child_process";

/* git -C . --no-pager rev-parse --show-toplevel */
export function getRootGitRepoPath(repoPath: string = __dirname): Promise<string> {
  return new Promise((resolve, reject) => {
    const gitRevParsePs = ps.spawn('git', ['-C', repoPath, 'rev-parse', '--show-toplevel']);

    gitRevParsePs.stdout.on('data', (buf) => resolve(buf.toString().trim()));

    gitRevParsePs.stderr.on('data', (buf) => reject(new Error(buf.toString())));
  })
}

/* git -C . --no-pager rev-parse --is-inside-work-tree */
export function validateGitRepo(repoPath: string): Promise<{ isValid: Boolean; error?: Error }> {
  return new Promise((resolve, reject) => {
    const gitRevParsePs = ps.spawn('git', ['-C', repoPath, 'rev-parse', '--is-inside-work-tree']);
    let isValid = false;
    let error: Error;

    gitRevParsePs.stdout.on('data', (buf) => {
      isValid = Boolean(buf.toString().trim());
    });

    gitRevParsePs.stderr.on('data', (buf) => {
      isValid = false;
      error = new Error(buf.toString());
    });

    gitRevParsePs.on('close', (code) => resolve({ isValid, error }));
  })
}

/* git -C . --no-pager log --all --parents --numstat --date-order --pretty=fuller */
export function getGitLog(repoPath: string): Promise<string> {
  return new Promise((resolve, reject) => {
    const gitLogPs = ps.spawn('git', ['-C', repoPath, '--no-pager', 'log', '--all',  '--parents', '--numstat', '--date-order', '--pretty=fuller']);
    let gitLog = "";

    gitLogPs.stdout.on('data', (buf) => {
      gitLog += buf.toString()
    });

    gitLogPs.stderr.on('data', (buf) => reject(new Error(buf.toString())));

    gitLogPs.on('close', (code) => resolve(gitLog));
  })
}