import { createClient } from "tinacms/dist/client";
import { queries } from "./types";
export const client = createClient({ cacheDir: '/app/tina/__generated__/.cache/1770714307972', url: 'https://content.tinajs.io/2.1/content/dummy-client-id/github/main', token: 'dummy-token', queries,  });
export default client;
