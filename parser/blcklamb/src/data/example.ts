export const exampleLog01 = `
commit e5add6659d39568c23319508aaf2efe17ca65295 (HEAD -> main, origin/main, origin/HEAD)
Author: Kohei Ueno <kohei.ueno119@gmail.com>
Date:   Fri Jul 29 14:47:56 2022 +0900

    src: fix to use replacement character
    
    PR-URL: https://github.com/nodejs/node/pull/43999
    Fixes: https://github.com/nodejs/node/issues/43962
    Reviewed-By: Antoine du Hamel <duhamelantoine1995@gmail.com>
    Reviewed-By: Mohammed Keyvanzadeh <mohammadkeyvanzade94@gmail.com>
    Reviewed-By: Darshan Sen <raisinten@gmail.com>
    Reviewed-By: LiviaMedeiros <livia@cirno.name>
    Reviewed-By: Feng Yu <F3n67u@outlook.com>

commit 28a9042ee6e95c52f2ec6abcb2da205e22ae2230
Author: Tobias Nießen <tniessen@tnie.de>
Date:   Fri Jul 29 00:00:40 2022 +0200

    src: improve SPKAC::ExportChallenge()
    
    Declare buf as an unsigned char to get rid of the reinterpret_cast and
    do not ignore the return value of ASN1_STRING_TO_UTF8. This also removes
    the need to call strlen() on the result.
    
    PR-URL: https://github.com/nodejs/node/pull/44002
    Reviewed-By: Darshan Sen <raisinten@gmail.com>
    Reviewed-By: Luigi Pinca <luigipinca@gmail.com>
    Reviewed-By: Anna Henningsen <anna@addaleax.net>

commit 0616eafbc8808b6c476d268608e5e33cde3253e4
Author: npm team <ops+robot@npmjs.com>
Date:   Thu Jul 28 11:03:27 2022 -0700

    deps: upgrade npm to 8.15.1
    
    PR-URL: https://github.com/nodejs/node/pull/44013
    Reviewed-By: Mohammed Keyvanzadeh <mohammadkeyvanzade94@gmail.com>
    Reviewed-By: Tobias Nießen <tniessen@tnie.de>
    Reviewed-By: Filip Skokan <panva.ip@gmail.com>
    Reviewed-By: Luigi Pinca <luigipinca@gmail.com>
    `;

export const exampleResult01 = [
  {
    commit: "e5add6659d39568c23319508aaf2efe17ca65295",
    Author: "Kohei Ueno",
    Email: "kohei.ueno119@gmail.com",
    Date: "Fri Jul 29 14:47:56 2022 +0900",
    message: "src: fix to use replacement character",
    prURL: "https://github.com/nodejs/node/pull/43999",

    reviewer: [
      "Antoine du Hamel",
      "Mohammed Keyvanzadeh",
      "Darshan Sen",
      "LiviaMedeiros",
      "Feng Yu",
    ],
  },
  {
    commit: "28a9042ee6e95c52f2ec6abcb2da205e22ae2230",
    Author: "Tobias Nießen",
    Email: "tniessen@tnie.de",
    Date: "Fri Jul 29 00:00:40 2022 +0200",
    message: "src: improve SPKAC::ExportChallenge()",
    prURL: "https://github.com/nodejs/node/pull/44002",

    reviewer: ["Darshan Sen", "Luigi Pinca", "Anna Henningsen"],
  },
  {
    commit: "0616eafbc8808b6c476d268608e5e33cde3253e4",
    Author: "npm team",
    Email: "ops+robot@npmjs.com",
    Date: "Thu Jul 28 11:03:27 2022 -0700",
    message: "deps: upgrade npm to 8.15.1",
    prURL: "https://github.com/nodejs/node/pull/44013",

    reviewer: [
      "Mohammed Keyvanzadeh",
      "Tobias Nießen",
      "Filip Skokan",
      "Luigi Pinca",
    ],
  },
];

export const exampleLog02 = `
commit 5d3f94e4072863b98dc17c3e43d77c98473bd42f 224512334c9526a24ef49af030f93884102a4d2b
Author:     chaejung Kim <whenucan35@gmail.com>
AuthorDate: Fri Jul 29 20:01:18 2022 +0900
Commit:     chaejung Kim <whenucan35@gmail.com>
CommitDate: Fri Jul 29 20:02:36 2022 +0900

    Feat: log to JSON function, parse01

89      0       parser/blcklamb/src/gitLogToJSONParser.ts

commit 224512334c9526a24ef49af030f93884102a4d2b 24a6cd8b80944fe18e50fc286211a5c7bb4b0c14
Author:     chaejung Kim <whenucan35@gmail.com>
AuthorDate: Fri Jul 29 20:00:51 2022 +0900
Commit:     chaejung Kim <whenucan35@gmail.com>
CommitDate: Fri Jul 29 20:02:36 2022 +0900

    Fix: typo and bad category name

4       4       parser/blcklamb/src/data/example.ts

commit 24a6cd8b80944fe18e50fc286211a5c7bb4b0c14 0421e013e1356afb344b0884b7c2623f321c87f3
Author:     chaejung Kim <whenucan35@gmail.com>
AuthorDate: Fri Jul 29 20:00:26 2022 +0900
Commit:     chaejung Kim <whenucan35@gmail.com>
CommitDate: Fri Jul 29 20:02:36 2022 +0900

    Fix: toBe to toStrictEqual

3       1       parser/blcklamb/src/__test__/parser.test.ts

commit 0421e013e1356afb344b0884b7c2623f321c87f3 250205fbfe9733e6e575045299a621640a17529d
Author:     chaejung Kim <whenucan35@gmail.com>
AuthorDate: Fri Jul 29 16:36:42 2022 +0900
Commit:     chaejung Kim <whenucan35@gmail.com>
CommitDate: Fri Jul 29 20:02:36 2022 +0900

    Test: make test case exampleLog01, exampleResult01

10      0       parser/blcklamb/src/__test__/parser.test.ts
86      0       parser/blcklamb/src/data/example.ts

commit 250205fbfe9733e6e575045299a621640a17529d a1cd5106e4a5ed838ce67fdfa04eefacf0f49c2b
Author:     chaejung Kim <whenucan35@gmail.com>
AuthorDate: Fri Jul 29 15:21:50 2022 +0900
Commit:     chaejung Kim <whenucan35@gmail.com>
CommitDate: Fri Jul 29 20:02:36 2022 +0900

    Feat: setting for jest

15      0       parser/blcklamb/jest.config.ts
8553    0       parser/blcklamb/package-lock.json
7       1       parser/blcklamb/package.json
13      0       parser/blcklamb/src/__test__/parser.test.ts
2       1       parser/blcklamb/src/gitLogToJSONParser.ts
1       1       parser/blcklamb/src/index.ts
4       0       parser/blcklamb/tsconfig.build.json
2094    148     parser/blcklamb/yarn.lock

commit a1cd5106e4a5ed838ce67fdfa04eefacf0f49c2b ce80067fb8a80c78a29ad55d95d38491105dc464
Author:     chaejung Kim <whenucan35@gmail.com>
AuthorDate: Sun Jul 24 20:02:45 2022 +0900
Commit:     chaejung Kim <whenucan35@gmail.com>
CommitDate: Sun Jul 24 20:02:45 2022 +0900

    feat: make temporary test file

3       0       parser/blcklamb/src/gitLogToJSONParser.ts
2       0       parser/blcklamb/src/index.ts

commit ce80067fb8a80c78a29ad55d95d38491105dc464 6f06261e15b611091eb69246a045d548d42892c0
Author:     chaejung Kim <whenucan35@gmail.com>
AuthorDate: Sun Jul 24 20:02:32 2022 +0900
Commit:     chaejung Kim <whenucan35@gmail.com>
CommitDate: Sun Jul 24 20:02:32 2022 +0900

    feat: configuration initialize

20      0       parser/blcklamb/.eslintrc.cjs
132     0       parser/blcklamb/.gitignore
19      0       parser/blcklamb/package.json
48      0       parser/blcklamb/tsconfig.json
929     0       parser/blcklamb/yarn.lock

commit 6f06261e15b611091eb69246a045d548d42892c0 5e104bd61bd266624bbd968200123ef2d283a533
Author:     chaejung Kim <whenucan35@gmail.com>
AuthorDate: Sun Jul 24 20:01:47 2022 +0900
Commit:     chaejung Kim <whenucan35@gmail.com>
CommitDate: Sun Jul 24 20:01:47 2022 +0900

    feat: README.md

17      0       parser/blcklamb/README.md

commit 5e104bd61bd266624bbd968200123ef2d283a533 b2a1cb8641035f7e6e64365053693dd78f8d9299
Author:     snowy <chocoheim@gusty.local>
AuthorDate: Sat Jul 23 20:14:02 2022 +0900
Commit:     snowy <chocoheim@gusty.local>
CommitDate: Sat Jul 23 20:14:02 2022 +0900

    chore: CODEOWNERS에 전체 인원 추가!

1       0       .github/CODEOWNERS

commit b2a1cb8641035f7e6e64365053693dd78f8d9299 bdf484bf972c627681d3cf32b84c2de9c42c2fe6
Author:     snowy <chocoheim@gusty.local>
AuthorDate: Thu Jul 21 04:20:39 2022 +0900
Commit:     snowy <chocoheim@gusty.local>
CommitDate: Thu Jul 21 04:20:39 2022 +0900

    doc: update readme

8       6       README.md

commit bdf484bf972c627681d3cf32b84c2de9c42c2fe6 07d9a64ec4dd0e4cf1474caffe8b2ac1fc9c9ad5
Author:     snowy <chocoheim@gusty.local>
AuthorDate: Thu Jul 21 04:17:25 2022 +0900
Commit:     snowy <chocoheim@gusty.local>
CommitDate: Thu Jul 21 04:17:25 2022 +0900

    chore: add readme samples

1       0       crawler/ytaek/README.md
1       0       icicle/ytaek/README.md
1       0       linechart/ytaek/README.md
1       0       parser/ytaek/README.md

commit 07d9a64ec4dd0e4cf1474caffe8b2ac1fc9c9ad5 0c26b12ce146b8ee31f16b8a493ec518b5128bdb
Author:     snowy <chocoheim@gusty.local>
AuthorDate: Thu Jul 21 04:13:34 2022 +0900
Commit:     snowy <chocoheim@gusty.local>
CommitDate: Thu Jul 21 04:13:34 2022 +0900

    chore: structure directories

0       1       analysis-engine/ytaek/README.md
0       1       view/ytaek/README.md

commit 0c26b12ce146b8ee31f16b8a493ec518b5128bdb 66e0087aea45763582e6108caa340cdd1a7e6fbe
Author:     snowy <chocoheim@gusty.local>
AuthorDate: Mon Jul 18 15:00:00 2022 +0900
Commit:     snowy <chocoheim@gusty.local>
CommitDate: Mon Jul 18 15:00:00 2022 +0900

    chore: Update empty README for directory init

1       0       view/ytaek/README.md

commit 66e0087aea45763582e6108caa340cdd1a7e6fbe 296a6cf69dc46af112918cb50724df3b70cc36b3
Author:     ytaek <ytaek.kim@hcil.snu.ac.kr>
AuthorDate: Mon Jul 18 14:59:11 2022 +0900
Commit:     GitHub <noreply@github.com>
CommitDate: Mon Jul 18 14:59:11 2022 +0900

    docs: Update README

14      0       README.md

commit 296a6cf69dc46af112918cb50724df3b70cc36b3
Author:     snowy <chocoheim@gusty.local>
AuthorDate: Mon Jul 18 14:47:45 2022 +0900
Commit:     snowy <chocoheim@gusty.local>
CommitDate: Mon Jul 18 14:47:45 2022 +0900

    docs: initial commit with docs

3       0       README.md
1       0       analysis-engine/ytaek/README.md

`;
export const exampleResult02 = [
  {
    commit: [
      "5d3f94e4072863b98dc17c3e43d77c98473bd42f",
      "224512334c9526a24ef49af030f93884102a4d2b",
    ],
    Author: "chaejung Kim",
    AuthorEmail: "whenucan35@gmail.com",
    AuthorDate: "Fri Jul 29 20:01:18 2022 +0900",
    Committer: "chaejung Kim <whenucan35@gmail.com>",
    CommitterEmail: "whenucan35@gmail.com",
    CommitDate: "Fri Jul 29 20:02:36 2022 +0900",
    message: "Feat: log to JSON function, parse01",
    fileChanged: [[Object]],
  },
  {
    commit: [
      "224512334c9526a24ef49af030f93884102a4d2b",
      "24a6cd8b80944fe18e50fc286211a5c7bb4b0c14",
    ],
    Author: "chaejung Kim",
    AuthorEmail: "whenucan35@gmail.com",
    AuthorDate: "Fri Jul 29 20:00:51 2022 +0900",
    Committer: "chaejung Kim <whenucan35@gmail.com>",
    CommitterEmail: "whenucan35@gmail.com",
    CommitDate: "Fri Jul 29 20:02:36 2022 +0900",
    message: "Fix: typo and bad category name",
    fileChanged: [[Object]],
  },
  {
    commit: [
      "24a6cd8b80944fe18e50fc286211a5c7bb4b0c14",
      "0421e013e1356afb344b0884b7c2623f321c87f3",
    ],
    Author: "chaejung Kim",
    AuthorEmail: "whenucan35@gmail.com",
    AuthorDate: "Fri Jul 29 20:00:26 2022 +0900",
    Committer: "chaejung Kim <whenucan35@gmail.com>",
    CommitterEmail: "whenucan35@gmail.com",
    CommitDate: "Fri Jul 29 20:02:36 2022 +0900",
    message: "Fix: toBe to toStrictEqual",
    fileChanged: [[Object]],
  },
  {
    commit: [
      "0421e013e1356afb344b0884b7c2623f321c87f3",
      "250205fbfe9733e6e575045299a621640a17529d",
    ],
    Author: "chaejung Kim",
    AuthorEmail: "whenucan35@gmail.com",
    AuthorDate: "Fri Jul 29 16:36:42 2022 +0900",
    Committer: "chaejung Kim <whenucan35@gmail.com>",
    CommitterEmail: "whenucan35@gmail.com",
    CommitDate: "Fri Jul 29 20:02:36 2022 +0900",
    message: "Test: make test case exampleLog01, exampleResult01",
    fileChanged: [[Object], [Object]],
  },
  {
    commit: [
      "250205fbfe9733e6e575045299a621640a17529d",
      "a1cd5106e4a5ed838ce67fdfa04eefacf0f49c2b",
    ],
    Author: "chaejung Kim",
    AuthorEmail: "whenucan35@gmail.com",
    AuthorDate: "Fri Jul 29 15:21:50 2022 +0900",
    Committer: "chaejung Kim <whenucan35@gmail.com>",
    CommitterEmail: "whenucan35@gmail.com",
    CommitDate: "Fri Jul 29 20:02:36 2022 +0900",
    message: "Feat: setting for jest",
    fileChanged: [
      [Object],
      [Object],
      [Object],
      [Object],
      [Object],
      [Object],
      [Object],
      [Object],
    ],
  },
  {
    commit: [
      "a1cd5106e4a5ed838ce67fdfa04eefacf0f49c2b",
      "ce80067fb8a80c78a29ad55d95d38491105dc464",
    ],
    Author: "chaejung Kim",
    AuthorEmail: "whenucan35@gmail.com",
    AuthorDate: "Sun Jul 24 20:02:45 2022 +0900",
    Committer: "chaejung Kim <whenucan35@gmail.com>",
    CommitterEmail: "whenucan35@gmail.com",
    CommitDate: "Sun Jul 24 20:02:45 2022 +0900",
    message: "feat: make temporary test file",
    fileChanged: [[Object], [Object]],
  },
  {
    commit: [
      "ce80067fb8a80c78a29ad55d95d38491105dc464",
      "6f06261e15b611091eb69246a045d548d42892c0",
    ],
    Author: "chaejung Kim",
    AuthorEmail: "whenucan35@gmail.com",
    AuthorDate: "Sun Jul 24 20:02:32 2022 +0900",
    Committer: "chaejung Kim <whenucan35@gmail.com>",
    CommitterEmail: "whenucan35@gmail.com",
    CommitDate: "Sun Jul 24 20:02:32 2022 +0900",
    message: "feat: configuration initialize",
    fileChanged: [[Object], [Object], [Object], [Object], [Object]],
  },
  {
    commit: [
      "6f06261e15b611091eb69246a045d548d42892c0",
      "5e104bd61bd266624bbd968200123ef2d283a533",
    ],
    Author: "chaejung Kim",
    AuthorEmail: "whenucan35@gmail.com",
    AuthorDate: "Sun Jul 24 20:01:47 2022 +0900",
    Committer: "chaejung Kim <whenucan35@gmail.com>",
    CommitterEmail: "whenucan35@gmail.com",
    CommitDate: "Sun Jul 24 20:01:47 2022 +0900",
    message: "feat: README.md",
    fileChanged: [[Object]],
  },
  {
    commit: [
      "5e104bd61bd266624bbd968200123ef2d283a533",
      "b2a1cb8641035f7e6e64365053693dd78f8d9299",
    ],
    Author: "snowy",
    AuthorEmail: "chocoheim@gusty.local",
    AuthorDate: "Sat Jul 23 20:14:02 2022 +0900",
    Committer: "snowy <chocoheim@gusty.local>",
    CommitterEmail: "chocoheim@gusty.local",
    CommitDate: "Sat Jul 23 20:14:02 2022 +0900",
    message: "chore: CODEOWNERS에 전체 인원 추가!",
    fileChanged: [[Object]],
  },
  {
    commit: [
      "b2a1cb8641035f7e6e64365053693dd78f8d9299",
      "bdf484bf972c627681d3cf32b84c2de9c42c2fe6",
    ],
    Author: "snowy",
    AuthorEmail: "chocoheim@gusty.local",
    AuthorDate: "Thu Jul 21 04:20:39 2022 +0900",
    Committer: "snowy <chocoheim@gusty.local>",
    CommitterEmail: "chocoheim@gusty.local",
    CommitDate: "Thu Jul 21 04:20:39 2022 +0900",
    message: "doc: update readme",
    fileChanged: [[Object]],
  },
  {
    commit: [
      "bdf484bf972c627681d3cf32b84c2de9c42c2fe6",
      "07d9a64ec4dd0e4cf1474caffe8b2ac1fc9c9ad5",
    ],
    Author: "snowy",
    AuthorEmail: "chocoheim@gusty.local",
    AuthorDate: "Thu Jul 21 04:17:25 2022 +0900",
    Committer: "snowy <chocoheim@gusty.local>",
    CommitterEmail: "chocoheim@gusty.local",
    CommitDate: "Thu Jul 21 04:17:25 2022 +0900",
    message: "chore: add readme samples",
    fileChanged: [[Object], [Object], [Object], [Object]],
  },
  {
    commit: [
      "07d9a64ec4dd0e4cf1474caffe8b2ac1fc9c9ad5",
      "0c26b12ce146b8ee31f16b8a493ec518b5128bdb",
    ],
    Author: "snowy",
    AuthorEmail: "chocoheim@gusty.local",
    AuthorDate: "Thu Jul 21 04:13:34 2022 +0900",
    Committer: "snowy <chocoheim@gusty.local>",
    CommitterEmail: "chocoheim@gusty.local",
    CommitDate: "Thu Jul 21 04:13:34 2022 +0900",
    message: "chore: structure directories",
    fileChanged: [[Object], [Object]],
  },
  {
    commit: [
      "0c26b12ce146b8ee31f16b8a493ec518b5128bdb",
      "66e0087aea45763582e6108caa340cdd1a7e6fbe",
    ],
    Author: "snowy",
    AuthorEmail: "chocoheim@gusty.local",
    AuthorDate: "Mon Jul 18 15:00:00 2022 +0900",
    Committer: "snowy <chocoheim@gusty.local>",
    CommitterEmail: "chocoheim@gusty.local",
    CommitDate: "Mon Jul 18 15:00:00 2022 +0900",
    message: "chore: Update empty README for directory init",
    fileChanged: [[Object]],
  },
  {
    commit: [
      "66e0087aea45763582e6108caa340cdd1a7e6fbe",
      "296a6cf69dc46af112918cb50724df3b70cc36b3",
    ],
    Author: "ytaek",
    AuthorEmail: "ytaek.kim@hcil.snu.ac.kr",
    AuthorDate: "Mon Jul 18 14:59:11 2022 +0900",
    Committer: "GitHub <noreply@github.com>",
    CommitterEmail: "noreply@github.com",
    CommitDate: "Mon Jul 18 14:59:11 2022 +0900",
    message: "docs: Update README",
    fileChanged: [[Object]],
  },
  {
    commit: ["296a6cf69dc46af112918cb50724df3b70cc36b3", undefined],
    Author: "snowy",
    AuthorEmail: "chocoheim@gusty.local",
    AuthorDate: "Mon Jul 18 14:47:45 2022 +0900",
    Committer: "snowy <chocoheim@gusty.local>",
    CommitterEmail: "chocoheim@gusty.local",
    CommitDate: "Mon Jul 18 14:47:45 2022 +0900",
    message: "docs: initial commit with docs",
    fileChanged: [[Object], [Object]],
  },
];
