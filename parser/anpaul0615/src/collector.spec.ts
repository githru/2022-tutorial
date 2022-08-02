import path from "path"
import ps from "child_process";

import { collect } from "./collector"

const TEST_REPO_NAME = "test-repo";

const tmpRepoRootPath = path.resolve(process.cwd(), 'git-repos');
const tmpRepoPath = path.resolve(tmpRepoRootPath, TEST_REPO_NAME);

describe('collector', () => {
  beforeAll(async () => {
    await initTestRepo();
  });

  describe('collect', () => {
    it('git-repo 디렉토리에서 repo-name 의 git log 출력을 반환한다', async () => {
      const gitLog = await collect(TEST_REPO_NAME);

      expect(gitLog).toBeDefined();
      expect(typeof gitLog).toBe('string');
      expect(gitLog.length).toBeGreaterThanOrEqual(0);
    });

    it('git-repo 디렉토리 내 repo-name 을 찾지못하면 에러를 전파한다', async () => {
      expect(collect(`${TEST_REPO_NAME}-invalid`)).rejects.toBeInstanceOf(Error);
    });
  });

  afterAll(async () => {
    await clearTestRepo();
  });
});


/******************************************************************************
 * test helper
 */

function runPs(ps: ps.ChildProcessWithoutNullStreams) {
  return new Promise<void>((resolve, reject) => {
    ps.on('close', (code) => { resolve() });
  });
}

async function initTestRepo() {
  // make temp-repo-directory
  await runPs(ps.spawn('mkdir', [tmpRepoPath]));

  // init git on temp-repo-directory
  await runPs(ps.spawn('git', ['-C', tmpRepoPath, 'init']));
  
  // config on test-repo
  await runPs(ps.spawn('git', ['-C', tmpRepoPath, 'config', '--local', 'user.name', '"test"']));
  await runPs(ps.spawn('git', ['-C', tmpRepoPath, 'config', '--local', 'user.name', '"test@example.com"']));

  // commit on test-repo
  await runPs(ps.spawn('git', ['-C', tmpRepoPath, 'commit', '--allow-empty', '-m', '"Empty Initial Commit"']));
}

async function clearTestRepo() {
  // clear temp-repo-directory
  await new Promise<void>((resolve, reject) => {
    const mkdirPs = ps.spawn('rm', ['-rf', tmpRepoPath]);
    mkdirPs.on('close', (code) => { resolve() });
  });
}