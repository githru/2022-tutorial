import path from "path"

import { getRootGitRepoPath, validateGitRepo, getGitLog } from "./git-handler"

describe('git-handler', () => {
  describe('getRootGitRepoPath', () => {
    it('가장 가까운 .git 경로를 반환한다', async () => {
      const workspaceRoot = path.resolve(process.cwd(), '../../');
      const gitRootRepoPath = await getRootGitRepoPath(__dirname);

      expect(gitRootRepoPath).toEqual(workspaceRoot);
    });

    it('.git 이 없는 경로에서는 에러를 전파한다', async () => {
      expect(getRootGitRepoPath('/tmp')).rejects.toBeInstanceOf(Error);
      expect(getRootGitRepoPath('/dev/null')).rejects.toBeInstanceOf(Error);
    });
  });

  describe('validateGitRepo', () => {
    it('대상경로에 .git 이 존재하면 true를 반환한다', async () => {
      const gitRootRepoPath = await getRootGitRepoPath(__dirname);
      const { isValid, error } = await validateGitRepo(gitRootRepoPath);

      expect(isValid).toBe(true);
      expect(error).toBeUndefined();
    });

    it('대상경로에 .git 이 존재하지않으면 false와 error를 반환한다', async () => {
      const { isValid, error } = await validateGitRepo('/tmp');

      expect(isValid).toBe(false);
      expect(error).toBeDefined();
      expect(error).toBeInstanceOf(Error);
    });
  });

  describe('getGitLog', () => {
    it('대상경로 .git 로부터 git log 출력을 반환한다', async () => {
      const gitRootRepoPath = await getRootGitRepoPath(__dirname);
      const gitLog = await getGitLog(gitRootRepoPath);
      
      expect(gitLog).toBeDefined();
      expect(typeof gitLog).toBe('string');
      expect(gitLog.length).toBeGreaterThanOrEqual(0);
    });

    it('대상경로에 .git 이 존재하지 않으면 에러를 전파한다', async () => {
      expect(getGitLog('/tmp')).rejects.toBeInstanceOf(Error);
      expect(getGitLog('/dev/null')).rejects.toBeInstanceOf(Error);
    });
  });
});
