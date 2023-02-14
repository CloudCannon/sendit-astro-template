module.exports = {
  paths: {
    data: "data",
    static: "public",
    uploads: "public/uploads",
  },
  collections_config: {
    data: {
      path: "data",
      disable_add: true,
      disable_add_folder: true,
    },
    posts: {
      path: "src/content/blog",
      output: true,
      url: "/blog/[slug]",
      _enabled_editors: ["content", "visual"],
      add_options: [
        {
          name: "Add New Post",
          schema: "default",
          icon: "post_add",
        },
      ],
      schemas: {
        default: {
          name: "New Post",
          path: "schemas/post.md",
        },
      },
      _inputs: {
        title: {
          empty_type: "string",
        },
        image: {
          empty_type: "string",
        },
        image_alt: {
          empty_type: "string",
        },
        author: {
          empty_type: "string",
        },
        tags: {
          type: "multiselect",
          allow_create: true,
          empty_type: "array",
        },
      }
    },
    pages: {
      path: "src/content/pages",
      url: (filePath, parsed, { buildUrl }) =>
        buildUrl(filePath, parsed, "/[slug]/").replace(/^\/_/, "/"),
      output: true,
      icon: "wysiwyg",
      _enabled_editors: ["visual"],
      add_options: [
        {
          name: "Add New Page",
          schema: "default",
          icon: "note_add",
        },
      ],
      schemas: {
        default: {
          name: "New Page",
          path: "schemas/page.md",
          new_preview_url: "/",
        },
        paginated_collection: {
          path: "schemas/paginated-collection.md",
        },
      },
      _inputs: {
        content_blocks: {
          empty_type: "array",
        },
      },
      filter: {
        base: "strict",
      },
    },
  },
  _inputs: {
    layout: {
      hidden: true,
    },
    date: {
      instance_value: "now",
    },
    title_suffix: {
      comment:
        "Added at the end of the title and highlighted in a different color",
    },
    page_size: {
      type: "number",
      comment: "The number of collection items to list per page",
    },
    social: {
      options: {
        preview: {
          icon: "link",
        },
      },
    },
    links: {
      options: {
        preview: {
          icon: "link",
        },
      },
    },
    items: {
      options: {
        preview: {
          icon: "link",
        },
      },
    },
    "social[*].icon": {
      type: "select",
      options: {
        values: [
          "ph-facebook-logo",
          "ph-instagram-logo",
          "ph-twitter-logo",
          "ph-github-logo",
          "ph-youtube-logo",
        ],
      },
    },
    logo_url: {
      comment: "Link for the logo in the top left of the footer",
    },
    copyright: {
      comment: "Automatically prefixed with the current year",
    },
    isActive: {
      type: "switch",
    },
    page_description: {
      comment: "Defaults to the description set in the Site SEO data file",
    },
    favicon_icon: {
      type: "image",
      comment: "For the shortcut icon meta tag",
    },
    faivcon_image: {
      type: "image",
      comment: "For the icon meta tag",
    },
    canonical_url: {
      comment: "Defaults to the pages url",
    },
    featured_image: {
      comment: "Defaults to the image set in the Site SEO data file",
    },
    open_graph_type: {
      comment: "Defaults to the type 'website'",
    },
    author_twitter_handle: {
      comment:
        "Defaults to the twitter site value set in the Site SEO data file",
    },
    no_index: {
      type: "checkbox",
      comment:
        "When selected this removes the page from your sitemap and adds the noindex robots meta tag",
    },
  },
  _structures: {
    features: {
      values: [
        {
          value: {
            item: null,
            isActive: null,
          },
        },
      ],
    },
  },
};
