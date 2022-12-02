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
      path: "src/pages/blog",
      output: true,
      url: "/blog/[slug]",
      _enabled_editors: ["content", "visual"],
      schemas: {
        default: {
          name: "New Post",
          path: "schemas/post.md",
        },
      },
    },
    pages: {
      path: "src/pages",
      url: (filePath, parsed, {buildUrl}) => buildUrl(filePath, parsed, '/[slug]/').replace(/^\/_/,'/'),
      output: true,
      icon: "wysiwyg",
      _enabled_editors: ["visual"],
      schemas: {
        default: {
          name: "New Page",
          path: "schemas/page.md",
          new_preview_url: '/'
        },
        paginated_collection: {
          path: "schemas/paginated-collection.md",
        },
      },
      filter: {
        base: "strict"
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
    // pagination.data: {
    //   hidden: true
    // },
    // pagination.alias: {
    //   hidden: true
    // },
    // pagination.size: {
    //   type: "number"
    // },
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
