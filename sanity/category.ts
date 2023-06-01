import { defineType, defineField } from "sanity"
export const category = defineType({
    name: "category",
    title: "Catagory",
    type: "document",
    fields: [
        defineField({
            name: "name",
            type: "string",
            title: "category Name",
        })
    ]
})