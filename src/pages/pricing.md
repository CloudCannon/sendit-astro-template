---
layout: "../layouts/PageLayout.astro"
title: Pricing
permalink: /pricing/
seo:
  page_description:
  canonical_url:
  featured_image:
  featured_image_alt:
  author_twitter_handle:
  open_graph_type:
  no_index: false
content_blocks:
  - _bookshop_name: pricing/hero
    title: A plan for everyone
    description: Sendit is easy to get started and we have a pricing plan for businesses of all sizes.

  - _bookshop_name: pricing/table
    pricing_tier:
      - tier: Free
        description: Everything you need to get started.
        price: 0
        has_discount: false
        discount_price: 0
        is_active: false
        feature:
          - item: 1 Email Campaign
            is_active: true
          - item: 1 Year Premium Support
            is_active: true
          - item: Regular Update for 1 Year
            is_active: true
          - item: 90+ Widgets & Extensions
            is_active: true
          - item: 23+ Templates
            is_active: true
          - item: Over 800 Section Blocks
            is_active: false
          - item: Support
            is_active: false
          - item: 3 filters
            is_active: false
          - item: Unlimited activity history
            is_active: false
        button:
          link: /signup
          text: Try This Free
      - tier: Pro
        description: More collaborative power and unlimited boards for fast-growing.
        price: 199
        has_discount: true
        discount_price: 125
        is_active: true
        feature:
          - item: 1 Email Campaign
            is_active: true
          - item: 1 Year Premium Support
            is_active: true
          - item: Regular Update for 1 Year
            is_active: true
          - item: 90+ Widgets & Extensions
            is_active: true
          - item: 23+ Templates
            is_active: true
          - item: Over 800 Section Blocks
            is_active: true
          - item: Support
            is_active: false
          - item: 3 filters
            is_active: false
          - item: Unlimited activity history
            is_active: false
        button:
          link: /signup
          text: Try This Free
      - tier: Business
        description: For starters Includes unlimited members
        price: 499
        has_discount: true
        discount_price: 350
        is_active: false
        feature:
          - item: 1 Email Campaign
            is_active: true
          - item: 1 Year Premium Support
            is_active: true
          - item: Regular Update for 1 Year
            is_active: true
          - item: 90+ Widgets & Extensions
            is_active: true
          - item: 23+ Templates
            is_active: true
          - item: Over 800 Section Blocks
            is_active: true
          - item: Support
            is_active: true
          - item: 3 filters
            is_active: true
          - item: Unlimited activity history
            is_active: true
        button:
          link: /signup
          text: Try This Free

  - _bookshop_name: global/faq
    title: Have
    title_suffix: Questions?
    description: We believe that a good email marketing strategy is the key to growth. So we’re helping you grow your business with tools and resources that make email marketing easy.
    FAQ:
      - title: Is there a maximum numbers of emails I can send each month?
        description: No, the prices include unlimited emails. Send to your heart's content.
      - title: Where can I find out more information?
        description: Right here on this website, or contact our support team.
      - title: Do you have pricing for non-profits?
        description: Yes, contact our support team and we'll get you set up on our non-profit plan.
      - title: What forms of payment do you accept?
        description: We accept credit cards, checks, and cash.
      - title: In which currencies can I make payments?
        description: All payments are in **USD**.
---
