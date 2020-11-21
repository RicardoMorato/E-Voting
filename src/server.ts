import * as dotenv from "dotenv";

import app from './app';

dotenv.config();

const { PORT } = process.env;

app.listen(PORT || 3333, () => {
  console.log(`Listening at port ${PORT || 3333}`);
});
