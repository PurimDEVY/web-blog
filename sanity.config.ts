import { deskTool } from 'sanity/desk';
import { defineConfig } from 'sanity';
import schemas from './sanity/schemas';

const config = defineConfig({
    projectId: "bor6ylfk",
    dataset: "production",
    title: "My Personal Blog",
    apiVersion: "2023-07-17",
    basePath: "/admin",
    plugins: [deskTool()],
    schema: {types:schemas}

})

export default config;