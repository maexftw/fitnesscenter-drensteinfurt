import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID || "dummy-client-id",
  // Get this from tina.io
  token: process.env.TINA_TOKEN || "dummy-token",

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        name: "page",
        label: "Pages",
        path: "content/pages",
        format: "md",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "heroHeadline1",
            label: "Hero Headline 1",
          },
          {
            type: "string",
            name: "heroHeadline2",
            label: "Hero Headline 2",
          },
          {
            type: "string",
            name: "heroSubheadline",
            label: "Hero Subheadline",
            ui: {
                component: "textarea"
            }
          },
          {
            type: "object",
            name: "pricing",
            label: "Pricing Plans",
            list: true,
            fields: [
                {
                    type: "string",
                    name: "name",
                    label: "Plan Name"
                },
                {
                    type: "boolean",
                    name: "featured",
                    label: "Featured Plan"
                },
                {
                    type: "string",
                    name: "price",
                    label: "Price"
                },
                {
                    type: "string",
                    name: "period",
                    label: "Period (e.g., / mtl.)"
                },
                {
                    type: "string",
                    name: "features",
                    label: "Features",
                    list: true
                }
            ]
          }
        ],
      },
    ],
  },
});
