export const product = {
    name: "product",
    type: "document",
    title: "Product",
    fields: [
        {
            name: "title",
            type: "string",
            title: "Title"
        }, {
            name: "description",
            type: "string",
            title: "Description"
        },
        {
            name: "price",
            title: "Product Price",
            type: "number"
        },
        {
            name: "image",
            type: "image",
            title: "Image"
        },
        {
            name: "category",
            type: "reference",
            to: { type: "category" },
            title: "product Category"
        }
    ]
}