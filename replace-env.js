const fs = require("fs");
const environmentTemplate = `
  export const environment = {
    message: '${process.env.MESSAGE}',
  };
`;

fs.writeFileSync("src/environments/environment.ts", environmentTemplate);
