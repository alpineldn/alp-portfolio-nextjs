// schemas/post.js

export default {
  name: 'meta',
  title: 'Meta',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Your page title.',
    },
    {
      name: 'path',
      title: 'Path',
      type: 'slug',
      description: 'Your meta path to identify the current page.',
      options: {
        source: 'title',
        maxLength: 100,
      },
    },
    {
      name: 'body',
      title: 'Body',
      type: 'text',
      description: 'The body with custom meta in JSON format only*',
      validation: Rule =>
        Rule.custom(text => {
          try {
            // Attempt to parse the text as JSON
            JSON.parse(text);
            return true;
          } catch (error) {
            // If parsing fails, return an error message
            return 'The body must be a valid JSON object.';
          }
        }),
    },
    // Add your custom meta tags field
    {
      name: 'meta',
      title: 'Meta Tags',
      type: 'object',
      fields: [
        {
          name: 'description',
          title: 'Description',
          type: 'text',
          description: 'Meta description for the post',
        },
        {
          name: 'keywords',
          title: 'Keywords',
          type: 'array',
          of: [{ type: 'string' }],
          description: 'Meta keywords for the post',
        },
      ],
    },
  ],
};
