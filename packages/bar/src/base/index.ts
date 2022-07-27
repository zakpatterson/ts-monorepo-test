import { meaningOfLife as baseMeaning } from "@nighttrax/foo";
import { meaningOfLife } from "@nighttrax/foo/src/base";

const run = () => {
  /* eslint-disable no-console */
  console.log(`Subdirectory meaning: ${baseMeaning}`);

  console.log(`Root meaning: ${meaningOfLife}`);
};

export default run;
