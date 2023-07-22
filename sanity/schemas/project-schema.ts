import { title } from "process";

const blogSchema = {
    name: 'blog',
    title: 'blog',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string'
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            option: { source: 'name' }
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            option: { hotspot: true },
            fieldA: [
                {
                    name: 'alt',
                    title: 'Alt',
                    type: 'string'
                }
            ]
        },
        {
            name: 'url',
            title: 'URL',
            type: 'url'
        },
        {
            name: 'content',
            title: 'Content',
            type: 'array',
            of: [{type: "block"}],
        }
    ]
}

export default blogSchema;