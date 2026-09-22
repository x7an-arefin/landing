# Relume React Library — Component → Image Map

- **Source:** https://www.relume.ai/react/components (relume React UI library, 1524 components, 68 categories)
- **Crawled:** 2026-09-21 (all 32 pages, 48 items/page, last page = 36 items)
- **Images:** downloaded locally into `public/reference-images/<category>/` (re-encoded to 800px-wide JPEG, ~32MB total).
  - Local path column is relative to repo root. Original full-res URL pattern: `https://cdn.prod.website-files.com/61789b489343c8242282a0ae/<asset>.png` (see `data/components.json` for exact per-item source URLs if needed).
  - Live behavior reference: open the **Preview** URL (Relume renders the real component).
- **Flags:** I = has interaction, U = uncommon, O = off-grid, B = bento

## Category index

| # | Category | Components | Anchor |
|---|----------|-----------|--------|
| 1 | application-shells | 16 | [application-shells](#application-shells) |
| 2 | banners | 10 | [banners](#banners) |
| 3 | uncommon-components | 30 | [uncommon-components](#uncommon-components) |
| 4 | uncommon-components-2 | 37 | [uncommon-components-2](#uncommon-components-2) |
| 5 | blog-headers | 16 | [blog-headers](#blog-headers) |
| 6 | blog-headers-2 | 16 | [blog-headers-2](#blog-headers-2) |
| 7 | blog-sections | 36 | [blog-sections](#blog-sections) |
| 8 | blog-post-headers | 5 | [blog-post-headers](#blog-post-headers) |
| 9 | card-headers | 2 | [card-headers](#card-headers) |
| 10 | career-sections | 27 | [career-sections](#career-sections) |
| 11 | comparison-sections | 15 | [comparison-sections](#comparison-sections) |
| 12 | contact-sections | 30 | [contact-sections](#contact-sections) |
| 13 | contact-modals | 6 | [contact-modals](#contact-modals) |
| 14 | long-form-content-sections | 32 | [long-form-content-sections](#long-form-content-sections) |
| 15 | cookies | 5 | [cookies](#cookies) |
| 16 | cta-sections | 36 | [cta-sections](#cta-sections) |
| 17 | cta-sections-grid-cards | 18 | [cta-sections-grid-cards](#cta-sections-grid-cards) |
| 18 | description-lists | 4 | [description-lists](#description-lists) |
| 19 | event-sections | 37 | [event-sections](#event-sections) |
| 20 | event-headers | 6 | [event-headers](#event-headers) |
| 21 | event-item-headers | 11 | [event-item-headers](#event-item-headers) |
| 22 | faq-sections | 14 | [faq-sections](#faq-sections) |
| 23 | category-filters | 6 | [category-filters](#category-filters) |
| 24 | footers | 17 | [footers](#footers) |
| 25 | forms | 20 | [forms](#forms) |
| 26 | gallery-sections | 26 | [gallery-sections](#gallery-sections) |
| 27 | grid-lists | 10 | [grid-lists](#grid-lists) |
| 28 | hero-header-sections | 55 | [hero-header-sections](#hero-header-sections) |
| 29 | header-sections | 27 | [header-sections](#header-sections) |
| 30 | hero-header-sections-grid-cards | 18 | [hero-header-sections-grid-cards](#hero-header-sections-grid-cards) |
| 31 | hero-header-sections-off-grid | 29 | [hero-header-sections-off-grid](#hero-header-sections-off-grid) |
| 32 | uncommon-components-part-3 | 15 | [uncommon-components-part-3](#uncommon-components-part-3) |
| 33 | feature-sections-left-1-2-col | 64 | [feature-sections-left-1-2-col](#feature-sections-left-1-2-col) |
| 34 | feature-sections-left-1-2-col-part-2 | 71 | [feature-sections-left-1-2-col-part-2](#feature-sections-left-1-2-col-part-2) |
| 35 | feature-sections-centre-1-2-col | 62 | [feature-sections-centre-1-2-col](#feature-sections-centre-1-2-col) |
| 36 | feature-sections-right-1-2-col | 34 | [feature-sections-right-1-2-col](#feature-sections-right-1-2-col) |
| 37 | feature-sections-3-col | 61 | [feature-sections-3-col](#feature-sections-3-col) |
| 38 | feature-sections-3-col-2 | 61 | [feature-sections-3-col-2](#feature-sections-3-col-2) |
| 39 | uncommon-components-timeline | 1 | [uncommon-components-timeline](#uncommon-components-timeline) |
| 40 | feature-sections-grid-cards | 53 | [feature-sections-grid-cards](#feature-sections-grid-cards) |
| 41 | feature-sections-off-grid | 43 | [feature-sections-off-grid](#feature-sections-off-grid) |
| 42 | feature-sections-overlapping-images | 15 | [feature-sections-overlapping-images](#feature-sections-overlapping-images) |
| 43 | feature-sections-tabs | 24 | [feature-sections-tabs](#feature-sections-tabs) |
| 44 | links-pages | 16 | [links-pages](#links-pages) |
| 45 | loaders | 5 | [loaders](#loaders) |
| 46 | signup-login-pages | 17 | [signup-login-pages](#signup-login-pages) |
| 47 | sign-up-log-in-modals | 5 | [sign-up-log-in-modals](#sign-up-log-in-modals) |
| 48 | logo-sections | 6 | [logo-sections](#logo-sections) |
| 49 | multi-step-forms | 46 | [multi-step-forms](#multi-step-forms) |
| 50 | navbars | 22 | [navbars](#navbars) |
| 51 | onboarding-forms | 17 | [onboarding-forms](#onboarding-forms) |
| 52 | page-headers | 5 | [page-headers](#page-headers) |
| 53 | portfolio-sections | 17 | [portfolio-sections](#portfolio-sections) |
| 54 | portfolio-headers | 12 | [portfolio-headers](#portfolio-headers) |
| 55 | pricing-sections | 17 | [pricing-sections](#pricing-sections) |
| 56 | pricing-sections-2 | 10 | [pricing-sections-2](#pricing-sections-2) |
| 57 | product-list-sections | 12 | [product-list-sections](#product-list-sections) |
| 58 | product-headers | 9 | [product-headers](#product-headers) |
| 59 | section-headers | 4 | [section-headers](#section-headers) |
| 60 | sidebars | 9 | [sidebars](#sidebars) |
| 61 | stacked-lists | 10 | [stacked-lists](#stacked-lists) |
| 62 | stat-cards | 8 | [stat-cards](#stat-cards) |
| 63 | stats-sections | 60 | [stats-sections](#stats-sections) |
| 64 | tables | 10 | [tables](#tables) |
| 65 | team-sections | 20 | [team-sections](#team-sections) |
| 66 | testimonial-sections | 41 | [testimonial-sections](#testimonial-sections) |
| 67 | timelines | 21 | [timelines](#timelines) |
| 68 | topbars | 4 | [topbars](#topbars) |

**Total: 1524 components / 68 categories**

---

## application-shells

Predicted behavior: Full app frame: fixed topbar + fixed sidebar nav, scrollable main content. Interactions: hover/active nav states, sidebar section collapse, mobile drawer fallback.

| # | Component | Local image | Flags | Relume preview |
|---|-----------|-------------|-------|----------------|
| 1 | Application Shell 1 | [`application-shells/application-shell1.jpg`](/reference-images/application-shells/application-shell1.jpg) | — | [open](https://www.relume.ai/preview?cid=application-shells/application-shell1&context=react) |
| 2 | Application Shell 2 | [`application-shells/application-shell2.jpg`](/reference-images/application-shells/application-shell2.jpg) | — | [open](https://www.relume.ai/preview?cid=application-shells/application-shell2&context=react) |
| 3 | Application Shell 3 | [`application-shells/application-shell3.jpg`](/reference-images/application-shells/application-shell3.jpg) | — | [open](https://www.relume.ai/preview?cid=application-shells/application-shell3&context=react) |
| 4 | Application Shell 4 | [`application-shells/application-shell4.jpg`](/reference-images/application-shells/application-shell4.jpg) | — | [open](https://www.relume.ai/preview?cid=application-shells/application-shell4&context=react) |
| 5 | Application Shell 5 | [`application-shells/application-shell5.jpg`](/reference-images/application-shells/application-shell5.jpg) | — | [open](https://www.relume.ai/preview?cid=application-shells/application-shell5&context=react) |
| 6 | Application Shell 6 | [`application-shells/application-shell6.jpg`](/reference-images/application-shells/application-shell6.jpg) | — | [open](https://www.relume.ai/preview?cid=application-shells/application-shell6&context=react) |
| 7 | Application Shell 7 | [`application-shells/application-shell7.jpg`](/reference-images/application-shells/application-shell7.jpg) | — | [open](https://www.relume.ai/preview?cid=application-shells/application-shell7&context=react) |
| 8 | Application Shell 8 | [`application-shells/application-shell8.jpg`](/reference-images/application-shells/application-shell8.jpg) | — | [open](https://www.relume.ai/preview?cid=application-shells/application-shell8&context=react) |
| 9 | Application Shell 9 | [`application-shells/application-shell9.jpg`](/reference-images/application-shells/application-shell9.jpg) | — | [open](https://www.relume.ai/preview?cid=application-shells/application-shell9&context=react) |
| 10 | Application Shell 10 | [`application-shells/application-shell10.jpg`](/reference-images/application-shells/application-shell10.jpg) | — | [open](https://www.relume.ai/preview?cid=application-shells/application-shell10&context=react) |
| 11 | Application Shell 11 | [`application-shells/application-shell11.jpg`](/reference-images/application-shells/application-shell11.jpg) | — | [open](https://www.relume.ai/preview?cid=application-shells/application-shell11&context=react) |
| 12 | Application Shell 12 | [`application-shells/application-shell12.jpg`](/reference-images/application-shells/application-shell12.jpg) | — | [open](https://www.relume.ai/preview?cid=application-shells/application-shell12&context=react) |
| 13 | Application Shell 13 | [`application-shells/application-shell13.jpg`](/reference-images/application-shells/application-shell13.jpg) | — | [open](https://www.relume.ai/preview?cid=application-shells/application-shell13&context=react) |
| 14 | Application Shell 14 | [`application-shells/application-shell14.jpg`](/reference-images/application-shells/application-shell14.jpg) | — | [open](https://www.relume.ai/preview?cid=application-shells/application-shell14&context=react) |
| 15 | Application Shell 15 | [`application-shells/application-shell15.jpg`](/reference-images/application-shells/application-shell15.jpg) | — | [open](https://www.relume.ai/preview?cid=application-shells/application-shell15&context=react) |
| 16 | Application Shell 16 | [`application-shells/application-shell6_dup2.jpg`](/reference-images/application-shells/application-shell6_dup2.jpg) | — | [open](https://www.relume.ai/preview?cid=application-shells/application-shell6&context=react) |

## banners

Predicted behavior: Standalone promo strip: eyebrow/heading + CTA button, image on one side. Mostly static; responsive stack on mobile.

| # | Component | Local image | Flags | Relume preview |
|---|-----------|-------------|-------|----------------|
| 17 | Banner 1 | [`banners/banner1_component.jpg`](/reference-images/banners/banner1_component.jpg) | I | [open](https://www.relume.ai/preview?cid=banners/banner1_component&context=react) |
| 18 | Banner 2 | [`banners/banner2_component.jpg`](/reference-images/banners/banner2_component.jpg) | I | [open](https://www.relume.ai/preview?cid=banners/banner2_component&context=react) |
| 19 | Banner 3 | [`banners/banner3_component.jpg`](/reference-images/banners/banner3_component.jpg) | I | [open](https://www.relume.ai/preview?cid=banners/banner3_component&context=react) |
| 20 | Banner 4 | [`banners/banner4_component.jpg`](/reference-images/banners/banner4_component.jpg) | I | [open](https://www.relume.ai/preview?cid=banners/banner4_component&context=react) |
| 21 | Banner 5 | [`banners/banner5_component.jpg`](/reference-images/banners/banner5_component.jpg) | I | [open](https://www.relume.ai/preview?cid=banners/banner5_component&context=react) |
| 22 | Banner 6 | [`banners/banner6_component.jpg`](/reference-images/banners/banner6_component.jpg) | I | [open](https://www.relume.ai/preview?cid=banners/banner6_component&context=react) |
| 23 | Banner 7 | [`banners/banner7_component.jpg`](/reference-images/banners/banner7_component.jpg) | I | [open](https://www.relume.ai/preview?cid=banners/banner7_component&context=react) |
| 24 | Banner 8 | [`banners/banner8_component.jpg`](/reference-images/banners/banner8_component.jpg) | I | [open](https://www.relume.ai/preview?cid=banners/banner8_component&context=react) |
| 25 | Banner 9 | [`banners/banner9_component.jpg`](/reference-images/banners/banner9_component.jpg) | I | [open](https://www.relume.ai/preview?cid=banners/banner9_component&context=react) |
| 26 | Banner 10 | [`banners/banner10_component.jpg`](/reference-images/banners/banner10_component.jpg) | I | [open](https://www.relume.ai/preview?cid=banners/banner10_component&context=react) |

## uncommon-components

Predicted behavior: Experimental layouts: bento grids, marquees, stickers, bold gradients. JS only where interaction is implied.

| # | Component | Local image | Flags | Relume preview |
|---|-----------|-------------|-------|----------------|
| 27 | Banner 11 | [`uncommon-components/section_banner11.jpg`](/reference-images/uncommon-components/section_banner11.jpg) | IU | [open](https://www.relume.ai/preview?cid=uncommon-components/section_banner11&context=react) |
| 28 | Banner 12 | [`uncommon-components/section_banner11.jpg`](/reference-images/uncommon-components/section_banner11.jpg) | IU | [open](https://www.relume.ai/preview?cid=uncommon-components/section_banner12&context=react) |
| 29 | Banner 13 | [`uncommon-components/section_banner13.jpg`](/reference-images/uncommon-components/section_banner13.jpg) | IU | [open](https://www.relume.ai/preview?cid=uncommon-components/section_banner13&context=react) |
| 30 | Banner 14 | [`uncommon-components/section_banner14.jpg`](/reference-images/uncommon-components/section_banner14.jpg) | IU | [open](https://www.relume.ai/preview?cid=uncommon-components/section_banner14&context=react) |
| 259 | CTA 37 | [`uncommon-components/section_cta37.jpg`](/reference-images/uncommon-components/section_cta37.jpg) | IU | [open](https://www.relume.ai/preview?cid=uncommon-components/section_cta37&context=react) |
| 260 | CTA 38 | [`uncommon-components/section_cta38.jpg`](/reference-images/uncommon-components/section_cta38.jpg) | IU | [open](https://www.relume.ai/preview?cid=uncommon-components/section_cta38&context=react) |
| 279 | CTA 57 | [`uncommon-components/section_cta57.jpg`](/reference-images/uncommon-components/section_cta57.jpg) | IU | [open](https://www.relume.ai/preview?cid=uncommon-components/section_cta57&context=react) |
| 280 | CTA 58 | [`uncommon-components/section_cta58.jpg`](/reference-images/uncommon-components/section_cta58.jpg) | IU | [open](https://www.relume.ai/preview?cid=uncommon-components/section_cta58&context=react) |
| 419 | Gallery 24 | [`uncommon-components/section_gallery24.jpg`](/reference-images/uncommon-components/section_gallery24.jpg) | IU | [open](https://www.relume.ai/preview?cid=uncommon-components/section_gallery24&context=react) |
| 507 | Header 75 | [`uncommon-components/section_header75.jpg`](/reference-images/uncommon-components/section_header75.jpg) | IU | [open](https://www.relume.ai/preview?cid=uncommon-components/section_header75&context=react) |
| 508 | Header 76 | [`uncommon-components/section_header76.jpg`](/reference-images/uncommon-components/section_header76.jpg) | IU | [open](https://www.relume.ai/preview?cid=uncommon-components/section_header76&context=react) |
| 509 | Header 77 | [`uncommon-components/section_header77.jpg`](/reference-images/uncommon-components/section_header77.jpg) | IU | [open](https://www.relume.ai/preview?cid=uncommon-components/section_header77&context=react) |
| 510 | Header 78 | [`uncommon-components/section_header78.jpg`](/reference-images/uncommon-components/section_header78.jpg) | IU | [open](https://www.relume.ai/preview?cid=uncommon-components/section_header78&context=react) |
| 511 | Header 79 | [`uncommon-components/section_header79.jpg`](/reference-images/uncommon-components/section_header79.jpg) | IU | [open](https://www.relume.ai/preview?cid=uncommon-components/section_header79&context=react) |
| 512 | Header 80 | [`uncommon-components/section_header80.jpg`](/reference-images/uncommon-components/section_header80.jpg) | IU | [open](https://www.relume.ai/preview?cid=uncommon-components/section_header80&context=react) |
| 513 | Header 81 | [`uncommon-components/section_header81.jpg`](/reference-images/uncommon-components/section_header81.jpg) | IU | [open](https://www.relume.ai/preview?cid=uncommon-components/section_header81&context=react) |
| 514 | Header 82 | [`uncommon-components/section_header82.jpg`](/reference-images/uncommon-components/section_header82.jpg) | IU | [open](https://www.relume.ai/preview?cid=uncommon-components/section_header82&context=react) |
| 515 | Header 83 | [`uncommon-components/section_header83.jpg`](/reference-images/uncommon-components/section_header83.jpg) | IU | [open](https://www.relume.ai/preview?cid=uncommon-components/section_header83&context=react) |
| 534 | Header 102 | [`uncommon-components/section_header102.jpg`](/reference-images/uncommon-components/section_header102.jpg) | IU | [open](https://www.relume.ai/preview?cid=uncommon-components/section_header102&context=react) |
| 535 | Header 103 | [`uncommon-components/section_header103.jpg`](/reference-images/uncommon-components/section_header103.jpg) | IU | [open](https://www.relume.ai/preview?cid=uncommon-components/section_header103&context=react) |
| 932 | Layout 348 | [`uncommon-components/section_layout348.jpg`](/reference-images/uncommon-components/section_layout348.jpg) | IU | [open](https://www.relume.ai/preview?cid=uncommon-components/section_layout348&context=react) |
| 933 | Layout 349 | [`uncommon-components/section_layout349.jpg`](/reference-images/uncommon-components/section_layout349.jpg) | IU | [open](https://www.relume.ai/preview?cid=uncommon-components/section_layout349&context=react) |
| 934 | Layout 350 | [`uncommon-components/section_layout350.jpg`](/reference-images/uncommon-components/section_layout350.jpg) | IU | [open](https://www.relume.ai/preview?cid=uncommon-components/section_layout350&context=react) |
| 935 | Layout 351 | [`uncommon-components/section_layout351.jpg`](/reference-images/uncommon-components/section_layout351.jpg) | IU | [open](https://www.relume.ai/preview?cid=uncommon-components/section_layout351&context=react) |
| 937 | Layout 353 | [`uncommon-components/section_layout353.jpg`](/reference-images/uncommon-components/section_layout353.jpg) | U | [open](https://www.relume.ai/preview?cid=uncommon-components/section_layout353&context=react) |
| 938 | Layout 354 | [`uncommon-components/section_layout354.jpg`](/reference-images/uncommon-components/section_layout354.jpg) | U | [open](https://www.relume.ai/preview?cid=uncommon-components/section_layout354&context=react) |
| 939 | Layout 355 | [`uncommon-components/section_layout355.jpg`](/reference-images/uncommon-components/section_layout355.jpg) | U | [open](https://www.relume.ai/preview?cid=uncommon-components/section_layout355&context=react) |
| 940 | Layout 356 | [`uncommon-components/section_layout356.jpg`](/reference-images/uncommon-components/section_layout356.jpg) | U | [open](https://www.relume.ai/preview?cid=uncommon-components/section_layout356&context=react) |
| 941 | Layout 357 | [`uncommon-components/section_layout357.jpg`](/reference-images/uncommon-components/section_layout357.jpg) | U | [open](https://www.relume.ai/preview?cid=uncommon-components/section_layout357&context=react) |
| 1488 | Testimonial 32 | [`uncommon-components/section_testimonial32.jpg`](/reference-images/uncommon-components/section_testimonial32.jpg) | U | [open](https://www.relume.ai/preview?cid=uncommon-components/section_testimonial32&context=react) |

## uncommon-components-2

Predicted behavior: Experimental layouts set 2.

| # | Component | Local image | Flags | Relume preview |
|---|-----------|-------------|-------|----------------|
| 31 | Banner 15 | [`uncommon-components-2/section_banner15.jpg`](/reference-images/uncommon-components-2/section_banner15.jpg) | U | [open](https://www.relume.ai/preview?cid=uncommon-components-2/section_banner15&context=react) |
| 32 | Banner 16 | [`uncommon-components-2/section_banner16.jpg`](/reference-images/uncommon-components-2/section_banner16.jpg) | IU | [open](https://www.relume.ai/preview?cid=uncommon-components-2/section_banner16&context=react) |
| 536 | Header 104 | [`uncommon-components-2/section_header104.jpg`](/reference-images/uncommon-components-2/section_header104.jpg) | U | [open](https://www.relume.ai/preview?cid=uncommon-components-2/section_header104&context=react) |
| 537 | Header 105 | [`uncommon-components-2/section_header105.jpg`](/reference-images/uncommon-components-2/section_header105.jpg) | U | [open](https://www.relume.ai/preview?cid=uncommon-components-2/section_header105&context=react) |
| 538 | Header 106 | [`uncommon-components-2/section_header106.jpg`](/reference-images/uncommon-components-2/section_header106.jpg) | IU | [open](https://www.relume.ai/preview?cid=uncommon-components-2/section_header106&context=react) |
| 539 | Header 107 | [`uncommon-components-2/section_header107.jpg`](/reference-images/uncommon-components-2/section_header107.jpg) | IU | [open](https://www.relume.ai/preview?cid=uncommon-components-2/section_header107&context=react) |
| 540 | Header 108 | [`uncommon-components-2/section_header108.jpg`](/reference-images/uncommon-components-2/section_header108.jpg) | IU | [open](https://www.relume.ai/preview?cid=uncommon-components-2/section_header108&context=react) |
| 541 | Header 109 | [`uncommon-components-2/section_header109.jpg`](/reference-images/uncommon-components-2/section_header109.jpg) | IU | [open](https://www.relume.ai/preview?cid=uncommon-components-2/section_header109&context=react) |
| 571 | Header 139 | [`uncommon-components-2/section_header139.jpg`](/reference-images/uncommon-components-2/section_header139.jpg) | IU | [open](https://www.relume.ai/preview?cid=uncommon-components-2/section_header139&context=react) |
| 572 | Header 140 | [`uncommon-components-2/section_header140.jpg`](/reference-images/uncommon-components-2/section_header140.jpg) | IU | [open](https://www.relume.ai/preview?cid=uncommon-components-2/section_header140&context=react) |
| 573 | Header 141 | [`uncommon-components-2/section_header141.jpg`](/reference-images/uncommon-components-2/section_header141.jpg) | IU | [open](https://www.relume.ai/preview?cid=uncommon-components-2/section_header141&context=react) |
| 992 | Layout 408 | [`uncommon-components-2/section_layout408.jpg`](/reference-images/uncommon-components-2/section_layout408.jpg) | IU | [open](https://www.relume.ai/preview?cid=uncommon-components-2/section_layout408&context=react) |
| 993 | Layout 409 | [`uncommon-components-2/section_layout409.jpg`](/reference-images/uncommon-components-2/section_layout409.jpg) | IU | [open](https://www.relume.ai/preview?cid=uncommon-components-2/section_layout409&context=react) |
| 994 | Layout 410 | [`uncommon-components-2/section_layout410.jpg`](/reference-images/uncommon-components-2/section_layout410.jpg) | U | [open](https://www.relume.ai/preview?cid=uncommon-components-2/section_layout410&context=react) |
| 995 | Layout 411 | [`uncommon-components-2/section_layout411.jpg`](/reference-images/uncommon-components-2/section_layout411.jpg) | IU | [open](https://www.relume.ai/preview?cid=uncommon-components-2/section_layout411&context=react) |
| 996 | Layout 412 | [`uncommon-components-2/section_layout412.jpg`](/reference-images/uncommon-components-2/section_layout412.jpg) | IU | [open](https://www.relume.ai/preview?cid=uncommon-components-2/section_layout412&context=react) |
| 997 | Layout 413 | [`uncommon-components-2/section_layout413.jpg`](/reference-images/uncommon-components-2/section_layout413.jpg) | IU | [open](https://www.relume.ai/preview?cid=uncommon-components-2/section_layout413&context=react) |
| 998 | Layout 414 | [`uncommon-components-2/section_layout414.jpg`](/reference-images/uncommon-components-2/section_layout414.jpg) | IU | [open](https://www.relume.ai/preview?cid=uncommon-components-2/section_layout414&context=react) |
| 999 | Layout 415 | [`uncommon-components-2/section_layout415.jpg`](/reference-images/uncommon-components-2/section_layout415.jpg) | IU | [open](https://www.relume.ai/preview?cid=uncommon-components-2/section_layout415&context=react) |
| 1000 | Layout 416 | [`uncommon-components-2/section_layout416.jpg`](/reference-images/uncommon-components-2/section_layout416.jpg) | IU | [open](https://www.relume.ai/preview?cid=uncommon-components-2/section_layout416&context=react) |
| 1001 | Layout 417 | [`uncommon-components-2/section_layout417.jpg`](/reference-images/uncommon-components-2/section_layout417.jpg) | IU | [open](https://www.relume.ai/preview?cid=uncommon-components-2/section_layout417&context=react) |
| 1002 | Layout 418 | [`uncommon-components-2/section_layout418.jpg`](/reference-images/uncommon-components-2/section_layout418.jpg) | IU | [open](https://www.relume.ai/preview?cid=uncommon-components-2/section_layout418&context=react) |
| 1003 | Layout 419 | [`uncommon-components-2/section_layout419.jpg`](/reference-images/uncommon-components-2/section_layout419.jpg) | U | [open](https://www.relume.ai/preview?cid=uncommon-components-2/section_layout419&context=react) |
| 1004 | Layout 420 | [`uncommon-components-2/section_layout420.jpg`](/reference-images/uncommon-components-2/section_layout420.jpg) | U | [open](https://www.relume.ai/preview?cid=uncommon-components-2/section_layout420&context=react) |
| 1005 | Layout 421 | [`uncommon-components-2/section_layout421.jpg`](/reference-images/uncommon-components-2/section_layout421.jpg) | IU | [open](https://www.relume.ai/preview?cid=uncommon-components-2/section_layout421&context=react) |
| 1006 | Layout 422 | [`uncommon-components-2/section_layout422.jpg`](/reference-images/uncommon-components-2/section_layout422.jpg) | IU | [open](https://www.relume.ai/preview?cid=uncommon-components-2/section_layout422&context=react) |
| 1007 | Layout 423 | [`uncommon-components-2/section_layout423.jpg`](/reference-images/uncommon-components-2/section_layout423.jpg) | IU | [open](https://www.relume.ai/preview?cid=uncommon-components-2/section_layout423&context=react) |
| 1008 | Layout 424 | [`uncommon-components-2/section_layout424.jpg`](/reference-images/uncommon-components-2/section_layout424.jpg) | IU | [open](https://www.relume.ai/preview?cid=uncommon-components-2/section_layout424&context=react) |
| 1009 | Layout 425 | [`uncommon-components-2/section_layout425.jpg`](/reference-images/uncommon-components-2/section_layout425.jpg) | IU | [open](https://www.relume.ai/preview?cid=uncommon-components-2/section_layout425&context=react) |
| 1068 | Layout 484 | [`uncommon-components-2/section_layout484.jpg`](/reference-images/uncommon-components-2/section_layout484.jpg) | IU | [open](https://www.relume.ai/preview?cid=uncommon-components-2/section_layout484&context=react) |
| 1069 | Layout 485 | [`uncommon-components-2/section_layout485.jpg`](/reference-images/uncommon-components-2/section_layout485.jpg) | IU | [open](https://www.relume.ai/preview?cid=uncommon-components-2/section_layout485&context=react) |
| 1070 | Layout 486 | [`uncommon-components-2/section_layout486.jpg`](/reference-images/uncommon-components-2/section_layout486.jpg) | IU | [open](https://www.relume.ai/preview?cid=uncommon-components-2/section_layout486&context=react) |
| 1071 | Layout 487 | [`uncommon-components-2/section_layout487.jpg`](/reference-images/uncommon-components-2/section_layout487.jpg) | IU | [open](https://www.relume.ai/preview?cid=uncommon-components-2/section_layout487&context=react) |
| 1072 | Layout 488 | [`uncommon-components-2/section_layout488.jpg`](/reference-images/uncommon-components-2/section_layout488.jpg) | IU | [open](https://www.relume.ai/preview?cid=uncommon-components-2/section_layout488&context=react) |
| 1455 | Team 21 | [`uncommon-components-2/section_team21.jpg`](/reference-images/uncommon-components-2/section_team21.jpg) | IU | [open](https://www.relume.ai/preview?cid=uncommon-components-2/section_team21&context=react) |
| 1456 | Team 22 | [`uncommon-components-2/section_team22.jpg`](/reference-images/uncommon-components-2/section_team22.jpg) | IU | [open](https://www.relume.ai/preview?cid=uncommon-components-2/section_team22&context=react) |
| 1489 | Testimonial 33 | [`uncommon-components-2/section_testimonial33.jpg`](/reference-images/uncommon-components-2/section_testimonial33.jpg) | IU | [open](https://www.relume.ai/preview?cid=uncommon-components-2/section_testimonial33&context=react) |

## blog-headers

Predicted behavior: Blog index hero: title, intro, category filter chips, and a grid of post cards (cover image, meta, title, excerpt). Card hover lift.

| # | Component | Local image | Flags | Relume preview |
|---|-----------|-------------|-------|----------------|
| 33 | Blog 1 | [`blog-headers/section_blog1.jpg`](/reference-images/blog-headers/section_blog1.jpg) | — | [open](https://www.relume.ai/preview?cid=blog-headers/section_blog1&context=react) |
| 34 | Blog 2 | [`blog-headers/section_blog2.jpg`](/reference-images/blog-headers/section_blog2.jpg) | — | [open](https://www.relume.ai/preview?cid=blog-headers/section_blog2&context=react) |
| 35 | Blog 3 | [`blog-headers/section_blog3.jpg`](/reference-images/blog-headers/section_blog3.jpg) | — | [open](https://www.relume.ai/preview?cid=blog-headers/section_blog3&context=react) |
| 36 | Blog 4 | [`blog-headers/section_blog4.jpg`](/reference-images/blog-headers/section_blog4.jpg) | — | [open](https://www.relume.ai/preview?cid=blog-headers/section_blog4&context=react) |
| 37 | Blog 5 | [`blog-headers/section_blog5.jpg`](/reference-images/blog-headers/section_blog5.jpg) | — | [open](https://www.relume.ai/preview?cid=blog-headers/section_blog5&context=react) |
| 38 | Blog 6 | [`blog-headers/section_blog6.jpg`](/reference-images/blog-headers/section_blog6.jpg) | — | [open](https://www.relume.ai/preview?cid=blog-headers/section_blog6&context=react) |
| 39 | Blog 7 | [`blog-headers/section_blog7.jpg`](/reference-images/blog-headers/section_blog7.jpg) | — | [open](https://www.relume.ai/preview?cid=blog-headers/section_blog7&context=react) |
| 40 | Blog 8 | [`blog-headers/section_blog8.jpg`](/reference-images/blog-headers/section_blog8.jpg) | — | [open](https://www.relume.ai/preview?cid=blog-headers/section_blog8&context=react) |
| 41 | Blog 9 | [`blog-headers/section_blog9.jpg`](/reference-images/blog-headers/section_blog9.jpg) | — | [open](https://www.relume.ai/preview?cid=blog-headers/section_blog9&context=react) |
| 42 | Blog 10 | [`blog-headers/section_blog10.jpg`](/reference-images/blog-headers/section_blog10.jpg) | — | [open](https://www.relume.ai/preview?cid=blog-headers/section_blog10&context=react) |
| 43 | Blog 11 | [`blog-headers/section_blog11.jpg`](/reference-images/blog-headers/section_blog11.jpg) | — | [open](https://www.relume.ai/preview?cid=blog-headers/section_blog11&context=react) |
| 44 | Blog 12 | [`blog-headers/section_blog12.jpg`](/reference-images/blog-headers/section_blog12.jpg) | — | [open](https://www.relume.ai/preview?cid=blog-headers/section_blog12&context=react) |
| 45 | Blog 13 | [`blog-headers/section_blog13.jpg`](/reference-images/blog-headers/section_blog13.jpg) | — | [open](https://www.relume.ai/preview?cid=blog-headers/section_blog13&context=react) |
| 46 | Blog 14 | [`blog-headers/section_blog14.jpg`](/reference-images/blog-headers/section_blog14.jpg) | — | [open](https://www.relume.ai/preview?cid=blog-headers/section_blog14&context=react) |
| 47 | Blog 15 | [`blog-headers/section_blog15.jpg`](/reference-images/blog-headers/section_blog15.jpg) | — | [open](https://www.relume.ai/preview?cid=blog-headers/section_blog15&context=react) |
| 48 | Blog 16 | [`blog-headers/section_blog16.jpg`](/reference-images/blog-headers/section_blog16.jpg) | — | [open](https://www.relume.ai/preview?cid=blog-headers/section_blog16&context=react) |

## blog-headers-2

Predicted behavior: Blog index variant set 2: same anatomy as blog-headers (card grid + filters), different layout/rhythm.

| # | Component | Local image | Flags | Relume preview |
|---|-----------|-------------|-------|----------------|
| 49 | Blog 17 | [`blog-headers-2/section_blog17.jpg`](/reference-images/blog-headers-2/section_blog17.jpg) | — | [open](https://www.relume.ai/preview?cid=blog-headers-2/section_blog17&context=react) |
| 50 | Blog 18 | [`blog-headers-2/section_blog18.jpg`](/reference-images/blog-headers-2/section_blog18.jpg) | — | [open](https://www.relume.ai/preview?cid=blog-headers-2/section_blog18&context=react) |
| 51 | Blog 19 | [`blog-headers-2/section_blog19.jpg`](/reference-images/blog-headers-2/section_blog19.jpg) | — | [open](https://www.relume.ai/preview?cid=blog-headers-2/section_blog19&context=react) |
| 52 | Blog 20 | [`blog-headers-2/section_blog20.jpg`](/reference-images/blog-headers-2/section_blog20.jpg) | — | [open](https://www.relume.ai/preview?cid=blog-headers-2/section_blog20&context=react) |
| 53 | Blog 21 | [`blog-headers-2/section_blog21.jpg`](/reference-images/blog-headers-2/section_blog21.jpg) | — | [open](https://www.relume.ai/preview?cid=blog-headers-2/section_blog21&context=react) |
| 54 | Blog 22 | [`blog-headers-2/section_blog22.jpg`](/reference-images/blog-headers-2/section_blog22.jpg) | — | [open](https://www.relume.ai/preview?cid=blog-headers-2/section_blog22&context=react) |
| 55 | Blog 23 | [`blog-headers-2/section_blog23.jpg`](/reference-images/blog-headers-2/section_blog23.jpg) | — | [open](https://www.relume.ai/preview?cid=blog-headers-2/section_blog23&context=react) |
| 56 | Blog 24 | [`blog-headers-2/section_blog24.jpg`](/reference-images/blog-headers-2/section_blog24.jpg) | — | [open](https://www.relume.ai/preview?cid=blog-headers-2/section_blog24&context=react) |
| 57 | Blog 25 | [`blog-headers-2/section_blog25.jpg`](/reference-images/blog-headers-2/section_blog25.jpg) | — | [open](https://www.relume.ai/preview?cid=blog-headers-2/section_blog25&context=react) |
| 58 | Blog 26 | [`blog-headers-2/section_blog26.jpg`](/reference-images/blog-headers-2/section_blog26.jpg) | — | [open](https://www.relume.ai/preview?cid=blog-headers-2/section_blog26&context=react) |
| 59 | Blog 27 | [`blog-headers-2/section_blog27.jpg`](/reference-images/blog-headers-2/section_blog27.jpg) | — | [open](https://www.relume.ai/preview?cid=blog-headers-2/section_blog27&context=react) |
| 60 | Blog 28 | [`blog-headers-2/section_blog28.jpg`](/reference-images/blog-headers-2/section_blog28.jpg) | — | [open](https://www.relume.ai/preview?cid=blog-headers-2/section_blog28&context=react) |
| 61 | Blog 29 | [`blog-headers-2/section_blog29.jpg`](/reference-images/blog-headers-2/section_blog29.jpg) | — | [open](https://www.relume.ai/preview?cid=blog-headers-2/section_blog29&context=react) |
| 62 | Blog 30 | [`blog-headers-2/section_blog30.jpg`](/reference-images/blog-headers-2/section_blog30.jpg) | — | [open](https://www.relume.ai/preview?cid=blog-headers-2/section_blog30&context=react) |
| 63 | Blog 31 | [`blog-headers-2/section_blog31.jpg`](/reference-images/blog-headers-2/section_blog31.jpg) | — | [open](https://www.relume.ai/preview?cid=blog-headers-2/section_blog31&context=react) |
| 64 | Blog 32 | [`blog-headers-2/section_blog32.jpg`](/reference-images/blog-headers-2/section_blog32.jpg) | — | [open](https://www.relume.ai/preview?cid=blog-headers-2/section_blog32&context=react) |

## blog-sections

Predicted behavior: Blog content blocks: post card lists, author boxes, tag clouds, related-post rows.

| # | Component | Local image | Flags | Relume preview |
|---|-----------|-------------|-------|----------------|
| 65 | Blog 33 | [`blog-sections/section_blog33.jpg`](/reference-images/blog-sections/section_blog33.jpg) | — | [open](https://www.relume.ai/preview?cid=blog-sections/section_blog33&context=react) |
| 66 | Blog 34 | [`blog-sections/section_blog34.jpg`](/reference-images/blog-sections/section_blog34.jpg) | — | [open](https://www.relume.ai/preview?cid=blog-sections/section_blog34&context=react) |
| 67 | Blog 35 | [`blog-sections/section_blog35.jpg`](/reference-images/blog-sections/section_blog35.jpg) | — | [open](https://www.relume.ai/preview?cid=blog-sections/section_blog35&context=react) |
| 68 | Blog 36 | [`blog-sections/section_blog36.jpg`](/reference-images/blog-sections/section_blog36.jpg) | — | [open](https://www.relume.ai/preview?cid=blog-sections/section_blog36&context=react) |
| 69 | Blog 37 | [`blog-sections/section_blog37.jpg`](/reference-images/blog-sections/section_blog37.jpg) | — | [open](https://www.relume.ai/preview?cid=blog-sections/section_blog37&context=react) |
| 70 | Blog 38 | [`blog-sections/section_blog38.jpg`](/reference-images/blog-sections/section_blog38.jpg) | — | [open](https://www.relume.ai/preview?cid=blog-sections/section_blog38&context=react) |
| 71 | Blog 39 | [`blog-sections/section_blog39.jpg`](/reference-images/blog-sections/section_blog39.jpg) | — | [open](https://www.relume.ai/preview?cid=blog-sections/section_blog39&context=react) |
| 72 | Blog 40 | [`blog-sections/section_blog40.jpg`](/reference-images/blog-sections/section_blog40.jpg) | — | [open](https://www.relume.ai/preview?cid=blog-sections/section_blog40&context=react) |
| 73 | Blog 41 | [`blog-sections/section_blog41.jpg`](/reference-images/blog-sections/section_blog41.jpg) | — | [open](https://www.relume.ai/preview?cid=blog-sections/section_blog41&context=react) |
| 74 | Blog 42 | [`blog-sections/section_blog42.jpg`](/reference-images/blog-sections/section_blog42.jpg) | — | [open](https://www.relume.ai/preview?cid=blog-sections/section_blog42&context=react) |
| 75 | Blog 43 | [`blog-sections/section_blog43.jpg`](/reference-images/blog-sections/section_blog43.jpg) | — | [open](https://www.relume.ai/preview?cid=blog-sections/section_blog43&context=react) |
| 76 | Blog 44 | [`blog-sections/section_blog44.jpg`](/reference-images/blog-sections/section_blog44.jpg) | — | [open](https://www.relume.ai/preview?cid=blog-sections/section_blog44&context=react) |
| 77 | Blog 45 | [`blog-sections/section_blog45.jpg`](/reference-images/blog-sections/section_blog45.jpg) | — | [open](https://www.relume.ai/preview?cid=blog-sections/section_blog45&context=react) |
| 78 | Blog 46 | [`blog-sections/section_blog46.jpg`](/reference-images/blog-sections/section_blog46.jpg) | — | [open](https://www.relume.ai/preview?cid=blog-sections/section_blog46&context=react) |
| 79 | Blog 47 | [`blog-sections/section_blog47.jpg`](/reference-images/blog-sections/section_blog47.jpg) | — | [open](https://www.relume.ai/preview?cid=blog-sections/section_blog47&context=react) |
| 80 | Blog 48 | [`blog-sections/section_blog48.jpg`](/reference-images/blog-sections/section_blog48.jpg) | — | [open](https://www.relume.ai/preview?cid=blog-sections/section_blog48&context=react) |
| 81 | Blog 49 | [`blog-sections/section_blog49.jpg`](/reference-images/blog-sections/section_blog49.jpg) | — | [open](https://www.relume.ai/preview?cid=blog-sections/section_blog49&context=react) |
| 82 | Blog 50 | [`blog-sections/section_blog50.jpg`](/reference-images/blog-sections/section_blog50.jpg) | — | [open](https://www.relume.ai/preview?cid=blog-sections/section_blog50&context=react) |
| 83 | Blog 51 | [`blog-sections/section_blog51.jpg`](/reference-images/blog-sections/section_blog51.jpg) | — | [open](https://www.relume.ai/preview?cid=blog-sections/section_blog51&context=react) |
| 84 | Blog 52 | [`blog-sections/section_blog52.jpg`](/reference-images/blog-sections/section_blog52.jpg) | — | [open](https://www.relume.ai/preview?cid=blog-sections/section_blog52&context=react) |
| 85 | Blog 53 | [`blog-sections/section_blog53.jpg`](/reference-images/blog-sections/section_blog53.jpg) | — | [open](https://www.relume.ai/preview?cid=blog-sections/section_blog53&context=react) |
| 86 | Blog 54 | [`blog-sections/section_blog54.jpg`](/reference-images/blog-sections/section_blog54.jpg) | — | [open](https://www.relume.ai/preview?cid=blog-sections/section_blog54&context=react) |
| 87 | Blog 55 | [`blog-sections/section_blog55.jpg`](/reference-images/blog-sections/section_blog55.jpg) | — | [open](https://www.relume.ai/preview?cid=blog-sections/section_blog55&context=react) |
| 88 | Blog 56 | [`blog-sections/section_blog56.jpg`](/reference-images/blog-sections/section_blog56.jpg) | — | [open](https://www.relume.ai/preview?cid=blog-sections/section_blog56&context=react) |
| 89 | Blog 57 | [`blog-sections/section_blog57.jpg`](/reference-images/blog-sections/section_blog57.jpg) | — | [open](https://www.relume.ai/preview?cid=blog-sections/section_blog57&context=react) |
| 90 | Blog 58 | [`blog-sections/section_blog58.jpg`](/reference-images/blog-sections/section_blog58.jpg) | — | [open](https://www.relume.ai/preview?cid=blog-sections/section_blog58&context=react) |
| 91 | Blog 59 | [`blog-sections/section_blog59.jpg`](/reference-images/blog-sections/section_blog59.jpg) | — | [open](https://www.relume.ai/preview?cid=blog-sections/section_blog59&context=react) |
| 92 | Blog 60 | [`blog-sections/section_blog60.jpg`](/reference-images/blog-sections/section_blog60.jpg) | — | [open](https://www.relume.ai/preview?cid=blog-sections/section_blog60&context=react) |
| 93 | Blog 61 | [`blog-sections/section_blog61.jpg`](/reference-images/blog-sections/section_blog61.jpg) | — | [open](https://www.relume.ai/preview?cid=blog-sections/section_blog61&context=react) |
| 94 | Blog 62 | [`blog-sections/section_blog62.jpg`](/reference-images/blog-sections/section_blog62.jpg) | — | [open](https://www.relume.ai/preview?cid=blog-sections/section_blog62&context=react) |
| 95 | Blog 63 | [`blog-sections/section_blog63.jpg`](/reference-images/blog-sections/section_blog63.jpg) | — | [open](https://www.relume.ai/preview?cid=blog-sections/section_blog63&context=react) |
| 96 | Blog 64 | [`blog-sections/section_blog64.jpg`](/reference-images/blog-sections/section_blog64.jpg) | — | [open](https://www.relume.ai/preview?cid=blog-sections/section_blog64&context=react) |
| 97 | Blog 65 | [`blog-sections/section_blog65.jpg`](/reference-images/blog-sections/section_blog65.jpg) | — | [open](https://www.relume.ai/preview?cid=blog-sections/section_blog65&context=react) |
| 98 | Blog 66 | [`blog-sections/section_blog66.jpg`](/reference-images/blog-sections/section_blog66.jpg) | — | [open](https://www.relume.ai/preview?cid=blog-sections/section_blog66&context=react) |
| 99 | Blog 67 | [`blog-sections/section_blog67.jpg`](/reference-images/blog-sections/section_blog67.jpg) | — | [open](https://www.relume.ai/preview?cid=blog-sections/section_blog67&context=react) |
| 100 | Blog 68 | [`blog-sections/section_blog68.jpg`](/reference-images/blog-sections/section_blog68.jpg) | — | [open](https://www.relume.ai/preview?cid=blog-sections/section_blog68&context=react) |

## blog-post-headers

Predicted behavior: Single-post header: category, big title, author avatar/date meta, hero image. Static.

| # | Component | Local image | Flags | Relume preview |
|---|-----------|-------------|-------|----------------|
| 101 | Blog Post Header 1 | [`blog-post-headers/section_blog-post-header1.jpg`](/reference-images/blog-post-headers/section_blog-post-header1.jpg) | — | [open](https://www.relume.ai/preview?cid=blog-post-headers/section_blog-post-header1&context=react) |
| 102 | Blog Post Header 2 | [`blog-post-headers/section_blog-post-header2.jpg`](/reference-images/blog-post-headers/section_blog-post-header2.jpg) | — | [open](https://www.relume.ai/preview?cid=blog-post-headers/section_blog-post-header2&context=react) |
| 103 | Blog Post Header 3 | [`blog-post-headers/section_blog-post-header3.jpg`](/reference-images/blog-post-headers/section_blog-post-header3.jpg) | — | [open](https://www.relume.ai/preview?cid=blog-post-headers/section_blog-post-header3&context=react) |
| 104 | Blog Post Header 4 | [`blog-post-headers/section_blog-post-header4.jpg`](/reference-images/blog-post-headers/section_blog-post-header4.jpg) | — | [open](https://www.relume.ai/preview?cid=blog-post-headers/section_blog-post-header4&context=react) |
| 105 | Blog Post Header 5 | [`blog-post-headers/section_blog-post-header5.jpg`](/reference-images/blog-post-headers/section_blog-post-header5.jpg) | — | [open](https://www.relume.ai/preview?cid=blog-post-headers/section_blog-post-header5&context=react) |

## card-headers

Predicted behavior: Card header/footer treatments: title + action row on top of a card body.

| # | Component | Local image | Flags | Relume preview |
|---|-----------|-------------|-------|----------------|
| 106 | Card Header 1 | [`card-headers/card-header1_component.jpg`](/reference-images/card-headers/card-header1_component.jpg) | — | [open](https://www.relume.ai/preview?cid=card-headers/card-header1_component&context=react) |
| 107 | Card Header 2 | [`card-headers/card-header2_component.jpg`](/reference-images/card-headers/card-header2_component.jpg) | — | [open](https://www.relume.ai/preview?cid=card-headers/card-header2_component&context=react) |

## career-sections

Predicted behavior: inspect each screenshot + preview.

| # | Component | Local image | Flags | Relume preview |
|---|-----------|-------------|-------|----------------|
| 108 | Career 1 | [`career-sections/section_career1.jpg`](/reference-images/career-sections/section_career1.jpg) | I | [open](https://www.relume.ai/preview?cid=career-sections/section_career1&context=react) |
| 109 | Career 2 | [`career-sections/section_career2.jpg`](/reference-images/career-sections/section_career2.jpg) | I | [open](https://www.relume.ai/preview?cid=career-sections/section_career2&context=react) |
| 110 | Career 3 | [`career-sections/section_career3.jpg`](/reference-images/career-sections/section_career3.jpg) | I | [open](https://www.relume.ai/preview?cid=career-sections/section_career3&context=react) |
| 111 | Career 4 | [`career-sections/section_career4.jpg`](/reference-images/career-sections/section_career4.jpg) | I | [open](https://www.relume.ai/preview?cid=career-sections/section_career4&context=react) |
| 112 | Career 5 | [`career-sections/section_career5.jpg`](/reference-images/career-sections/section_career5.jpg) | I | [open](https://www.relume.ai/preview?cid=career-sections/section_career5&context=react) |
| 113 | Career 6 | [`career-sections/section_career6.jpg`](/reference-images/career-sections/section_career6.jpg) | I | [open](https://www.relume.ai/preview?cid=career-sections/section_career6&context=react) |
| 114 | Career 7 | [`career-sections/section_career7.jpg`](/reference-images/career-sections/section_career7.jpg) | I | [open](https://www.relume.ai/preview?cid=career-sections/section_career7&context=react) |
| 115 | Career 8 | [`career-sections/section_career8.jpg`](/reference-images/career-sections/section_career8.jpg) | I | [open](https://www.relume.ai/preview?cid=career-sections/section_career8&context=react) |
| 116 | Career 9 | [`career-sections/section_career9.jpg`](/reference-images/career-sections/section_career9.jpg) | I | [open](https://www.relume.ai/preview?cid=career-sections/section_career9&context=react) |
| 117 | Career 10 | [`career-sections/section_career10.jpg`](/reference-images/career-sections/section_career10.jpg) | — | [open](https://www.relume.ai/preview?cid=career-sections/section_career10&context=react) |
| 118 | Career 11 | [`career-sections/section_career11.jpg`](/reference-images/career-sections/section_career11.jpg) | — | [open](https://www.relume.ai/preview?cid=career-sections/section_career11&context=react) |
| 119 | Career 12 | [`career-sections/section_career12.jpg`](/reference-images/career-sections/section_career12.jpg) | — | [open](https://www.relume.ai/preview?cid=career-sections/section_career12&context=react) |
| 120 | Career 13 | [`career-sections/section_career13.jpg`](/reference-images/career-sections/section_career13.jpg) | — | [open](https://www.relume.ai/preview?cid=career-sections/section_career13&context=react) |
| 121 | Career 14 | [`career-sections/section_career14.jpg`](/reference-images/career-sections/section_career14.jpg) | — | [open](https://www.relume.ai/preview?cid=career-sections/section_career14&context=react) |
| 122 | Career 15 | [`career-sections/section_career15.jpg`](/reference-images/career-sections/section_career15.jpg) | — | [open](https://www.relume.ai/preview?cid=career-sections/section_career15&context=react) |
| 123 | Career 16 | [`career-sections/section_career16.jpg`](/reference-images/career-sections/section_career16.jpg) | — | [open](https://www.relume.ai/preview?cid=career-sections/section_career16&context=react) |
| 124 | Career 17 | [`career-sections/section_career17.jpg`](/reference-images/career-sections/section_career17.jpg) | — | [open](https://www.relume.ai/preview?cid=career-sections/section_career17&context=react) |
| 125 | Career 18 | [`career-sections/section_career18.jpg`](/reference-images/career-sections/section_career18.jpg) | — | [open](https://www.relume.ai/preview?cid=career-sections/section_career18&context=react) |
| 126 | Career 19 | [`career-sections/section_career19.jpg`](/reference-images/career-sections/section_career19.jpg) | — | [open](https://www.relume.ai/preview?cid=career-sections/section_career19&context=react) |
| 127 | Career 20 | [`career-sections/section_career20.jpg`](/reference-images/career-sections/section_career20.jpg) | — | [open](https://www.relume.ai/preview?cid=career-sections/section_career20&context=react) |
| 128 | Career 21 | [`career-sections/section_career21.jpg`](/reference-images/career-sections/section_career21.jpg) | — | [open](https://www.relume.ai/preview?cid=career-sections/section_career21&context=react) |
| 129 | Career 22 | [`career-sections/section_career22.jpg`](/reference-images/career-sections/section_career22.jpg) | — | [open](https://www.relume.ai/preview?cid=career-sections/section_career22&context=react) |
| 130 | Career 23 | [`career-sections/section_career23.jpg`](/reference-images/career-sections/section_career23.jpg) | — | [open](https://www.relume.ai/preview?cid=career-sections/section_career23&context=react) |
| 131 | Career 24 | [`career-sections/section_career24.jpg`](/reference-images/career-sections/section_career24.jpg) | — | [open](https://www.relume.ai/preview?cid=career-sections/section_career24&context=react) |
| 132 | Career 25 | [`career-sections/section_career25.jpg`](/reference-images/career-sections/section_career25.jpg) | — | [open](https://www.relume.ai/preview?cid=career-sections/section_career25&context=react) |
| 133 | Career 26 | [`career-sections/section_career26.jpg`](/reference-images/career-sections/section_career26.jpg) | — | [open](https://www.relume.ai/preview?cid=career-sections/section_career26&context=react) |
| 134 | Career 27 | [`career-sections/section_career27.jpg`](/reference-images/career-sections/section_career27.jpg) | — | [open](https://www.relume.ai/preview?cid=career-sections/section_career27&context=react) |

## comparison-sections

Predicted behavior: Plan/feature comparison: 2-3 columns with check/cross icon rows; one column highlighted as recommended. Optional monthly/yearly toggle.

| # | Component | Local image | Flags | Relume preview |
|---|-----------|-------------|-------|----------------|
| 135 | Comparison 1 | [`comparison-sections/section_comparison1.jpg`](/reference-images/comparison-sections/section_comparison1.jpg) | — | [open](https://www.relume.ai/preview?cid=comparison-sections/section_comparison1&context=react) |
| 136 | Comparison 2 | [`comparison-sections/section_comparison2.jpg`](/reference-images/comparison-sections/section_comparison2.jpg) | — | [open](https://www.relume.ai/preview?cid=comparison-sections/section_comparison2&context=react) |
| 137 | Comparison 3 | [`comparison-sections/section_comparison3.jpg`](/reference-images/comparison-sections/section_comparison3.jpg) | — | [open](https://www.relume.ai/preview?cid=comparison-sections/section_comparison3&context=react) |
| 138 | Comparison 4 | [`comparison-sections/section_comparison4.jpg`](/reference-images/comparison-sections/section_comparison4.jpg) | — | [open](https://www.relume.ai/preview?cid=comparison-sections/section_comparison4&context=react) |
| 139 | Comparison 5 | [`comparison-sections/section_comparison5.jpg`](/reference-images/comparison-sections/section_comparison5.jpg) | — | [open](https://www.relume.ai/preview?cid=comparison-sections/section_comparison5&context=react) |
| 140 | Comparison 6 | [`comparison-sections/section_comparison6.jpg`](/reference-images/comparison-sections/section_comparison6.jpg) | — | [open](https://www.relume.ai/preview?cid=comparison-sections/section_comparison6&context=react) |
| 141 | Comparison 7 | [`comparison-sections/section_comparison7.jpg`](/reference-images/comparison-sections/section_comparison7.jpg) | — | [open](https://www.relume.ai/preview?cid=comparison-sections/section_comparison7&context=react) |
| 142 | Comparison 8 | [`comparison-sections/section_comparison8.jpg`](/reference-images/comparison-sections/section_comparison8.jpg) | — | [open](https://www.relume.ai/preview?cid=comparison-sections/section_comparison8&context=react) |
| 143 | Comparison 9 | [`comparison-sections/section_comparison9.jpg`](/reference-images/comparison-sections/section_comparison9.jpg) | — | [open](https://www.relume.ai/preview?cid=comparison-sections/section_comparison9&context=react) |
| 144 | Comparison 10 | [`comparison-sections/section_comparison10.jpg`](/reference-images/comparison-sections/section_comparison10.jpg) | — | [open](https://www.relume.ai/preview?cid=comparison-sections/section_comparison10&context=react) |
| 145 | Comparison 11 | [`comparison-sections/section_comparison11.jpg`](/reference-images/comparison-sections/section_comparison11.jpg) | — | [open](https://www.relume.ai/preview?cid=comparison-sections/section_comparison11&context=react) |
| 146 | Comparison 12 | [`comparison-sections/section_comparison12.jpg`](/reference-images/comparison-sections/section_comparison12.jpg) | — | [open](https://www.relume.ai/preview?cid=comparison-sections/section_comparison12&context=react) |
| 147 | Comparison 13 | [`comparison-sections/section_comparison13.jpg`](/reference-images/comparison-sections/section_comparison13.jpg) | — | [open](https://www.relume.ai/preview?cid=comparison-sections/section_comparison13&context=react) |
| 148 | Comparison 14 | [`comparison-sections/section_comparison14.jpg`](/reference-images/comparison-sections/section_comparison14.jpg) | — | [open](https://www.relume.ai/preview?cid=comparison-sections/section_comparison14&context=react) |
| 149 | Comparison 15 | [`comparison-sections/section_comparison15.jpg`](/reference-images/comparison-sections/section_comparison15.jpg) | — | [open](https://www.relume.ai/preview?cid=comparison-sections/section_comparison15&context=react) |

## contact-sections

Predicted behavior: Contact block: info column (address/phone/email rows with icons) + form column (inputs + textarea + submit). Form validation via native/JS.

| # | Component | Local image | Flags | Relume preview |
|---|-----------|-------------|-------|----------------|
| 150 | Contact 1 | [`contact-sections/section_contact1.jpg`](/reference-images/contact-sections/section_contact1.jpg) | — | [open](https://www.relume.ai/preview?cid=contact-sections/section_contact1&context=react) |
| 151 | Contact 2 | [`contact-sections/section_contact2.jpg`](/reference-images/contact-sections/section_contact2.jpg) | — | [open](https://www.relume.ai/preview?cid=contact-sections/section_contact2&context=react) |
| 152 | Contact 3 | [`contact-sections/section_contact3.jpg`](/reference-images/contact-sections/section_contact3.jpg) | — | [open](https://www.relume.ai/preview?cid=contact-sections/section_contact3&context=react) |
| 153 | Contact 4 | [`contact-sections/section_contact4.jpg`](/reference-images/contact-sections/section_contact4.jpg) | — | [open](https://www.relume.ai/preview?cid=contact-sections/section_contact4&context=react) |
| 154 | Contact 5 | [`contact-sections/section_contact5.jpg`](/reference-images/contact-sections/section_contact5.jpg) | — | [open](https://www.relume.ai/preview?cid=contact-sections/section_contact5&context=react) |
| 155 | Contact 6 | [`contact-sections/section_contact6.jpg`](/reference-images/contact-sections/section_contact6.jpg) | — | [open](https://www.relume.ai/preview?cid=contact-sections/section_contact6&context=react) |
| 156 | Contact 7 | [`contact-sections/section_contact7.jpg`](/reference-images/contact-sections/section_contact7.jpg) | — | [open](https://www.relume.ai/preview?cid=contact-sections/section_contact7&context=react) |
| 157 | Contact 8 | [`contact-sections/section_contact8.jpg`](/reference-images/contact-sections/section_contact8.jpg) | — | [open](https://www.relume.ai/preview?cid=contact-sections/section_contact8&context=react) |
| 158 | Contact 9 | [`contact-sections/section_contact9.jpg`](/reference-images/contact-sections/section_contact9.jpg) | — | [open](https://www.relume.ai/preview?cid=contact-sections/section_contact9&context=react) |
| 159 | Contact 10 | [`contact-sections/section_contact10.jpg`](/reference-images/contact-sections/section_contact10.jpg) | — | [open](https://www.relume.ai/preview?cid=contact-sections/section_contact10&context=react) |
| 160 | Contact 11 | [`contact-sections/section_contact11.jpg`](/reference-images/contact-sections/section_contact11.jpg) | — | [open](https://www.relume.ai/preview?cid=contact-sections/section_contact11&context=react) |
| 161 | Contact 12 | [`contact-sections/section_contact12.jpg`](/reference-images/contact-sections/section_contact12.jpg) | — | [open](https://www.relume.ai/preview?cid=contact-sections/section_contact12&context=react) |
| 162 | Contact 13 | [`contact-sections/section_contact13.jpg`](/reference-images/contact-sections/section_contact13.jpg) | — | [open](https://www.relume.ai/preview?cid=contact-sections/section_contact13&context=react) |
| 163 | Contact 14 | [`contact-sections/section_contact14.jpg`](/reference-images/contact-sections/section_contact14.jpg) | — | [open](https://www.relume.ai/preview?cid=contact-sections/section_contact14&context=react) |
| 164 | Contact 15 | [`contact-sections/section_contact15.jpg`](/reference-images/contact-sections/section_contact15.jpg) | — | [open](https://www.relume.ai/preview?cid=contact-sections/section_contact15&context=react) |
| 165 | Contact 16 | [`contact-sections/section_contact16.jpg`](/reference-images/contact-sections/section_contact16.jpg) | — | [open](https://www.relume.ai/preview?cid=contact-sections/section_contact16&context=react) |
| 166 | Contact 17 | [`contact-sections/section_contact17.jpg`](/reference-images/contact-sections/section_contact17.jpg) | — | [open](https://www.relume.ai/preview?cid=contact-sections/section_contact17&context=react) |
| 167 | Contact 18 | [`contact-sections/section_contact18.jpg`](/reference-images/contact-sections/section_contact18.jpg) | — | [open](https://www.relume.ai/preview?cid=contact-sections/section_contact18&context=react) |
| 168 | Contact 19 | [`contact-sections/section_contact19.jpg`](/reference-images/contact-sections/section_contact19.jpg) | — | [open](https://www.relume.ai/preview?cid=contact-sections/section_contact19&context=react) |
| 169 | Contact 20 | [`contact-sections/section_contact20.jpg`](/reference-images/contact-sections/section_contact20.jpg) | — | [open](https://www.relume.ai/preview?cid=contact-sections/section_contact20&context=react) |
| 170 | Contact 21 | [`contact-sections/section_contact21.jpg`](/reference-images/contact-sections/section_contact21.jpg) | — | [open](https://www.relume.ai/preview?cid=contact-sections/section_contact21&context=react) |
| 171 | Contact 22 | [`contact-sections/section_contact22.jpg`](/reference-images/contact-sections/section_contact22.jpg) | — | [open](https://www.relume.ai/preview?cid=contact-sections/section_contact22&context=react) |
| 172 | Contact 23 | [`contact-sections/section_contact23.jpg`](/reference-images/contact-sections/section_contact23.jpg) | — | [open](https://www.relume.ai/preview?cid=contact-sections/section_contact23&context=react) |
| 173 | Contact 24 | [`contact-sections/section_contact24.jpg`](/reference-images/contact-sections/section_contact24.jpg) | — | [open](https://www.relume.ai/preview?cid=contact-sections/section_contact24&context=react) |
| 174 | Contact 25 | [`contact-sections/section_contact25.jpg`](/reference-images/contact-sections/section_contact25.jpg) | — | [open](https://www.relume.ai/preview?cid=contact-sections/section_contact25&context=react) |
| 175 | Contact 26 | [`contact-sections/section_contact26.jpg`](/reference-images/contact-sections/section_contact26.jpg) | — | [open](https://www.relume.ai/preview?cid=contact-sections/section_contact26&context=react) |
| 176 | Contact 27 | [`contact-sections/section_contact27.jpg`](/reference-images/contact-sections/section_contact27.jpg) | — | [open](https://www.relume.ai/preview?cid=contact-sections/section_contact27&context=react) |
| 177 | Contact 28 | [`contact-sections/section_contact28.jpg`](/reference-images/contact-sections/section_contact28.jpg) | — | [open](https://www.relume.ai/preview?cid=contact-sections/section_contact28&context=react) |
| 178 | Contact 29 | [`contact-sections/section_contact29.jpg`](/reference-images/contact-sections/section_contact29.jpg) | — | [open](https://www.relume.ai/preview?cid=contact-sections/section_contact29&context=react) |
| 179 | Contact 30 | [`contact-sections/section_contact30.jpg`](/reference-images/contact-sections/section_contact30.jpg) | — | [open](https://www.relume.ai/preview?cid=contact-sections/section_contact30&context=react) |

## contact-modals

Predicted behavior: Contact form in a modal: name/email/message + submit. Opens via button, closes via backdrop/X (daisyUI modal).

| # | Component | Local image | Flags | Relume preview |
|---|-----------|-------------|-------|----------------|
| 180 | Contact Modal 1 | [`contact-modals/section_contact-modal1.jpg`](/reference-images/contact-modals/section_contact-modal1.jpg) | I | [open](https://www.relume.ai/preview?cid=contact-modals/section_contact-modal1&context=react) |
| 181 | Contact Modal 2 | [`contact-modals/section_contact-modal2.jpg`](/reference-images/contact-modals/section_contact-modal2.jpg) | I | [open](https://www.relume.ai/preview?cid=contact-modals/section_contact-modal2&context=react) |
| 182 | Contact Modal 3 | [`contact-modals/section_contact-modal3.jpg`](/reference-images/contact-modals/section_contact-modal3.jpg) | I | [open](https://www.relume.ai/preview?cid=contact-modals/section_contact-modal3&context=react) |
| 183 | Contact Modal 4 | [`contact-modals/section_contact-modal4.jpg`](/reference-images/contact-modals/section_contact-modal4.jpg) | I | [open](https://www.relume.ai/preview?cid=contact-modals/section_contact-modal4&context=react) |
| 184 | Contact Modal 5 | [`contact-modals/section_contact-modal5.jpg`](/reference-images/contact-modals/section_contact-modal5.jpg) | I | [open](https://www.relume.ai/preview?cid=contact-modals/section_contact-modal5&context=react) |
| 185 | Contact Modal 6 | [`contact-modals/section_contact-modal6.jpg`](/reference-images/contact-modals/section_contact-modal6.jpg) | I | [open](https://www.relume.ai/preview?cid=contact-modals/section_contact-modal6&context=react) |

## long-form-content-sections

Predicted behavior: Article body blocks: prose with h2/h3, pull quotes, media embeds, lists, callouts; sometimes sticky TOC.

| # | Component | Local image | Flags | Relume preview |
|---|-----------|-------------|-------|----------------|
| 186 | Content 1 | [`long-form-content-sections/section_content1.jpg`](/reference-images/long-form-content-sections/section_content1.jpg) | — | [open](https://www.relume.ai/preview?cid=long-form-content-sections/section_content1&context=react) |
| 187 | Content 2 | [`long-form-content-sections/section_content2.jpg`](/reference-images/long-form-content-sections/section_content2.jpg) | — | [open](https://www.relume.ai/preview?cid=long-form-content-sections/section_content2&context=react) |
| 188 | Content 3 | [`long-form-content-sections/section_content3.jpg`](/reference-images/long-form-content-sections/section_content3.jpg) | — | [open](https://www.relume.ai/preview?cid=long-form-content-sections/section_content3&context=react) |
| 189 | Content 4 | [`long-form-content-sections/section_content4.jpg`](/reference-images/long-form-content-sections/section_content4.jpg) | — | [open](https://www.relume.ai/preview?cid=long-form-content-sections/section_content4&context=react) |
| 190 | Content 5 | [`long-form-content-sections/section_content5.jpg`](/reference-images/long-form-content-sections/section_content5.jpg) | I | [open](https://www.relume.ai/preview?cid=long-form-content-sections/section_content5&context=react) |
| 191 | Content 6 | [`long-form-content-sections/section_content6.jpg`](/reference-images/long-form-content-sections/section_content6.jpg) | I | [open](https://www.relume.ai/preview?cid=long-form-content-sections/section_content6&context=react) |
| 192 | Content 7 | [`long-form-content-sections/section_content7.jpg`](/reference-images/long-form-content-sections/section_content7.jpg) | — | [open](https://www.relume.ai/preview?cid=long-form-content-sections/section_content7&context=react) |
| 193 | Content 8 | [`long-form-content-sections/section_content8.jpg`](/reference-images/long-form-content-sections/section_content8.jpg) | — | [open](https://www.relume.ai/preview?cid=long-form-content-sections/section_content8&context=react) |
| 194 | Content 9 | [`long-form-content-sections/section_content9.jpg`](/reference-images/long-form-content-sections/section_content9.jpg) | — | [open](https://www.relume.ai/preview?cid=long-form-content-sections/section_content9&context=react) |
| 195 | Content 10 | [`long-form-content-sections/section_content10.jpg`](/reference-images/long-form-content-sections/section_content10.jpg) | — | [open](https://www.relume.ai/preview?cid=long-form-content-sections/section_content10&context=react) |
| 196 | Content 11 | [`long-form-content-sections/section_content11.jpg`](/reference-images/long-form-content-sections/section_content11.jpg) | — | [open](https://www.relume.ai/preview?cid=long-form-content-sections/section_content11&context=react) |
| 197 | Content 12 | [`long-form-content-sections/section_content12.jpg`](/reference-images/long-form-content-sections/section_content12.jpg) | — | [open](https://www.relume.ai/preview?cid=long-form-content-sections/section_content12&context=react) |
| 198 | Content 13 | [`long-form-content-sections/section_content13.jpg`](/reference-images/long-form-content-sections/section_content13.jpg) | — | [open](https://www.relume.ai/preview?cid=long-form-content-sections/section_content13&context=react) |
| 199 | Content 14 | [`long-form-content-sections/section_content14.jpg`](/reference-images/long-form-content-sections/section_content14.jpg) | — | [open](https://www.relume.ai/preview?cid=long-form-content-sections/section_content14&context=react) |
| 200 | Content 15 | [`long-form-content-sections/section_content15.jpg`](/reference-images/long-form-content-sections/section_content15.jpg) | — | [open](https://www.relume.ai/preview?cid=long-form-content-sections/section_content15&context=react) |
| 201 | Content 16 | [`long-form-content-sections/section_content16.jpg`](/reference-images/long-form-content-sections/section_content16.jpg) | — | [open](https://www.relume.ai/preview?cid=long-form-content-sections/section_content16&context=react) |
| 202 | Content 17 | [`long-form-content-sections/section_content17.jpg`](/reference-images/long-form-content-sections/section_content17.jpg) | — | [open](https://www.relume.ai/preview?cid=long-form-content-sections/section_content17&context=react) |
| 203 | Content 18 | [`long-form-content-sections/section_content18.jpg`](/reference-images/long-form-content-sections/section_content18.jpg) | — | [open](https://www.relume.ai/preview?cid=long-form-content-sections/section_content18&context=react) |
| 204 | Content 19 | [`long-form-content-sections/section_content19.jpg`](/reference-images/long-form-content-sections/section_content19.jpg) | — | [open](https://www.relume.ai/preview?cid=long-form-content-sections/section_content19&context=react) |
| 205 | Content 20 | [`long-form-content-sections/section_content20.jpg`](/reference-images/long-form-content-sections/section_content20.jpg) | — | [open](https://www.relume.ai/preview?cid=long-form-content-sections/section_content20&context=react) |
| 206 | Content 21 | [`long-form-content-sections/section_content21.jpg`](/reference-images/long-form-content-sections/section_content21.jpg) | — | [open](https://www.relume.ai/preview?cid=long-form-content-sections/section_content21&context=react) |
| 207 | Content 22 | [`long-form-content-sections/section_content22.jpg`](/reference-images/long-form-content-sections/section_content22.jpg) | — | [open](https://www.relume.ai/preview?cid=long-form-content-sections/section_content22&context=react) |
| 208 | Content 23 | [`long-form-content-sections/section_content23.jpg`](/reference-images/long-form-content-sections/section_content23.jpg) | — | [open](https://www.relume.ai/preview?cid=long-form-content-sections/section_content23&context=react) |
| 209 | Content 24 | [`long-form-content-sections/section_content24.jpg`](/reference-images/long-form-content-sections/section_content24.jpg) | — | [open](https://www.relume.ai/preview?cid=long-form-content-sections/section_content24&context=react) |
| 210 | Content 25 | [`long-form-content-sections/section_content25.jpg`](/reference-images/long-form-content-sections/section_content25.jpg) | — | [open](https://www.relume.ai/preview?cid=long-form-content-sections/section_content25&context=react) |
| 211 | Content 26 | [`long-form-content-sections/section_content21.jpg`](/reference-images/long-form-content-sections/section_content21.jpg) | — | [open](https://www.relume.ai/preview?cid=long-form-content-sections/section_content26&context=react) |
| 212 | Content 27 | [`long-form-content-sections/section_content27.jpg`](/reference-images/long-form-content-sections/section_content27.jpg) | — | [open](https://www.relume.ai/preview?cid=long-form-content-sections/section_content27&context=react) |
| 213 | Content 28 | [`long-form-content-sections/section_content28.jpg`](/reference-images/long-form-content-sections/section_content28.jpg) | — | [open](https://www.relume.ai/preview?cid=long-form-content-sections/section_content28&context=react) |
| 214 | Content 29 | [`long-form-content-sections/section_content29.jpg`](/reference-images/long-form-content-sections/section_content29.jpg) | — | [open](https://www.relume.ai/preview?cid=long-form-content-sections/section_content29&context=react) |
| 215 | Content 30 | [`long-form-content-sections/section_content30.jpg`](/reference-images/long-form-content-sections/section_content30.jpg) | — | [open](https://www.relume.ai/preview?cid=long-form-content-sections/section_content30&context=react) |
| 216 | Content 31 | [`long-form-content-sections/section_content31.jpg`](/reference-images/long-form-content-sections/section_content31.jpg) | — | [open](https://www.relume.ai/preview?cid=long-form-content-sections/section_content31&context=react) |
| 217 | Content 32 | [`long-form-content-sections/section_content32.jpg`](/reference-images/long-form-content-sections/section_content32.jpg) | — | [open](https://www.relume.ai/preview?cid=long-form-content-sections/section_content32&context=react) |

## cookies

Predicted behavior: Cookie consent: fixed bottom bar, short text + accept/decline buttons; dismisses on choice (vanilla JS + localStorage).

| # | Component | Local image | Flags | Relume preview |
|---|-----------|-------------|-------|----------------|
| 218 | Cookie Consent 1 | [`cookies/cookie1.jpg`](/reference-images/cookies/cookie1.jpg) | — | [open](https://www.relume.ai/preview?cid=cookies/cookie1&context=react) |
| 219 | Cookie Consent 2 | [`cookies/cookie2.jpg`](/reference-images/cookies/cookie2.jpg) | — | [open](https://www.relume.ai/preview?cid=cookies/cookie2&context=react) |
| 220 | Cookie Consent 3 | [`cookies/cookie3.jpg`](/reference-images/cookies/cookie3.jpg) | — | [open](https://www.relume.ai/preview?cid=cookies/cookie3&context=react) |
| 221 | Cookie Consent 4 | [`cookies/cookie4.jpg`](/reference-images/cookies/cookie4.jpg) | — | [open](https://www.relume.ai/preview?cid=cookies/cookie4&context=react) |
| 222 | Cookie Consent 5 | [`cookies/cookie5.jpg`](/reference-images/cookies/cookie5.jpg) | — | [open](https://www.relume.ai/preview?cid=cookies/cookie5&context=react) |

## cta-sections

Predicted behavior: Call-to-action band: heading, subtext, primary + secondary buttons, optional side image. Static.

| # | Component | Local image | Flags | Relume preview |
|---|-----------|-------------|-------|----------------|
| 223 | CTA 1 | [`cta-sections/section_cta1.jpg`](/reference-images/cta-sections/section_cta1.jpg) | — | [open](https://www.relume.ai/preview?cid=cta-sections/section_cta1&context=react) |
| 224 | CTA 2 | [`cta-sections/section_cta2.jpg`](/reference-images/cta-sections/section_cta2.jpg) | — | [open](https://www.relume.ai/preview?cid=cta-sections/section_cta2&context=react) |
| 225 | CTA 3 | [`cta-sections/section_cta3.jpg`](/reference-images/cta-sections/section_cta3.jpg) | — | [open](https://www.relume.ai/preview?cid=cta-sections/section_cta3&context=react) |
| 226 | CTA 4 | [`cta-sections/section_cta4.jpg`](/reference-images/cta-sections/section_cta4.jpg) | — | [open](https://www.relume.ai/preview?cid=cta-sections/section_cta4&context=react) |
| 227 | CTA 5 | [`cta-sections/section_cta5.jpg`](/reference-images/cta-sections/section_cta5.jpg) | — | [open](https://www.relume.ai/preview?cid=cta-sections/section_cta5&context=react) |
| 228 | CTA 6 | [`cta-sections/section_cta6.jpg`](/reference-images/cta-sections/section_cta6.jpg) | — | [open](https://www.relume.ai/preview?cid=cta-sections/section_cta6&context=react) |
| 229 | CTA 7 | [`cta-sections/section_cta7.jpg`](/reference-images/cta-sections/section_cta7.jpg) | — | [open](https://www.relume.ai/preview?cid=cta-sections/section_cta7&context=react) |
| 230 | CTA 8 | [`cta-sections/section_cta8.jpg`](/reference-images/cta-sections/section_cta8.jpg) | — | [open](https://www.relume.ai/preview?cid=cta-sections/section_cta8&context=react) |
| 231 | CTA 9 | [`cta-sections/section_cta9.jpg`](/reference-images/cta-sections/section_cta9.jpg) | — | [open](https://www.relume.ai/preview?cid=cta-sections/section_cta9&context=react) |
| 232 | CTA 10 | [`cta-sections/section_cta10.jpg`](/reference-images/cta-sections/section_cta10.jpg) | — | [open](https://www.relume.ai/preview?cid=cta-sections/section_cta10&context=react) |
| 233 | CTA 11 | [`cta-sections/section_cta11.jpg`](/reference-images/cta-sections/section_cta11.jpg) | — | [open](https://www.relume.ai/preview?cid=cta-sections/section_cta11&context=react) |
| 234 | CTA 12 | [`cta-sections/section_cta12.jpg`](/reference-images/cta-sections/section_cta12.jpg) | — | [open](https://www.relume.ai/preview?cid=cta-sections/section_cta12&context=react) |
| 235 | CTA 13 | [`cta-sections/section_cta13.jpg`](/reference-images/cta-sections/section_cta13.jpg) | — | [open](https://www.relume.ai/preview?cid=cta-sections/section_cta13&context=react) |
| 236 | CTA 14 | [`cta-sections/section_cta14.jpg`](/reference-images/cta-sections/section_cta14.jpg) | — | [open](https://www.relume.ai/preview?cid=cta-sections/section_cta14&context=react) |
| 237 | CTA 15 | [`cta-sections/section_cta15.jpg`](/reference-images/cta-sections/section_cta15.jpg) | — | [open](https://www.relume.ai/preview?cid=cta-sections/section_cta15&context=react) |
| 238 | CTA 16 | [`cta-sections/section_cta16.jpg`](/reference-images/cta-sections/section_cta16.jpg) | — | [open](https://www.relume.ai/preview?cid=cta-sections/section_cta16&context=react) |
| 239 | CTA 17 | [`cta-sections/section_cta17.jpg`](/reference-images/cta-sections/section_cta17.jpg) | — | [open](https://www.relume.ai/preview?cid=cta-sections/section_cta17&context=react) |
| 240 | CTA 18 | [`cta-sections/section_cta18.jpg`](/reference-images/cta-sections/section_cta18.jpg) | — | [open](https://www.relume.ai/preview?cid=cta-sections/section_cta18&context=react) |
| 241 | CTA 19 | [`cta-sections/section_cta19.jpg`](/reference-images/cta-sections/section_cta19.jpg) | — | [open](https://www.relume.ai/preview?cid=cta-sections/section_cta19&context=react) |
| 242 | CTA 20 | [`cta-sections/section_cta20.jpg`](/reference-images/cta-sections/section_cta20.jpg) | — | [open](https://www.relume.ai/preview?cid=cta-sections/section_cta20&context=react) |
| 243 | CTA 21 | [`cta-sections/section_cta21.jpg`](/reference-images/cta-sections/section_cta21.jpg) | — | [open](https://www.relume.ai/preview?cid=cta-sections/section_cta21&context=react) |
| 244 | CTA 22 | [`cta-sections/section_cta22.jpg`](/reference-images/cta-sections/section_cta22.jpg) | — | [open](https://www.relume.ai/preview?cid=cta-sections/section_cta22&context=react) |
| 245 | CTA 23 | [`cta-sections/section_cta23.jpg`](/reference-images/cta-sections/section_cta23.jpg) | — | [open](https://www.relume.ai/preview?cid=cta-sections/section_cta23&context=react) |
| 246 | CTA 24 | [`cta-sections/section_cta24.jpg`](/reference-images/cta-sections/section_cta24.jpg) | — | [open](https://www.relume.ai/preview?cid=cta-sections/section_cta24&context=react) |
| 247 | CTA 25 | [`cta-sections/section_cta25.jpg`](/reference-images/cta-sections/section_cta25.jpg) | — | [open](https://www.relume.ai/preview?cid=cta-sections/section_cta25&context=react) |
| 248 | CTA 26 | [`cta-sections/section_cta26.jpg`](/reference-images/cta-sections/section_cta26.jpg) | — | [open](https://www.relume.ai/preview?cid=cta-sections/section_cta26&context=react) |
| 249 | CTA 27 | [`cta-sections/section_cta27.jpg`](/reference-images/cta-sections/section_cta27.jpg) | — | [open](https://www.relume.ai/preview?cid=cta-sections/section_cta27&context=react) |
| 250 | CTA 28 | [`cta-sections/section_cta28.jpg`](/reference-images/cta-sections/section_cta28.jpg) | — | [open](https://www.relume.ai/preview?cid=cta-sections/section_cta28&context=react) |
| 251 | CTA 29 | [`cta-sections/section_cta29.jpg`](/reference-images/cta-sections/section_cta29.jpg) | — | [open](https://www.relume.ai/preview?cid=cta-sections/section_cta29&context=react) |
| 252 | CTA 30 | [`cta-sections/section_cta30.jpg`](/reference-images/cta-sections/section_cta30.jpg) | — | [open](https://www.relume.ai/preview?cid=cta-sections/section_cta30&context=react) |
| 253 | CTA 31 | [`cta-sections/section_cta31.jpg`](/reference-images/cta-sections/section_cta31.jpg) | — | [open](https://www.relume.ai/preview?cid=cta-sections/section_cta31&context=react) |
| 254 | CTA 32 | [`cta-sections/section_cta32.jpg`](/reference-images/cta-sections/section_cta32.jpg) | — | [open](https://www.relume.ai/preview?cid=cta-sections/section_cta32&context=react) |
| 255 | CTA 33 | [`cta-sections/section_cta33.jpg`](/reference-images/cta-sections/section_cta33.jpg) | — | [open](https://www.relume.ai/preview?cid=cta-sections/section_cta33&context=react) |
| 256 | CTA 34 | [`cta-sections/section_cta34.jpg`](/reference-images/cta-sections/section_cta34.jpg) | — | [open](https://www.relume.ai/preview?cid=cta-sections/section_cta34&context=react) |
| 257 | CTA 35 | [`cta-sections/section_cta35.jpg`](/reference-images/cta-sections/section_cta35.jpg) | — | [open](https://www.relume.ai/preview?cid=cta-sections/section_cta35&context=react) |
| 258 | CTA 36 | [`cta-sections/section_cta36.jpg`](/reference-images/cta-sections/section_cta36.jpg) | — | [open](https://www.relume.ai/preview?cid=cta-sections/section_cta36&context=react) |

## cta-sections-grid-cards

Predicted behavior: Multiple CTA cards in a grid, each with icon/heading/button.

| # | Component | Local image | Flags | Relume preview |
|---|-----------|-------------|-------|----------------|
| 261 | CTA 39 | [`cta-sections-grid-cards/section_cta39.jpg`](/reference-images/cta-sections-grid-cards/section_cta39.jpg) | — | [open](https://www.relume.ai/preview?cid=cta-sections-grid-cards/section_cta39&context=react) |
| 262 | CTA 40 | [`cta-sections-grid-cards/section_cta40.jpg`](/reference-images/cta-sections-grid-cards/section_cta40.jpg) | — | [open](https://www.relume.ai/preview?cid=cta-sections-grid-cards/section_cta40&context=react) |
| 263 | CTA 41 | [`cta-sections-grid-cards/section_cta41.jpg`](/reference-images/cta-sections-grid-cards/section_cta41.jpg) | — | [open](https://www.relume.ai/preview?cid=cta-sections-grid-cards/section_cta41&context=react) |
| 264 | CTA 42 | [`cta-sections-grid-cards/section_cta42.jpg`](/reference-images/cta-sections-grid-cards/section_cta42.jpg) | — | [open](https://www.relume.ai/preview?cid=cta-sections-grid-cards/section_cta42&context=react) |
| 265 | CTA 43 | [`cta-sections-grid-cards/section_cta43.jpg`](/reference-images/cta-sections-grid-cards/section_cta43.jpg) | — | [open](https://www.relume.ai/preview?cid=cta-sections-grid-cards/section_cta43&context=react) |
| 266 | CTA 44 | [`cta-sections-grid-cards/section_cta44.jpg`](/reference-images/cta-sections-grid-cards/section_cta44.jpg) | — | [open](https://www.relume.ai/preview?cid=cta-sections-grid-cards/section_cta44&context=react) |
| 267 | CTA 45 | [`cta-sections-grid-cards/section_cta45.jpg`](/reference-images/cta-sections-grid-cards/section_cta45.jpg) | — | [open](https://www.relume.ai/preview?cid=cta-sections-grid-cards/section_cta45&context=react) |
| 268 | CTA 46 | [`cta-sections-grid-cards/section_cta46.jpg`](/reference-images/cta-sections-grid-cards/section_cta46.jpg) | — | [open](https://www.relume.ai/preview?cid=cta-sections-grid-cards/section_cta46&context=react) |
| 269 | CTA 47 | [`cta-sections-grid-cards/section_cta47.jpg`](/reference-images/cta-sections-grid-cards/section_cta47.jpg) | — | [open](https://www.relume.ai/preview?cid=cta-sections-grid-cards/section_cta47&context=react) |
| 270 | CTA 48 | [`cta-sections-grid-cards/section_cta48.jpg`](/reference-images/cta-sections-grid-cards/section_cta48.jpg) | — | [open](https://www.relume.ai/preview?cid=cta-sections-grid-cards/section_cta48&context=react) |
| 271 | CTA 49 | [`cta-sections-grid-cards/section_cta49.jpg`](/reference-images/cta-sections-grid-cards/section_cta49.jpg) | — | [open](https://www.relume.ai/preview?cid=cta-sections-grid-cards/section_cta49&context=react) |
| 272 | CTA 50 | [`cta-sections-grid-cards/section_cta50.jpg`](/reference-images/cta-sections-grid-cards/section_cta50.jpg) | — | [open](https://www.relume.ai/preview?cid=cta-sections-grid-cards/section_cta50&context=react) |
| 273 | CTA 51 | [`cta-sections-grid-cards/section_cta51.jpg`](/reference-images/cta-sections-grid-cards/section_cta51.jpg) | — | [open](https://www.relume.ai/preview?cid=cta-sections-grid-cards/section_cta51&context=react) |
| 274 | CTA 52 | [`cta-sections-grid-cards/section_cta52.jpg`](/reference-images/cta-sections-grid-cards/section_cta52.jpg) | — | [open](https://www.relume.ai/preview?cid=cta-sections-grid-cards/section_cta52&context=react) |
| 275 | CTA 53 | [`cta-sections-grid-cards/section_cta53.jpg`](/reference-images/cta-sections-grid-cards/section_cta53.jpg) | — | [open](https://www.relume.ai/preview?cid=cta-sections-grid-cards/section_cta53&context=react) |
| 276 | CTA 54 | [`cta-sections-grid-cards/section_cta54.jpg`](/reference-images/cta-sections-grid-cards/section_cta54.jpg) | — | [open](https://www.relume.ai/preview?cid=cta-sections-grid-cards/section_cta54&context=react) |
| 277 | CTA 55 | [`cta-sections-grid-cards/section_cta55.jpg`](/reference-images/cta-sections-grid-cards/section_cta55.jpg) | — | [open](https://www.relume.ai/preview?cid=cta-sections-grid-cards/section_cta55&context=react) |
| 278 | CTA 56 | [`cta-sections-grid-cards/section_cta56.jpg`](/reference-images/cta-sections-grid-cards/section_cta56.jpg) | — | [open](https://www.relume.ai/preview?cid=cta-sections-grid-cards/section_cta56&context=react) |

## description-lists

Predicted behavior: Definition-list layout: term/definition rows with dividers (dl/dt/dd).

| # | Component | Local image | Flags | Relume preview |
|---|-----------|-------------|-------|----------------|
| 281 | Description List 1 | [`description-lists/description-list1_component.jpg`](/reference-images/description-lists/description-list1_component.jpg) | — | [open](https://www.relume.ai/preview?cid=description-lists/description-list1_component&context=react) |
| 282 | Description List 2 | [`description-lists/description-list2_component.jpg`](/reference-images/description-lists/description-list2_component.jpg) | — | [open](https://www.relume.ai/preview?cid=description-lists/description-list2_component&context=react) |
| 283 | Description List 3 | [`description-lists/description-list3_component.jpg`](/reference-images/description-lists/description-list3_component.jpg) | — | [open](https://www.relume.ai/preview?cid=description-lists/description-list3_component&context=react) |
| 284 | Description List 4 | [`description-lists/description-list4_component.jpg`](/reference-images/description-lists/description-list4_component.jpg) | — | [open](https://www.relume.ai/preview?cid=description-lists/description-list4_component&context=react) |

## event-sections

Predicted behavior: Event listings: rows/cards with date block, title, location, RSVP button; possible upcoming/past split.

| # | Component | Local image | Flags | Relume preview |
|---|-----------|-------------|-------|----------------|
| 285 | Event 1 | [`event-sections/section_event1.jpg`](/reference-images/event-sections/section_event1.jpg) | — | [open](https://www.relume.ai/preview?cid=event-sections/section_event1&context=react) |
| 286 | Event 2 | [`event-sections/section_event2.jpg`](/reference-images/event-sections/section_event2.jpg) | — | [open](https://www.relume.ai/preview?cid=event-sections/section_event2&context=react) |
| 287 | Event 3 | [`event-sections/section_event3.jpg`](/reference-images/event-sections/section_event3.jpg) | — | [open](https://www.relume.ai/preview?cid=event-sections/section_event3&context=react) |
| 288 | Event 4 | [`event-sections/section_event4.jpg`](/reference-images/event-sections/section_event4.jpg) | — | [open](https://www.relume.ai/preview?cid=event-sections/section_event4&context=react) |
| 289 | Event 5 | [`event-sections/section_event5.jpg`](/reference-images/event-sections/section_event5.jpg) | — | [open](https://www.relume.ai/preview?cid=event-sections/section_event5&context=react) |
| 290 | Event 6 | [`event-sections/section_event6.jpg`](/reference-images/event-sections/section_event6.jpg) | — | [open](https://www.relume.ai/preview?cid=event-sections/section_event6&context=react) |
| 291 | Event 7 | [`event-sections/section_event7.jpg`](/reference-images/event-sections/section_event7.jpg) | — | [open](https://www.relume.ai/preview?cid=event-sections/section_event7&context=react) |
| 292 | Event 8 | [`event-sections/section_event8.jpg`](/reference-images/event-sections/section_event8.jpg) | — | [open](https://www.relume.ai/preview?cid=event-sections/section_event8&context=react) |
| 293 | Event 9 | [`event-sections/section_event9.jpg`](/reference-images/event-sections/section_event9.jpg) | — | [open](https://www.relume.ai/preview?cid=event-sections/section_event9&context=react) |
| 294 | Event 10 | [`event-sections/section_event10.jpg`](/reference-images/event-sections/section_event10.jpg) | — | [open](https://www.relume.ai/preview?cid=event-sections/section_event10&context=react) |
| 295 | Event 11 | [`event-sections/section_event11.jpg`](/reference-images/event-sections/section_event11.jpg) | — | [open](https://www.relume.ai/preview?cid=event-sections/section_event11&context=react) |
| 296 | Event 12 | [`event-sections/section_event12.jpg`](/reference-images/event-sections/section_event12.jpg) | — | [open](https://www.relume.ai/preview?cid=event-sections/section_event12&context=react) |
| 297 | Event 13 | [`event-sections/section_event13.jpg`](/reference-images/event-sections/section_event13.jpg) | — | [open](https://www.relume.ai/preview?cid=event-sections/section_event13&context=react) |
| 298 | Event 14 | [`event-sections/section_event14.jpg`](/reference-images/event-sections/section_event14.jpg) | — | [open](https://www.relume.ai/preview?cid=event-sections/section_event14&context=react) |
| 299 | Event 15 | [`event-sections/section_event15.jpg`](/reference-images/event-sections/section_event15.jpg) | — | [open](https://www.relume.ai/preview?cid=event-sections/section_event15&context=react) |
| 300 | Event 16 | [`event-sections/section_event16.jpg`](/reference-images/event-sections/section_event16.jpg) | — | [open](https://www.relume.ai/preview?cid=event-sections/section_event16&context=react) |
| 301 | Event 17 | [`event-sections/section_event17.jpg`](/reference-images/event-sections/section_event17.jpg) | — | [open](https://www.relume.ai/preview?cid=event-sections/section_event17&context=react) |
| 302 | Event 18 | [`event-sections/section_event18.jpg`](/reference-images/event-sections/section_event18.jpg) | — | [open](https://www.relume.ai/preview?cid=event-sections/section_event18&context=react) |
| 303 | Event 19 | [`event-sections/section_event19.jpg`](/reference-images/event-sections/section_event19.jpg) | — | [open](https://www.relume.ai/preview?cid=event-sections/section_event19&context=react) |
| 304 | Event 20 | [`event-sections/section_event20.jpg`](/reference-images/event-sections/section_event20.jpg) | — | [open](https://www.relume.ai/preview?cid=event-sections/section_event20&context=react) |
| 305 | Event 21 | [`event-sections/section_event21.jpg`](/reference-images/event-sections/section_event21.jpg) | — | [open](https://www.relume.ai/preview?cid=event-sections/section_event21&context=react) |
| 306 | Event 22 | [`event-sections/section_event22.jpg`](/reference-images/event-sections/section_event22.jpg) | — | [open](https://www.relume.ai/preview?cid=event-sections/section_event22&context=react) |
| 307 | Event 23 | [`event-sections/section_event23.jpg`](/reference-images/event-sections/section_event23.jpg) | — | [open](https://www.relume.ai/preview?cid=event-sections/section_event23&context=react) |
| 308 | Event 24 | [`event-sections/section_event24.jpg`](/reference-images/event-sections/section_event24.jpg) | — | [open](https://www.relume.ai/preview?cid=event-sections/section_event24&context=react) |
| 309 | Event 25 | [`event-sections/section_event25.jpg`](/reference-images/event-sections/section_event25.jpg) | — | [open](https://www.relume.ai/preview?cid=event-sections/section_event25&context=react) |
| 310 | Event 26 | [`event-sections/section_event26.jpg`](/reference-images/event-sections/section_event26.jpg) | — | [open](https://www.relume.ai/preview?cid=event-sections/section_event26&context=react) |
| 311 | Event 27 | [`event-sections/section_event27.jpg`](/reference-images/event-sections/section_event27.jpg) | — | [open](https://www.relume.ai/preview?cid=event-sections/section_event27&context=react) |
| 312 | Event 28 | [`event-sections/section_event28.jpg`](/reference-images/event-sections/section_event28.jpg) | — | [open](https://www.relume.ai/preview?cid=event-sections/section_event28&context=react) |
| 313 | Event 29 | [`event-sections/section_event29.jpg`](/reference-images/event-sections/section_event29.jpg) | — | [open](https://www.relume.ai/preview?cid=event-sections/section_event29&context=react) |
| 314 | Event 30 | [`event-sections/section_event30.jpg`](/reference-images/event-sections/section_event30.jpg) | — | [open](https://www.relume.ai/preview?cid=event-sections/section_event30&context=react) |
| 315 | Event 31 | [`event-sections/section_event31.jpg`](/reference-images/event-sections/section_event31.jpg) | — | [open](https://www.relume.ai/preview?cid=event-sections/section_event31&context=react) |
| 316 | Event 32 | [`event-sections/section_event32.jpg`](/reference-images/event-sections/section_event32.jpg) | — | [open](https://www.relume.ai/preview?cid=event-sections/section_event32&context=react) |
| 317 | Event 33 | [`event-sections/section_event33.jpg`](/reference-images/event-sections/section_event33.jpg) | — | [open](https://www.relume.ai/preview?cid=event-sections/section_event33&context=react) |
| 318 | Event 34 | [`event-sections/section_event34.jpg`](/reference-images/event-sections/section_event34.jpg) | — | [open](https://www.relume.ai/preview?cid=event-sections/section_event34&context=react) |
| 319 | Event 35 | [`event-sections/section_event35.jpg`](/reference-images/event-sections/section_event35.jpg) | — | [open](https://www.relume.ai/preview?cid=event-sections/section_event35&context=react) |
| 320 | Event 36 | [`event-sections/section_event36.jpg`](/reference-images/event-sections/section_event36.jpg) | — | [open](https://www.relume.ai/preview?cid=event-sections/section_event36&context=react) |
| 321 | Event 37 | [`event-sections/section_event37.jpg`](/reference-images/event-sections/section_event37.jpg) | — | [open](https://www.relume.ai/preview?cid=event-sections/section_event37&context=react) |

## event-headers

Predicted behavior: Event hero: title, date/time/place meta with icons, register CTA, background image.

| # | Component | Local image | Flags | Relume preview |
|---|-----------|-------------|-------|----------------|
| 322 | Event Header 1 | [`event-headers/section_event-header1.jpg`](/reference-images/event-headers/section_event-header1.jpg) | — | [open](https://www.relume.ai/preview?cid=event-headers/section_event-header1&context=react) |
| 323 | Event Header 2 | [`event-headers/section_event-header2.jpg`](/reference-images/event-headers/section_event-header2.jpg) | — | [open](https://www.relume.ai/preview?cid=event-headers/section_event-header2&context=react) |
| 324 | Event Header 3 | [`event-headers/section_event-header3.jpg`](/reference-images/event-headers/section_event-header3.jpg) | — | [open](https://www.relume.ai/preview?cid=event-headers/section_event-header3&context=react) |
| 325 | Event Header 4 | [`event-headers/section_event-header4.jpg`](/reference-images/event-headers/section_event-header4.jpg) | — | [open](https://www.relume.ai/preview?cid=event-headers/section_event-header4&context=react) |
| 326 | Event Header 5 | [`event-headers/section_event-header5.jpg`](/reference-images/event-headers/section_event-header5.jpg) | — | [open](https://www.relume.ai/preview?cid=event-headers/section_event-header5&context=react) |
| 327 | Event Header 6 | [`event-headers/section_event-header6.jpg`](/reference-images/event-headers/section_event-header6.jpg) | — | [open](https://www.relume.ai/preview?cid=event-headers/section_event-header6&context=react) |

## event-item-headers

Predicted behavior: Single event card header: date block + title + meta + link.

| # | Component | Local image | Flags | Relume preview |
|---|-----------|-------------|-------|----------------|
| 328 | Event Item Header 1 | [`event-item-headers/section_event-item-header1.jpg`](/reference-images/event-item-headers/section_event-item-header1.jpg) | — | [open](https://www.relume.ai/preview?cid=event-item-headers/section_event-item-header1&context=react) |
| 329 | Event Item Header 2 | [`event-item-headers/section_event-item-header2.jpg`](/reference-images/event-item-headers/section_event-item-header2.jpg) | — | [open](https://www.relume.ai/preview?cid=event-item-headers/section_event-item-header2&context=react) |
| 330 | Event Item Header 3 | [`event-item-headers/section_event-item-header3.jpg`](/reference-images/event-item-headers/section_event-item-header3.jpg) | — | [open](https://www.relume.ai/preview?cid=event-item-headers/section_event-item-header3&context=react) |
| 331 | Event Item Header 4 | [`event-item-headers/section_event-item-header4.jpg`](/reference-images/event-item-headers/section_event-item-header4.jpg) | — | [open](https://www.relume.ai/preview?cid=event-item-headers/section_event-item-header4&context=react) |
| 332 | Event Item Header 5 | [`event-item-headers/section_event-item-header5.jpg`](/reference-images/event-item-headers/section_event-item-header5.jpg) | — | [open](https://www.relume.ai/preview?cid=event-item-headers/section_event-item-header5&context=react) |
| 333 | Event Item Header 6 | [`event-item-headers/section_event-item-header6.jpg`](/reference-images/event-item-headers/section_event-item-header6.jpg) | — | [open](https://www.relume.ai/preview?cid=event-item-headers/section_event-item-header6&context=react) |
| 334 | Event Item Header 7 | [`event-item-headers/section_event-item-header7.jpg`](/reference-images/event-item-headers/section_event-item-header7.jpg) | — | [open](https://www.relume.ai/preview?cid=event-item-headers/section_event-item-header7&context=react) |
| 335 | Event Item Header 8 | [`event-item-headers/section_event-item-header8.jpg`](/reference-images/event-item-headers/section_event-item-header8.jpg) | — | [open](https://www.relume.ai/preview?cid=event-item-headers/section_event-item-header8&context=react) |
| 336 | Event Item Header 9 | [`event-item-headers/section_event-item-header9.jpg`](/reference-images/event-item-headers/section_event-item-header9.jpg) | — | [open](https://www.relume.ai/preview?cid=event-item-headers/section_event-item-header9&context=react) |
| 337 | Event Item Header 10 | [`event-item-headers/section_event-item-header10.jpg`](/reference-images/event-item-headers/section_event-item-header10.jpg) | — | [open](https://www.relume.ai/preview?cid=event-item-headers/section_event-item-header10&context=react) |
| 338 | Event Item Header 11 | [`event-item-headers/section_event-item-header11.jpg`](/reference-images/event-item-headers/section_event-item-header11.jpg) | — | [open](https://www.relume.ai/preview?cid=event-item-headers/section_event-item-header11&context=react) |

## faq-sections

Predicted behavior: FAQ accordion: question rows that expand/collapse (details/summary or daisyUI collapse); sometimes 2-column with side image.

| # | Component | Local image | Flags | Relume preview |
|---|-----------|-------------|-------|----------------|
| 339 | FAQ 1 | [`faq-sections/section_faq1.jpg`](/reference-images/faq-sections/section_faq1.jpg) | I | [open](https://www.relume.ai/preview?cid=faq-sections/section_faq1&context=react) |
| 340 | FAQ 2 | [`faq-sections/section_faq2.jpg`](/reference-images/faq-sections/section_faq2.jpg) | I | [open](https://www.relume.ai/preview?cid=faq-sections/section_faq2&context=react) |
| 341 | FAQ 3 | [`faq-sections/section_faq3.jpg`](/reference-images/faq-sections/section_faq3.jpg) | I | [open](https://www.relume.ai/preview?cid=faq-sections/section_faq3&context=react) |
| 342 | FAQ 4 | [`faq-sections/section_faq4.jpg`](/reference-images/faq-sections/section_faq4.jpg) | I | [open](https://www.relume.ai/preview?cid=faq-sections/section_faq4&context=react) |
| 343 | FAQ 5 | [`faq-sections/section_faq5.jpg`](/reference-images/faq-sections/section_faq5.jpg) | I | [open](https://www.relume.ai/preview?cid=faq-sections/section_faq5&context=react) |
| 344 | FAQ 6 | [`faq-sections/section_faq6.jpg`](/reference-images/faq-sections/section_faq6.jpg) | I | [open](https://www.relume.ai/preview?cid=faq-sections/section_faq6&context=react) |
| 345 | FAQ 7 | [`faq-sections/section_faq7.jpg`](/reference-images/faq-sections/section_faq7.jpg) | — | [open](https://www.relume.ai/preview?cid=faq-sections/section_faq7&context=react) |
| 346 | FAQ 8 | [`faq-sections/section_faq8.jpg`](/reference-images/faq-sections/section_faq8.jpg) | — | [open](https://www.relume.ai/preview?cid=faq-sections/section_faq8&context=react) |
| 347 | FAQ 9 | [`faq-sections/section_faq9.jpg`](/reference-images/faq-sections/section_faq9.jpg) | — | [open](https://www.relume.ai/preview?cid=faq-sections/section_faq9&context=react) |
| 348 | FAQ 10 | [`faq-sections/section_faq10.jpg`](/reference-images/faq-sections/section_faq10.jpg) | I | [open](https://www.relume.ai/preview?cid=faq-sections/section_faq10&context=react) |
| 349 | FAQ 11 | [`faq-sections/section_faq11.jpg`](/reference-images/faq-sections/section_faq11.jpg) | I | [open](https://www.relume.ai/preview?cid=faq-sections/section_faq11&context=react) |
| 350 | FAQ 12 | [`faq-sections/section_faq12.jpg`](/reference-images/faq-sections/section_faq12.jpg) | — | [open](https://www.relume.ai/preview?cid=faq-sections/section_faq12&context=react) |
| 351 | FAQ 13 | [`faq-sections/section_faq13.jpg`](/reference-images/faq-sections/section_faq13.jpg) | — | [open](https://www.relume.ai/preview?cid=faq-sections/section_faq13&context=react) |
| 352 | FAQ 14 | [`faq-sections/section_faq14.jpg`](/reference-images/faq-sections/section_faq14.jpg) | — | [open](https://www.relume.ai/preview?cid=faq-sections/section_faq14&context=react) |

## category-filters

Predicted behavior: Filter bar: chip/tab buttons (sometimes with counts). JS: active state swap + content filtering (daisyUI tabs/check-radios or small vanilla JS).

| # | Component | Local image | Flags | Relume preview |
|---|-----------|-------------|-------|----------------|
| 353 | Filters 1 | [`category-filters/section_filters1.jpg`](/reference-images/category-filters/section_filters1.jpg) | I | [open](https://www.relume.ai/preview?cid=category-filters/section_filters1&context=react) |
| 354 | Filters 2 | [`category-filters/section_filters2.jpg`](/reference-images/category-filters/section_filters2.jpg) | I | [open](https://www.relume.ai/preview?cid=category-filters/section_filters2&context=react) |
| 355 | Filters 3 | [`category-filters/section_filters3.jpg`](/reference-images/category-filters/section_filters3.jpg) | I | [open](https://www.relume.ai/preview?cid=category-filters/section_filters3&context=react) |
| 356 | Filters 4 | [`category-filters/section_filters4.jpg`](/reference-images/category-filters/section_filters4.jpg) | I | [open](https://www.relume.ai/preview?cid=category-filters/section_filters4&context=react) |
| 357 | Filters 5 | [`category-filters/section_filters5.jpg`](/reference-images/category-filters/section_filters5.jpg) | I | [open](https://www.relume.ai/preview?cid=category-filters/section_filters5&context=react) |
| 358 | Filters 6 | [`category-filters/section_filters6.jpg`](/reference-images/category-filters/section_filters6.jpg) | I | [open](https://www.relume.ai/preview?cid=category-filters/section_filters6&context=react) |

## footers

Predicted behavior: Site footer: logo, nav columns, social icons, newsletter input, legal line. Static; responsive stack.

| # | Component | Local image | Flags | Relume preview |
|---|-----------|-------------|-------|----------------|
| 359 | Footer 1 | [`footers/footer1_component.jpg`](/reference-images/footers/footer1_component.jpg) | — | [open](https://www.relume.ai/preview?cid=footers/footer1_component&context=react) |
| 360 | Footer 2 | [`footers/footer2_component.jpg`](/reference-images/footers/footer2_component.jpg) | — | [open](https://www.relume.ai/preview?cid=footers/footer2_component&context=react) |
| 361 | Footer 3 | [`footers/footer3_component.jpg`](/reference-images/footers/footer3_component.jpg) | — | [open](https://www.relume.ai/preview?cid=footers/footer3_component&context=react) |
| 362 | Footer 4 | [`footers/footer4_component.jpg`](/reference-images/footers/footer4_component.jpg) | — | [open](https://www.relume.ai/preview?cid=footers/footer4_component&context=react) |
| 363 | Footer 5 | [`footers/footer5_component.jpg`](/reference-images/footers/footer5_component.jpg) | — | [open](https://www.relume.ai/preview?cid=footers/footer5_component&context=react) |
| 364 | Footer 6 | [`footers/footer6_component.jpg`](/reference-images/footers/footer6_component.jpg) | — | [open](https://www.relume.ai/preview?cid=footers/footer6_component&context=react) |
| 365 | Footer 7 | [`footers/footer7_component.jpg`](/reference-images/footers/footer7_component.jpg) | — | [open](https://www.relume.ai/preview?cid=footers/footer7_component&context=react) |
| 366 | Footer 8 | [`footers/footer8_component.jpg`](/reference-images/footers/footer8_component.jpg) | — | [open](https://www.relume.ai/preview?cid=footers/footer8_component&context=react) |
| 367 | Footer 9 | [`footers/footer9_component.jpg`](/reference-images/footers/footer9_component.jpg) | — | [open](https://www.relume.ai/preview?cid=footers/footer9_component&context=react) |
| 368 | Footer 10 | [`footers/footer10_component.jpg`](/reference-images/footers/footer10_component.jpg) | — | [open](https://www.relume.ai/preview?cid=footers/footer10_component&context=react) |
| 369 | Footer 11 | [`footers/footer11_component.jpg`](/reference-images/footers/footer11_component.jpg) | — | [open](https://www.relume.ai/preview?cid=footers/footer11_component&context=react) |
| 370 | Footer 12 | [`footers/footer12_component.jpg`](/reference-images/footers/footer12_component.jpg) | — | [open](https://www.relume.ai/preview?cid=footers/footer12_component&context=react) |
| 371 | Footer 13 | [`footers/footer13_component.jpg`](/reference-images/footers/footer13_component.jpg) | — | [open](https://www.relume.ai/preview?cid=footers/footer13_component&context=react) |
| 372 | Footer 14 | [`footers/footer14_component.jpg`](/reference-images/footers/footer14_component.jpg) | — | [open](https://www.relume.ai/preview?cid=footers/footer14_component&context=react) |
| 373 | Footer 15 | [`footers/footer15_component.jpg`](/reference-images/footers/footer15_component.jpg) | — | [open](https://www.relume.ai/preview?cid=footers/footer15_component&context=react) |
| 374 | Footer 16 | [`footers/footer16_component.jpg`](/reference-images/footers/footer16_component.jpg) | — | [open](https://www.relume.ai/preview?cid=footers/footer16_component&context=react) |
| 375 | Footer 17 | [`footers/footer17_component.jpg`](/reference-images/footers/footer17_component.jpg) | — | [open](https://www.relume.ai/preview?cid=footers/footer17_component&context=react) |

## forms

Predicted behavior: Form blocks: single/multi-field forms with labels, inputs, select, checkbox, submit button.

| # | Component | Local image | Flags | Relume preview |
|---|-----------|-------------|-------|----------------|
| 376 | Form 1 | [`forms/form1_component.jpg`](/reference-images/forms/form1_component.jpg) | — | [open](https://www.relume.ai/preview?cid=forms/form1_component&context=react) |
| 377 | Form 2 | [`forms/form2_component.jpg`](/reference-images/forms/form2_component.jpg) | — | [open](https://www.relume.ai/preview?cid=forms/form2_component&context=react) |
| 378 | Form 3 | [`forms/form3_component.jpg`](/reference-images/forms/form3_component.jpg) | — | [open](https://www.relume.ai/preview?cid=forms/form3_component&context=react) |
| 379 | Form 4 | [`forms/form4_component.jpg`](/reference-images/forms/form4_component.jpg) | — | [open](https://www.relume.ai/preview?cid=forms/form4_component&context=react) |
| 380 | Form 5 | [`forms/form5_component.jpg`](/reference-images/forms/form5_component.jpg) | — | [open](https://www.relume.ai/preview?cid=forms/form5_component&context=react) |
| 381 | Form 6 | [`forms/form6_component.jpg`](/reference-images/forms/form6_component.jpg) | — | [open](https://www.relume.ai/preview?cid=forms/form6_component&context=react) |
| 382 | Form 7 | [`forms/form7_component.jpg`](/reference-images/forms/form7_component.jpg) | — | [open](https://www.relume.ai/preview?cid=forms/form7_component&context=react) |
| 383 | Form 8 | [`forms/form8_component.jpg`](/reference-images/forms/form8_component.jpg) | — | [open](https://www.relume.ai/preview?cid=forms/form8_component&context=react) |
| 384 | Form 9 | [`forms/form9_component.jpg`](/reference-images/forms/form9_component.jpg) | — | [open](https://www.relume.ai/preview?cid=forms/form9_component&context=react) |
| 385 | Form 10 | [`forms/form10_component.jpg`](/reference-images/forms/form10_component.jpg) | — | [open](https://www.relume.ai/preview?cid=forms/form10_component&context=react) |
| 386 | Form 11 | [`forms/form11_component.jpg`](/reference-images/forms/form11_component.jpg) | — | [open](https://www.relume.ai/preview?cid=forms/form11_component&context=react) |
| 387 | Form 12 | [`forms/form12_component.jpg`](/reference-images/forms/form12_component.jpg) | — | [open](https://www.relume.ai/preview?cid=forms/form12_component&context=react) |
| 388 | Form 13 | [`forms/form13_component.jpg`](/reference-images/forms/form13_component.jpg) | — | [open](https://www.relume.ai/preview?cid=forms/form13_component&context=react) |
| 389 | Form 14 | [`forms/form14_component.jpg`](/reference-images/forms/form14_component.jpg) | — | [open](https://www.relume.ai/preview?cid=forms/form14_component&context=react) |
| 390 | Form 15 | [`forms/form15_component.jpg`](/reference-images/forms/form15_component.jpg) | — | [open](https://www.relume.ai/preview?cid=forms/form15_component&context=react) |
| 391 | Form 16 | [`forms/form16_component.jpg`](/reference-images/forms/form16_component.jpg) | — | [open](https://www.relume.ai/preview?cid=forms/form16_component&context=react) |
| 392 | Form 17 | [`forms/form17_component.jpg`](/reference-images/forms/form17_component.jpg) | — | [open](https://www.relume.ai/preview?cid=forms/form17_component&context=react) |
| 393 | Form 18 | [`forms/form18_component.jpg`](/reference-images/forms/form18_component.jpg) | — | [open](https://www.relume.ai/preview?cid=forms/form18_component&context=react) |
| 394 | Form 19 | [`forms/form19_component.jpg`](/reference-images/forms/form19_component.jpg) | — | [open](https://www.relume.ai/preview?cid=forms/form19_component&context=react) |
| 395 | Form 20 | [`forms/form20_component.jpg`](/reference-images/forms/form20_component.jpg) | — | [open](https://www.relume.ai/preview?cid=forms/form20_component&context=react) |

## gallery-sections

Predicted behavior: Image gallery: grid/masonry of images, hover overlay caption, optional lightbox.

| # | Component | Local image | Flags | Relume preview |
|---|-----------|-------------|-------|----------------|
| 396 | Gallery 1 | [`gallery-sections/section_gallery1.jpg`](/reference-images/gallery-sections/section_gallery1.jpg) | — | [open](https://www.relume.ai/preview?cid=gallery-sections/section_gallery1&context=react) |
| 397 | Gallery 2 | [`gallery-sections/section_gallery2.jpg`](/reference-images/gallery-sections/section_gallery2.jpg) | — | [open](https://www.relume.ai/preview?cid=gallery-sections/section_gallery2&context=react) |
| 398 | Gallery 3 | [`gallery-sections/section_gallery3.jpg`](/reference-images/gallery-sections/section_gallery3.jpg) | — | [open](https://www.relume.ai/preview?cid=gallery-sections/section_gallery3&context=react) |
| 399 | Gallery 4 | [`gallery-sections/section_gallery4.jpg`](/reference-images/gallery-sections/section_gallery4.jpg) | — | [open](https://www.relume.ai/preview?cid=gallery-sections/section_gallery4&context=react) |
| 400 | Gallery 5 | [`gallery-sections/section_gallery5.jpg`](/reference-images/gallery-sections/section_gallery5.jpg) | — | [open](https://www.relume.ai/preview?cid=gallery-sections/section_gallery5&context=react) |
| 401 | Gallery 6 | [`gallery-sections/section_gallery6.jpg`](/reference-images/gallery-sections/section_gallery6.jpg) | — | [open](https://www.relume.ai/preview?cid=gallery-sections/section_gallery6&context=react) |
| 402 | Gallery 7 | [`gallery-sections/section_gallery7.jpg`](/reference-images/gallery-sections/section_gallery7.jpg) | — | [open](https://www.relume.ai/preview?cid=gallery-sections/section_gallery7&context=react) |
| 403 | Gallery 8 | [`gallery-sections/section_gallery8.jpg`](/reference-images/gallery-sections/section_gallery8.jpg) | — | [open](https://www.relume.ai/preview?cid=gallery-sections/section_gallery8&context=react) |
| 404 | Gallery 9 | [`gallery-sections/section_gallery9.jpg`](/reference-images/gallery-sections/section_gallery9.jpg) | — | [open](https://www.relume.ai/preview?cid=gallery-sections/section_gallery9&context=react) |
| 405 | Gallery 10 | [`gallery-sections/section_gallery10.jpg`](/reference-images/gallery-sections/section_gallery10.jpg) | — | [open](https://www.relume.ai/preview?cid=gallery-sections/section_gallery10&context=react) |
| 406 | Gallery 11 | [`gallery-sections/section_gallery11.jpg`](/reference-images/gallery-sections/section_gallery11.jpg) | — | [open](https://www.relume.ai/preview?cid=gallery-sections/section_gallery11&context=react) |
| 407 | Gallery 12 | [`gallery-sections/section_gallery12.jpg`](/reference-images/gallery-sections/section_gallery12.jpg) | — | [open](https://www.relume.ai/preview?cid=gallery-sections/section_gallery12&context=react) |
| 408 | Gallery 13 | [`gallery-sections/section_gallery13.jpg`](/reference-images/gallery-sections/section_gallery13.jpg) | — | [open](https://www.relume.ai/preview?cid=gallery-sections/section_gallery13&context=react) |
| 409 | Gallery 14 | [`gallery-sections/section_gallery14.jpg`](/reference-images/gallery-sections/section_gallery14.jpg) | — | [open](https://www.relume.ai/preview?cid=gallery-sections/section_gallery14&context=react) |
| 410 | Gallery 15 | [`gallery-sections/section_gallery15.jpg`](/reference-images/gallery-sections/section_gallery15.jpg) | — | [open](https://www.relume.ai/preview?cid=gallery-sections/section_gallery15&context=react) |
| 411 | Gallery 16 | [`gallery-sections/section_gallery16.jpg`](/reference-images/gallery-sections/section_gallery16.jpg) | — | [open](https://www.relume.ai/preview?cid=gallery-sections/section_gallery16&context=react) |
| 412 | Gallery 17 | [`gallery-sections/section_gallery17.jpg`](/reference-images/gallery-sections/section_gallery17.jpg) | — | [open](https://www.relume.ai/preview?cid=gallery-sections/section_gallery17&context=react) |
| 413 | Gallery 18 | [`gallery-sections/section_gallery18.jpg`](/reference-images/gallery-sections/section_gallery18.jpg) | — | [open](https://www.relume.ai/preview?cid=gallery-sections/section_gallery18&context=react) |
| 414 | Gallery 19 | [`gallery-sections/section_gallery19.jpg`](/reference-images/gallery-sections/section_gallery19.jpg) | — | [open](https://www.relume.ai/preview?cid=gallery-sections/section_gallery19&context=react) |
| 415 | Gallery 20 | [`gallery-sections/section_gallery20.jpg`](/reference-images/gallery-sections/section_gallery20.jpg) | — | [open](https://www.relume.ai/preview?cid=gallery-sections/section_gallery20&context=react) |
| 416 | Gallery 21 | [`gallery-sections/section_gallery21.jpg`](/reference-images/gallery-sections/section_gallery21.jpg) | — | [open](https://www.relume.ai/preview?cid=gallery-sections/section_gallery21&context=react) |
| 417 | Gallery 22 | [`gallery-sections/section_gallery22.jpg`](/reference-images/gallery-sections/section_gallery22.jpg) | — | [open](https://www.relume.ai/preview?cid=gallery-sections/section_gallery22&context=react) |
| 418 | Gallery 23 | [`gallery-sections/section_gallery23.jpg`](/reference-images/gallery-sections/section_gallery23.jpg) | — | [open](https://www.relume.ai/preview?cid=gallery-sections/section_gallery23&context=react) |
| 420 | Gallery 25 | [`gallery-sections/section_gallery25.jpg`](/reference-images/gallery-sections/section_gallery25.jpg) | — | [open](https://www.relume.ai/preview?cid=gallery-sections/section_gallery25&context=react) |
| 421 | Gallery 26 | [`gallery-sections/section_gallery26.jpg`](/reference-images/gallery-sections/section_gallery26.jpg) | — | [open](https://www.relume.ai/preview?cid=gallery-sections/section_gallery26&context=react) |
| 422 | Gallery 27 | [`gallery-sections/section_gallery27.jpg`](/reference-images/gallery-sections/section_gallery27.jpg) | — | [open](https://www.relume.ai/preview?cid=gallery-sections/section_gallery27&context=react) |

## grid-lists

Predicted behavior: Grid of small tiles (products/categories): image + label, hover state.

| # | Component | Local image | Flags | Relume preview |
|---|-----------|-------------|-------|----------------|
| 423 | Grid List 1 | [`grid-lists/grid-list1_component.jpg`](/reference-images/grid-lists/grid-list1_component.jpg) | — | [open](https://www.relume.ai/preview?cid=grid-lists/grid-list1_component&context=react) |
| 424 | Grid List 2 | [`grid-lists/grid-list2_component.jpg`](/reference-images/grid-lists/grid-list2_component.jpg) | — | [open](https://www.relume.ai/preview?cid=grid-lists/grid-list2_component&context=react) |
| 425 | Grid List 3 | [`grid-lists/grid-list3_component.jpg`](/reference-images/grid-lists/grid-list3_component.jpg) | — | [open](https://www.relume.ai/preview?cid=grid-lists/grid-list3_component&context=react) |
| 426 | Grid List 4 | [`grid-lists/grid-list4_component.jpg`](/reference-images/grid-lists/grid-list4_component.jpg) | — | [open](https://www.relume.ai/preview?cid=grid-lists/grid-list4_component&context=react) |
| 427 | Grid List 5 | [`grid-lists/grid-list5_component.jpg`](/reference-images/grid-lists/grid-list5_component.jpg) | — | [open](https://www.relume.ai/preview?cid=grid-lists/grid-list5_component&context=react) |
| 428 | Grid List 6 | [`grid-lists/grid-list6_component.jpg`](/reference-images/grid-lists/grid-list6_component.jpg) | — | [open](https://www.relume.ai/preview?cid=grid-lists/grid-list6_component&context=react) |
| 429 | Grid List 7 | [`grid-lists/grid-list7_component.jpg`](/reference-images/grid-lists/grid-list7_component.jpg) | — | [open](https://www.relume.ai/preview?cid=grid-lists/grid-list7_component&context=react) |
| 430 | Grid List 8 | [`grid-lists/grid-list8_component.jpg`](/reference-images/grid-lists/grid-list8_component.jpg) | — | [open](https://www.relume.ai/preview?cid=grid-lists/grid-list8_component&context=react) |
| 431 | Grid List 9 | [`grid-lists/grid-list9_component.jpg`](/reference-images/grid-lists/grid-list9_component.jpg) | — | [open](https://www.relume.ai/preview?cid=grid-lists/grid-list9_component&context=react) |
| 432 | Grid List 10 | [`grid-lists/grid-list10_component.jpg`](/reference-images/grid-lists/grid-list10_component.jpg) | — | [open](https://www.relume.ai/preview?cid=grid-lists/grid-list10_component&context=react) |

## hero-header-sections

Predicted behavior: Hero variants: headline + sub + CTA + image/illustration; logo strip below is common.

| # | Component | Local image | Flags | Relume preview |
|---|-----------|-------------|-------|----------------|
| 433 | Header 1 | [`hero-header-sections/section_header1.jpg`](/reference-images/hero-header-sections/section_header1.jpg) | — | [open](https://www.relume.ai/preview?cid=hero-header-sections/section_header1&context=react) |
| 434 | Header 2 | [`hero-header-sections/section_header2.jpg`](/reference-images/hero-header-sections/section_header2.jpg) | — | [open](https://www.relume.ai/preview?cid=hero-header-sections/section_header2&context=react) |
| 435 | Header 3 | [`hero-header-sections/section_header3.jpg`](/reference-images/hero-header-sections/section_header3.jpg) | — | [open](https://www.relume.ai/preview?cid=hero-header-sections/section_header3&context=react) |
| 436 | Header 4 | [`hero-header-sections/section_header4.jpg`](/reference-images/hero-header-sections/section_header4.jpg) | — | [open](https://www.relume.ai/preview?cid=hero-header-sections/section_header4&context=react) |
| 437 | Header 5 | [`hero-header-sections/section_header5.jpg`](/reference-images/hero-header-sections/section_header5.jpg) | — | [open](https://www.relume.ai/preview?cid=hero-header-sections/section_header5&context=react) |
| 438 | Header 6 | [`hero-header-sections/section_header6.jpg`](/reference-images/hero-header-sections/section_header6.jpg) | — | [open](https://www.relume.ai/preview?cid=hero-header-sections/section_header6&context=react) |
| 439 | Header 7 | [`hero-header-sections/section_header7.jpg`](/reference-images/hero-header-sections/section_header7.jpg) | — | [open](https://www.relume.ai/preview?cid=hero-header-sections/section_header7&context=react) |
| 440 | Header 8 | [`hero-header-sections/section_header8.jpg`](/reference-images/hero-header-sections/section_header8.jpg) | — | [open](https://www.relume.ai/preview?cid=hero-header-sections/section_header8&context=react) |
| 441 | Header 9 | [`hero-header-sections/section_header9.jpg`](/reference-images/hero-header-sections/section_header9.jpg) | — | [open](https://www.relume.ai/preview?cid=hero-header-sections/section_header9&context=react) |
| 442 | Header 10 | [`hero-header-sections/section_header10.jpg`](/reference-images/hero-header-sections/section_header10.jpg) | — | [open](https://www.relume.ai/preview?cid=hero-header-sections/section_header10&context=react) |
| 443 | Header 11 | [`hero-header-sections/section_header11.jpg`](/reference-images/hero-header-sections/section_header11.jpg) | — | [open](https://www.relume.ai/preview?cid=hero-header-sections/section_header11&context=react) |
| 444 | Header 12 | [`hero-header-sections/section_header12.jpg`](/reference-images/hero-header-sections/section_header12.jpg) | — | [open](https://www.relume.ai/preview?cid=hero-header-sections/section_header12&context=react) |
| 445 | Header 13 | [`hero-header-sections/section_header13.jpg`](/reference-images/hero-header-sections/section_header13.jpg) | — | [open](https://www.relume.ai/preview?cid=hero-header-sections/section_header13&context=react) |
| 446 | Header 14 | [`hero-header-sections/section_header14.jpg`](/reference-images/hero-header-sections/section_header14.jpg) | — | [open](https://www.relume.ai/preview?cid=hero-header-sections/section_header14&context=react) |
| 447 | Header 15 | [`hero-header-sections/section_header15.jpg`](/reference-images/hero-header-sections/section_header15.jpg) | — | [open](https://www.relume.ai/preview?cid=hero-header-sections/section_header15&context=react) |
| 448 | Header 16 | [`hero-header-sections/section_header16.jpg`](/reference-images/hero-header-sections/section_header16.jpg) | — | [open](https://www.relume.ai/preview?cid=hero-header-sections/section_header16&context=react) |
| 449 | Header 17 | [`hero-header-sections/section_header17.jpg`](/reference-images/hero-header-sections/section_header17.jpg) | — | [open](https://www.relume.ai/preview?cid=hero-header-sections/section_header17&context=react) |
| 450 | Header 18 | [`hero-header-sections/section_header18.jpg`](/reference-images/hero-header-sections/section_header18.jpg) | — | [open](https://www.relume.ai/preview?cid=hero-header-sections/section_header18&context=react) |
| 451 | Header 19 | [`hero-header-sections/section_header19.jpg`](/reference-images/hero-header-sections/section_header19.jpg) | — | [open](https://www.relume.ai/preview?cid=hero-header-sections/section_header19&context=react) |
| 452 | Header 20 | [`hero-header-sections/section_header20.jpg`](/reference-images/hero-header-sections/section_header20.jpg) | — | [open](https://www.relume.ai/preview?cid=hero-header-sections/section_header20&context=react) |
| 453 | Header 21 | [`hero-header-sections/section_header21.jpg`](/reference-images/hero-header-sections/section_header21.jpg) | — | [open](https://www.relume.ai/preview?cid=hero-header-sections/section_header21&context=react) |
| 454 | Header 22 | [`hero-header-sections/section_header22.jpg`](/reference-images/hero-header-sections/section_header22.jpg) | — | [open](https://www.relume.ai/preview?cid=hero-header-sections/section_header22&context=react) |
| 455 | Header 23 | [`hero-header-sections/section_header23.jpg`](/reference-images/hero-header-sections/section_header23.jpg) | — | [open](https://www.relume.ai/preview?cid=hero-header-sections/section_header23&context=react) |
| 456 | Header 24 | [`hero-header-sections/section_header24.jpg`](/reference-images/hero-header-sections/section_header24.jpg) | — | [open](https://www.relume.ai/preview?cid=hero-header-sections/section_header24&context=react) |
| 457 | Header 25 | [`hero-header-sections/section_header25.jpg`](/reference-images/hero-header-sections/section_header25.jpg) | — | [open](https://www.relume.ai/preview?cid=hero-header-sections/section_header25&context=react) |
| 458 | Header 26 | [`hero-header-sections/section_header26.jpg`](/reference-images/hero-header-sections/section_header26.jpg) | — | [open](https://www.relume.ai/preview?cid=hero-header-sections/section_header26&context=react) |
| 459 | Header 27 | [`hero-header-sections/section_header27.jpg`](/reference-images/hero-header-sections/section_header27.jpg) | — | [open](https://www.relume.ai/preview?cid=hero-header-sections/section_header27&context=react) |
| 460 | Header 28 | [`hero-header-sections/section_header28.jpg`](/reference-images/hero-header-sections/section_header28.jpg) | — | [open](https://www.relume.ai/preview?cid=hero-header-sections/section_header28&context=react) |
| 461 | Header 29 | [`hero-header-sections/section_header29.jpg`](/reference-images/hero-header-sections/section_header29.jpg) | — | [open](https://www.relume.ai/preview?cid=hero-header-sections/section_header29&context=react) |
| 462 | Header 30 | [`hero-header-sections/section_header30.jpg`](/reference-images/hero-header-sections/section_header30.jpg) | — | [open](https://www.relume.ai/preview?cid=hero-header-sections/section_header30&context=react) |
| 463 | Header 31 | [`hero-header-sections/section_header31.jpg`](/reference-images/hero-header-sections/section_header31.jpg) | — | [open](https://www.relume.ai/preview?cid=hero-header-sections/section_header31&context=react) |
| 464 | Header 32 | [`hero-header-sections/section_header32.jpg`](/reference-images/hero-header-sections/section_header32.jpg) | — | [open](https://www.relume.ai/preview?cid=hero-header-sections/section_header32&context=react) |
| 465 | Header 33 | [`hero-header-sections/section_header33.jpg`](/reference-images/hero-header-sections/section_header33.jpg) | — | [open](https://www.relume.ai/preview?cid=hero-header-sections/section_header33&context=react) |
| 466 | Header 34 | [`hero-header-sections/section_header34.jpg`](/reference-images/hero-header-sections/section_header34.jpg) | — | [open](https://www.relume.ai/preview?cid=hero-header-sections/section_header34&context=react) |
| 467 | Header 35 | [`hero-header-sections/section_header35.jpg`](/reference-images/hero-header-sections/section_header35.jpg) | — | [open](https://www.relume.ai/preview?cid=hero-header-sections/section_header35&context=react) |
| 468 | Header 36 | [`hero-header-sections/section_header36.jpg`](/reference-images/hero-header-sections/section_header36.jpg) | — | [open](https://www.relume.ai/preview?cid=hero-header-sections/section_header36&context=react) |
| 469 | Header 37 | [`hero-header-sections/section_header37.jpg`](/reference-images/hero-header-sections/section_header37.jpg) | — | [open](https://www.relume.ai/preview?cid=hero-header-sections/section_header37&context=react) |
| 470 | Header 38 | [`hero-header-sections/section_header38.jpg`](/reference-images/hero-header-sections/section_header38.jpg) | — | [open](https://www.relume.ai/preview?cid=hero-header-sections/section_header38&context=react) |
| 471 | Header 39 | [`hero-header-sections/section_header39.jpg`](/reference-images/hero-header-sections/section_header39.jpg) | — | [open](https://www.relume.ai/preview?cid=hero-header-sections/section_header39&context=react) |
| 472 | Header 40 | [`hero-header-sections/section_header40.jpg`](/reference-images/hero-header-sections/section_header40.jpg) | — | [open](https://www.relume.ai/preview?cid=hero-header-sections/section_header40&context=react) |
| 473 | Header 41 | [`hero-header-sections/section_header41.jpg`](/reference-images/hero-header-sections/section_header41.jpg) | — | [open](https://www.relume.ai/preview?cid=hero-header-sections/section_header41&context=react) |
| 474 | Header 42 | [`hero-header-sections/section_header42.jpg`](/reference-images/hero-header-sections/section_header42.jpg) | — | [open](https://www.relume.ai/preview?cid=hero-header-sections/section_header42&context=react) |
| 475 | Header 43 | [`hero-header-sections/section_header43.jpg`](/reference-images/hero-header-sections/section_header43.jpg) | — | [open](https://www.relume.ai/preview?cid=hero-header-sections/section_header43&context=react) |
| 503 | Header 71 | [`hero-header-sections/section_header71.jpg`](/reference-images/hero-header-sections/section_header71.jpg) | — | [open](https://www.relume.ai/preview?cid=hero-header-sections/section_header71&context=react) |
| 504 | Header 72 | [`hero-header-sections/section_header72.jpg`](/reference-images/hero-header-sections/section_header72.jpg) | — | [open](https://www.relume.ai/preview?cid=hero-header-sections/section_header72&context=react) |
| 505 | Header 73 | [`hero-header-sections/section_header73.jpg`](/reference-images/hero-header-sections/section_header73.jpg) | — | [open](https://www.relume.ai/preview?cid=hero-header-sections/section_header73&context=react) |
| 506 | Header 74 | [`hero-header-sections/section_header74.jpg`](/reference-images/hero-header-sections/section_header74.jpg) | — | [open](https://www.relume.ai/preview?cid=hero-header-sections/section_header74&context=react) |
| 577 | Header 145 | [`hero-header-sections/section_header145.jpg`](/reference-images/hero-header-sections/section_header145.jpg) | — | [open](https://www.relume.ai/preview?cid=hero-header-sections/section_header145&context=react) |
| 578 | Header 146 | [`hero-header-sections/section_header146.jpg`](/reference-images/hero-header-sections/section_header146.jpg) | — | [open](https://www.relume.ai/preview?cid=hero-header-sections/section_header146&context=react) |
| 579 | Header 147 | [`hero-header-sections/section_header147.jpg`](/reference-images/hero-header-sections/section_header147.jpg) | — | [open](https://www.relume.ai/preview?cid=hero-header-sections/section_header147&context=react) |
| 580 | Header 148 | [`hero-header-sections/section_header148.jpg`](/reference-images/hero-header-sections/section_header148.jpg) | — | [open](https://www.relume.ai/preview?cid=hero-header-sections/section_header148&context=react) |
| 581 | Header 149 | [`hero-header-sections/section_header149.jpg`](/reference-images/hero-header-sections/section_header149.jpg) | — | [open](https://www.relume.ai/preview?cid=hero-header-sections/section_header149&context=react) |
| 582 | Header 150 | [`hero-header-sections/section_header150.jpg`](/reference-images/hero-header-sections/section_header150.jpg) | — | [open](https://www.relume.ai/preview?cid=hero-header-sections/section_header150&context=react) |
| 583 | Header 151 | [`hero-header-sections/section_header151.jpg`](/reference-images/hero-header-sections/section_header151.jpg) | — | [open](https://www.relume.ai/preview?cid=hero-header-sections/section_header151&context=react) |
| 584 | Header 152 | [`hero-header-sections/section_header152.jpg`](/reference-images/hero-header-sections/section_header152.jpg) | — | [open](https://www.relume.ai/preview?cid=hero-header-sections/section_header152&context=react) |

## header-sections

Predicted behavior: Hero header: big headline, subtext, CTAs, supporting visual.

| # | Component | Local image | Flags | Relume preview |
|---|-----------|-------------|-------|----------------|
| 476 | Header 44 | [`header-sections/section_header44.jpg`](/reference-images/header-sections/section_header44.jpg) | — | [open](https://www.relume.ai/preview?cid=header-sections/section_header44&context=react) |
| 477 | Header 45 | [`header-sections/section_header45.jpg`](/reference-images/header-sections/section_header45.jpg) | — | [open](https://www.relume.ai/preview?cid=header-sections/section_header45&context=react) |
| 478 | Header 46 | [`header-sections/section_header46.jpg`](/reference-images/header-sections/section_header46.jpg) | — | [open](https://www.relume.ai/preview?cid=header-sections/section_header46&context=react) |
| 479 | Header 47 | [`header-sections/section_header47.jpg`](/reference-images/header-sections/section_header47.jpg) | — | [open](https://www.relume.ai/preview?cid=header-sections/section_header47&context=react) |
| 480 | Header 48 | [`header-sections/section_header48.jpg`](/reference-images/header-sections/section_header48.jpg) | — | [open](https://www.relume.ai/preview?cid=header-sections/section_header48&context=react) |
| 481 | Header 49 | [`header-sections/section_header49.jpg`](/reference-images/header-sections/section_header49.jpg) | — | [open](https://www.relume.ai/preview?cid=header-sections/section_header49&context=react) |
| 482 | Header 50 | [`header-sections/section_header50.jpg`](/reference-images/header-sections/section_header50.jpg) | — | [open](https://www.relume.ai/preview?cid=header-sections/section_header50&context=react) |
| 483 | Header 51 | [`header-sections/section_header51.jpg`](/reference-images/header-sections/section_header51.jpg) | — | [open](https://www.relume.ai/preview?cid=header-sections/section_header51&context=react) |
| 484 | Header 52 | [`header-sections/section_header52.jpg`](/reference-images/header-sections/section_header52.jpg) | — | [open](https://www.relume.ai/preview?cid=header-sections/section_header52&context=react) |
| 485 | Header 53 | [`header-sections/section_header53.jpg`](/reference-images/header-sections/section_header53.jpg) | — | [open](https://www.relume.ai/preview?cid=header-sections/section_header53&context=react) |
| 486 | Header 54 | [`header-sections/section_header54.jpg`](/reference-images/header-sections/section_header54.jpg) | — | [open](https://www.relume.ai/preview?cid=header-sections/section_header54&context=react) |
| 487 | Header 55 | [`header-sections/section_header55.jpg`](/reference-images/header-sections/section_header55.jpg) | — | [open](https://www.relume.ai/preview?cid=header-sections/section_header55&context=react) |
| 488 | Header 56 | [`header-sections/section_header56.jpg`](/reference-images/header-sections/section_header56.jpg) | — | [open](https://www.relume.ai/preview?cid=header-sections/section_header56&context=react) |
| 489 | Header 57 | [`header-sections/section_header57.jpg`](/reference-images/header-sections/section_header57.jpg) | — | [open](https://www.relume.ai/preview?cid=header-sections/section_header57&context=react) |
| 490 | Header 58 | [`header-sections/section_header58.jpg`](/reference-images/header-sections/section_header58.jpg) | — | [open](https://www.relume.ai/preview?cid=header-sections/section_header58&context=react) |
| 491 | Header 59 | [`header-sections/section_header59.jpg`](/reference-images/header-sections/section_header59.jpg) | — | [open](https://www.relume.ai/preview?cid=header-sections/section_header59&context=react) |
| 492 | Header 60 | [`header-sections/section_header60.jpg`](/reference-images/header-sections/section_header60.jpg) | — | [open](https://www.relume.ai/preview?cid=header-sections/section_header60&context=react) |
| 493 | Header 61 | [`header-sections/section_header61.jpg`](/reference-images/header-sections/section_header61.jpg) | — | [open](https://www.relume.ai/preview?cid=header-sections/section_header61&context=react) |
| 494 | Header 62 | [`header-sections/section_header62.jpg`](/reference-images/header-sections/section_header62.jpg) | — | [open](https://www.relume.ai/preview?cid=header-sections/section_header62&context=react) |
| 495 | Header 63 | [`header-sections/section_header63.jpg`](/reference-images/header-sections/section_header63.jpg) | — | [open](https://www.relume.ai/preview?cid=header-sections/section_header63&context=react) |
| 496 | Header 64 | [`header-sections/section_header64.jpg`](/reference-images/header-sections/section_header64.jpg) | — | [open](https://www.relume.ai/preview?cid=header-sections/section_header64&context=react) |
| 497 | Header 65 | [`header-sections/section_header65.jpg`](/reference-images/header-sections/section_header65.jpg) | — | [open](https://www.relume.ai/preview?cid=header-sections/section_header65&context=react) |
| 498 | Header 66 | [`header-sections/section_header66.jpg`](/reference-images/header-sections/section_header66.jpg) | — | [open](https://www.relume.ai/preview?cid=header-sections/section_header66&context=react) |
| 499 | Header 67 | [`header-sections/section_header67.jpg`](/reference-images/header-sections/section_header67.jpg) | — | [open](https://www.relume.ai/preview?cid=header-sections/section_header67&context=react) |
| 500 | Header 68 | [`header-sections/section_header68.jpg`](/reference-images/header-sections/section_header68.jpg) | — | [open](https://www.relume.ai/preview?cid=header-sections/section_header68&context=react) |
| 501 | Header 69 | [`header-sections/section_header69.jpg`](/reference-images/header-sections/section_header69.jpg) | — | [open](https://www.relume.ai/preview?cid=header-sections/section_header69&context=react) |
| 502 | Header 70 | [`header-sections/section_header70.jpg`](/reference-images/header-sections/section_header70.jpg) | — | [open](https://www.relume.ai/preview?cid=header-sections/section_header70&context=react) |

## hero-header-sections-grid-cards

Predicted behavior: Hero with a row/grid of cards beneath the fold (feature cards or logos).

| # | Component | Local image | Flags | Relume preview |
|---|-----------|-------------|-------|----------------|
| 516 | Header 84 | [`hero-header-sections-grid-cards/section_header84.jpg`](/reference-images/hero-header-sections-grid-cards/section_header84.jpg) | — | [open](https://www.relume.ai/preview?cid=hero-header-sections-grid-cards/section_header84&context=react) |
| 517 | Header 85 | [`hero-header-sections-grid-cards/section_header85.jpg`](/reference-images/hero-header-sections-grid-cards/section_header85.jpg) | — | [open](https://www.relume.ai/preview?cid=hero-header-sections-grid-cards/section_header85&context=react) |
| 518 | Header 86 | [`hero-header-sections-grid-cards/section_header86.jpg`](/reference-images/hero-header-sections-grid-cards/section_header86.jpg) | — | [open](https://www.relume.ai/preview?cid=hero-header-sections-grid-cards/section_header86&context=react) |
| 519 | Header 87 | [`hero-header-sections-grid-cards/section_header87.jpg`](/reference-images/hero-header-sections-grid-cards/section_header87.jpg) | — | [open](https://www.relume.ai/preview?cid=hero-header-sections-grid-cards/section_header87&context=react) |
| 520 | Header 88 | [`hero-header-sections-grid-cards/section_header88.jpg`](/reference-images/hero-header-sections-grid-cards/section_header88.jpg) | — | [open](https://www.relume.ai/preview?cid=hero-header-sections-grid-cards/section_header88&context=react) |
| 521 | Header 89 | [`hero-header-sections-grid-cards/section_header89.jpg`](/reference-images/hero-header-sections-grid-cards/section_header89.jpg) | — | [open](https://www.relume.ai/preview?cid=hero-header-sections-grid-cards/section_header89&context=react) |
| 522 | Header 90 | [`hero-header-sections-grid-cards/section_header90.jpg`](/reference-images/hero-header-sections-grid-cards/section_header90.jpg) | — | [open](https://www.relume.ai/preview?cid=hero-header-sections-grid-cards/section_header90&context=react) |
| 523 | Header 91 | [`hero-header-sections-grid-cards/section_header91.jpg`](/reference-images/hero-header-sections-grid-cards/section_header91.jpg) | — | [open](https://www.relume.ai/preview?cid=hero-header-sections-grid-cards/section_header91&context=react) |
| 524 | Header 92 | [`hero-header-sections-grid-cards/section_header92.jpg`](/reference-images/hero-header-sections-grid-cards/section_header92.jpg) | — | [open](https://www.relume.ai/preview?cid=hero-header-sections-grid-cards/section_header92&context=react) |
| 525 | Header 93 | [`hero-header-sections-grid-cards/section_header93.jpg`](/reference-images/hero-header-sections-grid-cards/section_header93.jpg) | — | [open](https://www.relume.ai/preview?cid=hero-header-sections-grid-cards/section_header93&context=react) |
| 526 | Header 94 | [`hero-header-sections-grid-cards/section_header94.jpg`](/reference-images/hero-header-sections-grid-cards/section_header94.jpg) | — | [open](https://www.relume.ai/preview?cid=hero-header-sections-grid-cards/section_header94&context=react) |
| 527 | Header 95 | [`hero-header-sections-grid-cards/section_header95.jpg`](/reference-images/hero-header-sections-grid-cards/section_header95.jpg) | — | [open](https://www.relume.ai/preview?cid=hero-header-sections-grid-cards/section_header95&context=react) |
| 528 | Header 96 | [`hero-header-sections-grid-cards/section_header96.jpg`](/reference-images/hero-header-sections-grid-cards/section_header96.jpg) | — | [open](https://www.relume.ai/preview?cid=hero-header-sections-grid-cards/section_header96&context=react) |
| 529 | Header 97 | [`hero-header-sections-grid-cards/section_header97.jpg`](/reference-images/hero-header-sections-grid-cards/section_header97.jpg) | — | [open](https://www.relume.ai/preview?cid=hero-header-sections-grid-cards/section_header97&context=react) |
| 530 | Header 98 | [`hero-header-sections-grid-cards/section_header98.jpg`](/reference-images/hero-header-sections-grid-cards/section_header98.jpg) | — | [open](https://www.relume.ai/preview?cid=hero-header-sections-grid-cards/section_header98&context=react) |
| 531 | Header 99 | [`hero-header-sections-grid-cards/section_header99.jpg`](/reference-images/hero-header-sections-grid-cards/section_header99.jpg) | — | [open](https://www.relume.ai/preview?cid=hero-header-sections-grid-cards/section_header99&context=react) |
| 532 | Header 100 | [`hero-header-sections-grid-cards/section_header100.jpg`](/reference-images/hero-header-sections-grid-cards/section_header100.jpg) | — | [open](https://www.relume.ai/preview?cid=hero-header-sections-grid-cards/section_header100&context=react) |
| 533 | Header 101 | [`hero-header-sections-grid-cards/section_header101.jpg`](/reference-images/hero-header-sections-grid-cards/section_header101.jpg) | — | [open](https://www.relume.ai/preview?cid=hero-header-sections-grid-cards/section_header101&context=react) |

## hero-header-sections-off-grid

Predicted behavior: Asymmetric hero: off-center text column, image overlap, decorative elements.

| # | Component | Local image | Flags | Relume preview |
|---|-----------|-------------|-------|----------------|
| 542 | Header 110 | [`hero-header-sections-off-grid/section_header110.jpg`](/reference-images/hero-header-sections-off-grid/section_header110.jpg) | O | [open](https://www.relume.ai/preview?cid=hero-header-sections-off-grid/section_header110&context=react) |
| 543 | Header 111 | [`hero-header-sections-off-grid/section_header111.jpg`](/reference-images/hero-header-sections-off-grid/section_header111.jpg) | O | [open](https://www.relume.ai/preview?cid=hero-header-sections-off-grid/section_header111&context=react) |
| 544 | Header 112 | [`hero-header-sections-off-grid/section_header112.jpg`](/reference-images/hero-header-sections-off-grid/section_header112.jpg) | O | [open](https://www.relume.ai/preview?cid=hero-header-sections-off-grid/section_header112&context=react) |
| 545 | Header 113 | [`hero-header-sections-off-grid/section_header113.jpg`](/reference-images/hero-header-sections-off-grid/section_header113.jpg) | O | [open](https://www.relume.ai/preview?cid=hero-header-sections-off-grid/section_header113&context=react) |
| 546 | Header 114 | [`hero-header-sections-off-grid/section_header114.jpg`](/reference-images/hero-header-sections-off-grid/section_header114.jpg) | O | [open](https://www.relume.ai/preview?cid=hero-header-sections-off-grid/section_header114&context=react) |
| 547 | Header 115 | [`hero-header-sections-off-grid/section_header115.jpg`](/reference-images/hero-header-sections-off-grid/section_header115.jpg) | O | [open](https://www.relume.ai/preview?cid=hero-header-sections-off-grid/section_header115&context=react) |
| 548 | Header 116 | [`hero-header-sections-off-grid/section_header116.jpg`](/reference-images/hero-header-sections-off-grid/section_header116.jpg) | O | [open](https://www.relume.ai/preview?cid=hero-header-sections-off-grid/section_header116&context=react) |
| 549 | Header 117 | [`hero-header-sections-off-grid/section_header117.jpg`](/reference-images/hero-header-sections-off-grid/section_header117.jpg) | O | [open](https://www.relume.ai/preview?cid=hero-header-sections-off-grid/section_header117&context=react) |
| 550 | Header 118 | [`hero-header-sections-off-grid/section_header118.jpg`](/reference-images/hero-header-sections-off-grid/section_header118.jpg) | O | [open](https://www.relume.ai/preview?cid=hero-header-sections-off-grid/section_header118&context=react) |
| 551 | Header 119 | [`hero-header-sections-off-grid/section_header119.jpg`](/reference-images/hero-header-sections-off-grid/section_header119.jpg) | O | [open](https://www.relume.ai/preview?cid=hero-header-sections-off-grid/section_header119&context=react) |
| 552 | Header 120 | [`hero-header-sections-off-grid/section_header120.jpg`](/reference-images/hero-header-sections-off-grid/section_header120.jpg) | O | [open](https://www.relume.ai/preview?cid=hero-header-sections-off-grid/section_header120&context=react) |
| 553 | Header 121 | [`hero-header-sections-off-grid/section_header121.jpg`](/reference-images/hero-header-sections-off-grid/section_header121.jpg) | O | [open](https://www.relume.ai/preview?cid=hero-header-sections-off-grid/section_header121&context=react) |
| 554 | Header 122 | [`hero-header-sections-off-grid/section_header122.jpg`](/reference-images/hero-header-sections-off-grid/section_header122.jpg) | O | [open](https://www.relume.ai/preview?cid=hero-header-sections-off-grid/section_header122&context=react) |
| 555 | Header 123 | [`hero-header-sections-off-grid/section_header123.jpg`](/reference-images/hero-header-sections-off-grid/section_header123.jpg) | O | [open](https://www.relume.ai/preview?cid=hero-header-sections-off-grid/section_header123&context=react) |
| 556 | Header 124 | [`hero-header-sections-off-grid/section_header124.jpg`](/reference-images/hero-header-sections-off-grid/section_header124.jpg) | O | [open](https://www.relume.ai/preview?cid=hero-header-sections-off-grid/section_header124&context=react) |
| 557 | Header 125 | [`hero-header-sections-off-grid/section_header125.jpg`](/reference-images/hero-header-sections-off-grid/section_header125.jpg) | O | [open](https://www.relume.ai/preview?cid=hero-header-sections-off-grid/section_header125&context=react) |
| 558 | Header 126 | [`hero-header-sections-off-grid/section_header126.jpg`](/reference-images/hero-header-sections-off-grid/section_header126.jpg) | — | [open](https://www.relume.ai/preview?cid=hero-header-sections-off-grid/section_header126&context=react) |
| 559 | Header 127 | [`hero-header-sections-off-grid/section_header127.jpg`](/reference-images/hero-header-sections-off-grid/section_header127.jpg) | — | [open](https://www.relume.ai/preview?cid=hero-header-sections-off-grid/section_header127&context=react) |
| 560 | Header 128 | [`hero-header-sections-off-grid/section_header128.jpg`](/reference-images/hero-header-sections-off-grid/section_header128.jpg) | — | [open](https://www.relume.ai/preview?cid=hero-header-sections-off-grid/section_header128&context=react) |
| 561 | Header 129 | [`hero-header-sections-off-grid/section_header129.jpg`](/reference-images/hero-header-sections-off-grid/section_header129.jpg) | — | [open](https://www.relume.ai/preview?cid=hero-header-sections-off-grid/section_header129&context=react) |
| 562 | Header 130 | [`hero-header-sections-off-grid/section_header130.jpg`](/reference-images/hero-header-sections-off-grid/section_header130.jpg) | — | [open](https://www.relume.ai/preview?cid=hero-header-sections-off-grid/section_header130&context=react) |
| 563 | Header 131 | [`hero-header-sections-off-grid/section_header131.jpg`](/reference-images/hero-header-sections-off-grid/section_header131.jpg) | — | [open](https://www.relume.ai/preview?cid=hero-header-sections-off-grid/section_header131&context=react) |
| 564 | Header 132 | [`hero-header-sections-off-grid/section_header132.jpg`](/reference-images/hero-header-sections-off-grid/section_header132.jpg) | — | [open](https://www.relume.ai/preview?cid=hero-header-sections-off-grid/section_header132&context=react) |
| 565 | Header 133 | [`hero-header-sections-off-grid/section_header133.jpg`](/reference-images/hero-header-sections-off-grid/section_header133.jpg) | — | [open](https://www.relume.ai/preview?cid=hero-header-sections-off-grid/section_header133&context=react) |
| 566 | Header 134 | [`hero-header-sections-off-grid/section_header134.jpg`](/reference-images/hero-header-sections-off-grid/section_header134.jpg) | — | [open](https://www.relume.ai/preview?cid=hero-header-sections-off-grid/section_header134&context=react) |
| 567 | Header 135 | [`hero-header-sections-off-grid/section_header135.jpg`](/reference-images/hero-header-sections-off-grid/section_header135.jpg) | — | [open](https://www.relume.ai/preview?cid=hero-header-sections-off-grid/section_header135&context=react) |
| 568 | Header 136 | [`hero-header-sections-off-grid/section_header136.jpg`](/reference-images/hero-header-sections-off-grid/section_header136.jpg) | — | [open](https://www.relume.ai/preview?cid=hero-header-sections-off-grid/section_header136&context=react) |
| 569 | Header 137 | [`hero-header-sections-off-grid/section_header137.jpg`](/reference-images/hero-header-sections-off-grid/section_header137.jpg) | — | [open](https://www.relume.ai/preview?cid=hero-header-sections-off-grid/section_header137&context=react) |
| 570 | Header 138 | [`hero-header-sections-off-grid/section_header138.jpg`](/reference-images/hero-header-sections-off-grid/section_header138.jpg) | — | [open](https://www.relume.ai/preview?cid=hero-header-sections-off-grid/section_header138&context=react) |

## uncommon-components-part-3

Predicted behavior: Experimental layouts set 3.

| # | Component | Local image | Flags | Relume preview |
|---|-----------|-------------|-------|----------------|
| 574 | Header 142 | [`uncommon-components-part-3/section_header142.jpg`](/reference-images/uncommon-components-part-3/section_header142.jpg) | IU | [open](https://www.relume.ai/preview?cid=uncommon-components-part-3/section_header142&context=react) |
| 575 | Header 143 | [`uncommon-components-part-3/section_header143.jpg`](/reference-images/uncommon-components-part-3/section_header143.jpg) | IUO | [open](https://www.relume.ai/preview?cid=uncommon-components-part-3/section_header143&context=react) |
| 576 | Header 144 | [`uncommon-components-part-3/section_header144.jpg`](/reference-images/uncommon-components-part-3/section_header144.jpg) | IUO | [open](https://www.relume.ai/preview?cid=uncommon-components-part-3/section_header144&context=react) |
| 1097 | Layout 513 | [`uncommon-components-part-3/section_layout513.jpg`](/reference-images/uncommon-components-part-3/section_layout513.jpg) | IU | [open](https://www.relume.ai/preview?cid=uncommon-components-part-3/section_layout513&context=react) |
| 1098 | Layout 514 | [`uncommon-components-part-3/section_layout514.jpg`](/reference-images/uncommon-components-part-3/section_layout514.jpg) | IU | [open](https://www.relume.ai/preview?cid=uncommon-components-part-3/section_layout514&context=react) |
| 1099 | Layout 515 | [`uncommon-components-part-3/section_layout515.jpg`](/reference-images/uncommon-components-part-3/section_layout515.jpg) | IU | [open](https://www.relume.ai/preview?cid=uncommon-components-part-3/section_layout515&context=react) |
| 1100 | Layout 516 | [`uncommon-components-part-3/section_layout516.jpg`](/reference-images/uncommon-components-part-3/section_layout516.jpg) | IU | [open](https://www.relume.ai/preview?cid=uncommon-components-part-3/section_layout516&context=react) |
| 1101 | Layout 517 | [`uncommon-components-part-3/section_layout517.jpg`](/reference-images/uncommon-components-part-3/section_layout517.jpg) | IU | [open](https://www.relume.ai/preview?cid=uncommon-components-part-3/section_layout517&context=react) |
| 1102 | Layout 518 | [`uncommon-components-part-3/section_layout518.jpg`](/reference-images/uncommon-components-part-3/section_layout518.jpg) | IUO | [open](https://www.relume.ai/preview?cid=uncommon-components-part-3/section_layout518&context=react) |
| 1256 | Portfolio 18 | [`uncommon-components-part-3/section_portfolio18.jpg`](/reference-images/uncommon-components-part-3/section_portfolio18.jpg) | IU | [open](https://www.relume.ai/preview?cid=uncommon-components-part-3/section_portfolio18&context=react) |
| 1257 | Portfolio 19 | [`uncommon-components-part-3/section_portfolio19.jpg`](/reference-images/uncommon-components-part-3/section_portfolio19.jpg) | IU | [open](https://www.relume.ai/preview?cid=uncommon-components-part-3/section_portfolio19&context=react) |
| 1258 | Portfolio 20 | [`uncommon-components-part-3/section_portfolio20.jpg`](/reference-images/uncommon-components-part-3/section_portfolio20.jpg) | IU | [open](https://www.relume.ai/preview?cid=uncommon-components-part-3/section_portfolio20&context=react) |
| 1259 | Portfolio 21 | [`uncommon-components-part-3/section_portfolio21.jpg`](/reference-images/uncommon-components-part-3/section_portfolio21.jpg) | IU | [open](https://www.relume.ai/preview?cid=uncommon-components-part-3/section_portfolio21&context=react) |
| 1260 | Portfolio 22 | [`uncommon-components-part-3/section_portfolio22.jpg`](/reference-images/uncommon-components-part-3/section_portfolio22.jpg) | IU | [open](https://www.relume.ai/preview?cid=uncommon-components-part-3/section_portfolio22&context=react) |
| 1261 | Portfolio 23 | [`uncommon-components-part-3/section_portfolio23.jpg`](/reference-images/uncommon-components-part-3/section_portfolio23.jpg) | IU | [open](https://www.relume.ai/preview?cid=uncommon-components-part-3/section_portfolio23&context=react) |

## feature-sections-left-1-2-col

Predicted behavior: Split feature: text left (icon list + heading + CTA), image right; alternating per row.

| # | Component | Local image | Flags | Relume preview |
|---|-----------|-------------|-------|----------------|
| 585 | Layout 1 | [`feature-sections-left-1-2-col/section_layout1.jpg`](/reference-images/feature-sections-left-1-2-col/section_layout1.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-left-1-2-col/section_layout1&context=react) |
| 586 | Layout 2 | [`feature-sections-left-1-2-col/section_layout2.jpg`](/reference-images/feature-sections-left-1-2-col/section_layout2.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-left-1-2-col/section_layout2&context=react) |
| 587 | Layout 3 | [`feature-sections-left-1-2-col/section_layout3.jpg`](/reference-images/feature-sections-left-1-2-col/section_layout3.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-left-1-2-col/section_layout3&context=react) |
| 588 | Layout 4 | [`feature-sections-left-1-2-col/section_layout4.jpg`](/reference-images/feature-sections-left-1-2-col/section_layout4.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-left-1-2-col/section_layout4&context=react) |
| 589 | Layout 5 | [`feature-sections-left-1-2-col/section_layout5.jpg`](/reference-images/feature-sections-left-1-2-col/section_layout5.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-left-1-2-col/section_layout5&context=react) |
| 590 | Layout 6 | [`feature-sections-left-1-2-col/section_layout6.jpg`](/reference-images/feature-sections-left-1-2-col/section_layout6.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-left-1-2-col/section_layout6&context=react) |
| 591 | Layout 7 | [`feature-sections-left-1-2-col/section_layout4.jpg`](/reference-images/feature-sections-left-1-2-col/section_layout4.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-left-1-2-col/section_layout7&context=react) |
| 592 | Layout 8 | [`feature-sections-left-1-2-col/section_layout8.jpg`](/reference-images/feature-sections-left-1-2-col/section_layout8.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-left-1-2-col/section_layout8&context=react) |
| 593 | Layout 9 | [`feature-sections-left-1-2-col/section_layout9.jpg`](/reference-images/feature-sections-left-1-2-col/section_layout9.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-left-1-2-col/section_layout9&context=react) |
| 594 | Layout 10 | [`feature-sections-left-1-2-col/section_layout10.jpg`](/reference-images/feature-sections-left-1-2-col/section_layout10.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-left-1-2-col/section_layout10&context=react) |
| 595 | Layout 11 | [`feature-sections-left-1-2-col/section_layout11.jpg`](/reference-images/feature-sections-left-1-2-col/section_layout11.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-left-1-2-col/section_layout11&context=react) |
| 596 | Layout 12 | [`feature-sections-left-1-2-col/section_layout12.jpg`](/reference-images/feature-sections-left-1-2-col/section_layout12.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-left-1-2-col/section_layout12&context=react) |
| 597 | Layout 13 | [`feature-sections-left-1-2-col/section_layout13.jpg`](/reference-images/feature-sections-left-1-2-col/section_layout13.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-left-1-2-col/section_layout13&context=react) |
| 598 | Layout 14 | [`feature-sections-left-1-2-col/section_layout14.jpg`](/reference-images/feature-sections-left-1-2-col/section_layout14.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-left-1-2-col/section_layout14&context=react) |
| 599 | Layout 15 | [`feature-sections-left-1-2-col/section_layout15.jpg`](/reference-images/feature-sections-left-1-2-col/section_layout15.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-left-1-2-col/section_layout15&context=react) |
| 600 | Layout 16 | [`feature-sections-left-1-2-col/section_layout16.jpg`](/reference-images/feature-sections-left-1-2-col/section_layout16.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-left-1-2-col/section_layout16&context=react) |
| 601 | Layout 17 | [`feature-sections-left-1-2-col/section_layout17.jpg`](/reference-images/feature-sections-left-1-2-col/section_layout17.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-left-1-2-col/section_layout17&context=react) |
| 602 | Layout 18 | [`feature-sections-left-1-2-col/section_layout18.jpg`](/reference-images/feature-sections-left-1-2-col/section_layout18.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-left-1-2-col/section_layout18&context=react) |
| 603 | Layout 19 | [`feature-sections-left-1-2-col/section_layout19.jpg`](/reference-images/feature-sections-left-1-2-col/section_layout19.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-left-1-2-col/section_layout19&context=react) |
| 604 | Layout 20 | [`feature-sections-left-1-2-col/section_layout20.jpg`](/reference-images/feature-sections-left-1-2-col/section_layout20.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-left-1-2-col/section_layout20&context=react) |
| 605 | Layout 21 | [`feature-sections-left-1-2-col/section_layout21.jpg`](/reference-images/feature-sections-left-1-2-col/section_layout21.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-left-1-2-col/section_layout21&context=react) |
| 606 | Layout 22 | [`feature-sections-left-1-2-col/section_layout22.jpg`](/reference-images/feature-sections-left-1-2-col/section_layout22.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-left-1-2-col/section_layout22&context=react) |
| 607 | Layout 23 | [`feature-sections-left-1-2-col/section_layout23.jpg`](/reference-images/feature-sections-left-1-2-col/section_layout23.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-left-1-2-col/section_layout23&context=react) |
| 608 | Layout 24 | [`feature-sections-left-1-2-col/section_layout24.jpg`](/reference-images/feature-sections-left-1-2-col/section_layout24.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-left-1-2-col/section_layout24&context=react) |
| 609 | Layout 25 | [`feature-sections-left-1-2-col/section_layout25.jpg`](/reference-images/feature-sections-left-1-2-col/section_layout25.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-left-1-2-col/section_layout25&context=react) |
| 610 | Layout 26 | [`feature-sections-left-1-2-col/section_layout26.jpg`](/reference-images/feature-sections-left-1-2-col/section_layout26.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-left-1-2-col/section_layout26&context=react) |
| 611 | Layout 27 | [`feature-sections-left-1-2-col/section_layout27.jpg`](/reference-images/feature-sections-left-1-2-col/section_layout27.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-left-1-2-col/section_layout27&context=react) |
| 612 | Layout 28 | [`feature-sections-left-1-2-col/section_layout28.jpg`](/reference-images/feature-sections-left-1-2-col/section_layout28.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-left-1-2-col/section_layout28&context=react) |
| 613 | Layout 29 | [`feature-sections-left-1-2-col/section_layout29.jpg`](/reference-images/feature-sections-left-1-2-col/section_layout29.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-left-1-2-col/section_layout29&context=react) |
| 614 | Layout 30 | [`feature-sections-left-1-2-col/section_layout30.jpg`](/reference-images/feature-sections-left-1-2-col/section_layout30.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-left-1-2-col/section_layout30&context=react) |
| 615 | Layout 31 | [`feature-sections-left-1-2-col/section_layout31.jpg`](/reference-images/feature-sections-left-1-2-col/section_layout31.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-left-1-2-col/section_layout31&context=react) |
| 616 | Layout 32 | [`feature-sections-left-1-2-col/section_layout32.jpg`](/reference-images/feature-sections-left-1-2-col/section_layout32.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-left-1-2-col/section_layout32&context=react) |
| 617 | Layout 33 | [`feature-sections-left-1-2-col/section_layout33.jpg`](/reference-images/feature-sections-left-1-2-col/section_layout33.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-left-1-2-col/section_layout33&context=react) |
| 618 | Layout 34 | [`feature-sections-left-1-2-col/section_layout34.jpg`](/reference-images/feature-sections-left-1-2-col/section_layout34.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-left-1-2-col/section_layout34&context=react) |
| 619 | Layout 35 | [`feature-sections-left-1-2-col/section_layout35.jpg`](/reference-images/feature-sections-left-1-2-col/section_layout35.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-left-1-2-col/section_layout35&context=react) |
| 620 | Layout 36 | [`feature-sections-left-1-2-col/section_layout36.jpg`](/reference-images/feature-sections-left-1-2-col/section_layout36.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-left-1-2-col/section_layout36&context=react) |
| 621 | Layout 37 | [`feature-sections-left-1-2-col/section_layout37.jpg`](/reference-images/feature-sections-left-1-2-col/section_layout37.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-left-1-2-col/section_layout37&context=react) |
| 622 | Layout 38 | [`feature-sections-left-1-2-col/section_layout38.jpg`](/reference-images/feature-sections-left-1-2-col/section_layout38.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-left-1-2-col/section_layout38&context=react) |
| 623 | Layout 39 | [`feature-sections-left-1-2-col/section_layout39.jpg`](/reference-images/feature-sections-left-1-2-col/section_layout39.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-left-1-2-col/section_layout39&context=react) |
| 624 | Layout 40 | [`feature-sections-left-1-2-col/section_layout40.jpg`](/reference-images/feature-sections-left-1-2-col/section_layout40.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-left-1-2-col/section_layout40&context=react) |
| 625 | Layout 41 | [`feature-sections-left-1-2-col/section_layout41.jpg`](/reference-images/feature-sections-left-1-2-col/section_layout41.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-left-1-2-col/section_layout41&context=react) |
| 626 | Layout 42 | [`feature-sections-left-1-2-col/section_layout42.jpg`](/reference-images/feature-sections-left-1-2-col/section_layout42.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-left-1-2-col/section_layout42&context=react) |
| 627 | Layout 43 | [`feature-sections-left-1-2-col/section_layout43.jpg`](/reference-images/feature-sections-left-1-2-col/section_layout43.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-left-1-2-col/section_layout43&context=react) |
| 628 | Layout 44 | [`feature-sections-left-1-2-col/section_layout44.jpg`](/reference-images/feature-sections-left-1-2-col/section_layout44.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-left-1-2-col/section_layout44&context=react) |
| 629 | Layout 45 | [`feature-sections-left-1-2-col/section_layout45.jpg`](/reference-images/feature-sections-left-1-2-col/section_layout45.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-left-1-2-col/section_layout45&context=react) |
| 630 | Layout 46 | [`feature-sections-left-1-2-col/section_layout46.jpg`](/reference-images/feature-sections-left-1-2-col/section_layout46.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-left-1-2-col/section_layout46&context=react) |
| 631 | Layout 47 | [`feature-sections-left-1-2-col/section_layout47.jpg`](/reference-images/feature-sections-left-1-2-col/section_layout47.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-left-1-2-col/section_layout47&context=react) |
| 632 | Layout 48 | [`feature-sections-left-1-2-col/section_layout48.jpg`](/reference-images/feature-sections-left-1-2-col/section_layout48.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-left-1-2-col/section_layout48&context=react) |
| 633 | Layout 49 | [`feature-sections-left-1-2-col/section_layout49.jpg`](/reference-images/feature-sections-left-1-2-col/section_layout49.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-left-1-2-col/section_layout49&context=react) |
| 634 | Layout 50 | [`feature-sections-left-1-2-col/section_layout50.jpg`](/reference-images/feature-sections-left-1-2-col/section_layout50.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-left-1-2-col/section_layout50&context=react) |
| 635 | Layout 51 | [`feature-sections-left-1-2-col/section_layout51.jpg`](/reference-images/feature-sections-left-1-2-col/section_layout51.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-left-1-2-col/section_layout51&context=react) |
| 636 | Layout 52 | [`feature-sections-left-1-2-col/section_layout52.jpg`](/reference-images/feature-sections-left-1-2-col/section_layout52.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-left-1-2-col/section_layout52&context=react) |
| 637 | Layout 53 | [`feature-sections-left-1-2-col/section_layout53.jpg`](/reference-images/feature-sections-left-1-2-col/section_layout53.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-left-1-2-col/section_layout53&context=react) |
| 638 | Layout 54 | [`feature-sections-left-1-2-col/section_layout54.jpg`](/reference-images/feature-sections-left-1-2-col/section_layout54.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-left-1-2-col/section_layout54&context=react) |
| 639 | Layout 55 | [`feature-sections-left-1-2-col/section_layout55.jpg`](/reference-images/feature-sections-left-1-2-col/section_layout55.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-left-1-2-col/section_layout55&context=react) |
| 640 | Layout 56 | [`feature-sections-left-1-2-col/section_layout56.jpg`](/reference-images/feature-sections-left-1-2-col/section_layout56.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-left-1-2-col/section_layout56&context=react) |
| 641 | Layout 57 | [`feature-sections-left-1-2-col/section_layout57.jpg`](/reference-images/feature-sections-left-1-2-col/section_layout57.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-left-1-2-col/section_layout57&context=react) |
| 642 | Layout 58 | [`feature-sections-left-1-2-col/section_layout58.jpg`](/reference-images/feature-sections-left-1-2-col/section_layout58.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-left-1-2-col/section_layout58&context=react) |
| 643 | Layout 59 | [`feature-sections-left-1-2-col/section_layout59.jpg`](/reference-images/feature-sections-left-1-2-col/section_layout59.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-left-1-2-col/section_layout59&context=react) |
| 644 | Layout 60 | [`feature-sections-left-1-2-col/section_layout60.jpg`](/reference-images/feature-sections-left-1-2-col/section_layout60.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-left-1-2-col/section_layout60&context=react) |
| 645 | Layout 61 | [`feature-sections-left-1-2-col/section_layout61.jpg`](/reference-images/feature-sections-left-1-2-col/section_layout61.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-left-1-2-col/section_layout61&context=react) |
| 646 | Layout 62 | [`feature-sections-left-1-2-col/section_layout62.jpg`](/reference-images/feature-sections-left-1-2-col/section_layout62.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-left-1-2-col/section_layout62&context=react) |
| 647 | Layout 63 | [`feature-sections-left-1-2-col/section_layout63.jpg`](/reference-images/feature-sections-left-1-2-col/section_layout63.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-left-1-2-col/section_layout63&context=react) |
| 648 | Layout 64 | [`feature-sections-left-1-2-col/section_layout64.jpg`](/reference-images/feature-sections-left-1-2-col/section_layout64.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-left-1-2-col/section_layout64&context=react) |

## feature-sections-left-1-2-col-part-2

Predicted behavior: More split feature rows (text-left variant set 2).

| # | Component | Local image | Flags | Relume preview |
|---|-----------|-------------|-------|----------------|
| 649 | Layout 65 | [`feature-sections-left-1-2-col-part-2/section_layout65.jpg`](/reference-images/feature-sections-left-1-2-col-part-2/section_layout65.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-left-1-2-col-part-2/section_layout65&context=react) |
| 650 | Layout 66 | [`feature-sections-left-1-2-col-part-2/section_layout66.jpg`](/reference-images/feature-sections-left-1-2-col-part-2/section_layout66.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-left-1-2-col-part-2/section_layout66&context=react) |
| 651 | Layout 67 | [`feature-sections-left-1-2-col-part-2/section_layout67.jpg`](/reference-images/feature-sections-left-1-2-col-part-2/section_layout67.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-left-1-2-col-part-2/section_layout67&context=react) |
| 652 | Layout 68 | [`feature-sections-left-1-2-col-part-2/section_layout68.jpg`](/reference-images/feature-sections-left-1-2-col-part-2/section_layout68.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-left-1-2-col-part-2/section_layout68&context=react) |
| 653 | Layout 69 | [`feature-sections-left-1-2-col-part-2/section_layout69.jpg`](/reference-images/feature-sections-left-1-2-col-part-2/section_layout69.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-left-1-2-col-part-2/section_layout69&context=react) |
| 654 | Layout 70 | [`feature-sections-left-1-2-col-part-2/section_layout70.jpg`](/reference-images/feature-sections-left-1-2-col-part-2/section_layout70.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-left-1-2-col-part-2/section_layout70&context=react) |
| 655 | Layout 71 | [`feature-sections-left-1-2-col-part-2/section_layout71.jpg`](/reference-images/feature-sections-left-1-2-col-part-2/section_layout71.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-left-1-2-col-part-2/section_layout71&context=react) |
| 656 | Layout 72 | [`feature-sections-left-1-2-col-part-2/section_layout72.jpg`](/reference-images/feature-sections-left-1-2-col-part-2/section_layout72.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-left-1-2-col-part-2/section_layout72&context=react) |
| 657 | Layout 73 | [`feature-sections-left-1-2-col-part-2/section_layout73.jpg`](/reference-images/feature-sections-left-1-2-col-part-2/section_layout73.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-left-1-2-col-part-2/section_layout73&context=react) |
| 658 | Layout 74 | [`feature-sections-left-1-2-col-part-2/section_layout74.jpg`](/reference-images/feature-sections-left-1-2-col-part-2/section_layout74.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-left-1-2-col-part-2/section_layout74&context=react) |
| 659 | Layout 75 | [`feature-sections-left-1-2-col-part-2/section_layout75.jpg`](/reference-images/feature-sections-left-1-2-col-part-2/section_layout75.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-left-1-2-col-part-2/section_layout75&context=react) |
| 660 | Layout 76 | [`feature-sections-left-1-2-col-part-2/section_layout76.jpg`](/reference-images/feature-sections-left-1-2-col-part-2/section_layout76.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-left-1-2-col-part-2/section_layout76&context=react) |
| 661 | Layout 77 | [`feature-sections-left-1-2-col-part-2/section_layout77.jpg`](/reference-images/feature-sections-left-1-2-col-part-2/section_layout77.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-left-1-2-col-part-2/section_layout77&context=react) |
| 662 | Layout 78 | [`feature-sections-left-1-2-col-part-2/section_layout78.jpg`](/reference-images/feature-sections-left-1-2-col-part-2/section_layout78.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-left-1-2-col-part-2/section_layout78&context=react) |
| 663 | Layout 79 | [`feature-sections-left-1-2-col-part-2/section_layout79.jpg`](/reference-images/feature-sections-left-1-2-col-part-2/section_layout79.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-left-1-2-col-part-2/section_layout79&context=react) |
| 664 | Layout 80 | [`feature-sections-left-1-2-col-part-2/section_layout80.jpg`](/reference-images/feature-sections-left-1-2-col-part-2/section_layout80.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-left-1-2-col-part-2/section_layout80&context=react) |
| 665 | Layout 81 | [`feature-sections-left-1-2-col-part-2/section_layout81.jpg`](/reference-images/feature-sections-left-1-2-col-part-2/section_layout81.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-left-1-2-col-part-2/section_layout81&context=react) |
| 666 | Layout 82 | [`feature-sections-left-1-2-col-part-2/section_layout82.jpg`](/reference-images/feature-sections-left-1-2-col-part-2/section_layout82.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-left-1-2-col-part-2/section_layout82&context=react) |
| 667 | Layout 83 | [`feature-sections-left-1-2-col-part-2/section_layout83.jpg`](/reference-images/feature-sections-left-1-2-col-part-2/section_layout83.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-left-1-2-col-part-2/section_layout83&context=react) |
| 668 | Layout 84 | [`feature-sections-left-1-2-col-part-2/section_layout84.jpg`](/reference-images/feature-sections-left-1-2-col-part-2/section_layout84.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-left-1-2-col-part-2/section_layout84&context=react) |
| 669 | Layout 85 | [`feature-sections-left-1-2-col-part-2/section_layout85.jpg`](/reference-images/feature-sections-left-1-2-col-part-2/section_layout85.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-left-1-2-col-part-2/section_layout85&context=react) |
| 670 | Layout 86 | [`feature-sections-left-1-2-col-part-2/section_layout86.jpg`](/reference-images/feature-sections-left-1-2-col-part-2/section_layout86.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-left-1-2-col-part-2/section_layout86&context=react) |
| 671 | Layout 87 | [`feature-sections-left-1-2-col-part-2/section_layout87.jpg`](/reference-images/feature-sections-left-1-2-col-part-2/section_layout87.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-left-1-2-col-part-2/section_layout87&context=react) |
| 672 | Layout 88 | [`feature-sections-left-1-2-col-part-2/section_layout88.jpg`](/reference-images/feature-sections-left-1-2-col-part-2/section_layout88.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-left-1-2-col-part-2/section_layout88&context=react) |
| 673 | Layout 89 | [`feature-sections-left-1-2-col-part-2/section_layout89.jpg`](/reference-images/feature-sections-left-1-2-col-part-2/section_layout89.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-left-1-2-col-part-2/section_layout89&context=react) |
| 674 | Layout 90 | [`feature-sections-left-1-2-col-part-2/section_layout90.jpg`](/reference-images/feature-sections-left-1-2-col-part-2/section_layout90.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-left-1-2-col-part-2/section_layout90&context=react) |
| 675 | Layout 91 | [`feature-sections-left-1-2-col-part-2/section_layout91.jpg`](/reference-images/feature-sections-left-1-2-col-part-2/section_layout91.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-left-1-2-col-part-2/section_layout91&context=react) |
| 676 | Layout 92 | [`feature-sections-left-1-2-col-part-2/section_layout92.jpg`](/reference-images/feature-sections-left-1-2-col-part-2/section_layout92.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-left-1-2-col-part-2/section_layout92&context=react) |
| 677 | Layout 93 | [`feature-sections-left-1-2-col-part-2/section_layout93.jpg`](/reference-images/feature-sections-left-1-2-col-part-2/section_layout93.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-left-1-2-col-part-2/section_layout93&context=react) |
| 678 | Layout 94 | [`feature-sections-left-1-2-col-part-2/section_layout94.jpg`](/reference-images/feature-sections-left-1-2-col-part-2/section_layout94.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-left-1-2-col-part-2/section_layout94&context=react) |
| 679 | Layout 95 | [`feature-sections-left-1-2-col-part-2/section_layout95.jpg`](/reference-images/feature-sections-left-1-2-col-part-2/section_layout95.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-left-1-2-col-part-2/section_layout95&context=react) |
| 680 | Layout 96 | [`feature-sections-left-1-2-col-part-2/section_layout96.jpg`](/reference-images/feature-sections-left-1-2-col-part-2/section_layout96.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-left-1-2-col-part-2/section_layout96&context=react) |
| 681 | Layout 97 | [`feature-sections-left-1-2-col-part-2/section_layout97.jpg`](/reference-images/feature-sections-left-1-2-col-part-2/section_layout97.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-left-1-2-col-part-2/section_layout97&context=react) |
| 682 | Layout 98 | [`feature-sections-left-1-2-col-part-2/section_layout98.jpg`](/reference-images/feature-sections-left-1-2-col-part-2/section_layout98.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-left-1-2-col-part-2/section_layout98&context=react) |
| 683 | Layout 99 | [`feature-sections-left-1-2-col-part-2/section_layout99.jpg`](/reference-images/feature-sections-left-1-2-col-part-2/section_layout99.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-left-1-2-col-part-2/section_layout99&context=react) |
| 684 | Layout 100 | [`feature-sections-left-1-2-col-part-2/section_layout100.jpg`](/reference-images/feature-sections-left-1-2-col-part-2/section_layout100.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-left-1-2-col-part-2/section_layout100&context=react) |
| 685 | Layout 101 | [`feature-sections-left-1-2-col-part-2/section_layout101.jpg`](/reference-images/feature-sections-left-1-2-col-part-2/section_layout101.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-left-1-2-col-part-2/section_layout101&context=react) |
| 686 | Layout 102 | [`feature-sections-left-1-2-col-part-2/section_layout102.jpg`](/reference-images/feature-sections-left-1-2-col-part-2/section_layout102.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-left-1-2-col-part-2/section_layout102&context=react) |
| 687 | Layout 103 | [`feature-sections-left-1-2-col-part-2/section_layout103.jpg`](/reference-images/feature-sections-left-1-2-col-part-2/section_layout103.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-left-1-2-col-part-2/section_layout103&context=react) |
| 688 | Layout 104 | [`feature-sections-left-1-2-col-part-2/section_layout104.jpg`](/reference-images/feature-sections-left-1-2-col-part-2/section_layout104.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-left-1-2-col-part-2/section_layout104&context=react) |
| 689 | Layout 105 | [`feature-sections-left-1-2-col-part-2/section_layout105.jpg`](/reference-images/feature-sections-left-1-2-col-part-2/section_layout105.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-left-1-2-col-part-2/section_layout105&context=react) |
| 690 | Layout 106 | [`feature-sections-left-1-2-col-part-2/section_layout106.jpg`](/reference-images/feature-sections-left-1-2-col-part-2/section_layout106.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-left-1-2-col-part-2/section_layout106&context=react) |
| 691 | Layout 107 | [`feature-sections-left-1-2-col-part-2/section_layout107.jpg`](/reference-images/feature-sections-left-1-2-col-part-2/section_layout107.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-left-1-2-col-part-2/section_layout107&context=react) |
| 692 | Layout 108 | [`feature-sections-left-1-2-col-part-2/section_layout108.jpg`](/reference-images/feature-sections-left-1-2-col-part-2/section_layout108.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-left-1-2-col-part-2/section_layout108&context=react) |
| 693 | Layout 109 | [`feature-sections-left-1-2-col-part-2/section_layout109.jpg`](/reference-images/feature-sections-left-1-2-col-part-2/section_layout109.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-left-1-2-col-part-2/section_layout109&context=react) |
| 694 | Layout 110 | [`feature-sections-left-1-2-col-part-2/section_layout110.jpg`](/reference-images/feature-sections-left-1-2-col-part-2/section_layout110.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-left-1-2-col-part-2/section_layout110&context=react) |
| 695 | Layout 111 | [`feature-sections-left-1-2-col-part-2/section_layout111.jpg`](/reference-images/feature-sections-left-1-2-col-part-2/section_layout111.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-left-1-2-col-part-2/section_layout111&context=react) |
| 696 | Layout 112 | [`feature-sections-left-1-2-col-part-2/section_layout112.jpg`](/reference-images/feature-sections-left-1-2-col-part-2/section_layout112.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-left-1-2-col-part-2/section_layout112&context=react) |
| 697 | Layout 113 | [`feature-sections-left-1-2-col-part-2/section_layout113.jpg`](/reference-images/feature-sections-left-1-2-col-part-2/section_layout113.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-left-1-2-col-part-2/section_layout113&context=react) |
| 698 | Layout 114 | [`feature-sections-left-1-2-col-part-2/section_layout114.jpg`](/reference-images/feature-sections-left-1-2-col-part-2/section_layout114.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-left-1-2-col-part-2/section_layout114&context=react) |
| 699 | Layout 115 | [`feature-sections-left-1-2-col-part-2/section_layout115.jpg`](/reference-images/feature-sections-left-1-2-col-part-2/section_layout115.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-left-1-2-col-part-2/section_layout115&context=react) |
| 700 | Layout 116 | [`feature-sections-left-1-2-col-part-2/section_layout116.jpg`](/reference-images/feature-sections-left-1-2-col-part-2/section_layout116.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-left-1-2-col-part-2/section_layout116&context=react) |
| 701 | Layout 117 | [`feature-sections-left-1-2-col-part-2/section_layout117.jpg`](/reference-images/feature-sections-left-1-2-col-part-2/section_layout117.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-left-1-2-col-part-2/section_layout117&context=react) |
| 702 | Layout 118 | [`feature-sections-left-1-2-col-part-2/section_layout118.jpg`](/reference-images/feature-sections-left-1-2-col-part-2/section_layout118.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-left-1-2-col-part-2/section_layout118&context=react) |
| 703 | Layout 119 | [`feature-sections-left-1-2-col-part-2/section_layout119.jpg`](/reference-images/feature-sections-left-1-2-col-part-2/section_layout119.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-left-1-2-col-part-2/section_layout119&context=react) |
| 704 | Layout 120 | [`feature-sections-left-1-2-col-part-2/section_layout120.jpg`](/reference-images/feature-sections-left-1-2-col-part-2/section_layout120.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-left-1-2-col-part-2/section_layout120&context=react) |
| 705 | Layout 121 | [`feature-sections-left-1-2-col-part-2/section_layout121.jpg`](/reference-images/feature-sections-left-1-2-col-part-2/section_layout121.jpg) | I | [open](https://www.relume.ai/preview?cid=feature-sections-left-1-2-col-part-2/section_layout121&context=react) |
| 706 | Layout 122 | [`feature-sections-left-1-2-col-part-2/section_layout122.jpg`](/reference-images/feature-sections-left-1-2-col-part-2/section_layout122.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-left-1-2-col-part-2/section_layout122&context=react) |
| 707 | Layout 123 | [`feature-sections-left-1-2-col-part-2/section_layout123.jpg`](/reference-images/feature-sections-left-1-2-col-part-2/section_layout123.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-left-1-2-col-part-2/section_layout123&context=react) |
| 708 | Layout 124 | [`feature-sections-left-1-2-col-part-2/section_layout124.jpg`](/reference-images/feature-sections-left-1-2-col-part-2/section_layout124.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-left-1-2-col-part-2/section_layout124&context=react) |
| 709 | Layout 125 | [`feature-sections-left-1-2-col-part-2/section_layout125.jpg`](/reference-images/feature-sections-left-1-2-col-part-2/section_layout125.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-left-1-2-col-part-2/section_layout125&context=react) |
| 710 | Layout 126 | [`feature-sections-left-1-2-col-part-2/section_layout126.jpg`](/reference-images/feature-sections-left-1-2-col-part-2/section_layout126.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-left-1-2-col-part-2/section_layout126&context=react) |
| 711 | Layout 127 | [`feature-sections-left-1-2-col-part-2/section_layout127.jpg`](/reference-images/feature-sections-left-1-2-col-part-2/section_layout127.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-left-1-2-col-part-2/section_layout127&context=react) |
| 712 | Layout 128 | [`feature-sections-left-1-2-col-part-2/section_layout128.jpg`](/reference-images/feature-sections-left-1-2-col-part-2/section_layout128.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-left-1-2-col-part-2/section_layout128&context=react) |
| 713 | Layout 129 | [`feature-sections-left-1-2-col-part-2/section_layout129.jpg`](/reference-images/feature-sections-left-1-2-col-part-2/section_layout129.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-left-1-2-col-part-2/section_layout129&context=react) |
| 714 | Layout 130 | [`feature-sections-left-1-2-col-part-2/section_layout130.jpg`](/reference-images/feature-sections-left-1-2-col-part-2/section_layout130.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-left-1-2-col-part-2/section_layout130&context=react) |
| 715 | Layout 131 | [`feature-sections-left-1-2-col-part-2/section_layout131.jpg`](/reference-images/feature-sections-left-1-2-col-part-2/section_layout131.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-left-1-2-col-part-2/section_layout131&context=react) |
| 716 | Layout 132 | [`feature-sections-left-1-2-col-part-2/section_layout132.jpg`](/reference-images/feature-sections-left-1-2-col-part-2/section_layout132.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-left-1-2-col-part-2/section_layout132&context=react) |
| 717 | Layout 133 | [`feature-sections-left-1-2-col-part-2/section_layout133.jpg`](/reference-images/feature-sections-left-1-2-col-part-2/section_layout133.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-left-1-2-col-part-2/section_layout133&context=react) |
| 986 | Layout 402 | [`feature-sections-left-1-2-col-part-2/section_layout402.jpg`](/reference-images/feature-sections-left-1-2-col-part-2/section_layout402.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-left-1-2-col-part-2/section_layout402&context=react) |
| 987 | Layout 403 | [`feature-sections-left-1-2-col-part-2/section_layout403.jpg`](/reference-images/feature-sections-left-1-2-col-part-2/section_layout403.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-left-1-2-col-part-2/section_layout403&context=react) |

## feature-sections-centre-1-2-col

Predicted behavior: Centered split: image on one side, centered text on the other.

| # | Component | Local image | Flags | Relume preview |
|---|-----------|-------------|-------|----------------|
| 718 | Layout 134 | [`feature-sections-centre-1-2-col/section_layout134.jpg`](/reference-images/feature-sections-centre-1-2-col/section_layout134.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-centre-1-2-col/section_layout134&context=react) |
| 719 | Layout 135 | [`feature-sections-centre-1-2-col/section_layout135.jpg`](/reference-images/feature-sections-centre-1-2-col/section_layout135.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-centre-1-2-col/section_layout135&context=react) |
| 720 | Layout 136 | [`feature-sections-centre-1-2-col/section_layout136.jpg`](/reference-images/feature-sections-centre-1-2-col/section_layout136.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-centre-1-2-col/section_layout136&context=react) |
| 721 | Layout 137 | [`feature-sections-centre-1-2-col/section_layout137.jpg`](/reference-images/feature-sections-centre-1-2-col/section_layout137.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-centre-1-2-col/section_layout137&context=react) |
| 722 | Layout 138 | [`feature-sections-centre-1-2-col/section_layout138.jpg`](/reference-images/feature-sections-centre-1-2-col/section_layout138.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-centre-1-2-col/section_layout138&context=react) |
| 723 | Layout 139 | [`feature-sections-centre-1-2-col/section_layout139.jpg`](/reference-images/feature-sections-centre-1-2-col/section_layout139.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-centre-1-2-col/section_layout139&context=react) |
| 724 | Layout 140 | [`feature-sections-centre-1-2-col/section_layout140.jpg`](/reference-images/feature-sections-centre-1-2-col/section_layout140.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-centre-1-2-col/section_layout140&context=react) |
| 725 | Layout 141 | [`feature-sections-centre-1-2-col/section_layout141.jpg`](/reference-images/feature-sections-centre-1-2-col/section_layout141.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-centre-1-2-col/section_layout141&context=react) |
| 726 | Layout 142 | [`feature-sections-centre-1-2-col/section_layout142.jpg`](/reference-images/feature-sections-centre-1-2-col/section_layout142.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-centre-1-2-col/section_layout142&context=react) |
| 727 | Layout 143 | [`feature-sections-centre-1-2-col/section_layout143.jpg`](/reference-images/feature-sections-centre-1-2-col/section_layout143.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-centre-1-2-col/section_layout143&context=react) |
| 728 | Layout 144 | [`feature-sections-centre-1-2-col/section_layout144.jpg`](/reference-images/feature-sections-centre-1-2-col/section_layout144.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-centre-1-2-col/section_layout144&context=react) |
| 729 | Layout 145 | [`feature-sections-centre-1-2-col/section_layout145.jpg`](/reference-images/feature-sections-centre-1-2-col/section_layout145.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-centre-1-2-col/section_layout145&context=react) |
| 730 | Layout 146 | [`feature-sections-centre-1-2-col/section_layout146.jpg`](/reference-images/feature-sections-centre-1-2-col/section_layout146.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-centre-1-2-col/section_layout146&context=react) |
| 731 | Layout 147 | [`feature-sections-centre-1-2-col/section_layout147.jpg`](/reference-images/feature-sections-centre-1-2-col/section_layout147.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-centre-1-2-col/section_layout147&context=react) |
| 732 | Layout 148 | [`feature-sections-centre-1-2-col/section_layout148.jpg`](/reference-images/feature-sections-centre-1-2-col/section_layout148.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-centre-1-2-col/section_layout148&context=react) |
| 733 | Layout 149 | [`feature-sections-centre-1-2-col/section_layout149.jpg`](/reference-images/feature-sections-centre-1-2-col/section_layout149.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-centre-1-2-col/section_layout149&context=react) |
| 734 | Layout 150 | [`feature-sections-centre-1-2-col/section_layout150.jpg`](/reference-images/feature-sections-centre-1-2-col/section_layout150.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-centre-1-2-col/section_layout150&context=react) |
| 735 | Layout 151 | [`feature-sections-centre-1-2-col/section_layout151.jpg`](/reference-images/feature-sections-centre-1-2-col/section_layout151.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-centre-1-2-col/section_layout151&context=react) |
| 736 | Layout 152 | [`feature-sections-centre-1-2-col/section_layout152.jpg`](/reference-images/feature-sections-centre-1-2-col/section_layout152.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-centre-1-2-col/section_layout152&context=react) |
| 737 | Layout 153 | [`feature-sections-centre-1-2-col/section_layout153.jpg`](/reference-images/feature-sections-centre-1-2-col/section_layout153.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-centre-1-2-col/section_layout153&context=react) |
| 738 | Layout 154 | [`feature-sections-centre-1-2-col/section_layout154.jpg`](/reference-images/feature-sections-centre-1-2-col/section_layout154.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-centre-1-2-col/section_layout154&context=react) |
| 739 | Layout 155 | [`feature-sections-centre-1-2-col/section_layout155.jpg`](/reference-images/feature-sections-centre-1-2-col/section_layout155.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-centre-1-2-col/section_layout155&context=react) |
| 740 | Layout 156 | [`feature-sections-centre-1-2-col/section_layout156.jpg`](/reference-images/feature-sections-centre-1-2-col/section_layout156.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-centre-1-2-col/section_layout156&context=react) |
| 741 | Layout 157 | [`feature-sections-centre-1-2-col/section_layout157.jpg`](/reference-images/feature-sections-centre-1-2-col/section_layout157.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-centre-1-2-col/section_layout157&context=react) |
| 742 | Layout 158 | [`feature-sections-centre-1-2-col/section_layout158.jpg`](/reference-images/feature-sections-centre-1-2-col/section_layout158.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-centre-1-2-col/section_layout158&context=react) |
| 743 | Layout 159 | [`feature-sections-centre-1-2-col/section_layout159.jpg`](/reference-images/feature-sections-centre-1-2-col/section_layout159.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-centre-1-2-col/section_layout159&context=react) |
| 744 | Layout 160 | [`feature-sections-centre-1-2-col/section_layout160.jpg`](/reference-images/feature-sections-centre-1-2-col/section_layout160.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-centre-1-2-col/section_layout160&context=react) |
| 745 | Layout 161 | [`feature-sections-centre-1-2-col/section_layout161.jpg`](/reference-images/feature-sections-centre-1-2-col/section_layout161.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-centre-1-2-col/section_layout161&context=react) |
| 746 | Layout 162 | [`feature-sections-centre-1-2-col/section_layout162.jpg`](/reference-images/feature-sections-centre-1-2-col/section_layout162.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-centre-1-2-col/section_layout162&context=react) |
| 747 | Layout 163 | [`feature-sections-centre-1-2-col/section_layout163.jpg`](/reference-images/feature-sections-centre-1-2-col/section_layout163.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-centre-1-2-col/section_layout163&context=react) |
| 748 | Layout 164 | [`feature-sections-centre-1-2-col/section_layout164.jpg`](/reference-images/feature-sections-centre-1-2-col/section_layout164.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-centre-1-2-col/section_layout164&context=react) |
| 749 | Layout 165 | [`feature-sections-centre-1-2-col/section_layout165.jpg`](/reference-images/feature-sections-centre-1-2-col/section_layout165.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-centre-1-2-col/section_layout165&context=react) |
| 750 | Layout 166 | [`feature-sections-centre-1-2-col/section_layout166.jpg`](/reference-images/feature-sections-centre-1-2-col/section_layout166.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-centre-1-2-col/section_layout166&context=react) |
| 751 | Layout 167 | [`feature-sections-centre-1-2-col/section_layout167.jpg`](/reference-images/feature-sections-centre-1-2-col/section_layout167.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-centre-1-2-col/section_layout167&context=react) |
| 752 | Layout 168 | [`feature-sections-centre-1-2-col/section_layout168.jpg`](/reference-images/feature-sections-centre-1-2-col/section_layout168.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-centre-1-2-col/section_layout168&context=react) |
| 753 | Layout 169 | [`feature-sections-centre-1-2-col/section_layout169.jpg`](/reference-images/feature-sections-centre-1-2-col/section_layout169.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-centre-1-2-col/section_layout169&context=react) |
| 754 | Layout 170 | [`feature-sections-centre-1-2-col/section_layout170.jpg`](/reference-images/feature-sections-centre-1-2-col/section_layout170.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-centre-1-2-col/section_layout170&context=react) |
| 755 | Layout 171 | [`feature-sections-centre-1-2-col/section_layout171.jpg`](/reference-images/feature-sections-centre-1-2-col/section_layout171.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-centre-1-2-col/section_layout171&context=react) |
| 756 | Layout 172 | [`feature-sections-centre-1-2-col/section_layout172.jpg`](/reference-images/feature-sections-centre-1-2-col/section_layout172.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-centre-1-2-col/section_layout172&context=react) |
| 757 | Layout 173 | [`feature-sections-centre-1-2-col/section_layout173.jpg`](/reference-images/feature-sections-centre-1-2-col/section_layout173.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-centre-1-2-col/section_layout173&context=react) |
| 758 | Layout 174 | [`feature-sections-centre-1-2-col/section_layout174.jpg`](/reference-images/feature-sections-centre-1-2-col/section_layout174.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-centre-1-2-col/section_layout174&context=react) |
| 759 | Layout 175 | [`feature-sections-centre-1-2-col/section_layout175.jpg`](/reference-images/feature-sections-centre-1-2-col/section_layout175.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-centre-1-2-col/section_layout175&context=react) |
| 760 | Layout 176 | [`feature-sections-centre-1-2-col/section_layout176.jpg`](/reference-images/feature-sections-centre-1-2-col/section_layout176.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-centre-1-2-col/section_layout176&context=react) |
| 761 | Layout 177 | [`feature-sections-centre-1-2-col/section_layout177.jpg`](/reference-images/feature-sections-centre-1-2-col/section_layout177.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-centre-1-2-col/section_layout177&context=react) |
| 762 | Layout 178 | [`feature-sections-centre-1-2-col/section_layout178.jpg`](/reference-images/feature-sections-centre-1-2-col/section_layout178.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-centre-1-2-col/section_layout178&context=react) |
| 763 | Layout 179 | [`feature-sections-centre-1-2-col/section_layout179.jpg`](/reference-images/feature-sections-centre-1-2-col/section_layout179.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-centre-1-2-col/section_layout179&context=react) |
| 764 | Layout 180 | [`feature-sections-centre-1-2-col/section_layout180.jpg`](/reference-images/feature-sections-centre-1-2-col/section_layout180.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-centre-1-2-col/section_layout180&context=react) |
| 765 | Layout 181 | [`feature-sections-centre-1-2-col/section_layout181.jpg`](/reference-images/feature-sections-centre-1-2-col/section_layout181.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-centre-1-2-col/section_layout181&context=react) |
| 766 | Layout 182 | [`feature-sections-centre-1-2-col/section_layout182.jpg`](/reference-images/feature-sections-centre-1-2-col/section_layout182.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-centre-1-2-col/section_layout182&context=react) |
| 767 | Layout 183 | [`feature-sections-centre-1-2-col/section_layout183.jpg`](/reference-images/feature-sections-centre-1-2-col/section_layout183.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-centre-1-2-col/section_layout183&context=react) |
| 768 | Layout 184 | [`feature-sections-centre-1-2-col/section_layout184.jpg`](/reference-images/feature-sections-centre-1-2-col/section_layout184.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-centre-1-2-col/section_layout184&context=react) |
| 769 | Layout 185 | [`feature-sections-centre-1-2-col/section_layout185.jpg`](/reference-images/feature-sections-centre-1-2-col/section_layout185.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-centre-1-2-col/section_layout185&context=react) |
| 770 | Layout 186 | [`feature-sections-centre-1-2-col/section_layout186.jpg`](/reference-images/feature-sections-centre-1-2-col/section_layout186.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-centre-1-2-col/section_layout186&context=react) |
| 771 | Layout 187 | [`feature-sections-centre-1-2-col/section_layout187.jpg`](/reference-images/feature-sections-centre-1-2-col/section_layout187.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-centre-1-2-col/section_layout187&context=react) |
| 772 | Layout 188 | [`feature-sections-centre-1-2-col/section_layout188.jpg`](/reference-images/feature-sections-centre-1-2-col/section_layout188.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-centre-1-2-col/section_layout188&context=react) |
| 773 | Layout 189 | [`feature-sections-centre-1-2-col/section_layout189.jpg`](/reference-images/feature-sections-centre-1-2-col/section_layout189.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-centre-1-2-col/section_layout189&context=react) |
| 774 | Layout 190 | [`feature-sections-centre-1-2-col/section_layout190.jpg`](/reference-images/feature-sections-centre-1-2-col/section_layout190.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-centre-1-2-col/section_layout190&context=react) |
| 775 | Layout 191 | [`feature-sections-centre-1-2-col/section_layout191.jpg`](/reference-images/feature-sections-centre-1-2-col/section_layout191.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-centre-1-2-col/section_layout191&context=react) |
| 988 | Layout 404 | [`feature-sections-centre-1-2-col/section_layout404.jpg`](/reference-images/feature-sections-centre-1-2-col/section_layout404.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-centre-1-2-col/section_layout404&context=react) |
| 989 | Layout 405 | [`feature-sections-centre-1-2-col/section_layout405.jpg`](/reference-images/feature-sections-centre-1-2-col/section_layout405.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-centre-1-2-col/section_layout405&context=react) |
| 990 | Layout 406 | [`feature-sections-centre-1-2-col/section_layout406.jpg`](/reference-images/feature-sections-centre-1-2-col/section_layout406.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-centre-1-2-col/section_layout406&context=react) |
| 991 | Layout 407 | [`feature-sections-centre-1-2-col/section_layout407.jpg`](/reference-images/feature-sections-centre-1-2-col/section_layout407.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-centre-1-2-col/section_layout407&context=react) |

## feature-sections-right-1-2-col

Predicted behavior: Split feature: image left, text right.

| # | Component | Local image | Flags | Relume preview |
|---|-----------|-------------|-------|----------------|
| 776 | Layout 192 | [`feature-sections-right-1-2-col/section_layout192.jpg`](/reference-images/feature-sections-right-1-2-col/section_layout192.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-right-1-2-col/section_layout192&context=react) |
| 777 | Layout 193 | [`feature-sections-right-1-2-col/section_layout193.jpg`](/reference-images/feature-sections-right-1-2-col/section_layout193.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-right-1-2-col/section_layout193&context=react) |
| 778 | Layout 194 | [`feature-sections-right-1-2-col/section_layout194.jpg`](/reference-images/feature-sections-right-1-2-col/section_layout194.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-right-1-2-col/section_layout194&context=react) |
| 779 | Layout 195 | [`feature-sections-right-1-2-col/section_layout195.jpg`](/reference-images/feature-sections-right-1-2-col/section_layout195.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-right-1-2-col/section_layout195&context=react) |
| 780 | Layout 196 | [`feature-sections-right-1-2-col/section_layout196.jpg`](/reference-images/feature-sections-right-1-2-col/section_layout196.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-right-1-2-col/section_layout196&context=react) |
| 781 | Layout 197 | [`feature-sections-right-1-2-col/section_layout197.jpg`](/reference-images/feature-sections-right-1-2-col/section_layout197.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-right-1-2-col/section_layout197&context=react) |
| 782 | Layout 198 | [`feature-sections-right-1-2-col/section_layout198.jpg`](/reference-images/feature-sections-right-1-2-col/section_layout198.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-right-1-2-col/section_layout198&context=react) |
| 783 | Layout 199 | [`feature-sections-right-1-2-col/section_layout199.jpg`](/reference-images/feature-sections-right-1-2-col/section_layout199.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-right-1-2-col/section_layout199&context=react) |
| 784 | Layout 200 | [`feature-sections-right-1-2-col/section_layout200.jpg`](/reference-images/feature-sections-right-1-2-col/section_layout200.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-right-1-2-col/section_layout200&context=react) |
| 785 | Layout 201 | [`feature-sections-right-1-2-col/section_layout201.jpg`](/reference-images/feature-sections-right-1-2-col/section_layout201.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-right-1-2-col/section_layout201&context=react) |
| 786 | Layout 202 | [`feature-sections-right-1-2-col/section_layout202.jpg`](/reference-images/feature-sections-right-1-2-col/section_layout202.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-right-1-2-col/section_layout202&context=react) |
| 787 | Layout 203 | [`feature-sections-right-1-2-col/section_layout203.jpg`](/reference-images/feature-sections-right-1-2-col/section_layout203.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-right-1-2-col/section_layout203&context=react) |
| 788 | Layout 204 | [`feature-sections-right-1-2-col/section_layout204.jpg`](/reference-images/feature-sections-right-1-2-col/section_layout204.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-right-1-2-col/section_layout204&context=react) |
| 789 | Layout 205 | [`feature-sections-right-1-2-col/section_layout205.jpg`](/reference-images/feature-sections-right-1-2-col/section_layout205.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-right-1-2-col/section_layout205&context=react) |
| 790 | Layout 206 | [`feature-sections-right-1-2-col/section_layout206.jpg`](/reference-images/feature-sections-right-1-2-col/section_layout206.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-right-1-2-col/section_layout206&context=react) |
| 791 | Layout 207 | [`feature-sections-right-1-2-col/section_layout207.jpg`](/reference-images/feature-sections-right-1-2-col/section_layout207.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-right-1-2-col/section_layout207&context=react) |
| 792 | Layout 208 | [`feature-sections-right-1-2-col/section_layout208.jpg`](/reference-images/feature-sections-right-1-2-col/section_layout208.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-right-1-2-col/section_layout208&context=react) |
| 793 | Layout 209 | [`feature-sections-right-1-2-col/section_layout209.jpg`](/reference-images/feature-sections-right-1-2-col/section_layout209.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-right-1-2-col/section_layout209&context=react) |
| 794 | Layout 210 | [`feature-sections-right-1-2-col/section_layout210.jpg`](/reference-images/feature-sections-right-1-2-col/section_layout210.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-right-1-2-col/section_layout210&context=react) |
| 795 | Layout 211 | [`feature-sections-right-1-2-col/section_layout211.jpg`](/reference-images/feature-sections-right-1-2-col/section_layout211.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-right-1-2-col/section_layout211&context=react) |
| 796 | Layout 212 | [`feature-sections-right-1-2-col/section_layout212.jpg`](/reference-images/feature-sections-right-1-2-col/section_layout212.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-right-1-2-col/section_layout212&context=react) |
| 797 | Layout 213 | [`feature-sections-right-1-2-col/section_layout213.jpg`](/reference-images/feature-sections-right-1-2-col/section_layout213.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-right-1-2-col/section_layout213&context=react) |
| 798 | Layout 214 | [`feature-sections-right-1-2-col/section_layout214.jpg`](/reference-images/feature-sections-right-1-2-col/section_layout214.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-right-1-2-col/section_layout214&context=react) |
| 799 | Layout 215 | [`feature-sections-right-1-2-col/section_layout215.jpg`](/reference-images/feature-sections-right-1-2-col/section_layout215.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-right-1-2-col/section_layout215&context=react) |
| 800 | Layout 216 | [`feature-sections-right-1-2-col/section_layout216.jpg`](/reference-images/feature-sections-right-1-2-col/section_layout216.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-right-1-2-col/section_layout216&context=react) |
| 801 | Layout 217 | [`feature-sections-right-1-2-col/section_layout217.jpg`](/reference-images/feature-sections-right-1-2-col/section_layout217.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-right-1-2-col/section_layout217&context=react) |
| 802 | Layout 218 | [`feature-sections-right-1-2-col/section_layout218.jpg`](/reference-images/feature-sections-right-1-2-col/section_layout218.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-right-1-2-col/section_layout218&context=react) |
| 803 | Layout 219 | [`feature-sections-right-1-2-col/section_layout219.jpg`](/reference-images/feature-sections-right-1-2-col/section_layout219.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-right-1-2-col/section_layout219&context=react) |
| 804 | Layout 220 | [`feature-sections-right-1-2-col/section_layout220.jpg`](/reference-images/feature-sections-right-1-2-col/section_layout220.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-right-1-2-col/section_layout220&context=react) |
| 805 | Layout 221 | [`feature-sections-right-1-2-col/section_layout221.jpg`](/reference-images/feature-sections-right-1-2-col/section_layout221.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-right-1-2-col/section_layout221&context=react) |
| 806 | Layout 222 | [`feature-sections-right-1-2-col/section_layout222.jpg`](/reference-images/feature-sections-right-1-2-col/section_layout222.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-right-1-2-col/section_layout222&context=react) |
| 807 | Layout 223 | [`feature-sections-right-1-2-col/section_layout223.jpg`](/reference-images/feature-sections-right-1-2-col/section_layout223.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-right-1-2-col/section_layout223&context=react) |
| 808 | Layout 224 | [`feature-sections-right-1-2-col/section_layout224.jpg`](/reference-images/feature-sections-right-1-2-col/section_layout224.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-right-1-2-col/section_layout224&context=react) |
| 809 | Layout 225 | [`feature-sections-right-1-2-col/section_layout225.jpg`](/reference-images/feature-sections-right-1-2-col/section_layout225.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-right-1-2-col/section_layout225&context=react) |

## feature-sections-3-col

Predicted behavior: 3-column feature rows: icon + title + text per column, sometimes with media.

| # | Component | Local image | Flags | Relume preview |
|---|-----------|-------------|-------|----------------|
| 810 | Layout 226 | [`feature-sections-3-col/section_layout226.jpg`](/reference-images/feature-sections-3-col/section_layout226.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-3-col/section_layout226&context=react) |
| 811 | Layout 227 | [`feature-sections-3-col/section_layout227.jpg`](/reference-images/feature-sections-3-col/section_layout227.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-3-col/section_layout227&context=react) |
| 812 | Layout 228 | [`feature-sections-3-col/section_layout228.jpg`](/reference-images/feature-sections-3-col/section_layout228.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-3-col/section_layout228&context=react) |
| 813 | Layout 229 | [`feature-sections-3-col/section_layout229.jpg`](/reference-images/feature-sections-3-col/section_layout229.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-3-col/section_layout229&context=react) |
| 814 | Layout 230 | [`feature-sections-3-col/section_layout230.jpg`](/reference-images/feature-sections-3-col/section_layout230.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-3-col/section_layout230&context=react) |
| 815 | Layout 231 | [`feature-sections-3-col/section_layout231.jpg`](/reference-images/feature-sections-3-col/section_layout231.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-3-col/section_layout231&context=react) |
| 816 | Layout 232 | [`feature-sections-3-col/section_layout232.jpg`](/reference-images/feature-sections-3-col/section_layout232.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-3-col/section_layout232&context=react) |
| 817 | Layout 233 | [`feature-sections-3-col/section_layout233.jpg`](/reference-images/feature-sections-3-col/section_layout233.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-3-col/section_layout233&context=react) |
| 818 | Layout 234 | [`feature-sections-3-col/section_layout234.jpg`](/reference-images/feature-sections-3-col/section_layout234.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-3-col/section_layout234&context=react) |
| 819 | Layout 235 | [`feature-sections-3-col/section_layout235.jpg`](/reference-images/feature-sections-3-col/section_layout235.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-3-col/section_layout235&context=react) |
| 820 | Layout 236 | [`feature-sections-3-col/section_layout236.jpg`](/reference-images/feature-sections-3-col/section_layout236.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-3-col/section_layout236&context=react) |
| 821 | Layout 237 | [`feature-sections-3-col/section_layout237.jpg`](/reference-images/feature-sections-3-col/section_layout237.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-3-col/section_layout237&context=react) |
| 822 | Layout 238 | [`feature-sections-3-col/section_layout238.jpg`](/reference-images/feature-sections-3-col/section_layout238.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-3-col/section_layout238&context=react) |
| 823 | Layout 239 | [`feature-sections-3-col/section_layout239.jpg`](/reference-images/feature-sections-3-col/section_layout239.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-3-col/section_layout239&context=react) |
| 824 | Layout 240 | [`feature-sections-3-col/section_layout240.jpg`](/reference-images/feature-sections-3-col/section_layout240.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-3-col/section_layout240&context=react) |
| 825 | Layout 241 | [`feature-sections-3-col/section_layout241.jpg`](/reference-images/feature-sections-3-col/section_layout241.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-3-col/section_layout241&context=react) |
| 826 | Layout 242 | [`feature-sections-3-col/section_layout242.jpg`](/reference-images/feature-sections-3-col/section_layout242.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-3-col/section_layout242&context=react) |
| 827 | Layout 243 | [`feature-sections-3-col/section_layout243.jpg`](/reference-images/feature-sections-3-col/section_layout243.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-3-col/section_layout243&context=react) |
| 828 | Layout 244 | [`feature-sections-3-col/section_layout244.jpg`](/reference-images/feature-sections-3-col/section_layout244.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-3-col/section_layout244&context=react) |
| 829 | Layout 245 | [`feature-sections-3-col/section_layout245.jpg`](/reference-images/feature-sections-3-col/section_layout245.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-3-col/section_layout245&context=react) |
| 830 | Layout 246 | [`feature-sections-3-col/section_layout246.jpg`](/reference-images/feature-sections-3-col/section_layout246.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-3-col/section_layout246&context=react) |
| 831 | Layout 247 | [`feature-sections-3-col/section_layout247.jpg`](/reference-images/feature-sections-3-col/section_layout247.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-3-col/section_layout247&context=react) |
| 832 | Layout 248 | [`feature-sections-3-col/section_layout248.jpg`](/reference-images/feature-sections-3-col/section_layout248.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-3-col/section_layout248&context=react) |
| 833 | Layout 249 | [`feature-sections-3-col/section_layout249.jpg`](/reference-images/feature-sections-3-col/section_layout249.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-3-col/section_layout249&context=react) |
| 834 | Layout 250 | [`feature-sections-3-col/section_layout250.jpg`](/reference-images/feature-sections-3-col/section_layout250.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-3-col/section_layout250&context=react) |
| 835 | Layout 251 | [`feature-sections-3-col/section_layout251.jpg`](/reference-images/feature-sections-3-col/section_layout251.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-3-col/section_layout251&context=react) |
| 836 | Layout 252 | [`feature-sections-3-col/section_layout252.jpg`](/reference-images/feature-sections-3-col/section_layout252.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-3-col/section_layout252&context=react) |
| 837 | Layout 253 | [`feature-sections-3-col/section_layout253.jpg`](/reference-images/feature-sections-3-col/section_layout253.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-3-col/section_layout253&context=react) |
| 838 | Layout 254 | [`feature-sections-3-col/section_layout254.jpg`](/reference-images/feature-sections-3-col/section_layout254.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-3-col/section_layout254&context=react) |
| 839 | Layout 255 | [`feature-sections-3-col/section_layout255.jpg`](/reference-images/feature-sections-3-col/section_layout255.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-3-col/section_layout255&context=react) |
| 840 | Layout 256 | [`feature-sections-3-col/section_layout256.jpg`](/reference-images/feature-sections-3-col/section_layout256.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-3-col/section_layout256&context=react) |
| 841 | Layout 257 | [`feature-sections-3-col/section_layout257.jpg`](/reference-images/feature-sections-3-col/section_layout257.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-3-col/section_layout257&context=react) |
| 842 | Layout 258 | [`feature-sections-3-col/section_layout258.jpg`](/reference-images/feature-sections-3-col/section_layout258.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-3-col/section_layout258&context=react) |
| 843 | Layout 259 | [`feature-sections-3-col/section_layout259.jpg`](/reference-images/feature-sections-3-col/section_layout259.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-3-col/section_layout259&context=react) |
| 844 | Layout 260 | [`feature-sections-3-col/section_layout260.jpg`](/reference-images/feature-sections-3-col/section_layout260.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-3-col/section_layout260&context=react) |
| 845 | Layout 261 | [`feature-sections-3-col/section_layout261.jpg`](/reference-images/feature-sections-3-col/section_layout261.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-3-col/section_layout261&context=react) |
| 846 | Layout 262 | [`feature-sections-3-col/section_layout262.jpg`](/reference-images/feature-sections-3-col/section_layout262.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-3-col/section_layout262&context=react) |
| 847 | Layout 263 | [`feature-sections-3-col/section_layout263.jpg`](/reference-images/feature-sections-3-col/section_layout263.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-3-col/section_layout263&context=react) |
| 848 | Layout 264 | [`feature-sections-3-col/section_layout264.jpg`](/reference-images/feature-sections-3-col/section_layout264.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-3-col/section_layout264&context=react) |
| 849 | Layout 265 | [`feature-sections-3-col/section_layout265.jpg`](/reference-images/feature-sections-3-col/section_layout265.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-3-col/section_layout265&context=react) |
| 850 | Layout 266 | [`feature-sections-3-col/section_layout266.jpg`](/reference-images/feature-sections-3-col/section_layout266.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-3-col/section_layout266&context=react) |
| 851 | Layout 267 | [`feature-sections-3-col/section_layout267.jpg`](/reference-images/feature-sections-3-col/section_layout267.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-3-col/section_layout267&context=react) |
| 852 | Layout 268 | [`feature-sections-3-col/section_layout268.jpg`](/reference-images/feature-sections-3-col/section_layout268.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-3-col/section_layout268&context=react) |
| 853 | Layout 269 | [`feature-sections-3-col/section_layout269.jpg`](/reference-images/feature-sections-3-col/section_layout269.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-3-col/section_layout269&context=react) |
| 854 | Layout 270 | [`feature-sections-3-col/section_layout270.jpg`](/reference-images/feature-sections-3-col/section_layout270.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-3-col/section_layout270&context=react) |
| 855 | Layout 271 | [`feature-sections-3-col/section_layout271.jpg`](/reference-images/feature-sections-3-col/section_layout271.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-3-col/section_layout271&context=react) |
| 856 | Layout 272 | [`feature-sections-3-col/section_layout272.jpg`](/reference-images/feature-sections-3-col/section_layout272.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-3-col/section_layout272&context=react) |
| 857 | Layout 273 | [`feature-sections-3-col/section_layout273.jpg`](/reference-images/feature-sections-3-col/section_layout273.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-3-col/section_layout273&context=react) |
| 858 | Layout 274 | [`feature-sections-3-col/section_layout274.jpg`](/reference-images/feature-sections-3-col/section_layout274.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-3-col/section_layout274&context=react) |
| 859 | Layout 275 | [`feature-sections-3-col/section_layout275.jpg`](/reference-images/feature-sections-3-col/section_layout275.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-3-col/section_layout275&context=react) |
| 860 | Layout 276 | [`feature-sections-3-col/section_layout276.jpg`](/reference-images/feature-sections-3-col/section_layout276.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-3-col/section_layout276&context=react) |
| 861 | Layout 277 | [`feature-sections-3-col/section_layout277.jpg`](/reference-images/feature-sections-3-col/section_layout277.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-3-col/section_layout277&context=react) |
| 862 | Layout 278 | [`feature-sections-3-col/section_layout278.jpg`](/reference-images/feature-sections-3-col/section_layout278.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-3-col/section_layout278&context=react) |
| 863 | Layout 279 | [`feature-sections-3-col/section_layout279.jpg`](/reference-images/feature-sections-3-col/section_layout279.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-3-col/section_layout279&context=react) |
| 864 | Layout 280 | [`feature-sections-3-col/section_layout280.jpg`](/reference-images/feature-sections-3-col/section_layout280.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-3-col/section_layout280&context=react) |
| 865 | Layout 281 | [`feature-sections-3-col/section_layout281.jpg`](/reference-images/feature-sections-3-col/section_layout281.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-3-col/section_layout281&context=react) |
| 866 | Layout 282 | [`feature-sections-3-col/section_layout282.jpg`](/reference-images/feature-sections-3-col/section_layout282.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-3-col/section_layout282&context=react) |
| 867 | Layout 283 | [`feature-sections-3-col/section_layout283.jpg`](/reference-images/feature-sections-3-col/section_layout283.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-3-col/section_layout283&context=react) |
| 868 | Layout 284 | [`feature-sections-3-col/section_layout284.jpg`](/reference-images/feature-sections-3-col/section_layout284.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-3-col/section_layout284&context=react) |
| 869 | Layout 285 | [`feature-sections-3-col/section_layout285.jpg`](/reference-images/feature-sections-3-col/section_layout285.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-3-col/section_layout285&context=react) |
| 870 | Layout 286 | [`feature-sections-3-col/section_layout286.jpg`](/reference-images/feature-sections-3-col/section_layout286.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-3-col/section_layout286&context=react) |

## feature-sections-3-col-2

Predicted behavior: 3-column feature variant set 2.

| # | Component | Local image | Flags | Relume preview |
|---|-----------|-------------|-------|----------------|
| 871 | Layout 287 | [`feature-sections-3-col-2/section_layout287.jpg`](/reference-images/feature-sections-3-col-2/section_layout287.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-3-col-2/section_layout287&context=react) |
| 872 | Layout 288 | [`feature-sections-3-col-2/section_layout288.jpg`](/reference-images/feature-sections-3-col-2/section_layout288.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-3-col-2/section_layout288&context=react) |
| 873 | Layout 289 | [`feature-sections-3-col-2/section_layout289.jpg`](/reference-images/feature-sections-3-col-2/section_layout289.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-3-col-2/section_layout289&context=react) |
| 874 | Layout 290 | [`feature-sections-3-col-2/section_layout290.jpg`](/reference-images/feature-sections-3-col-2/section_layout290.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-3-col-2/section_layout290&context=react) |
| 875 | Layout 291 | [`feature-sections-3-col-2/section_layout291.jpg`](/reference-images/feature-sections-3-col-2/section_layout291.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-3-col-2/section_layout291&context=react) |
| 876 | Layout 292 | [`feature-sections-3-col-2/section_layout292.jpg`](/reference-images/feature-sections-3-col-2/section_layout292.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-3-col-2/section_layout292&context=react) |
| 877 | Layout 293 | [`feature-sections-3-col-2/section_layout293.jpg`](/reference-images/feature-sections-3-col-2/section_layout293.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-3-col-2/section_layout293&context=react) |
| 878 | Layout 294 | [`feature-sections-3-col-2/section_layout294.jpg`](/reference-images/feature-sections-3-col-2/section_layout294.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-3-col-2/section_layout294&context=react) |
| 879 | Layout 295 | [`feature-sections-3-col-2/section_layout295.jpg`](/reference-images/feature-sections-3-col-2/section_layout295.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-3-col-2/section_layout295&context=react) |
| 880 | Layout 296 | [`feature-sections-3-col-2/section_layout296.jpg`](/reference-images/feature-sections-3-col-2/section_layout296.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-3-col-2/section_layout296&context=react) |
| 881 | Layout 297 | [`feature-sections-3-col-2/section_layout297.jpg`](/reference-images/feature-sections-3-col-2/section_layout297.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-3-col-2/section_layout297&context=react) |
| 882 | Layout 298 | [`feature-sections-3-col-2/section_layout298.jpg`](/reference-images/feature-sections-3-col-2/section_layout298.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-3-col-2/section_layout298&context=react) |
| 883 | Layout 299 | [`feature-sections-3-col-2/section_layout299.jpg`](/reference-images/feature-sections-3-col-2/section_layout299.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-3-col-2/section_layout299&context=react) |
| 884 | Layout 300 | [`feature-sections-3-col-2/section_layout300.jpg`](/reference-images/feature-sections-3-col-2/section_layout300.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-3-col-2/section_layout300&context=react) |
| 885 | Layout 301 | [`feature-sections-3-col-2/section_layout301.jpg`](/reference-images/feature-sections-3-col-2/section_layout301.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-3-col-2/section_layout301&context=react) |
| 886 | Layout 302 | [`feature-sections-3-col-2/section_layout302.jpg`](/reference-images/feature-sections-3-col-2/section_layout302.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-3-col-2/section_layout302&context=react) |
| 887 | Layout 303 | [`feature-sections-3-col-2/section_layout303.jpg`](/reference-images/feature-sections-3-col-2/section_layout303.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-3-col-2/section_layout303&context=react) |
| 888 | Layout 304 | [`feature-sections-3-col-2/section_layout304.jpg`](/reference-images/feature-sections-3-col-2/section_layout304.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-3-col-2/section_layout304&context=react) |
| 889 | Layout 305 | [`feature-sections-3-col-2/section_layout305.jpg`](/reference-images/feature-sections-3-col-2/section_layout305.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-3-col-2/section_layout305&context=react) |
| 890 | Layout 306 | [`feature-sections-3-col-2/section_layout306.jpg`](/reference-images/feature-sections-3-col-2/section_layout306.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-3-col-2/section_layout306&context=react) |
| 891 | Layout 307 | [`feature-sections-3-col-2/section_layout307.jpg`](/reference-images/feature-sections-3-col-2/section_layout307.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-3-col-2/section_layout307&context=react) |
| 892 | Layout 308 | [`feature-sections-3-col-2/section_layout308.jpg`](/reference-images/feature-sections-3-col-2/section_layout308.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-3-col-2/section_layout308&context=react) |
| 893 | Layout 309 | [`feature-sections-3-col-2/section_layout309.jpg`](/reference-images/feature-sections-3-col-2/section_layout309.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-3-col-2/section_layout309&context=react) |
| 894 | Layout 310 | [`feature-sections-3-col-2/section_layout310.jpg`](/reference-images/feature-sections-3-col-2/section_layout310.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-3-col-2/section_layout310&context=react) |
| 895 | Layout 311 | [`feature-sections-3-col-2/section_layout311.jpg`](/reference-images/feature-sections-3-col-2/section_layout311.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-3-col-2/section_layout311&context=react) |
| 896 | Layout 312 | [`feature-sections-3-col-2/section_layout312.jpg`](/reference-images/feature-sections-3-col-2/section_layout312.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-3-col-2/section_layout312&context=react) |
| 897 | Layout 313 | [`feature-sections-3-col-2/section_layout313.jpg`](/reference-images/feature-sections-3-col-2/section_layout313.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-3-col-2/section_layout313&context=react) |
| 898 | Layout 314 | [`feature-sections-3-col-2/section_layout314.jpg`](/reference-images/feature-sections-3-col-2/section_layout314.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-3-col-2/section_layout314&context=react) |
| 899 | Layout 315 | [`feature-sections-3-col-2/section_layout315.jpg`](/reference-images/feature-sections-3-col-2/section_layout315.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-3-col-2/section_layout315&context=react) |
| 900 | Layout 316 | [`feature-sections-3-col-2/section_layout316.jpg`](/reference-images/feature-sections-3-col-2/section_layout316.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-3-col-2/section_layout316&context=react) |
| 901 | Layout 317 | [`feature-sections-3-col-2/section_layout317.jpg`](/reference-images/feature-sections-3-col-2/section_layout317.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-3-col-2/section_layout317&context=react) |
| 902 | Layout 318 | [`feature-sections-3-col-2/section_layout318.jpg`](/reference-images/feature-sections-3-col-2/section_layout318.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-3-col-2/section_layout318&context=react) |
| 903 | Layout 319 | [`feature-sections-3-col-2/section_layout319.jpg`](/reference-images/feature-sections-3-col-2/section_layout319.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-3-col-2/section_layout319&context=react) |
| 904 | Layout 320 | [`feature-sections-3-col-2/section_layout320.jpg`](/reference-images/feature-sections-3-col-2/section_layout320.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-3-col-2/section_layout320&context=react) |
| 905 | Layout 321 | [`feature-sections-3-col-2/section_layout321.jpg`](/reference-images/feature-sections-3-col-2/section_layout321.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-3-col-2/section_layout321&context=react) |
| 906 | Layout 322 | [`feature-sections-3-col-2/section_layout322.jpg`](/reference-images/feature-sections-3-col-2/section_layout322.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-3-col-2/section_layout322&context=react) |
| 907 | Layout 323 | [`feature-sections-3-col-2/section_layout323.jpg`](/reference-images/feature-sections-3-col-2/section_layout323.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-3-col-2/section_layout323&context=react) |
| 908 | Layout 324 | [`feature-sections-3-col-2/section_layout324.jpg`](/reference-images/feature-sections-3-col-2/section_layout324.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-3-col-2/section_layout324&context=react) |
| 909 | Layout 325 | [`feature-sections-3-col-2/section_layout325.jpg`](/reference-images/feature-sections-3-col-2/section_layout325.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-3-col-2/section_layout325&context=react) |
| 910 | Layout 326 | [`feature-sections-3-col-2/section_layout326.jpg`](/reference-images/feature-sections-3-col-2/section_layout326.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-3-col-2/section_layout326&context=react) |
| 911 | Layout 327 | [`feature-sections-3-col-2/section_layout327.jpg`](/reference-images/feature-sections-3-col-2/section_layout327.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-3-col-2/section_layout327&context=react) |
| 912 | Layout 328 | [`feature-sections-3-col-2/section_layout328.jpg`](/reference-images/feature-sections-3-col-2/section_layout328.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-3-col-2/section_layout328&context=react) |
| 913 | Layout 329 | [`feature-sections-3-col-2/section_layout329.jpg`](/reference-images/feature-sections-3-col-2/section_layout329.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-3-col-2/section_layout329&context=react) |
| 914 | Layout 330 | [`feature-sections-3-col-2/section_layout330.jpg`](/reference-images/feature-sections-3-col-2/section_layout330.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-3-col-2/section_layout330&context=react) |
| 915 | Layout 331 | [`feature-sections-3-col-2/section_layout331.jpg`](/reference-images/feature-sections-3-col-2/section_layout331.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-3-col-2/section_layout331&context=react) |
| 916 | Layout 332 | [`feature-sections-3-col-2/section_layout332.jpg`](/reference-images/feature-sections-3-col-2/section_layout332.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-3-col-2/section_layout332&context=react) |
| 917 | Layout 333 | [`feature-sections-3-col-2/section_layout333.jpg`](/reference-images/feature-sections-3-col-2/section_layout333.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-3-col-2/section_layout333&context=react) |
| 918 | Layout 334 | [`feature-sections-3-col-2/section_layout334.jpg`](/reference-images/feature-sections-3-col-2/section_layout334.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-3-col-2/section_layout334&context=react) |
| 919 | Layout 335 | [`feature-sections-3-col-2/section_layout335.jpg`](/reference-images/feature-sections-3-col-2/section_layout335.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-3-col-2/section_layout335&context=react) |
| 920 | Layout 336 | [`feature-sections-3-col-2/section_layout336.jpg`](/reference-images/feature-sections-3-col-2/section_layout336.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-3-col-2/section_layout336&context=react) |
| 921 | Layout 337 | [`feature-sections-3-col-2/section_layout337.jpg`](/reference-images/feature-sections-3-col-2/section_layout337.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-3-col-2/section_layout337&context=react) |
| 922 | Layout 338 | [`feature-sections-3-col-2/section_layout338.jpg`](/reference-images/feature-sections-3-col-2/section_layout338.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-3-col-2/section_layout338&context=react) |
| 923 | Layout 339 | [`feature-sections-3-col-2/section_layout339.jpg`](/reference-images/feature-sections-3-col-2/section_layout339.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-3-col-2/section_layout339&context=react) |
| 924 | Layout 340 | [`feature-sections-3-col-2/section_layout340.jpg`](/reference-images/feature-sections-3-col-2/section_layout340.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-3-col-2/section_layout340&context=react) |
| 925 | Layout 341 | [`feature-sections-3-col-2/section_layout341.jpg`](/reference-images/feature-sections-3-col-2/section_layout341.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-3-col-2/section_layout341&context=react) |
| 926 | Layout 342 | [`feature-sections-3-col-2/section_layout342.jpg`](/reference-images/feature-sections-3-col-2/section_layout342.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-3-col-2/section_layout342&context=react) |
| 927 | Layout 343 | [`feature-sections-3-col-2/section_layout343.jpg`](/reference-images/feature-sections-3-col-2/section_layout343.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-3-col-2/section_layout343&context=react) |
| 928 | Layout 344 | [`feature-sections-3-col-2/section_layout344.jpg`](/reference-images/feature-sections-3-col-2/section_layout344.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-3-col-2/section_layout344&context=react) |
| 929 | Layout 345 | [`feature-sections-3-col-2/section_layout345.jpg`](/reference-images/feature-sections-3-col-2/section_layout345.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-3-col-2/section_layout345&context=react) |
| 930 | Layout 346 | [`feature-sections-3-col-2/section_layout346.jpg`](/reference-images/feature-sections-3-col-2/section_layout346.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-3-col-2/section_layout346&context=react) |
| 931 | Layout 347 | [`feature-sections-3-col-2/section_layout347.jpg`](/reference-images/feature-sections-3-col-2/section_layout347.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-3-col-2/section_layout347&context=react) |

## uncommon-components-timeline

Predicted behavior: Experimental timeline treatment.

| # | Component | Local image | Flags | Relume preview |
|---|-----------|-------------|-------|----------------|
| 936 | Layout 352 | [`uncommon-components-timeline/section_layout352.jpg`](/reference-images/uncommon-components-timeline/section_layout352.jpg) | U | [open](https://www.relume.ai/preview?cid=uncommon-components-timeline/section_layout352&context=react) |

## feature-sections-grid-cards

Predicted behavior: Feature cards in a grid (2/3/4-up): icon, title, description; hover state.

| # | Component | Local image | Flags | Relume preview |
|---|-----------|-------------|-------|----------------|
| 942 | Layout 358 | [`feature-sections-grid-cards/section_layout358.jpg`](/reference-images/feature-sections-grid-cards/section_layout358.jpg) | B | [open](https://www.relume.ai/preview?cid=feature-sections-grid-cards/section_layout358&context=react) |
| 943 | Layout 359 | [`feature-sections-grid-cards/section_layout359.jpg`](/reference-images/feature-sections-grid-cards/section_layout359.jpg) | B | [open](https://www.relume.ai/preview?cid=feature-sections-grid-cards/section_layout359&context=react) |
| 944 | Layout 360 | [`feature-sections-grid-cards/section_layout360.jpg`](/reference-images/feature-sections-grid-cards/section_layout360.jpg) | B | [open](https://www.relume.ai/preview?cid=feature-sections-grid-cards/section_layout360&context=react) |
| 945 | Layout 361 | [`feature-sections-grid-cards/section_layout361.jpg`](/reference-images/feature-sections-grid-cards/section_layout361.jpg) | B | [open](https://www.relume.ai/preview?cid=feature-sections-grid-cards/section_layout361&context=react) |
| 946 | Layout 362 | [`feature-sections-grid-cards/section_layout362.jpg`](/reference-images/feature-sections-grid-cards/section_layout362.jpg) | B | [open](https://www.relume.ai/preview?cid=feature-sections-grid-cards/section_layout362&context=react) |
| 947 | Layout 363 | [`feature-sections-grid-cards/section_layout363.jpg`](/reference-images/feature-sections-grid-cards/section_layout363.jpg) | B | [open](https://www.relume.ai/preview?cid=feature-sections-grid-cards/section_layout363&context=react) |
| 948 | Layout 364 | [`feature-sections-grid-cards/section_layout364.jpg`](/reference-images/feature-sections-grid-cards/section_layout364.jpg) | B | [open](https://www.relume.ai/preview?cid=feature-sections-grid-cards/section_layout364&context=react) |
| 949 | Layout 365 | [`feature-sections-grid-cards/section_layout365.jpg`](/reference-images/feature-sections-grid-cards/section_layout365.jpg) | B | [open](https://www.relume.ai/preview?cid=feature-sections-grid-cards/section_layout365&context=react) |
| 950 | Layout 366 | [`feature-sections-grid-cards/section_layout366.jpg`](/reference-images/feature-sections-grid-cards/section_layout366.jpg) | B | [open](https://www.relume.ai/preview?cid=feature-sections-grid-cards/section_layout366&context=react) |
| 951 | Layout 367 | [`feature-sections-grid-cards/section_layout367.jpg`](/reference-images/feature-sections-grid-cards/section_layout367.jpg) | B | [open](https://www.relume.ai/preview?cid=feature-sections-grid-cards/section_layout367&context=react) |
| 952 | Layout 368 | [`feature-sections-grid-cards/section_layout368.jpg`](/reference-images/feature-sections-grid-cards/section_layout368.jpg) | B | [open](https://www.relume.ai/preview?cid=feature-sections-grid-cards/section_layout368&context=react) |
| 953 | Layout 369 | [`feature-sections-grid-cards/section_layout369.jpg`](/reference-images/feature-sections-grid-cards/section_layout369.jpg) | B | [open](https://www.relume.ai/preview?cid=feature-sections-grid-cards/section_layout369&context=react) |
| 954 | Layout 370 | [`feature-sections-grid-cards/section_layout370.jpg`](/reference-images/feature-sections-grid-cards/section_layout370.jpg) | B | [open](https://www.relume.ai/preview?cid=feature-sections-grid-cards/section_layout370&context=react) |
| 955 | Layout 371 | [`feature-sections-grid-cards/section_layout371.jpg`](/reference-images/feature-sections-grid-cards/section_layout371.jpg) | B | [open](https://www.relume.ai/preview?cid=feature-sections-grid-cards/section_layout371&context=react) |
| 956 | Layout 372 | [`feature-sections-grid-cards/section_layout372.jpg`](/reference-images/feature-sections-grid-cards/section_layout372.jpg) | B | [open](https://www.relume.ai/preview?cid=feature-sections-grid-cards/section_layout372&context=react) |
| 957 | Layout 373 | [`feature-sections-grid-cards/section_layout373.jpg`](/reference-images/feature-sections-grid-cards/section_layout373.jpg) | B | [open](https://www.relume.ai/preview?cid=feature-sections-grid-cards/section_layout373&context=react) |
| 958 | Layout 374 | [`feature-sections-grid-cards/section_layout374.jpg`](/reference-images/feature-sections-grid-cards/section_layout374.jpg) | B | [open](https://www.relume.ai/preview?cid=feature-sections-grid-cards/section_layout374&context=react) |
| 959 | Layout 375 | [`feature-sections-grid-cards/section_layout375.jpg`](/reference-images/feature-sections-grid-cards/section_layout375.jpg) | B | [open](https://www.relume.ai/preview?cid=feature-sections-grid-cards/section_layout375&context=react) |
| 960 | Layout 376 | [`feature-sections-grid-cards/section_layout376.jpg`](/reference-images/feature-sections-grid-cards/section_layout376.jpg) | B | [open](https://www.relume.ai/preview?cid=feature-sections-grid-cards/section_layout376&context=react) |
| 961 | Layout 377 | [`feature-sections-grid-cards/section_layout377.jpg`](/reference-images/feature-sections-grid-cards/section_layout377.jpg) | B | [open](https://www.relume.ai/preview?cid=feature-sections-grid-cards/section_layout377&context=react) |
| 962 | Layout 378 | [`feature-sections-grid-cards/section_layout378.jpg`](/reference-images/feature-sections-grid-cards/section_layout378.jpg) | B | [open](https://www.relume.ai/preview?cid=feature-sections-grid-cards/section_layout378&context=react) |
| 963 | Layout 379 | [`feature-sections-grid-cards/section_layout379.jpg`](/reference-images/feature-sections-grid-cards/section_layout379.jpg) | B | [open](https://www.relume.ai/preview?cid=feature-sections-grid-cards/section_layout379&context=react) |
| 964 | Layout 380 | [`feature-sections-grid-cards/section_layout380.jpg`](/reference-images/feature-sections-grid-cards/section_layout380.jpg) | B | [open](https://www.relume.ai/preview?cid=feature-sections-grid-cards/section_layout380&context=react) |
| 965 | Layout 381 | [`feature-sections-grid-cards/section_layout381.jpg`](/reference-images/feature-sections-grid-cards/section_layout381.jpg) | B | [open](https://www.relume.ai/preview?cid=feature-sections-grid-cards/section_layout381&context=react) |
| 966 | Layout 382 | [`feature-sections-grid-cards/section_layout382.jpg`](/reference-images/feature-sections-grid-cards/section_layout382.jpg) | B | [open](https://www.relume.ai/preview?cid=feature-sections-grid-cards/section_layout382&context=react) |
| 967 | Layout 383 | [`feature-sections-grid-cards/section_layout383.jpg`](/reference-images/feature-sections-grid-cards/section_layout383.jpg) | B | [open](https://www.relume.ai/preview?cid=feature-sections-grid-cards/section_layout383&context=react) |
| 968 | Layout 384 | [`feature-sections-grid-cards/section_layout384.jpg`](/reference-images/feature-sections-grid-cards/section_layout384.jpg) | B | [open](https://www.relume.ai/preview?cid=feature-sections-grid-cards/section_layout384&context=react) |
| 969 | Layout 385 | [`feature-sections-grid-cards/section_layout385.jpg`](/reference-images/feature-sections-grid-cards/section_layout385.jpg) | B | [open](https://www.relume.ai/preview?cid=feature-sections-grid-cards/section_layout385&context=react) |
| 970 | Layout 386 | [`feature-sections-grid-cards/section_layout386.jpg`](/reference-images/feature-sections-grid-cards/section_layout386.jpg) | B | [open](https://www.relume.ai/preview?cid=feature-sections-grid-cards/section_layout386&context=react) |
| 971 | Layout 387 | [`feature-sections-grid-cards/section_layout387.jpg`](/reference-images/feature-sections-grid-cards/section_layout387.jpg) | B | [open](https://www.relume.ai/preview?cid=feature-sections-grid-cards/section_layout387&context=react) |
| 972 | Layout 388 | [`feature-sections-grid-cards/section_layout388.jpg`](/reference-images/feature-sections-grid-cards/section_layout388.jpg) | B | [open](https://www.relume.ai/preview?cid=feature-sections-grid-cards/section_layout388&context=react) |
| 973 | Layout 389 | [`feature-sections-grid-cards/section_layout389.jpg`](/reference-images/feature-sections-grid-cards/section_layout389.jpg) | B | [open](https://www.relume.ai/preview?cid=feature-sections-grid-cards/section_layout389&context=react) |
| 974 | Layout 390 | [`feature-sections-grid-cards/section_layout390.jpg`](/reference-images/feature-sections-grid-cards/section_layout390.jpg) | B | [open](https://www.relume.ai/preview?cid=feature-sections-grid-cards/section_layout390&context=react) |
| 975 | Layout 391 | [`feature-sections-grid-cards/section_layout391.jpg`](/reference-images/feature-sections-grid-cards/section_layout391.jpg) | B | [open](https://www.relume.ai/preview?cid=feature-sections-grid-cards/section_layout391&context=react) |
| 976 | Layout 392 | [`feature-sections-grid-cards/section_layout392.jpg`](/reference-images/feature-sections-grid-cards/section_layout392.jpg) | B | [open](https://www.relume.ai/preview?cid=feature-sections-grid-cards/section_layout392&context=react) |
| 977 | Layout 393 | [`feature-sections-grid-cards/section_layout393.jpg`](/reference-images/feature-sections-grid-cards/section_layout393.jpg) | B | [open](https://www.relume.ai/preview?cid=feature-sections-grid-cards/section_layout393&context=react) |
| 978 | Layout 394 | [`feature-sections-grid-cards/section_layout394.jpg`](/reference-images/feature-sections-grid-cards/section_layout394.jpg) | B | [open](https://www.relume.ai/preview?cid=feature-sections-grid-cards/section_layout394&context=react) |
| 979 | Layout 395 | [`feature-sections-grid-cards/section_layout395.jpg`](/reference-images/feature-sections-grid-cards/section_layout395.jpg) | B | [open](https://www.relume.ai/preview?cid=feature-sections-grid-cards/section_layout395&context=react) |
| 980 | Layout 396 | [`feature-sections-grid-cards/section_layout396.jpg`](/reference-images/feature-sections-grid-cards/section_layout396.jpg) | B | [open](https://www.relume.ai/preview?cid=feature-sections-grid-cards/section_layout396&context=react) |
| 981 | Layout 397 | [`feature-sections-grid-cards/section_layout397.jpg`](/reference-images/feature-sections-grid-cards/section_layout397.jpg) | B | [open](https://www.relume.ai/preview?cid=feature-sections-grid-cards/section_layout397&context=react) |
| 982 | Layout 398 | [`feature-sections-grid-cards/section_layout398.jpg`](/reference-images/feature-sections-grid-cards/section_layout398.jpg) | B | [open](https://www.relume.ai/preview?cid=feature-sections-grid-cards/section_layout398&context=react) |
| 983 | Layout 399 | [`feature-sections-grid-cards/section_layout399.jpg`](/reference-images/feature-sections-grid-cards/section_layout399.jpg) | B | [open](https://www.relume.ai/preview?cid=feature-sections-grid-cards/section_layout399&context=react) |
| 984 | Layout 400 | [`feature-sections-grid-cards/section_layout400.jpg`](/reference-images/feature-sections-grid-cards/section_layout400.jpg) | B | [open](https://www.relume.ai/preview?cid=feature-sections-grid-cards/section_layout400&context=react) |
| 985 | Layout 401 | [`feature-sections-grid-cards/section_layout401.jpg`](/reference-images/feature-sections-grid-cards/section_layout401.jpg) | B | [open](https://www.relume.ai/preview?cid=feature-sections-grid-cards/section_layout401&context=react) |
| 1103 | Layout 519 | [`feature-sections-grid-cards/section_layout519.jpg`](/reference-images/feature-sections-grid-cards/section_layout519.jpg) | B | [open](https://www.relume.ai/preview?cid=feature-sections-grid-cards/section_layout519&context=react) |
| 1104 | Layout 520 | [`feature-sections-grid-cards/section_layout520.jpg`](/reference-images/feature-sections-grid-cards/section_layout520.jpg) | B | [open](https://www.relume.ai/preview?cid=feature-sections-grid-cards/section_layout520&context=react) |
| 1105 | Layout 521 | [`feature-sections-grid-cards/section_layout521.jpg`](/reference-images/feature-sections-grid-cards/section_layout521.jpg) | B | [open](https://www.relume.ai/preview?cid=feature-sections-grid-cards/section_layout521&context=react) |
| 1106 | Layout 522 | [`feature-sections-grid-cards/section_layout522.jpg`](/reference-images/feature-sections-grid-cards/section_layout522.jpg) | B | [open](https://www.relume.ai/preview?cid=feature-sections-grid-cards/section_layout522&context=react) |
| 1107 | Layout 523 | [`feature-sections-grid-cards/section_layout523.jpg`](/reference-images/feature-sections-grid-cards/section_layout523.jpg) | B | [open](https://www.relume.ai/preview?cid=feature-sections-grid-cards/section_layout523&context=react) |
| 1108 | Layout 524 | [`feature-sections-grid-cards/section_layout524.jpg`](/reference-images/feature-sections-grid-cards/section_layout524.jpg) | B | [open](https://www.relume.ai/preview?cid=feature-sections-grid-cards/section_layout524&context=react) |
| 1109 | Layout 525 | [`feature-sections-grid-cards/section_layout525.jpg`](/reference-images/feature-sections-grid-cards/section_layout525.jpg) | B | [open](https://www.relume.ai/preview?cid=feature-sections-grid-cards/section_layout525&context=react) |
| 1110 | Layout 526 | [`feature-sections-grid-cards/section_layout526.jpg`](/reference-images/feature-sections-grid-cards/section_layout526.jpg) | B | [open](https://www.relume.ai/preview?cid=feature-sections-grid-cards/section_layout526&context=react) |
| 1111 | Layout 527 | [`feature-sections-grid-cards/section_layout527.jpg`](/reference-images/feature-sections-grid-cards/section_layout527.jpg) | B | [open](https://www.relume.ai/preview?cid=feature-sections-grid-cards/section_layout527&context=react) |

## feature-sections-off-grid

Predicted behavior: Asymmetric/off-grid composition: overlapping cards, irregular grid, decorative offsets.

| # | Component | Local image | Flags | Relume preview |
|---|-----------|-------------|-------|----------------|
| 1010 | Layout 426 | [`feature-sections-off-grid/section_layout426.jpg`](/reference-images/feature-sections-off-grid/section_layout426.jpg) | O | [open](https://www.relume.ai/preview?cid=feature-sections-off-grid/section_layout426&context=react) |
| 1011 | Layout 427 | [`feature-sections-off-grid/section_layout427.jpg`](/reference-images/feature-sections-off-grid/section_layout427.jpg) | O | [open](https://www.relume.ai/preview?cid=feature-sections-off-grid/section_layout427&context=react) |
| 1012 | Layout 428 | [`feature-sections-off-grid/section_layout428.jpg`](/reference-images/feature-sections-off-grid/section_layout428.jpg) | O | [open](https://www.relume.ai/preview?cid=feature-sections-off-grid/section_layout428&context=react) |
| 1013 | Layout 429 | [`feature-sections-off-grid/section_layout429.jpg`](/reference-images/feature-sections-off-grid/section_layout429.jpg) | O | [open](https://www.relume.ai/preview?cid=feature-sections-off-grid/section_layout429&context=react) |
| 1014 | Layout 430 | [`feature-sections-off-grid/section_layout430.jpg`](/reference-images/feature-sections-off-grid/section_layout430.jpg) | O | [open](https://www.relume.ai/preview?cid=feature-sections-off-grid/section_layout430&context=react) |
| 1015 | Layout 431 | [`feature-sections-off-grid/section_layout431.jpg`](/reference-images/feature-sections-off-grid/section_layout431.jpg) | O | [open](https://www.relume.ai/preview?cid=feature-sections-off-grid/section_layout431&context=react) |
| 1016 | Layout 432 | [`feature-sections-off-grid/section_layout432.jpg`](/reference-images/feature-sections-off-grid/section_layout432.jpg) | O | [open](https://www.relume.ai/preview?cid=feature-sections-off-grid/section_layout432&context=react) |
| 1017 | Layout 433 | [`feature-sections-off-grid/section_layout433.jpg`](/reference-images/feature-sections-off-grid/section_layout433.jpg) | O | [open](https://www.relume.ai/preview?cid=feature-sections-off-grid/section_layout433&context=react) |
| 1018 | Layout 434 | [`feature-sections-off-grid/section_layout434.jpg`](/reference-images/feature-sections-off-grid/section_layout434.jpg) | O | [open](https://www.relume.ai/preview?cid=feature-sections-off-grid/section_layout434&context=react) |
| 1019 | Layout 435 | [`feature-sections-off-grid/section_layout435.jpg`](/reference-images/feature-sections-off-grid/section_layout435.jpg) | O | [open](https://www.relume.ai/preview?cid=feature-sections-off-grid/section_layout435&context=react) |
| 1020 | Layout 436 | [`feature-sections-off-grid/section_layout436.jpg`](/reference-images/feature-sections-off-grid/section_layout436.jpg) | O | [open](https://www.relume.ai/preview?cid=feature-sections-off-grid/section_layout436&context=react) |
| 1021 | Layout 437 | [`feature-sections-off-grid/section_layout437.jpg`](/reference-images/feature-sections-off-grid/section_layout437.jpg) | O | [open](https://www.relume.ai/preview?cid=feature-sections-off-grid/section_layout437&context=react) |
| 1022 | Layout 438 | [`feature-sections-off-grid/section_layout438.jpg`](/reference-images/feature-sections-off-grid/section_layout438.jpg) | O | [open](https://www.relume.ai/preview?cid=feature-sections-off-grid/section_layout438&context=react) |
| 1023 | Layout 439 | [`feature-sections-off-grid/section_layout439.jpg`](/reference-images/feature-sections-off-grid/section_layout439.jpg) | O | [open](https://www.relume.ai/preview?cid=feature-sections-off-grid/section_layout439&context=react) |
| 1024 | Layout 440 | [`feature-sections-off-grid/section_layout440.jpg`](/reference-images/feature-sections-off-grid/section_layout440.jpg) | O | [open](https://www.relume.ai/preview?cid=feature-sections-off-grid/section_layout440&context=react) |
| 1025 | Layout 441 | [`feature-sections-off-grid/section_layout441.jpg`](/reference-images/feature-sections-off-grid/section_layout441.jpg) | O | [open](https://www.relume.ai/preview?cid=feature-sections-off-grid/section_layout441&context=react) |
| 1026 | Layout 442 | [`feature-sections-off-grid/section_layout442.jpg`](/reference-images/feature-sections-off-grid/section_layout442.jpg) | O | [open](https://www.relume.ai/preview?cid=feature-sections-off-grid/section_layout442&context=react) |
| 1027 | Layout 443 | [`feature-sections-off-grid/section_layout443.jpg`](/reference-images/feature-sections-off-grid/section_layout443.jpg) | O | [open](https://www.relume.ai/preview?cid=feature-sections-off-grid/section_layout443&context=react) |
| 1028 | Layout 444 | [`feature-sections-off-grid/section_layout444.jpg`](/reference-images/feature-sections-off-grid/section_layout444.jpg) | O | [open](https://www.relume.ai/preview?cid=feature-sections-off-grid/section_layout444&context=react) |
| 1029 | Layout 445 | [`feature-sections-off-grid/section_layout445.jpg`](/reference-images/feature-sections-off-grid/section_layout445.jpg) | O | [open](https://www.relume.ai/preview?cid=feature-sections-off-grid/section_layout445&context=react) |
| 1030 | Layout 446 | [`feature-sections-off-grid/section_layout446.jpg`](/reference-images/feature-sections-off-grid/section_layout446.jpg) | O | [open](https://www.relume.ai/preview?cid=feature-sections-off-grid/section_layout446&context=react) |
| 1031 | Layout 447 | [`feature-sections-off-grid/section_layout447.jpg`](/reference-images/feature-sections-off-grid/section_layout447.jpg) | O | [open](https://www.relume.ai/preview?cid=feature-sections-off-grid/section_layout447&context=react) |
| 1032 | Layout 448 | [`feature-sections-off-grid/section_layout448.jpg`](/reference-images/feature-sections-off-grid/section_layout448.jpg) | O | [open](https://www.relume.ai/preview?cid=feature-sections-off-grid/section_layout448&context=react) |
| 1033 | Layout 449 | [`feature-sections-off-grid/section_layout449.jpg`](/reference-images/feature-sections-off-grid/section_layout449.jpg) | O | [open](https://www.relume.ai/preview?cid=feature-sections-off-grid/section_layout449&context=react) |
| 1034 | Layout 450 | [`feature-sections-off-grid/section_layout450.jpg`](/reference-images/feature-sections-off-grid/section_layout450.jpg) | O | [open](https://www.relume.ai/preview?cid=feature-sections-off-grid/section_layout450&context=react) |
| 1035 | Layout 451 | [`feature-sections-off-grid/section_layout451.jpg`](/reference-images/feature-sections-off-grid/section_layout451.jpg) | O | [open](https://www.relume.ai/preview?cid=feature-sections-off-grid/section_layout451&context=react) |
| 1036 | Layout 452 | [`feature-sections-off-grid/section_layout452.jpg`](/reference-images/feature-sections-off-grid/section_layout452.jpg) | O | [open](https://www.relume.ai/preview?cid=feature-sections-off-grid/section_layout452&context=react) |
| 1037 | Layout 453 | [`feature-sections-off-grid/section_layout453.jpg`](/reference-images/feature-sections-off-grid/section_layout453.jpg) | O | [open](https://www.relume.ai/preview?cid=feature-sections-off-grid/section_layout453&context=react) |
| 1038 | Layout 454 | [`feature-sections-off-grid/section_layout454.jpg`](/reference-images/feature-sections-off-grid/section_layout454.jpg) | O | [open](https://www.relume.ai/preview?cid=feature-sections-off-grid/section_layout454&context=react) |
| 1039 | Layout 455 | [`feature-sections-off-grid/section_layout455.jpg`](/reference-images/feature-sections-off-grid/section_layout455.jpg) | O | [open](https://www.relume.ai/preview?cid=feature-sections-off-grid/section_layout455&context=react) |
| 1040 | Layout 456 | [`feature-sections-off-grid/section_layout456.jpg`](/reference-images/feature-sections-off-grid/section_layout456.jpg) | O | [open](https://www.relume.ai/preview?cid=feature-sections-off-grid/section_layout456&context=react) |
| 1041 | Layout 457 | [`feature-sections-off-grid/section_layout457.jpg`](/reference-images/feature-sections-off-grid/section_layout457.jpg) | O | [open](https://www.relume.ai/preview?cid=feature-sections-off-grid/section_layout457&context=react) |
| 1042 | Layout 458 | [`feature-sections-off-grid/section_layout458.jpg`](/reference-images/feature-sections-off-grid/section_layout458.jpg) | O | [open](https://www.relume.ai/preview?cid=feature-sections-off-grid/section_layout458&context=react) |
| 1043 | Layout 459 | [`feature-sections-off-grid/section_layout459.jpg`](/reference-images/feature-sections-off-grid/section_layout459.jpg) | O | [open](https://www.relume.ai/preview?cid=feature-sections-off-grid/section_layout459&context=react) |
| 1044 | Layout 460 | [`feature-sections-off-grid/section_layout460.jpg`](/reference-images/feature-sections-off-grid/section_layout460.jpg) | O | [open](https://www.relume.ai/preview?cid=feature-sections-off-grid/section_layout460&context=react) |
| 1045 | Layout 461 | [`feature-sections-off-grid/section_layout461.jpg`](/reference-images/feature-sections-off-grid/section_layout461.jpg) | O | [open](https://www.relume.ai/preview?cid=feature-sections-off-grid/section_layout461&context=react) |
| 1046 | Layout 462 | [`feature-sections-off-grid/section_layout462.jpg`](/reference-images/feature-sections-off-grid/section_layout462.jpg) | O | [open](https://www.relume.ai/preview?cid=feature-sections-off-grid/section_layout462&context=react) |
| 1047 | Layout 463 | [`feature-sections-off-grid/section_layout463.jpg`](/reference-images/feature-sections-off-grid/section_layout463.jpg) | O | [open](https://www.relume.ai/preview?cid=feature-sections-off-grid/section_layout463&context=react) |
| 1048 | Layout 464 | [`feature-sections-off-grid/section_layout464.jpg`](/reference-images/feature-sections-off-grid/section_layout464.jpg) | O | [open](https://www.relume.ai/preview?cid=feature-sections-off-grid/section_layout464&context=react) |
| 1049 | Layout 465 | [`feature-sections-off-grid/section_layout465.jpg`](/reference-images/feature-sections-off-grid/section_layout465.jpg) | O | [open](https://www.relume.ai/preview?cid=feature-sections-off-grid/section_layout465&context=react) |
| 1050 | Layout 466 | [`feature-sections-off-grid/section_layout466.jpg`](/reference-images/feature-sections-off-grid/section_layout466.jpg) | O | [open](https://www.relume.ai/preview?cid=feature-sections-off-grid/section_layout466&context=react) |
| 1051 | Layout 467 | [`feature-sections-off-grid/section_layout467.jpg`](/reference-images/feature-sections-off-grid/section_layout467.jpg) | O | [open](https://www.relume.ai/preview?cid=feature-sections-off-grid/section_layout467&context=react) |
| 1052 | Layout 468 | [`feature-sections-off-grid/section_layout468.jpg`](/reference-images/feature-sections-off-grid/section_layout468.jpg) | O | [open](https://www.relume.ai/preview?cid=feature-sections-off-grid/section_layout468&context=react) |

## feature-sections-overlapping-images

Predicted behavior: Feature with layered/overlapping image cards (parallax-ish offsets).

| # | Component | Local image | Flags | Relume preview |
|---|-----------|-------------|-------|----------------|
| 1053 | Layout 469 | [`feature-sections-overlapping-images/section_layout469.jpg`](/reference-images/feature-sections-overlapping-images/section_layout469.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-overlapping-images/section_layout469&context=react) |
| 1054 | Layout 470 | [`feature-sections-overlapping-images/section_layout470.jpg`](/reference-images/feature-sections-overlapping-images/section_layout470.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-overlapping-images/section_layout470&context=react) |
| 1055 | Layout 471 | [`feature-sections-overlapping-images/section_layout471.jpg`](/reference-images/feature-sections-overlapping-images/section_layout471.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-overlapping-images/section_layout471&context=react) |
| 1056 | Layout 472 | [`feature-sections-overlapping-images/section_layout472.jpg`](/reference-images/feature-sections-overlapping-images/section_layout472.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-overlapping-images/section_layout472&context=react) |
| 1057 | Layout 473 | [`feature-sections-overlapping-images/section_layout473.jpg`](/reference-images/feature-sections-overlapping-images/section_layout473.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-overlapping-images/section_layout473&context=react) |
| 1058 | Layout 474 | [`feature-sections-overlapping-images/section_layout474.jpg`](/reference-images/feature-sections-overlapping-images/section_layout474.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-overlapping-images/section_layout474&context=react) |
| 1059 | Layout 475 | [`feature-sections-overlapping-images/section_layout475.jpg`](/reference-images/feature-sections-overlapping-images/section_layout475.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-overlapping-images/section_layout475&context=react) |
| 1060 | Layout 476 | [`feature-sections-overlapping-images/section_layout476.jpg`](/reference-images/feature-sections-overlapping-images/section_layout476.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-overlapping-images/section_layout476&context=react) |
| 1061 | Layout 477 | [`feature-sections-overlapping-images/section_layout477.jpg`](/reference-images/feature-sections-overlapping-images/section_layout477.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-overlapping-images/section_layout477&context=react) |
| 1062 | Layout 478 | [`feature-sections-overlapping-images/section_layout478.jpg`](/reference-images/feature-sections-overlapping-images/section_layout478.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-overlapping-images/section_layout478&context=react) |
| 1063 | Layout 479 | [`feature-sections-overlapping-images/section_layout479.jpg`](/reference-images/feature-sections-overlapping-images/section_layout479.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-overlapping-images/section_layout479&context=react) |
| 1064 | Layout 480 | [`feature-sections-overlapping-images/section_layout480.jpg`](/reference-images/feature-sections-overlapping-images/section_layout480.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-overlapping-images/section_layout480&context=react) |
| 1065 | Layout 481 | [`feature-sections-overlapping-images/section_layout481.jpg`](/reference-images/feature-sections-overlapping-images/section_layout481.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-overlapping-images/section_layout481&context=react) |
| 1066 | Layout 482 | [`feature-sections-overlapping-images/section_layout482.jpg`](/reference-images/feature-sections-overlapping-images/section_layout482.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-overlapping-images/section_layout482&context=react) |
| 1067 | Layout 483 | [`feature-sections-overlapping-images/section_layout483.jpg`](/reference-images/feature-sections-overlapping-images/section_layout483.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-overlapping-images/section_layout483&context=react) |

## feature-sections-tabs

Predicted behavior: Feature showcase with tabs: tab buttons switch between feature panels (daisyUI tabs).

| # | Component | Local image | Flags | Relume preview |
|---|-----------|-------------|-------|----------------|
| 1073 | Layout 489 | [`feature-sections-tabs/section_layout489.jpg`](/reference-images/feature-sections-tabs/section_layout489.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-tabs/section_layout489&context=react) |
| 1074 | Layout 490 | [`feature-sections-tabs/section_layout490.jpg`](/reference-images/feature-sections-tabs/section_layout490.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-tabs/section_layout490&context=react) |
| 1075 | Layout 491 | [`feature-sections-tabs/section_layout491.jpg`](/reference-images/feature-sections-tabs/section_layout491.jpg) | IU | [open](https://www.relume.ai/preview?cid=feature-sections-tabs/section_layout491&context=react) |
| 1076 | Layout 492 | [`feature-sections-tabs/section_layout492.jpg`](/reference-images/feature-sections-tabs/section_layout492.jpg) | IU | [open](https://www.relume.ai/preview?cid=feature-sections-tabs/section_layout492&context=react) |
| 1077 | Layout 493 | [`feature-sections-tabs/section_layout493.jpg`](/reference-images/feature-sections-tabs/section_layout493.jpg) | IU | [open](https://www.relume.ai/preview?cid=feature-sections-tabs/section_layout493&context=react) |
| 1078 | Layout 494 | [`feature-sections-tabs/section_layout494.jpg`](/reference-images/feature-sections-tabs/section_layout494.jpg) | IU | [open](https://www.relume.ai/preview?cid=feature-sections-tabs/section_layout494&context=react) |
| 1079 | Layout 495 | [`feature-sections-tabs/section_layout495.jpg`](/reference-images/feature-sections-tabs/section_layout495.jpg) | IU | [open](https://www.relume.ai/preview?cid=feature-sections-tabs/section_layout495&context=react) |
| 1080 | Layout 496 | [`feature-sections-tabs/section_layout496.jpg`](/reference-images/feature-sections-tabs/section_layout496.jpg) | IU | [open](https://www.relume.ai/preview?cid=feature-sections-tabs/section_layout496&context=react) |
| 1081 | Layout 497 | [`feature-sections-tabs/section_layout497.jpg`](/reference-images/feature-sections-tabs/section_layout497.jpg) | IU | [open](https://www.relume.ai/preview?cid=feature-sections-tabs/section_layout497&context=react) |
| 1082 | Layout 498 | [`feature-sections-tabs/section_layout498.jpg`](/reference-images/feature-sections-tabs/section_layout498.jpg) | IU | [open](https://www.relume.ai/preview?cid=feature-sections-tabs/section_layout498&context=react) |
| 1083 | Layout 499 | [`feature-sections-tabs/section_layout499.jpg`](/reference-images/feature-sections-tabs/section_layout499.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-tabs/section_layout499&context=react) |
| 1084 | Layout 500 | [`feature-sections-tabs/section_layout500.jpg`](/reference-images/feature-sections-tabs/section_layout500.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-tabs/section_layout500&context=react) |
| 1085 | Layout 501 | [`feature-sections-tabs/section_layout501.jpg`](/reference-images/feature-sections-tabs/section_layout501.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-tabs/section_layout501&context=react) |
| 1086 | Layout 502 | [`feature-sections-tabs/section_layout502.jpg`](/reference-images/feature-sections-tabs/section_layout502.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-tabs/section_layout502&context=react) |
| 1087 | Layout 503 | [`feature-sections-tabs/section_layout503.jpg`](/reference-images/feature-sections-tabs/section_layout503.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-tabs/section_layout503&context=react) |
| 1088 | Layout 504 | [`feature-sections-tabs/section_layout504.jpg`](/reference-images/feature-sections-tabs/section_layout504.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-tabs/section_layout504&context=react) |
| 1089 | Layout 505 | [`feature-sections-tabs/section_layout505.jpg`](/reference-images/feature-sections-tabs/section_layout505.jpg) | IU | [open](https://www.relume.ai/preview?cid=feature-sections-tabs/section_layout505&context=react) |
| 1090 | Layout 506 | [`feature-sections-tabs/section_layout506.jpg`](/reference-images/feature-sections-tabs/section_layout506.jpg) | IU | [open](https://www.relume.ai/preview?cid=feature-sections-tabs/section_layout506&context=react) |
| 1091 | Layout 507 | [`feature-sections-tabs/section_layout507.jpg`](/reference-images/feature-sections-tabs/section_layout507.jpg) | U | [open](https://www.relume.ai/preview?cid=feature-sections-tabs/section_layout507&context=react) |
| 1092 | Layout 508 | [`feature-sections-tabs/section_layout508.jpg`](/reference-images/feature-sections-tabs/section_layout508.jpg) | U | [open](https://www.relume.ai/preview?cid=feature-sections-tabs/section_layout508&context=react) |
| 1093 | Layout 509 | [`feature-sections-tabs/section_layout509.jpg`](/reference-images/feature-sections-tabs/section_layout509.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-tabs/section_layout509&context=react) |
| 1094 | Layout 510 | [`feature-sections-tabs/section_layout510.jpg`](/reference-images/feature-sections-tabs/section_layout510.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-tabs/section_layout510&context=react) |
| 1095 | Layout 511 | [`feature-sections-tabs/section_layout511.jpg`](/reference-images/feature-sections-tabs/section_layout511.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-tabs/section_layout511&context=react) |
| 1096 | Layout 512 | [`feature-sections-tabs/section_layout512.jpg`](/reference-images/feature-sections-tabs/section_layout512.jpg) | — | [open](https://www.relume.ai/preview?cid=feature-sections-tabs/section_layout512&context=react) |

## links-pages

Predicted behavior: Link-directory page: grouped anchor lists in columns (resources, legal, company).

| # | Component | Local image | Flags | Relume preview |
|---|-----------|-------------|-------|----------------|
| 1112 | Links 1 | [`links-pages/section_links1.jpg`](/reference-images/links-pages/section_links1.jpg) | — | [open](https://www.relume.ai/preview?cid=links-pages/section_links1&context=react) |
| 1113 | Links 2 | [`links-pages/section_links2.jpg`](/reference-images/links-pages/section_links2.jpg) | — | [open](https://www.relume.ai/preview?cid=links-pages/section_links2&context=react) |
| 1114 | Links 3 | [`links-pages/section_links3.jpg`](/reference-images/links-pages/section_links3.jpg) | — | [open](https://www.relume.ai/preview?cid=links-pages/section_links3&context=react) |
| 1115 | Links 4 | [`links-pages/section_links4.jpg`](/reference-images/links-pages/section_links4.jpg) | — | [open](https://www.relume.ai/preview?cid=links-pages/section_links4&context=react) |
| 1116 | Links 5 | [`links-pages/section_links5.jpg`](/reference-images/links-pages/section_links5.jpg) | — | [open](https://www.relume.ai/preview?cid=links-pages/section_links5&context=react) |
| 1117 | Links 6 | [`links-pages/section_links6.jpg`](/reference-images/links-pages/section_links6.jpg) | — | [open](https://www.relume.ai/preview?cid=links-pages/section_links6&context=react) |
| 1118 | Links 7 | [`links-pages/section_links7.jpg`](/reference-images/links-pages/section_links7.jpg) | — | [open](https://www.relume.ai/preview?cid=links-pages/section_links7&context=react) |
| 1119 | Links 8 | [`links-pages/section_links8.jpg`](/reference-images/links-pages/section_links8.jpg) | — | [open](https://www.relume.ai/preview?cid=links-pages/section_links8&context=react) |
| 1120 | Links 9 | [`links-pages/section_links9.jpg`](/reference-images/links-pages/section_links9.jpg) | — | [open](https://www.relume.ai/preview?cid=links-pages/section_links9&context=react) |
| 1121 | Links 10 | [`links-pages/section_links10.jpg`](/reference-images/links-pages/section_links10.jpg) | — | [open](https://www.relume.ai/preview?cid=links-pages/section_links10&context=react) |
| 1122 | Links 11 | [`links-pages/section_links11.jpg`](/reference-images/links-pages/section_links11.jpg) | — | [open](https://www.relume.ai/preview?cid=links-pages/section_links11&context=react) |
| 1123 | Links 12 | [`links-pages/section_links12.jpg`](/reference-images/links-pages/section_links12.jpg) | — | [open](https://www.relume.ai/preview?cid=links-pages/section_links12&context=react) |
| 1124 | Links 13 | [`links-pages/section_links13.jpg`](/reference-images/links-pages/section_links13.jpg) | — | [open](https://www.relume.ai/preview?cid=links-pages/section_links13&context=react) |
| 1125 | Links 14 | [`links-pages/section_links14.jpg`](/reference-images/links-pages/section_links14.jpg) | — | [open](https://www.relume.ai/preview?cid=links-pages/section_links14&context=react) |
| 1126 | Links 15 | [`links-pages/section_links15.jpg`](/reference-images/links-pages/section_links15.jpg) | — | [open](https://www.relume.ai/preview?cid=links-pages/section_links15&context=react) |
| 1127 | Links 16 | [`links-pages/section_links16.jpg`](/reference-images/links-pages/section_links16.jpg) | — | [open](https://www.relume.ai/preview?cid=links-pages/section_links16&context=react) |

## loaders

Predicted behavior: Loading indicators: spinners/skeletons/progress in various sizes.

| # | Component | Local image | Flags | Relume preview |
|---|-----------|-------------|-------|----------------|
| 1128 | Loader 1 | [`loaders/loader1.jpg`](/reference-images/loaders/loader1.jpg) | I | [open](https://www.relume.ai/preview?cid=loaders/loader1&context=react) |
| 1129 | Loader 2 | [`loaders/loader2.jpg`](/reference-images/loaders/loader2.jpg) | I | [open](https://www.relume.ai/preview?cid=loaders/loader2&context=react) |
| 1130 | Loader 3 | [`loaders/loader3.jpg`](/reference-images/loaders/loader3.jpg) | I | [open](https://www.relume.ai/preview?cid=loaders/loader3&context=react) |
| 1131 | Loader 4 | [`loaders/loader4.jpg`](/reference-images/loaders/loader4.jpg) | I | [open](https://www.relume.ai/preview?cid=loaders/loader4&context=react) |
| 1132 | Loader 5 | [`loaders/loader5.jpg`](/reference-images/loaders/loader5.jpg) | I | [open](https://www.relume.ai/preview?cid=loaders/loader5&context=react) |

## signup-login-pages

Predicted behavior: Auth pages: centered form card, social logins, "no account?" switch link; optional side image.

| # | Component | Local image | Flags | Relume preview |
|---|-----------|-------------|-------|----------------|
| 1133 | Log In 1 | [`signup-login-pages/section_login1.jpg`](/reference-images/signup-login-pages/section_login1.jpg) | — | [open](https://www.relume.ai/preview?cid=signup-login-pages/section_login1&context=react) |
| 1134 | Log In 2 | [`signup-login-pages/section_login2.jpg`](/reference-images/signup-login-pages/section_login2.jpg) | — | [open](https://www.relume.ai/preview?cid=signup-login-pages/section_login2&context=react) |
| 1135 | Log In 3 | [`signup-login-pages/section_login3.jpg`](/reference-images/signup-login-pages/section_login3.jpg) | — | [open](https://www.relume.ai/preview?cid=signup-login-pages/section_login3&context=react) |
| 1136 | Log In 4 | [`signup-login-pages/section_login4.jpg`](/reference-images/signup-login-pages/section_login4.jpg) | — | [open](https://www.relume.ai/preview?cid=signup-login-pages/section_login4&context=react) |
| 1137 | Log In 5 | [`signup-login-pages/section_login5.jpg`](/reference-images/signup-login-pages/section_login5.jpg) | — | [open](https://www.relume.ai/preview?cid=signup-login-pages/section_login5&context=react) |
| 1138 | Log In 6 | [`signup-login-pages/section_login6.jpg`](/reference-images/signup-login-pages/section_login6.jpg) | — | [open](https://www.relume.ai/preview?cid=signup-login-pages/section_login6&context=react) |
| 1139 | Log In 7 | [`signup-login-pages/section_login7.jpg`](/reference-images/signup-login-pages/section_login7.jpg) | — | [open](https://www.relume.ai/preview?cid=signup-login-pages/section_login7&context=react) |
| 1140 | Log In 8 | [`signup-login-pages/section_login8.jpg`](/reference-images/signup-login-pages/section_login8.jpg) | — | [open](https://www.relume.ai/preview?cid=signup-login-pages/section_login8&context=react) |
| 1335 | Sign Up 1 | [`signup-login-pages/section_signup1.jpg`](/reference-images/signup-login-pages/section_signup1.jpg) | — | [open](https://www.relume.ai/preview?cid=signup-login-pages/section_signup1&context=react) |
| 1336 | Sign Up 2 | [`signup-login-pages/section_signup2.jpg`](/reference-images/signup-login-pages/section_signup2.jpg) | — | [open](https://www.relume.ai/preview?cid=signup-login-pages/section_signup2&context=react) |
| 1337 | Sign Up 3 | [`signup-login-pages/section_signup3.jpg`](/reference-images/signup-login-pages/section_signup3.jpg) | — | [open](https://www.relume.ai/preview?cid=signup-login-pages/section_signup3&context=react) |
| 1338 | Sign Up 4 | [`signup-login-pages/section_signup4.jpg`](/reference-images/signup-login-pages/section_signup4.jpg) | — | [open](https://www.relume.ai/preview?cid=signup-login-pages/section_signup4&context=react) |
| 1339 | Sign Up 5 | [`signup-login-pages/section_signup5.jpg`](/reference-images/signup-login-pages/section_signup5.jpg) | — | [open](https://www.relume.ai/preview?cid=signup-login-pages/section_signup5&context=react) |
| 1340 | Sign Up 6 | [`signup-login-pages/section_signup6.jpg`](/reference-images/signup-login-pages/section_signup6.jpg) | — | [open](https://www.relume.ai/preview?cid=signup-login-pages/section_signup6&context=react) |
| 1341 | Sign Up 7 | [`signup-login-pages/section_signup7.jpg`](/reference-images/signup-login-pages/section_signup7.jpg) | — | [open](https://www.relume.ai/preview?cid=signup-login-pages/section_signup7&context=react) |
| 1342 | Sign Up 8 | [`signup-login-pages/section_signup8.jpg`](/reference-images/signup-login-pages/section_signup8.jpg) | — | [open](https://www.relume.ai/preview?cid=signup-login-pages/section_signup8&context=react) |
| 1343 | Sign Up 9 | [`signup-login-pages/section_signup9.jpg`](/reference-images/signup-login-pages/section_signup9.jpg) | — | [open](https://www.relume.ai/preview?cid=signup-login-pages/section_signup9&context=react) |

## sign-up-log-in-modals

Predicted behavior: Auth modal: login/signup tabs, inputs, social buttons; overlay + backdrop dismiss.

| # | Component | Local image | Flags | Relume preview |
|---|-----------|-------------|-------|----------------|
| 1141 | Log in Modal 1 | [`sign-up-log-in-modals/section_login-modal1.jpg`](/reference-images/sign-up-log-in-modals/section_login-modal1.jpg) | I | [open](https://www.relume.ai/preview?cid=sign-up-log-in-modals/section_login-modal1&context=react) |
| 1142 | Log in Modal 2 | [`sign-up-log-in-modals/section_login-modal2.jpg`](/reference-images/sign-up-log-in-modals/section_login-modal2.jpg) | I | [open](https://www.relume.ai/preview?cid=sign-up-log-in-modals/section_login-modal2&context=react) |
| 1344 | Sign Up Modal 1 | [`sign-up-log-in-modals/section_signup-modal1.jpg`](/reference-images/sign-up-log-in-modals/section_signup-modal1.jpg) | I | [open](https://www.relume.ai/preview?cid=sign-up-log-in-modals/section_signup-modal1&context=react) |
| 1345 | Sign Up Modal 2 | [`sign-up-log-in-modals/section_signup-modal2.jpg`](/reference-images/sign-up-log-in-modals/section_signup-modal2.jpg) | I | [open](https://www.relume.ai/preview?cid=sign-up-log-in-modals/section_signup-modal2&context=react) |
| 1346 | Sign Up Modal 3 | [`sign-up-log-in-modals/section_signup-modal3.jpg`](/reference-images/sign-up-log-in-modals/section_signup-modal3.jpg) | I | [open](https://www.relume.ai/preview?cid=sign-up-log-in-modals/section_signup-modal3&context=react) |

## logo-sections

Predicted behavior: Logo wall / "trusted by": grayscale logo grid or auto-scrolling marquee (CSS animation).

| # | Component | Local image | Flags | Relume preview |
|---|-----------|-------------|-------|----------------|
| 1143 | Logo 1 | [`logo-sections/section_logo1.jpg`](/reference-images/logo-sections/section_logo1.jpg) | — | [open](https://www.relume.ai/preview?cid=logo-sections/section_logo1&context=react) |
| 1144 | Logo 2 | [`logo-sections/section_logo2.jpg`](/reference-images/logo-sections/section_logo2.jpg) | — | [open](https://www.relume.ai/preview?cid=logo-sections/section_logo2&context=react) |
| 1145 | Logo 3 | [`logo-sections/section_logo3.jpg`](/reference-images/logo-sections/section_logo3.jpg) | IU | [open](https://www.relume.ai/preview?cid=logo-sections/section_logo3&context=react) |
| 1146 | Logo 4 | [`logo-sections/section_logo4.jpg`](/reference-images/logo-sections/section_logo4.jpg) | — | [open](https://www.relume.ai/preview?cid=logo-sections/section_logo4&context=react) |
| 1147 | Logo 5 | [`logo-sections/section_logo5.jpg`](/reference-images/logo-sections/section_logo5.jpg) | — | [open](https://www.relume.ai/preview?cid=logo-sections/section_logo5&context=react) |
| 1148 | Logo 6 | [`logo-sections/section_logo6.jpg`](/reference-images/logo-sections/section_logo6.jpg) | — | [open](https://www.relume.ai/preview?cid=logo-sections/section_logo6&context=react) |

## multi-step-forms

Predicted behavior: Multi-step form: stepper + one step visible, next/back buttons, per-step validation, final submit (small vanilla JS state machine).

| # | Component | Local image | Flags | Relume preview |
|---|-----------|-------------|-------|----------------|
| 1149 | Multi Form 1 | [`multi-step-forms/section_multi-form1.jpg`](/reference-images/multi-step-forms/section_multi-form1.jpg) | — | [open](https://www.relume.ai/preview?cid=multi-step-forms/section_multi-form1&context=react) |
| 1150 | Multi Form 2 | [`multi-step-forms/section_multi-form2.jpg`](/reference-images/multi-step-forms/section_multi-form2.jpg) | — | [open](https://www.relume.ai/preview?cid=multi-step-forms/section_multi-form2&context=react) |
| 1151 | Multi Form 3 | [`multi-step-forms/section_multi-form3.jpg`](/reference-images/multi-step-forms/section_multi-form3.jpg) | — | [open](https://www.relume.ai/preview?cid=multi-step-forms/section_multi-form3&context=react) |
| 1152 | Multi Form 4 | [`multi-step-forms/section_multi-form4.jpg`](/reference-images/multi-step-forms/section_multi-form4.jpg) | — | [open](https://www.relume.ai/preview?cid=multi-step-forms/section_multi-form4&context=react) |
| 1153 | Multi Form 5 | [`multi-step-forms/section_multi-form5.jpg`](/reference-images/multi-step-forms/section_multi-form5.jpg) | — | [open](https://www.relume.ai/preview?cid=multi-step-forms/section_multi-form5&context=react) |
| 1154 | Multi Form 6 | [`multi-step-forms/section_multi-form6.jpg`](/reference-images/multi-step-forms/section_multi-form6.jpg) | — | [open](https://www.relume.ai/preview?cid=multi-step-forms/section_multi-form6&context=react) |
| 1155 | Multi Form 7 | [`multi-step-forms/section_multi-form7.jpg`](/reference-images/multi-step-forms/section_multi-form7.jpg) | — | [open](https://www.relume.ai/preview?cid=multi-step-forms/section_multi-form7&context=react) |
| 1156 | Multi Form 8 | [`multi-step-forms/section_multi-form8.jpg`](/reference-images/multi-step-forms/section_multi-form8.jpg) | — | [open](https://www.relume.ai/preview?cid=multi-step-forms/section_multi-form8&context=react) |
| 1157 | Multi Form 9 | [`multi-step-forms/section_multi-form9.jpg`](/reference-images/multi-step-forms/section_multi-form9.jpg) | — | [open](https://www.relume.ai/preview?cid=multi-step-forms/section_multi-form9&context=react) |
| 1158 | Multi Form 10 | [`multi-step-forms/section_multi-form10.jpg`](/reference-images/multi-step-forms/section_multi-form10.jpg) | — | [open](https://www.relume.ai/preview?cid=multi-step-forms/section_multi-form10&context=react) |
| 1159 | Multi Form 11 | [`multi-step-forms/section_multi-form11.jpg`](/reference-images/multi-step-forms/section_multi-form11.jpg) | — | [open](https://www.relume.ai/preview?cid=multi-step-forms/section_multi-form11&context=react) |
| 1160 | Multi Form 12 | [`multi-step-forms/section_multi-form12.jpg`](/reference-images/multi-step-forms/section_multi-form12.jpg) | — | [open](https://www.relume.ai/preview?cid=multi-step-forms/section_multi-form12&context=react) |
| 1161 | Multi Form 13 | [`multi-step-forms/section_multi-form13.jpg`](/reference-images/multi-step-forms/section_multi-form13.jpg) | — | [open](https://www.relume.ai/preview?cid=multi-step-forms/section_multi-form13&context=react) |
| 1162 | Multi Form 14 | [`multi-step-forms/section_multi-form14.jpg`](/reference-images/multi-step-forms/section_multi-form14.jpg) | — | [open](https://www.relume.ai/preview?cid=multi-step-forms/section_multi-form14&context=react) |
| 1163 | Multi Form 15 | [`multi-step-forms/section_multi-form15.jpg`](/reference-images/multi-step-forms/section_multi-form15.jpg) | — | [open](https://www.relume.ai/preview?cid=multi-step-forms/section_multi-form15&context=react) |
| 1164 | Multi Form 16 | [`multi-step-forms/section_multi-form17.jpg`](/reference-images/multi-step-forms/section_multi-form17.jpg) | — | [open](https://www.relume.ai/preview?cid=multi-step-forms/section_multi-form17&context=react) |
| 1165 | Multi Form 17 | [`multi-step-forms/section_multi-form16.jpg`](/reference-images/multi-step-forms/section_multi-form16.jpg) | — | [open](https://www.relume.ai/preview?cid=multi-step-forms/section_multi-form16&context=react) |
| 1166 | Multi Form 18 | [`multi-step-forms/section_multi-form18.jpg`](/reference-images/multi-step-forms/section_multi-form18.jpg) | — | [open](https://www.relume.ai/preview?cid=multi-step-forms/section_multi-form18&context=react) |
| 1167 | Multi Form 19 | [`multi-step-forms/section_multi-form19.jpg`](/reference-images/multi-step-forms/section_multi-form19.jpg) | — | [open](https://www.relume.ai/preview?cid=multi-step-forms/section_multi-form19&context=react) |
| 1168 | Multi Form 20 | [`multi-step-forms/section_multi-form20.jpg`](/reference-images/multi-step-forms/section_multi-form20.jpg) | — | [open](https://www.relume.ai/preview?cid=multi-step-forms/section_multi-form20&context=react) |
| 1169 | Multi Form 21 | [`multi-step-forms/section_multi-form21.jpg`](/reference-images/multi-step-forms/section_multi-form21.jpg) | — | [open](https://www.relume.ai/preview?cid=multi-step-forms/section_multi-form21&context=react) |
| 1170 | Multi Form 22 | [`multi-step-forms/section_multi-form22.jpg`](/reference-images/multi-step-forms/section_multi-form22.jpg) | — | [open](https://www.relume.ai/preview?cid=multi-step-forms/section_multi-form22&context=react) |
| 1171 | Multi Form 23 | [`multi-step-forms/section_multi-form23.jpg`](/reference-images/multi-step-forms/section_multi-form23.jpg) | — | [open](https://www.relume.ai/preview?cid=multi-step-forms/section_multi-form23&context=react) |
| 1172 | Multi Form 24 | [`multi-step-forms/section_multi-form24.jpg`](/reference-images/multi-step-forms/section_multi-form24.jpg) | — | [open](https://www.relume.ai/preview?cid=multi-step-forms/section_multi-form24&context=react) |
| 1173 | Multi Form 25 | [`multi-step-forms/section_multi-form25.jpg`](/reference-images/multi-step-forms/section_multi-form25.jpg) | — | [open](https://www.relume.ai/preview?cid=multi-step-forms/section_multi-form25&context=react) |
| 1174 | Multi Form 26 | [`multi-step-forms/section_multi-form26.jpg`](/reference-images/multi-step-forms/section_multi-form26.jpg) | — | [open](https://www.relume.ai/preview?cid=multi-step-forms/section_multi-form26&context=react) |
| 1175 | Multi Form 27 | [`multi-step-forms/section_multi-form27.jpg`](/reference-images/multi-step-forms/section_multi-form27.jpg) | — | [open](https://www.relume.ai/preview?cid=multi-step-forms/section_multi-form27&context=react) |
| 1176 | Multi Form 28 | [`multi-step-forms/section_multi-form28.jpg`](/reference-images/multi-step-forms/section_multi-form28.jpg) | — | [open](https://www.relume.ai/preview?cid=multi-step-forms/section_multi-form28&context=react) |
| 1177 | Multi Form 29 | [`multi-step-forms/section_multi-form29.jpg`](/reference-images/multi-step-forms/section_multi-form29.jpg) | — | [open](https://www.relume.ai/preview?cid=multi-step-forms/section_multi-form29&context=react) |
| 1178 | Multi Form 30 | [`multi-step-forms/section_multi-form30.jpg`](/reference-images/multi-step-forms/section_multi-form30.jpg) | — | [open](https://www.relume.ai/preview?cid=multi-step-forms/section_multi-form30&context=react) |
| 1179 | Multi Form 31 | [`multi-step-forms/section_multi-form31.jpg`](/reference-images/multi-step-forms/section_multi-form31.jpg) | — | [open](https://www.relume.ai/preview?cid=multi-step-forms/section_multi-form31&context=react) |
| 1180 | Multi Form 32 | [`multi-step-forms/section_multi-form32.jpg`](/reference-images/multi-step-forms/section_multi-form32.jpg) | — | [open](https://www.relume.ai/preview?cid=multi-step-forms/section_multi-form32&context=react) |
| 1181 | Multi Form 33 | [`multi-step-forms/section_multi-form33.jpg`](/reference-images/multi-step-forms/section_multi-form33.jpg) | — | [open](https://www.relume.ai/preview?cid=multi-step-forms/section_multi-form33&context=react) |
| 1182 | Multi Form 34 | [`multi-step-forms/section_multi-form34.jpg`](/reference-images/multi-step-forms/section_multi-form34.jpg) | — | [open](https://www.relume.ai/preview?cid=multi-step-forms/section_multi-form34&context=react) |
| 1183 | Multi Form 35 | [`multi-step-forms/section_multi-form35.jpg`](/reference-images/multi-step-forms/section_multi-form35.jpg) | — | [open](https://www.relume.ai/preview?cid=multi-step-forms/section_multi-form35&context=react) |
| 1184 | Multi Form 36 | [`multi-step-forms/section_multi-form36.jpg`](/reference-images/multi-step-forms/section_multi-form36.jpg) | — | [open](https://www.relume.ai/preview?cid=multi-step-forms/section_multi-form36&context=react) |
| 1185 | Multi Form 37 | [`multi-step-forms/section_multi-form37.jpg`](/reference-images/multi-step-forms/section_multi-form37.jpg) | — | [open](https://www.relume.ai/preview?cid=multi-step-forms/section_multi-form37&context=react) |
| 1186 | Multi Form 38 | [`multi-step-forms/section_multi-form38.jpg`](/reference-images/multi-step-forms/section_multi-form38.jpg) | — | [open](https://www.relume.ai/preview?cid=multi-step-forms/section_multi-form38&context=react) |
| 1187 | Multi Form 39 | [`multi-step-forms/section_multi-form39.jpg`](/reference-images/multi-step-forms/section_multi-form39.jpg) | — | [open](https://www.relume.ai/preview?cid=multi-step-forms/section_multi-form39&context=react) |
| 1188 | Multi Form 40 | [`multi-step-forms/section_multi-form40.jpg`](/reference-images/multi-step-forms/section_multi-form40.jpg) | — | [open](https://www.relume.ai/preview?cid=multi-step-forms/section_multi-form40&context=react) |
| 1189 | Multi Form 41 | [`multi-step-forms/section_multi-form41.jpg`](/reference-images/multi-step-forms/section_multi-form41.jpg) | — | [open](https://www.relume.ai/preview?cid=multi-step-forms/section_multi-form41&context=react) |
| 1190 | Multi Form 42 | [`multi-step-forms/section_multi-form42.jpg`](/reference-images/multi-step-forms/section_multi-form42.jpg) | — | [open](https://www.relume.ai/preview?cid=multi-step-forms/section_multi-form42&context=react) |
| 1191 | Multi Form 43 | [`multi-step-forms/section_multi-form43.jpg`](/reference-images/multi-step-forms/section_multi-form43.jpg) | — | [open](https://www.relume.ai/preview?cid=multi-step-forms/section_multi-form43&context=react) |
| 1192 | Multi Form 44 | [`multi-step-forms/section_multi-form44.jpg`](/reference-images/multi-step-forms/section_multi-form44.jpg) | — | [open](https://www.relume.ai/preview?cid=multi-step-forms/section_multi-form44&context=react) |
| 1193 | Multi Form 45 | [`multi-step-forms/section_multi-form45.jpg`](/reference-images/multi-step-forms/section_multi-form45.jpg) | — | [open](https://www.relume.ai/preview?cid=multi-step-forms/section_multi-form45&context=react) |
| 1194 | Multi Form 46 | [`multi-step-forms/section_multi-form46.jpg`](/reference-images/multi-step-forms/section_multi-form46.jpg) | — | [open](https://www.relume.ai/preview?cid=multi-step-forms/section_multi-form46&context=react) |

## navbars

Predicted behavior: Navigation bar: logo, primary links, right-side actions (login/CTA), mobile hamburger collapse (daisyUI drawer).

| # | Component | Local image | Flags | Relume preview |
|---|-----------|-------------|-------|----------------|
| 1195 | Navbar 1 | [`navbars/navbar1_component.jpg`](/reference-images/navbars/navbar1_component.jpg) | I | [open](https://www.relume.ai/preview?cid=navbars/navbar1_component&context=react) |
| 1196 | Navbar 2 | [`navbars/navbar2_component.jpg`](/reference-images/navbars/navbar2_component.jpg) | I | [open](https://www.relume.ai/preview?cid=navbars/navbar2_component&context=react) |
| 1197 | Navbar 3 | [`navbars/navbar3_component.jpg`](/reference-images/navbars/navbar3_component.jpg) | I | [open](https://www.relume.ai/preview?cid=navbars/navbar3_component&context=react) |
| 1198 | Navbar 4 | [`navbars/navbar4_component.jpg`](/reference-images/navbars/navbar4_component.jpg) | I | [open](https://www.relume.ai/preview?cid=navbars/navbar4_component&context=react) |
| 1199 | Navbar 5 | [`navbars/navbar5_component.jpg`](/reference-images/navbars/navbar5_component.jpg) | I | [open](https://www.relume.ai/preview?cid=navbars/navbar5_component&context=react) |
| 1200 | Navbar 6 | [`navbars/navbar6_component.jpg`](/reference-images/navbars/navbar6_component.jpg) | I | [open](https://www.relume.ai/preview?cid=navbars/navbar6_component&context=react) |
| 1201 | Navbar 7 | [`navbars/navbar7_component.jpg`](/reference-images/navbars/navbar7_component.jpg) | I | [open](https://www.relume.ai/preview?cid=navbars/navbar7_component&context=react) |
| 1202 | Navbar 8 | [`navbars/navbar8_component.jpg`](/reference-images/navbars/navbar8_component.jpg) | I | [open](https://www.relume.ai/preview?cid=navbars/navbar8_component&context=react) |
| 1203 | Navbar 9 | [`navbars/navbar9_component.jpg`](/reference-images/navbars/navbar9_component.jpg) | I | [open](https://www.relume.ai/preview?cid=navbars/navbar9_component&context=react) |
| 1204 | Navbar 10 | [`navbars/navbar10_component.jpg`](/reference-images/navbars/navbar10_component.jpg) | I | [open](https://www.relume.ai/preview?cid=navbars/navbar10_component&context=react) |
| 1205 | Navbar 11 | [`navbars/navbar11_component.jpg`](/reference-images/navbars/navbar11_component.jpg) | I | [open](https://www.relume.ai/preview?cid=navbars/navbar11_component&context=react) |
| 1206 | Navbar 12 | [`navbars/navbar12_component.jpg`](/reference-images/navbars/navbar12_component.jpg) | I | [open](https://www.relume.ai/preview?cid=navbars/navbar12_component&context=react) |
| 1207 | Navbar 13 | [`navbars/navbar13_component.jpg`](/reference-images/navbars/navbar13_component.jpg) | IU | [open](https://www.relume.ai/preview?cid=navbars/navbar13_component&context=react) |
| 1208 | Navbar 14 | [`navbars/navbar14_component.jpg`](/reference-images/navbars/navbar14_component.jpg) | IU | [open](https://www.relume.ai/preview?cid=navbars/navbar14_component&context=react) |
| 1209 | Navbar 15 | [`navbars/navbar15_component.jpg`](/reference-images/navbars/navbar15_component.jpg) | IU | [open](https://www.relume.ai/preview?cid=navbars/navbar15_component&context=react) |
| 1210 | Navbar 16 | [`navbars/navbar16_component.jpg`](/reference-images/navbars/navbar16_component.jpg) | I | [open](https://www.relume.ai/preview?cid=navbars/navbar16_component&context=react) |
| 1211 | Navbar 17 | [`navbars/navbar17_component.jpg`](/reference-images/navbars/navbar17_component.jpg) | I | [open](https://www.relume.ai/preview?cid=navbars/navbar17_component&context=react) |
| 1212 | Navbar 18 | [`navbars/navbar18_component.jpg`](/reference-images/navbars/navbar18_component.jpg) | I | [open](https://www.relume.ai/preview?cid=navbars/navbar18_component&context=react) |
| 1213 | Navbar 19 | [`navbars/navbar19_component.jpg`](/reference-images/navbars/navbar19_component.jpg) | I | [open](https://www.relume.ai/preview?cid=navbars/navbar19_component&context=react) |
| 1214 | Navbar 20 | [`navbars/navbar20_component.jpg`](/reference-images/navbars/navbar20_component.jpg) | I | [open](https://www.relume.ai/preview?cid=navbars/navbar20_component&context=react) |
| 1215 | Navbar 21 | [`navbars/navbar21_component.jpg`](/reference-images/navbars/navbar21_component.jpg) | I | [open](https://www.relume.ai/preview?cid=navbars/navbar21_component&context=react) |
| 1216 | Navbar 22 | [`navbars/navbar22_component.jpg`](/reference-images/navbars/navbar22_component.jpg) | I | [open](https://www.relume.ai/preview?cid=navbars/navbar22_component&context=react) |

## onboarding-forms

Predicted behavior: Onboarding flows: welcome screen + progressive steps with progress indicator.

| # | Component | Local image | Flags | Relume preview |
|---|-----------|-------------|-------|----------------|
| 1217 | Onboarding 1 | [`onboarding-forms/section_onboarding1.jpg`](/reference-images/onboarding-forms/section_onboarding1.jpg) | — | [open](https://www.relume.ai/preview?cid=onboarding-forms/section_onboarding1&context=react) |
| 1218 | Onboarding 2 | [`onboarding-forms/section_onboarding2.jpg`](/reference-images/onboarding-forms/section_onboarding2.jpg) | — | [open](https://www.relume.ai/preview?cid=onboarding-forms/section_onboarding2&context=react) |
| 1219 | Onboarding 3 | [`onboarding-forms/section_onboarding3.jpg`](/reference-images/onboarding-forms/section_onboarding3.jpg) | — | [open](https://www.relume.ai/preview?cid=onboarding-forms/section_onboarding3&context=react) |
| 1220 | Onboarding 4 | [`onboarding-forms/section_onboarding4.jpg`](/reference-images/onboarding-forms/section_onboarding4.jpg) | — | [open](https://www.relume.ai/preview?cid=onboarding-forms/section_onboarding4&context=react) |
| 1221 | Onboarding 5 | [`onboarding-forms/section_onboarding5.jpg`](/reference-images/onboarding-forms/section_onboarding5.jpg) | — | [open](https://www.relume.ai/preview?cid=onboarding-forms/section_onboarding5&context=react) |
| 1222 | Onboarding 6 | [`onboarding-forms/section_onboarding6.jpg`](/reference-images/onboarding-forms/section_onboarding6.jpg) | — | [open](https://www.relume.ai/preview?cid=onboarding-forms/section_onboarding6&context=react) |
| 1223 | Onboarding 7 | [`onboarding-forms/section_onboarding7.jpg`](/reference-images/onboarding-forms/section_onboarding7.jpg) | — | [open](https://www.relume.ai/preview?cid=onboarding-forms/section_onboarding7&context=react) |
| 1224 | Onboarding 8 | [`onboarding-forms/section_onboarding8.jpg`](/reference-images/onboarding-forms/section_onboarding8.jpg) | — | [open](https://www.relume.ai/preview?cid=onboarding-forms/section_onboarding8&context=react) |
| 1225 | Onboarding 9 | [`onboarding-forms/section_onboarding9.jpg`](/reference-images/onboarding-forms/section_onboarding9.jpg) | — | [open](https://www.relume.ai/preview?cid=onboarding-forms/section_onboarding9&context=react) |
| 1226 | Onboarding 10 | [`onboarding-forms/section_onboarding10.jpg`](/reference-images/onboarding-forms/section_onboarding10.jpg) | — | [open](https://www.relume.ai/preview?cid=onboarding-forms/section_onboarding10&context=react) |
| 1227 | Onboarding 11 | [`multi-step-forms/section_multi-form7.jpg`](/reference-images/multi-step-forms/section_multi-form7.jpg) | — | [open](https://www.relume.ai/preview?cid=onboarding-forms/section_onboarding11&context=react) |
| 1228 | Onboarding 12 | [`multi-step-forms/section_multi-form8.jpg`](/reference-images/multi-step-forms/section_multi-form8.jpg) | — | [open](https://www.relume.ai/preview?cid=onboarding-forms/section_onboarding12&context=react) |
| 1229 | Onboarding 13 | [`onboarding-forms/section_onboarding13.jpg`](/reference-images/onboarding-forms/section_onboarding13.jpg) | — | [open](https://www.relume.ai/preview?cid=onboarding-forms/section_onboarding13&context=react) |
| 1230 | Onboarding 14 | [`onboarding-forms/section_onboarding14.jpg`](/reference-images/onboarding-forms/section_onboarding14.jpg) | — | [open](https://www.relume.ai/preview?cid=onboarding-forms/section_onboarding14&context=react) |
| 1231 | Onboarding 15 | [`onboarding-forms/section_onboarding15.jpg`](/reference-images/onboarding-forms/section_onboarding15.jpg) | — | [open](https://www.relume.ai/preview?cid=onboarding-forms/section_onboarding15&context=react) |
| 1232 | Onboarding 16 | [`onboarding-forms/section_onboarding16.jpg`](/reference-images/onboarding-forms/section_onboarding16.jpg) | — | [open](https://www.relume.ai/preview?cid=onboarding-forms/section_onboarding16&context=react) |
| 1233 | Onboarding 17 | [`onboarding-forms/section_onboarding17.jpg`](/reference-images/onboarding-forms/section_onboarding17.jpg) | — | [open](https://www.relume.ai/preview?cid=onboarding-forms/section_onboarding17&context=react) |

## page-headers

Predicted behavior: Simple page header: title + breadcrumb/subtitle, optional actions.

| # | Component | Local image | Flags | Relume preview |
|---|-----------|-------------|-------|----------------|
| 1234 | Page Header 1 | [`page-headers/section_page-header1.jpg`](/reference-images/page-headers/section_page-header1.jpg) | — | [open](https://www.relume.ai/preview?cid=page-headers/section_page-header1&context=react) |
| 1235 | Page Header 2 | [`page-headers/section_page-header2.jpg`](/reference-images/page-headers/section_page-header2.jpg) | — | [open](https://www.relume.ai/preview?cid=page-headers/section_page-header2&context=react) |
| 1236 | Page Header 3 | [`page-headers/section_page-header3.jpg`](/reference-images/page-headers/section_page-header3.jpg) | — | [open](https://www.relume.ai/preview?cid=page-headers/section_page-header3&context=react) |
| 1237 | Page Header 4 | [`page-headers/section_page-header4.jpg`](/reference-images/page-headers/section_page-header4.jpg) | — | [open](https://www.relume.ai/preview?cid=page-headers/section_page-header4&context=react) |
| 1238 | Page Header 5 | [`page-headers/section_page-header5.jpg`](/reference-images/page-headers/section_page-header5.jpg) | — | [open](https://www.relume.ai/preview?cid=page-headers/section_page-header5&context=react) |

## portfolio-sections

Predicted behavior: Project grid: image cards with title/category, hover zoom/overlay; sometimes filterable.

| # | Component | Local image | Flags | Relume preview |
|---|-----------|-------------|-------|----------------|
| 1239 | Portfolio 1 | [`portfolio-sections/section_portfolio1.jpg`](/reference-images/portfolio-sections/section_portfolio1.jpg) | — | [open](https://www.relume.ai/preview?cid=portfolio-sections/section_portfolio1&context=react) |
| 1240 | Portfolio 2 | [`portfolio-sections/section_portfolio2.jpg`](/reference-images/portfolio-sections/section_portfolio2.jpg) | — | [open](https://www.relume.ai/preview?cid=portfolio-sections/section_portfolio2&context=react) |
| 1241 | Portfolio 3 | [`portfolio-sections/section_portfolio3.jpg`](/reference-images/portfolio-sections/section_portfolio3.jpg) | — | [open](https://www.relume.ai/preview?cid=portfolio-sections/section_portfolio3&context=react) |
| 1242 | Portfolio 4 | [`portfolio-sections/section_portfolio4.jpg`](/reference-images/portfolio-sections/section_portfolio4.jpg) | — | [open](https://www.relume.ai/preview?cid=portfolio-sections/section_portfolio4&context=react) |
| 1243 | Portfolio 5 | [`portfolio-sections/section_portfolio5.jpg`](/reference-images/portfolio-sections/section_portfolio5.jpg) | — | [open](https://www.relume.ai/preview?cid=portfolio-sections/section_portfolio5&context=react) |
| 1244 | Portfolio 6 | [`portfolio-sections/section_portfolio6.jpg`](/reference-images/portfolio-sections/section_portfolio6.jpg) | — | [open](https://www.relume.ai/preview?cid=portfolio-sections/section_portfolio6&context=react) |
| 1245 | Portfolio 7 | [`portfolio-sections/section_portfolio7.jpg`](/reference-images/portfolio-sections/section_portfolio7.jpg) | — | [open](https://www.relume.ai/preview?cid=portfolio-sections/section_portfolio7&context=react) |
| 1246 | Portfolio 8 | [`portfolio-sections/section_portfolio8.jpg`](/reference-images/portfolio-sections/section_portfolio8.jpg) | — | [open](https://www.relume.ai/preview?cid=portfolio-sections/section_portfolio8&context=react) |
| 1247 | Portfolio 9 | [`portfolio-sections/section_portfolio9.jpg`](/reference-images/portfolio-sections/section_portfolio9.jpg) | — | [open](https://www.relume.ai/preview?cid=portfolio-sections/section_portfolio9&context=react) |
| 1248 | Portfolio 10 | [`portfolio-sections/section_portfolio10.jpg`](/reference-images/portfolio-sections/section_portfolio10.jpg) | — | [open](https://www.relume.ai/preview?cid=portfolio-sections/section_portfolio10&context=react) |
| 1249 | Portfolio 11 | [`portfolio-sections/section_portfolio11.jpg`](/reference-images/portfolio-sections/section_portfolio11.jpg) | — | [open](https://www.relume.ai/preview?cid=portfolio-sections/section_portfolio11&context=react) |
| 1250 | Portfolio 12 | [`portfolio-sections/section_portfolio12.jpg`](/reference-images/portfolio-sections/section_portfolio12.jpg) | — | [open](https://www.relume.ai/preview?cid=portfolio-sections/section_portfolio12&context=react) |
| 1251 | Portfolio 13 | [`portfolio-sections/section_portfolio13.jpg`](/reference-images/portfolio-sections/section_portfolio13.jpg) | — | [open](https://www.relume.ai/preview?cid=portfolio-sections/section_portfolio13&context=react) |
| 1252 | Portfolio 14 | [`portfolio-sections/section_portfolio14.jpg`](/reference-images/portfolio-sections/section_portfolio14.jpg) | — | [open](https://www.relume.ai/preview?cid=portfolio-sections/section_portfolio14&context=react) |
| 1253 | Portfolio 15 | [`portfolio-sections/section_portfolio15.jpg`](/reference-images/portfolio-sections/section_portfolio15.jpg) | — | [open](https://www.relume.ai/preview?cid=portfolio-sections/section_portfolio15&context=react) |
| 1254 | Portfolio 16 | [`portfolio-sections/section_portfolio16.jpg`](/reference-images/portfolio-sections/section_portfolio16.jpg) | — | [open](https://www.relume.ai/preview?cid=portfolio-sections/section_portfolio16&context=react) |
| 1255 | Portfolio 17 | [`portfolio-sections/section_portfolio17.jpg`](/reference-images/portfolio-sections/section_portfolio17.jpg) | U | [open](https://www.relume.ai/preview?cid=portfolio-sections/section_portfolio17&context=react) |

## portfolio-headers

Predicted behavior: Portfolio hero: name/tagline + featured work preview.

| # | Component | Local image | Flags | Relume preview |
|---|-----------|-------------|-------|----------------|
| 1262 | Portfolio Header 1 | [`portfolio-headers/section_portfolio-header1.jpg`](/reference-images/portfolio-headers/section_portfolio-header1.jpg) | — | [open](https://www.relume.ai/preview?cid=portfolio-headers/section_portfolio-header1&context=react) |
| 1263 | Portfolio Header 2 | [`portfolio-headers/section_portfolio-header2.jpg`](/reference-images/portfolio-headers/section_portfolio-header2.jpg) | — | [open](https://www.relume.ai/preview?cid=portfolio-headers/section_portfolio-header2&context=react) |
| 1264 | Portfolio Header 3 | [`portfolio-headers/section_portfolio-header3.jpg`](/reference-images/portfolio-headers/section_portfolio-header3.jpg) | — | [open](https://www.relume.ai/preview?cid=portfolio-headers/section_portfolio-header3&context=react) |
| 1265 | Portfolio Header 4 | [`portfolio-headers/section_portfolio-header4.jpg`](/reference-images/portfolio-headers/section_portfolio-header4.jpg) | — | [open](https://www.relume.ai/preview?cid=portfolio-headers/section_portfolio-header4&context=react) |
| 1266 | Portfolio Header 5 | [`portfolio-headers/section_portfolio-header5.jpg`](/reference-images/portfolio-headers/section_portfolio-header5.jpg) | — | [open](https://www.relume.ai/preview?cid=portfolio-headers/section_portfolio-header5&context=react) |
| 1267 | Portfolio Header 6 | [`portfolio-headers/section_portfolio-header6.jpg`](/reference-images/portfolio-headers/section_portfolio-header6.jpg) | — | [open](https://www.relume.ai/preview?cid=portfolio-headers/section_portfolio-header6&context=react) |
| 1268 | Portfolio Header 7 | [`portfolio-headers/section_portfolio-header7.jpg`](/reference-images/portfolio-headers/section_portfolio-header7.jpg) | — | [open](https://www.relume.ai/preview?cid=portfolio-headers/section_portfolio-header7&context=react) |
| 1269 | Portfolio Header 8 | [`portfolio-headers/section_portfolio-header8.jpg`](/reference-images/portfolio-headers/section_portfolio-header8.jpg) | — | [open](https://www.relume.ai/preview?cid=portfolio-headers/section_portfolio-header8&context=react) |
| 1270 | Portfolio Header 9 | [`portfolio-headers/section_portfolio-header9.jpg`](/reference-images/portfolio-headers/section_portfolio-header9.jpg) | — | [open](https://www.relume.ai/preview?cid=portfolio-headers/section_portfolio-header9&context=react) |
| 1271 | Portfolio Header 10 | [`portfolio-headers/section_portfolio-header10.jpg`](/reference-images/portfolio-headers/section_portfolio-header10.jpg) | — | [open](https://www.relume.ai/preview?cid=portfolio-headers/section_portfolio-header10&context=react) |
| 1272 | Portfolio Header 11 | [`portfolio-headers/section_portfolio-header11.jpg`](/reference-images/portfolio-headers/section_portfolio-header11.jpg) | — | [open](https://www.relume.ai/preview?cid=portfolio-headers/section_portfolio-header11&context=react) |
| 1273 | Portfolio Header 12 | [`portfolio-headers/section_portfolio-header12.jpg`](/reference-images/portfolio-headers/section_portfolio-header12.jpg) | — | [open](https://www.relume.ai/preview?cid=portfolio-headers/section_portfolio-header12&context=react) |

## pricing-sections

Predicted behavior: Pricing table: 2-4 plan cards, popular-plan highlight, monthly/yearly toggle (JS), feature checklist, CTA per plan.

| # | Component | Local image | Flags | Relume preview |
|---|-----------|-------------|-------|----------------|
| 1274 | Pricing 1 | [`pricing-sections/section_pricing1.jpg`](/reference-images/pricing-sections/section_pricing1.jpg) | — | [open](https://www.relume.ai/preview?cid=pricing-sections/section_pricing1&context=react) |
| 1275 | Pricing 2 | [`pricing-sections/section_pricing2.jpg`](/reference-images/pricing-sections/section_pricing2.jpg) | — | [open](https://www.relume.ai/preview?cid=pricing-sections/section_pricing2&context=react) |
| 1276 | Pricing 3 | [`pricing-sections/section_pricing3.jpg`](/reference-images/pricing-sections/section_pricing3.jpg) | — | [open](https://www.relume.ai/preview?cid=pricing-sections/section_pricing3&context=react) |
| 1277 | Pricing 4 | [`pricing-sections/section_pricing4.jpg`](/reference-images/pricing-sections/section_pricing4.jpg) | — | [open](https://www.relume.ai/preview?cid=pricing-sections/section_pricing4&context=react) |
| 1278 | Pricing 5 | [`pricing-sections/section_pricing5.jpg`](/reference-images/pricing-sections/section_pricing5.jpg) | — | [open](https://www.relume.ai/preview?cid=pricing-sections/section_pricing5&context=react) |
| 1279 | Pricing 6 | [`pricing-sections/section_pricing6.jpg`](/reference-images/pricing-sections/section_pricing6.jpg) | — | [open](https://www.relume.ai/preview?cid=pricing-sections/section_pricing6&context=react) |
| 1280 | Pricing 7 | [`pricing-sections/section_pricing7.jpg`](/reference-images/pricing-sections/section_pricing7.jpg) | — | [open](https://www.relume.ai/preview?cid=pricing-sections/section_pricing7&context=react) |
| 1281 | Pricing 8 | [`pricing-sections/section_pricing8.jpg`](/reference-images/pricing-sections/section_pricing8.jpg) | — | [open](https://www.relume.ai/preview?cid=pricing-sections/section_pricing8&context=react) |
| 1282 | Pricing 9 | [`pricing-sections/section_pricing9.jpg`](/reference-images/pricing-sections/section_pricing9.jpg) | — | [open](https://www.relume.ai/preview?cid=pricing-sections/section_pricing9&context=react) |
| 1283 | Pricing 10 | [`pricing-sections/section_pricing10.jpg`](/reference-images/pricing-sections/section_pricing10.jpg) | — | [open](https://www.relume.ai/preview?cid=pricing-sections/section_pricing10&context=react) |
| 1284 | Pricing 11 | [`pricing-sections/section_pricing11.jpg`](/reference-images/pricing-sections/section_pricing11.jpg) | — | [open](https://www.relume.ai/preview?cid=pricing-sections/section_pricing11&context=react) |
| 1285 | Pricing 12 | [`pricing-sections/section_pricing12.jpg`](/reference-images/pricing-sections/section_pricing12.jpg) | — | [open](https://www.relume.ai/preview?cid=pricing-sections/section_pricing12&context=react) |
| 1286 | Pricing 13 | [`pricing-sections/section_pricing13.jpg`](/reference-images/pricing-sections/section_pricing13.jpg) | — | [open](https://www.relume.ai/preview?cid=pricing-sections/section_pricing13&context=react) |
| 1287 | Pricing 14 | [`pricing-sections/section_pricing14.jpg`](/reference-images/pricing-sections/section_pricing14.jpg) | — | [open](https://www.relume.ai/preview?cid=pricing-sections/section_pricing14&context=react) |
| 1288 | Pricing 15 | [`pricing-sections/section_pricing15.jpg`](/reference-images/pricing-sections/section_pricing15.jpg) | — | [open](https://www.relume.ai/preview?cid=pricing-sections/section_pricing15&context=react) |
| 1289 | Pricing 16 | [`pricing-sections/section_pricing16.jpg`](/reference-images/pricing-sections/section_pricing16.jpg) | — | [open](https://www.relume.ai/preview?cid=pricing-sections/section_pricing16&context=react) |
| 1290 | Pricing 17 | [`pricing-sections/section_pricing17.jpg`](/reference-images/pricing-sections/section_pricing17.jpg) | — | [open](https://www.relume.ai/preview?cid=pricing-sections/section_pricing17&context=react) |

## pricing-sections-2

Predicted behavior: Pricing variant set 2 (different card anatomy/rhythm).

| # | Component | Local image | Flags | Relume preview |
|---|-----------|-------------|-------|----------------|
| 1291 | Pricing 18 | [`pricing-sections-2/section_pricing18.jpg`](/reference-images/pricing-sections-2/section_pricing18.jpg) | — | [open](https://www.relume.ai/preview?cid=pricing-sections-2/section_pricing18&context=react) |
| 1292 | Pricing 19 | [`pricing-sections-2/section_pricing19.jpg`](/reference-images/pricing-sections-2/section_pricing19.jpg) | — | [open](https://www.relume.ai/preview?cid=pricing-sections-2/section_pricing19&context=react) |
| 1293 | Pricing 20 | [`pricing-sections-2/section_pricing20.jpg`](/reference-images/pricing-sections-2/section_pricing20.jpg) | — | [open](https://www.relume.ai/preview?cid=pricing-sections-2/section_pricing20&context=react) |
| 1294 | Pricing 21 | [`pricing-sections-2/section_pricing21.jpg`](/reference-images/pricing-sections-2/section_pricing21.jpg) | — | [open](https://www.relume.ai/preview?cid=pricing-sections-2/section_pricing21&context=react) |
| 1295 | Pricing 22 | [`pricing-sections-2/section_pricing22.jpg`](/reference-images/pricing-sections-2/section_pricing22.jpg) | — | [open](https://www.relume.ai/preview?cid=pricing-sections-2/section_pricing22&context=react) |
| 1296 | Pricing 23 | [`pricing-sections-2/section_pricing23.jpg`](/reference-images/pricing-sections-2/section_pricing23.jpg) | — | [open](https://www.relume.ai/preview?cid=pricing-sections-2/section_pricing23&context=react) |
| 1297 | Pricing 24 | [`pricing-sections-2/section_pricing24.jpg`](/reference-images/pricing-sections-2/section_pricing24.jpg) | — | [open](https://www.relume.ai/preview?cid=pricing-sections-2/section_pricing24&context=react) |
| 1298 | Pricing 25 | [`pricing-sections-2/section_pricing25.jpg`](/reference-images/pricing-sections-2/section_pricing25.jpg) | — | [open](https://www.relume.ai/preview?cid=pricing-sections-2/section_pricing25&context=react) |
| 1299 | Pricing 26 | [`pricing-sections-2/section_pricing26.jpg`](/reference-images/pricing-sections-2/section_pricing26.jpg) | — | [open](https://www.relume.ai/preview?cid=pricing-sections-2/section_pricing26&context=react) |
| 1300 | Pricing 27 | [`pricing-sections-2/section_pricing27.jpg`](/reference-images/pricing-sections-2/section_pricing27.jpg) | — | [open](https://www.relume.ai/preview?cid=pricing-sections-2/section_pricing27&context=react) |

## product-list-sections

Predicted behavior: Product grid: card per product (image, name, price, action) with optional sort/filter bar.

| # | Component | Local image | Flags | Relume preview |
|---|-----------|-------------|-------|----------------|
| 1301 | Product 1 | [`product-list-sections/section_product1.jpg`](/reference-images/product-list-sections/section_product1.jpg) | — | [open](https://www.relume.ai/preview?cid=product-list-sections/section_product1&context=react) |
| 1302 | Product 2 | [`product-list-sections/section_product2.jpg`](/reference-images/product-list-sections/section_product2.jpg) | — | [open](https://www.relume.ai/preview?cid=product-list-sections/section_product2&context=react) |
| 1303 | Product 3 | [`product-list-sections/section_product3.jpg`](/reference-images/product-list-sections/section_product3.jpg) | — | [open](https://www.relume.ai/preview?cid=product-list-sections/section_product3&context=react) |
| 1304 | Product 4 | [`product-list-sections/section_product4.jpg`](/reference-images/product-list-sections/section_product4.jpg) | — | [open](https://www.relume.ai/preview?cid=product-list-sections/section_product4&context=react) |
| 1305 | Product 5 | [`product-list-sections/section_product5.jpg`](/reference-images/product-list-sections/section_product5.jpg) | — | [open](https://www.relume.ai/preview?cid=product-list-sections/section_product5&context=react) |
| 1306 | Product 6 | [`product-list-sections/section_product6.jpg`](/reference-images/product-list-sections/section_product6.jpg) | — | [open](https://www.relume.ai/preview?cid=product-list-sections/section_product6&context=react) |
| 1307 | Product 7 | [`product-list-sections/section_product7.jpg`](/reference-images/product-list-sections/section_product7.jpg) | — | [open](https://www.relume.ai/preview?cid=product-list-sections/section_product7&context=react) |
| 1308 | Product 8 | [`product-list-sections/section_product8.jpg`](/reference-images/product-list-sections/section_product8.jpg) | — | [open](https://www.relume.ai/preview?cid=product-list-sections/section_product8&context=react) |
| 1309 | Product 9 | [`product-list-sections/section_product9.jpg`](/reference-images/product-list-sections/section_product9.jpg) | — | [open](https://www.relume.ai/preview?cid=product-list-sections/section_product9&context=react) |
| 1310 | Product 10 | [`product-list-sections/section_product10.jpg`](/reference-images/product-list-sections/section_product10.jpg) | — | [open](https://www.relume.ai/preview?cid=product-list-sections/section_product10&context=react) |
| 1311 | Product 11 | [`product-list-sections/section_product11.jpg`](/reference-images/product-list-sections/section_product11.jpg) | — | [open](https://www.relume.ai/preview?cid=product-list-sections/section_product11&context=react) |
| 1312 | Product 12 | [`product-list-sections/section_product12.jpg`](/reference-images/product-list-sections/section_product12.jpg) | — | [open](https://www.relume.ai/preview?cid=product-list-sections/section_product12&context=react) |

## product-headers

Predicted behavior: Product hero: product image + name/price + add-to-cart/CTA.

| # | Component | Local image | Flags | Relume preview |
|---|-----------|-------------|-------|----------------|
| 1313 | Product Header 1 | [`product-headers/section_product-header1.jpg`](/reference-images/product-headers/section_product-header1.jpg) | I | [open](https://www.relume.ai/preview?cid=product-headers/section_product-header1&context=react) |
| 1314 | Product Header 2 | [`product-headers/section_product-header2.jpg`](/reference-images/product-headers/section_product-header2.jpg) | — | [open](https://www.relume.ai/preview?cid=product-headers/section_product-header2&context=react) |
| 1315 | Product Header 3 | [`product-headers/section_product-header3.jpg`](/reference-images/product-headers/section_product-header3.jpg) | I | [open](https://www.relume.ai/preview?cid=product-headers/section_product-header3&context=react) |
| 1316 | Product Header 4 | [`product-headers/section_product-header4.jpg`](/reference-images/product-headers/section_product-header4.jpg) | — | [open](https://www.relume.ai/preview?cid=product-headers/section_product-header4&context=react) |
| 1317 | Product Header 5 | [`product-headers/section_product-header5.jpg`](/reference-images/product-headers/section_product-header5.jpg) | I | [open](https://www.relume.ai/preview?cid=product-headers/section_product-header5&context=react) |
| 1318 | Product Header 6 | [`product-headers/section_product-header6.jpg`](/reference-images/product-headers/section_product-header6.jpg) | — | [open](https://www.relume.ai/preview?cid=product-headers/section_product-header6&context=react) |
| 1319 | Product Header 7 | [`product-headers/section_product-header7.jpg`](/reference-images/product-headers/section_product-header7.jpg) | — | [open](https://www.relume.ai/preview?cid=product-headers/section_product-header7&context=react) |
| 1320 | Product Header 8 | [`product-headers/section_product-header8.jpg`](/reference-images/product-headers/section_product-header8.jpg) | — | [open](https://www.relume.ai/preview?cid=product-headers/section_product-header8&context=react) |
| 1321 | Product Header 9 | [`product-headers/section_product-header9.jpg`](/reference-images/product-headers/section_product-header9.jpg) | I | [open](https://www.relume.ai/preview?cid=product-headers/section_product-header9&context=react) |

## section-headers

Predicted behavior: Reusable section header: eyebrow + title + subtitle + optional side action. Building block for other sections.

| # | Component | Local image | Flags | Relume preview |
|---|-----------|-------------|-------|----------------|
| 1322 | Section Header 1 | [`section-headers/section-header1.jpg`](/reference-images/section-headers/section-header1.jpg) | — | [open](https://www.relume.ai/preview?cid=section-headers/section-header1&context=react) |
| 1323 | Section Header 2 | [`section-headers/section-header2.jpg`](/reference-images/section-headers/section-header2.jpg) | — | [open](https://www.relume.ai/preview?cid=section-headers/section-header2&context=react) |
| 1324 | Section Header 3 | [`section-headers/section-header3.jpg`](/reference-images/section-headers/section-header3.jpg) | — | [open](https://www.relume.ai/preview?cid=section-headers/section-header3&context=react) |
| 1325 | Section Header 4 | [`section-headers/section-header4.jpg`](/reference-images/section-headers/section-header4.jpg) | — | [open](https://www.relume.ai/preview?cid=section-headers/section-header4&context=react) |

## sidebars

Predicted behavior: Sidebar layouts: sticky sidebar (filters/TOC/account) + content column; mobile collapses to drawer.

| # | Component | Local image | Flags | Relume preview |
|---|-----------|-------------|-------|----------------|
| 1326 | Sidebar 1 | [`sidebars/sidebar1_component.jpg`](/reference-images/sidebars/sidebar1_component.jpg) | — | [open](https://www.relume.ai/preview?cid=sidebars/sidebar1_component&context=react) |
| 1327 | Sidebar 2 | [`sidebars/sidebar2_component.jpg`](/reference-images/sidebars/sidebar2_component.jpg) | — | [open](https://www.relume.ai/preview?cid=sidebars/sidebar2_component&context=react) |
| 1328 | Sidebar 3 | [`sidebars/sidebar3_component.jpg`](/reference-images/sidebars/sidebar3_component.jpg) | I | [open](https://www.relume.ai/preview?cid=sidebars/sidebar3_component&context=react) |
| 1329 | Sidebar 4 | [`sidebars/sidebar4_component.jpg`](/reference-images/sidebars/sidebar4_component.jpg) | — | [open](https://www.relume.ai/preview?cid=sidebars/sidebar4_component&context=react) |
| 1330 | Sidebar 5 | [`sidebars/sidebar5_component.jpg`](/reference-images/sidebars/sidebar5_component.jpg) | — | [open](https://www.relume.ai/preview?cid=sidebars/sidebar5_component&context=react) |
| 1331 | Sidebar 6 | [`sidebars/sidebar6_component.jpg`](/reference-images/sidebars/sidebar6_component.jpg) | I | [open](https://www.relume.ai/preview?cid=sidebars/sidebar6_component&context=react) |
| 1332 | Sidebar 7 | [`sidebars/sidebar7_component.jpg`](/reference-images/sidebars/sidebar7_component.jpg) | — | [open](https://www.relume.ai/preview?cid=sidebars/sidebar7_component&context=react) |
| 1333 | Sidebar 8 | [`sidebars/sidebar8_component.jpg`](/reference-images/sidebars/sidebar8_component.jpg) | — | [open](https://www.relume.ai/preview?cid=sidebars/sidebar8_component&context=react) |
| 1334 | Sidebar 9 | [`sidebars/sidebar9_component.jpg`](/reference-images/sidebars/sidebar9_component.jpg) | I | [open](https://www.relume.ai/preview?cid=sidebars/sidebar9_component&context=react) |

## stacked-lists

Predicted behavior: Stacked rows/cards: numbered or avatar rows (rankings, activity), divider between items.

| # | Component | Local image | Flags | Relume preview |
|---|-----------|-------------|-------|----------------|
| 1347 | Stacked List 1 | [`stacked-lists/stacked-list1_component.jpg`](/reference-images/stacked-lists/stacked-list1_component.jpg) | — | [open](https://www.relume.ai/preview?cid=stacked-lists/stacked-list1_component&context=react) |
| 1348 | Stacked List 2 | [`stacked-lists/stacked-list2_component.jpg`](/reference-images/stacked-lists/stacked-list2_component.jpg) | — | [open](https://www.relume.ai/preview?cid=stacked-lists/stacked-list2_component&context=react) |
| 1349 | Stacked List 3 | [`stacked-lists/stacked-list3_component.jpg`](/reference-images/stacked-lists/stacked-list3_component.jpg) | — | [open](https://www.relume.ai/preview?cid=stacked-lists/stacked-list3_component&context=react) |
| 1350 | Stacked List 4 | [`stacked-lists/stacked-list4_component.jpg`](/reference-images/stacked-lists/stacked-list4_component.jpg) | — | [open](https://www.relume.ai/preview?cid=stacked-lists/stacked-list4_component&context=react) |
| 1351 | Stacked List 5 | [`stacked-lists/stacked-list5_component.jpg`](/reference-images/stacked-lists/stacked-list5_component.jpg) | — | [open](https://www.relume.ai/preview?cid=stacked-lists/stacked-list5_component&context=react) |
| 1352 | Stacked List 6 | [`stacked-lists/stacked-list6_component.jpg`](/reference-images/stacked-lists/stacked-list6_component.jpg) | — | [open](https://www.relume.ai/preview?cid=stacked-lists/stacked-list6_component&context=react) |
| 1353 | Stacked List 7 | [`stacked-lists/stacked-list7_component.jpg`](/reference-images/stacked-lists/stacked-list7_component.jpg) | — | [open](https://www.relume.ai/preview?cid=stacked-lists/stacked-list7_component&context=react) |
| 1354 | Stacked List 8 | [`stacked-lists/stacked-list8_component.jpg`](/reference-images/stacked-lists/stacked-list8_component.jpg) | — | [open](https://www.relume.ai/preview?cid=stacked-lists/stacked-list8_component&context=react) |
| 1355 | Stacked List 9 | [`stacked-lists/stacked-list9_component.jpg`](/reference-images/stacked-lists/stacked-list9_component.jpg) | — | [open](https://www.relume.ai/preview?cid=stacked-lists/stacked-list9_component&context=react) |
| 1356 | Stacked List 10 | [`stacked-lists/stacked-list10_component.jpg`](/reference-images/stacked-lists/stacked-list10_component.jpg) | — | [open](https://www.relume.ai/preview?cid=stacked-lists/stacked-list10_component&context=react) |

## stat-cards

Predicted behavior: Stat cards: big number + label, optional icon/delta, in cards or bare.

| # | Component | Local image | Flags | Relume preview |
|---|-----------|-------------|-------|----------------|
| 1357 | Stat Card 1 | [`stat-cards/stat1_component.jpg`](/reference-images/stat-cards/stat1_component.jpg) | — | [open](https://www.relume.ai/preview?cid=stat-cards/stat1_component&context=react) |
| 1358 | Stat Card 2 | [`stat-cards/stat2_component.jpg`](/reference-images/stat-cards/stat2_component.jpg) | — | [open](https://www.relume.ai/preview?cid=stat-cards/stat2_component&context=react) |
| 1359 | Stat Card 3 | [`stat-cards/stat3_component.jpg`](/reference-images/stat-cards/stat3_component.jpg) | — | [open](https://www.relume.ai/preview?cid=stat-cards/stat3_component&context=react) |
| 1360 | Stat Card 4 | [`stat-cards/stat4_component.jpg`](/reference-images/stat-cards/stat4_component.jpg) | — | [open](https://www.relume.ai/preview?cid=stat-cards/stat4_component&context=react) |
| 1361 | Stat Card 5 | [`stat-cards/stat5_component.jpg`](/reference-images/stat-cards/stat5_component.jpg) | — | [open](https://www.relume.ai/preview?cid=stat-cards/stat5_component&context=react) |
| 1362 | Stat Card 6 | [`stat-cards/stat6_component.jpg`](/reference-images/stat-cards/stat6_component.jpg) | — | [open](https://www.relume.ai/preview?cid=stat-cards/stat6_component&context=react) |
| 1363 | Stat Card 7 | [`stat-cards/stat7_component.jpg`](/reference-images/stat-cards/stat7_component.jpg) | — | [open](https://www.relume.ai/preview?cid=stat-cards/stat7_component&context=react) |
| 1364 | Stat Card 8 | [`stat-cards/stat8_component.jpg`](/reference-images/stat-cards/stat8_component.jpg) | — | [open](https://www.relume.ai/preview?cid=stat-cards/stat8_component&context=react) |

## stats-sections

Predicted behavior: Stats band: row of 3-4 big numbers + labels; sometimes with icons or background image.

| # | Component | Local image | Flags | Relume preview |
|---|-----------|-------------|-------|----------------|
| 1365 | Stats 1 | [`stats-sections/section_stats1.jpg`](/reference-images/stats-sections/section_stats1.jpg) | — | [open](https://www.relume.ai/preview?cid=stats-sections/section_stats1&context=react) |
| 1366 | Stats 2 | [`stats-sections/section_stats2.jpg`](/reference-images/stats-sections/section_stats2.jpg) | — | [open](https://www.relume.ai/preview?cid=stats-sections/section_stats2&context=react) |
| 1367 | Stats 3 | [`stats-sections/section_stats3.jpg`](/reference-images/stats-sections/section_stats3.jpg) | — | [open](https://www.relume.ai/preview?cid=stats-sections/section_stats3&context=react) |
| 1368 | Stats 4 | [`stats-sections/section_stats4.jpg`](/reference-images/stats-sections/section_stats4.jpg) | — | [open](https://www.relume.ai/preview?cid=stats-sections/section_stats4&context=react) |
| 1369 | Stats 5 | [`stats-sections/section_stats5.jpg`](/reference-images/stats-sections/section_stats5.jpg) | — | [open](https://www.relume.ai/preview?cid=stats-sections/section_stats5&context=react) |
| 1370 | Stats 6 | [`stats-sections/section_stats6.jpg`](/reference-images/stats-sections/section_stats6.jpg) | — | [open](https://www.relume.ai/preview?cid=stats-sections/section_stats6&context=react) |
| 1371 | Stats 7 | [`stats-sections/section_stats7.jpg`](/reference-images/stats-sections/section_stats7.jpg) | — | [open](https://www.relume.ai/preview?cid=stats-sections/section_stats7&context=react) |
| 1372 | Stats 8 | [`stats-sections/section_stats8.jpg`](/reference-images/stats-sections/section_stats8.jpg) | — | [open](https://www.relume.ai/preview?cid=stats-sections/section_stats8&context=react) |
| 1373 | Stats 9 | [`stats-sections/section_stats9.jpg`](/reference-images/stats-sections/section_stats9.jpg) | — | [open](https://www.relume.ai/preview?cid=stats-sections/section_stats9&context=react) |
| 1374 | Stats 10 | [`stats-sections/section_stats10.jpg`](/reference-images/stats-sections/section_stats10.jpg) | — | [open](https://www.relume.ai/preview?cid=stats-sections/section_stats10&context=react) |
| 1375 | Stats 11 | [`stats-sections/section_stats11.jpg`](/reference-images/stats-sections/section_stats11.jpg) | — | [open](https://www.relume.ai/preview?cid=stats-sections/section_stats11&context=react) |
| 1376 | Stats 12 | [`stats-sections/section_stats12.jpg`](/reference-images/stats-sections/section_stats12.jpg) | — | [open](https://www.relume.ai/preview?cid=stats-sections/section_stats12&context=react) |
| 1377 | Stats 13 | [`stats-sections/section_stats13.jpg`](/reference-images/stats-sections/section_stats13.jpg) | — | [open](https://www.relume.ai/preview?cid=stats-sections/section_stats13&context=react) |
| 1378 | Stats 14 | [`stats-sections/section_stats14.jpg`](/reference-images/stats-sections/section_stats14.jpg) | — | [open](https://www.relume.ai/preview?cid=stats-sections/section_stats14&context=react) |
| 1379 | Stats 15 | [`stats-sections/section_stats15.jpg`](/reference-images/stats-sections/section_stats15.jpg) | — | [open](https://www.relume.ai/preview?cid=stats-sections/section_stats15&context=react) |
| 1380 | Stats 16 | [`stats-sections/section_stats16.jpg`](/reference-images/stats-sections/section_stats16.jpg) | — | [open](https://www.relume.ai/preview?cid=stats-sections/section_stats16&context=react) |
| 1381 | Stats 17 | [`stats-sections/section_stats17.jpg`](/reference-images/stats-sections/section_stats17.jpg) | — | [open](https://www.relume.ai/preview?cid=stats-sections/section_stats17&context=react) |
| 1382 | Stats 18 | [`stats-sections/section_stats18.jpg`](/reference-images/stats-sections/section_stats18.jpg) | — | [open](https://www.relume.ai/preview?cid=stats-sections/section_stats18&context=react) |
| 1383 | Stats 19 | [`stats-sections/section_stats19.jpg`](/reference-images/stats-sections/section_stats19.jpg) | — | [open](https://www.relume.ai/preview?cid=stats-sections/section_stats19&context=react) |
| 1384 | Stats 20 | [`stats-sections/section_stats20.jpg`](/reference-images/stats-sections/section_stats20.jpg) | — | [open](https://www.relume.ai/preview?cid=stats-sections/section_stats20&context=react) |
| 1385 | Stats 21 | [`stats-sections/section_stats21.jpg`](/reference-images/stats-sections/section_stats21.jpg) | — | [open](https://www.relume.ai/preview?cid=stats-sections/section_stats21&context=react) |
| 1386 | Stats 22 | [`stats-sections/section_stats22.jpg`](/reference-images/stats-sections/section_stats22.jpg) | — | [open](https://www.relume.ai/preview?cid=stats-sections/section_stats22&context=react) |
| 1387 | Stats 23 | [`stats-sections/section_stats23.jpg`](/reference-images/stats-sections/section_stats23.jpg) | — | [open](https://www.relume.ai/preview?cid=stats-sections/section_stats23&context=react) |
| 1388 | Stats 24 | [`stats-sections/section_stats24.jpg`](/reference-images/stats-sections/section_stats24.jpg) | — | [open](https://www.relume.ai/preview?cid=stats-sections/section_stats24&context=react) |
| 1389 | Stats 25 | [`stats-sections/section_stats25.jpg`](/reference-images/stats-sections/section_stats25.jpg) | — | [open](https://www.relume.ai/preview?cid=stats-sections/section_stats25&context=react) |
| 1390 | Stats 26 | [`stats-sections/section_stats26.jpg`](/reference-images/stats-sections/section_stats26.jpg) | — | [open](https://www.relume.ai/preview?cid=stats-sections/section_stats26&context=react) |
| 1391 | Stats 27 | [`stats-sections/section_stats27.jpg`](/reference-images/stats-sections/section_stats27.jpg) | — | [open](https://www.relume.ai/preview?cid=stats-sections/section_stats27&context=react) |
| 1392 | Stats 28 | [`stats-sections/section_stats28.jpg`](/reference-images/stats-sections/section_stats28.jpg) | — | [open](https://www.relume.ai/preview?cid=stats-sections/section_stats28&context=react) |
| 1393 | Stats 29 | [`stats-sections/section_stats29.jpg`](/reference-images/stats-sections/section_stats29.jpg) | — | [open](https://www.relume.ai/preview?cid=stats-sections/section_stats29&context=react) |
| 1394 | Stats 30 | [`stats-sections/section_stats30.jpg`](/reference-images/stats-sections/section_stats30.jpg) | — | [open](https://www.relume.ai/preview?cid=stats-sections/section_stats30&context=react) |
| 1395 | Stats 31 | [`stats-sections/section_stats31.jpg`](/reference-images/stats-sections/section_stats31.jpg) | — | [open](https://www.relume.ai/preview?cid=stats-sections/section_stats31&context=react) |
| 1396 | Stats 32 | [`stats-sections/section_stats32.jpg`](/reference-images/stats-sections/section_stats32.jpg) | — | [open](https://www.relume.ai/preview?cid=stats-sections/section_stats32&context=react) |
| 1397 | Stats 33 | [`stats-sections/section_stats33.jpg`](/reference-images/stats-sections/section_stats33.jpg) | — | [open](https://www.relume.ai/preview?cid=stats-sections/section_stats33&context=react) |
| 1398 | Stats 34 | [`stats-sections/section_stats34.jpg`](/reference-images/stats-sections/section_stats34.jpg) | — | [open](https://www.relume.ai/preview?cid=stats-sections/section_stats34&context=react) |
| 1399 | Stats 35 | [`stats-sections/section_stats35.jpg`](/reference-images/stats-sections/section_stats35.jpg) | — | [open](https://www.relume.ai/preview?cid=stats-sections/section_stats35&context=react) |
| 1400 | Stats 36 | [`stats-sections/section_stats36.jpg`](/reference-images/stats-sections/section_stats36.jpg) | — | [open](https://www.relume.ai/preview?cid=stats-sections/section_stats36&context=react) |
| 1401 | Stats 37 | [`stats-sections/section_stats37.jpg`](/reference-images/stats-sections/section_stats37.jpg) | — | [open](https://www.relume.ai/preview?cid=stats-sections/section_stats37&context=react) |
| 1402 | Stats 38 | [`stats-sections/section_stats38.jpg`](/reference-images/stats-sections/section_stats38.jpg) | — | [open](https://www.relume.ai/preview?cid=stats-sections/section_stats38&context=react) |
| 1403 | Stats 39 | [`stats-sections/section_stats39.jpg`](/reference-images/stats-sections/section_stats39.jpg) | — | [open](https://www.relume.ai/preview?cid=stats-sections/section_stats39&context=react) |
| 1404 | Stats 40 | [`stats-sections/section_stats40.jpg`](/reference-images/stats-sections/section_stats40.jpg) | — | [open](https://www.relume.ai/preview?cid=stats-sections/section_stats40&context=react) |
| 1405 | Stats 41 | [`stats-sections/section_stats41.jpg`](/reference-images/stats-sections/section_stats41.jpg) | — | [open](https://www.relume.ai/preview?cid=stats-sections/section_stats41&context=react) |
| 1406 | Stats 42 | [`stats-sections/section_stats42.jpg`](/reference-images/stats-sections/section_stats42.jpg) | — | [open](https://www.relume.ai/preview?cid=stats-sections/section_stats42&context=react) |
| 1407 | Stats 43 | [`stats-sections/section_stats43.jpg`](/reference-images/stats-sections/section_stats43.jpg) | — | [open](https://www.relume.ai/preview?cid=stats-sections/section_stats43&context=react) |
| 1408 | Stats 44 | [`stats-sections/section_stats44.jpg`](/reference-images/stats-sections/section_stats44.jpg) | — | [open](https://www.relume.ai/preview?cid=stats-sections/section_stats44&context=react) |
| 1409 | Stats 45 | [`stats-sections/section_stats45.jpg`](/reference-images/stats-sections/section_stats45.jpg) | — | [open](https://www.relume.ai/preview?cid=stats-sections/section_stats45&context=react) |
| 1410 | Stats 46 | [`stats-sections/section_stats46.jpg`](/reference-images/stats-sections/section_stats46.jpg) | — | [open](https://www.relume.ai/preview?cid=stats-sections/section_stats46&context=react) |
| 1411 | Stats 47 | [`stats-sections/section_stats47.jpg`](/reference-images/stats-sections/section_stats47.jpg) | — | [open](https://www.relume.ai/preview?cid=stats-sections/section_stats47&context=react) |
| 1412 | Stats 48 | [`stats-sections/section_stats48.jpg`](/reference-images/stats-sections/section_stats48.jpg) | — | [open](https://www.relume.ai/preview?cid=stats-sections/section_stats48&context=react) |
| 1413 | Stats 49 | [`stats-sections/section_stats49.jpg`](/reference-images/stats-sections/section_stats49.jpg) | — | [open](https://www.relume.ai/preview?cid=stats-sections/section_stats49&context=react) |
| 1414 | Stats 50 | [`stats-sections/section_stats50.jpg`](/reference-images/stats-sections/section_stats50.jpg) | — | [open](https://www.relume.ai/preview?cid=stats-sections/section_stats50&context=react) |
| 1415 | Stats 51 | [`stats-sections/section_stats51.jpg`](/reference-images/stats-sections/section_stats51.jpg) | — | [open](https://www.relume.ai/preview?cid=stats-sections/section_stats51&context=react) |
| 1416 | Stats 52 | [`stats-sections/section_stats52.jpg`](/reference-images/stats-sections/section_stats52.jpg) | — | [open](https://www.relume.ai/preview?cid=stats-sections/section_stats52&context=react) |
| 1417 | Stats 53 | [`stats-sections/section_stats53.jpg`](/reference-images/stats-sections/section_stats53.jpg) | — | [open](https://www.relume.ai/preview?cid=stats-sections/section_stats53&context=react) |
| 1418 | Stats 54 | [`stats-sections/section_stats54.jpg`](/reference-images/stats-sections/section_stats54.jpg) | — | [open](https://www.relume.ai/preview?cid=stats-sections/section_stats54&context=react) |
| 1419 | Stats 55 | [`stats-sections/section_stats55.jpg`](/reference-images/stats-sections/section_stats55.jpg) | — | [open](https://www.relume.ai/preview?cid=stats-sections/section_stats55&context=react) |
| 1420 | Stats 56 | [`stats-sections/section_stats56.jpg`](/reference-images/stats-sections/section_stats56.jpg) | — | [open](https://www.relume.ai/preview?cid=stats-sections/section_stats56&context=react) |
| 1421 | Stats 57 | [`stats-sections/section_stats57.jpg`](/reference-images/stats-sections/section_stats57.jpg) | — | [open](https://www.relume.ai/preview?cid=stats-sections/section_stats57&context=react) |
| 1422 | Stats 58 | [`stats-sections/section_stats58.jpg`](/reference-images/stats-sections/section_stats58.jpg) | — | [open](https://www.relume.ai/preview?cid=stats-sections/section_stats58&context=react) |
| 1423 | Stats 59 | [`stats-sections/section_stats59.jpg`](/reference-images/stats-sections/section_stats59.jpg) | — | [open](https://www.relume.ai/preview?cid=stats-sections/section_stats59&context=react) |
| 1424 | Stats 60 | [`stats-sections/section_stats60.jpg`](/reference-images/stats-sections/section_stats60.jpg) | — | [open](https://www.relume.ai/preview?cid=stats-sections/section_stats60&context=react) |

## tables

Predicted behavior: Data table: thead + striped rows, badges/avatars inside cells, optional header actions + pagination.

| # | Component | Local image | Flags | Relume preview |
|---|-----------|-------------|-------|----------------|
| 1425 | Table 1 | [`tables/section_table1.jpg`](/reference-images/tables/section_table1.jpg) | — | [open](https://www.relume.ai/preview?cid=tables/section_table1&context=react) |
| 1426 | Table 2 | [`tables/section_table2.jpg`](/reference-images/tables/section_table2.jpg) | — | [open](https://www.relume.ai/preview?cid=tables/section_table2&context=react) |
| 1427 | Table 3 | [`tables/section_table3.jpg`](/reference-images/tables/section_table3.jpg) | — | [open](https://www.relume.ai/preview?cid=tables/section_table3&context=react) |
| 1428 | Table 4 | [`tables/section_table4.jpg`](/reference-images/tables/section_table4.jpg) | — | [open](https://www.relume.ai/preview?cid=tables/section_table4&context=react) |
| 1429 | Table 5 | [`tables/section_table5.jpg`](/reference-images/tables/section_table5.jpg) | — | [open](https://www.relume.ai/preview?cid=tables/section_table5&context=react) |
| 1430 | Table 6 | [`tables/section_table6.jpg`](/reference-images/tables/section_table6.jpg) | — | [open](https://www.relume.ai/preview?cid=tables/section_table6&context=react) |
| 1431 | Table 7 | [`tables/section_table7.jpg`](/reference-images/tables/section_table7.jpg) | — | [open](https://www.relume.ai/preview?cid=tables/section_table7&context=react) |
| 1432 | Table 8 | [`tables/section_table8.jpg`](/reference-images/tables/section_table8.jpg) | — | [open](https://www.relume.ai/preview?cid=tables/section_table8&context=react) |
| 1433 | Table 9 | [`tables/section_table9.jpg`](/reference-images/tables/section_table9.jpg) | — | [open](https://www.relume.ai/preview?cid=tables/section_table9&context=react) |
| 1434 | Table 10 | [`tables/section_table10.jpg`](/reference-images/tables/section_table10.jpg) | — | [open](https://www.relume.ai/preview?cid=tables/section_table10&context=react) |

## team-sections

Predicted behavior: Team grid: member cards (photo, name, role, social icons).

| # | Component | Local image | Flags | Relume preview |
|---|-----------|-------------|-------|----------------|
| 1435 | Team 1 | [`team-sections/section_team1.jpg`](/reference-images/team-sections/section_team1.jpg) | — | [open](https://www.relume.ai/preview?cid=team-sections/section_team1&context=react) |
| 1436 | Team 2 | [`team-sections/section_team2.jpg`](/reference-images/team-sections/section_team2.jpg) | — | [open](https://www.relume.ai/preview?cid=team-sections/section_team2&context=react) |
| 1437 | Team 3 | [`team-sections/section_team3.jpg`](/reference-images/team-sections/section_team3.jpg) | — | [open](https://www.relume.ai/preview?cid=team-sections/section_team3&context=react) |
| 1438 | Team 4 | [`team-sections/section_team4.jpg`](/reference-images/team-sections/section_team4.jpg) | — | [open](https://www.relume.ai/preview?cid=team-sections/section_team4&context=react) |
| 1439 | Team 5 | [`team-sections/section_team5.jpg`](/reference-images/team-sections/section_team5.jpg) | — | [open](https://www.relume.ai/preview?cid=team-sections/section_team5&context=react) |
| 1440 | Team 6 | [`team-sections/section_team6.jpg`](/reference-images/team-sections/section_team6.jpg) | — | [open](https://www.relume.ai/preview?cid=team-sections/section_team6&context=react) |
| 1441 | Team 7 | [`team-sections/section_team7.jpg`](/reference-images/team-sections/section_team7.jpg) | — | [open](https://www.relume.ai/preview?cid=team-sections/section_team7&context=react) |
| 1442 | Team 8 | [`team-sections/section_team8.jpg`](/reference-images/team-sections/section_team8.jpg) | — | [open](https://www.relume.ai/preview?cid=team-sections/section_team8&context=react) |
| 1443 | Team 9 | [`team-sections/section_team9.jpg`](/reference-images/team-sections/section_team9.jpg) | — | [open](https://www.relume.ai/preview?cid=team-sections/section_team9&context=react) |
| 1444 | Team 10 | [`team-sections/section_team10.jpg`](/reference-images/team-sections/section_team10.jpg) | — | [open](https://www.relume.ai/preview?cid=team-sections/section_team10&context=react) |
| 1445 | Team 11 | [`team-sections/section_team11.jpg`](/reference-images/team-sections/section_team11.jpg) | — | [open](https://www.relume.ai/preview?cid=team-sections/section_team11&context=react) |
| 1446 | Team 12 | [`team-sections/section_team12.jpg`](/reference-images/team-sections/section_team12.jpg) | — | [open](https://www.relume.ai/preview?cid=team-sections/section_team12&context=react) |
| 1447 | Team 13 | [`team-sections/section_team13.jpg`](/reference-images/team-sections/section_team13.jpg) | — | [open](https://www.relume.ai/preview?cid=team-sections/section_team13&context=react) |
| 1448 | Team 14 | [`team-sections/section_team14.jpg`](/reference-images/team-sections/section_team14.jpg) | — | [open](https://www.relume.ai/preview?cid=team-sections/section_team14&context=react) |
| 1449 | Team 15 | [`team-sections/section_team15.jpg`](/reference-images/team-sections/section_team15.jpg) | — | [open](https://www.relume.ai/preview?cid=team-sections/section_team15&context=react) |
| 1450 | Team 16 | [`team-sections/section_team16.jpg`](/reference-images/team-sections/section_team16.jpg) | — | [open](https://www.relume.ai/preview?cid=team-sections/section_team16&context=react) |
| 1451 | Team 17 | [`team-sections/section_team17.jpg`](/reference-images/team-sections/section_team17.jpg) | — | [open](https://www.relume.ai/preview?cid=team-sections/section_team17&context=react) |
| 1452 | Team 18 | [`team-sections/section_team18.jpg`](/reference-images/team-sections/section_team18.jpg) | — | [open](https://www.relume.ai/preview?cid=team-sections/section_team18&context=react) |
| 1453 | Team 19 | [`team-sections/section_team19.jpg`](/reference-images/team-sections/section_team19.jpg) | — | [open](https://www.relume.ai/preview?cid=team-sections/section_team19&context=react) |
| 1454 | Team 20 | [`team-sections/section_team20.jpg`](/reference-images/team-sections/section_team20.jpg) | — | [open](https://www.relume.ai/preview?cid=team-sections/section_team20&context=react) |

## testimonial-sections

Predicted behavior: Testimonial cards: quote, avatar, name, role, star rating; grid or slider/carousel.

| # | Component | Local image | Flags | Relume preview |
|---|-----------|-------------|-------|----------------|
| 1457 | Testimonial 1 | [`testimonial-sections/section_testimonial1.jpg`](/reference-images/testimonial-sections/section_testimonial1.jpg) | — | [open](https://www.relume.ai/preview?cid=testimonial-sections/section_testimonial1&context=react) |
| 1458 | Testimonial 2 | [`testimonial-sections/section_testimonial2.jpg`](/reference-images/testimonial-sections/section_testimonial2.jpg) | — | [open](https://www.relume.ai/preview?cid=testimonial-sections/section_testimonial2&context=react) |
| 1459 | Testimonial 3 | [`testimonial-sections/section_testimonial3.jpg`](/reference-images/testimonial-sections/section_testimonial3.jpg) | — | [open](https://www.relume.ai/preview?cid=testimonial-sections/section_testimonial3&context=react) |
| 1460 | Testimonial 4 | [`testimonial-sections/section_testimonial4.jpg`](/reference-images/testimonial-sections/section_testimonial4.jpg) | — | [open](https://www.relume.ai/preview?cid=testimonial-sections/section_testimonial4&context=react) |
| 1461 | Testimonial 5 | [`testimonial-sections/section_testimonial5.jpg`](/reference-images/testimonial-sections/section_testimonial5.jpg) | — | [open](https://www.relume.ai/preview?cid=testimonial-sections/section_testimonial5&context=react) |
| 1462 | Testimonial 6 | [`testimonial-sections/section_testimonial6.jpg`](/reference-images/testimonial-sections/section_testimonial6.jpg) | — | [open](https://www.relume.ai/preview?cid=testimonial-sections/section_testimonial6&context=react) |
| 1463 | Testimonial 7 | [`testimonial-sections/section_testimonial7.jpg`](/reference-images/testimonial-sections/section_testimonial7.jpg) | — | [open](https://www.relume.ai/preview?cid=testimonial-sections/section_testimonial7&context=react) |
| 1464 | Testimonial 8 | [`testimonial-sections/section_testimonial8.jpg`](/reference-images/testimonial-sections/section_testimonial8.jpg) | — | [open](https://www.relume.ai/preview?cid=testimonial-sections/section_testimonial8&context=react) |
| 1465 | Testimonial 9 | [`testimonial-sections/section_testimonial9.jpg`](/reference-images/testimonial-sections/section_testimonial9.jpg) | — | [open](https://www.relume.ai/preview?cid=testimonial-sections/section_testimonial9&context=react) |
| 1466 | Testimonial 10 | [`testimonial-sections/section_testimonial10.jpg`](/reference-images/testimonial-sections/section_testimonial10.jpg) | — | [open](https://www.relume.ai/preview?cid=testimonial-sections/section_testimonial10&context=react) |
| 1467 | Testimonial 11 | [`testimonial-sections/section_testimonial11.jpg`](/reference-images/testimonial-sections/section_testimonial11.jpg) | — | [open](https://www.relume.ai/preview?cid=testimonial-sections/section_testimonial11&context=react) |
| 1468 | Testimonial 12 | [`testimonial-sections/section_testimonial12.jpg`](/reference-images/testimonial-sections/section_testimonial12.jpg) | — | [open](https://www.relume.ai/preview?cid=testimonial-sections/section_testimonial12&context=react) |
| 1469 | Testimonial 13 | [`testimonial-sections/section_testimonial13.jpg`](/reference-images/testimonial-sections/section_testimonial13.jpg) | — | [open](https://www.relume.ai/preview?cid=testimonial-sections/section_testimonial13&context=react) |
| 1470 | Testimonial 14 | [`testimonial-sections/section_testimonial14.jpg`](/reference-images/testimonial-sections/section_testimonial14.jpg) | — | [open](https://www.relume.ai/preview?cid=testimonial-sections/section_testimonial14&context=react) |
| 1471 | Testimonial 15 | [`testimonial-sections/section_testimonial15.jpg`](/reference-images/testimonial-sections/section_testimonial15.jpg) | — | [open](https://www.relume.ai/preview?cid=testimonial-sections/section_testimonial15&context=react) |
| 1472 | Testimonial 16 | [`testimonial-sections/section_testimonial16.jpg`](/reference-images/testimonial-sections/section_testimonial16.jpg) | — | [open](https://www.relume.ai/preview?cid=testimonial-sections/section_testimonial16&context=react) |
| 1473 | Testimonial 17 | [`testimonial-sections/section_testimonial17.jpg`](/reference-images/testimonial-sections/section_testimonial17.jpg) | — | [open](https://www.relume.ai/preview?cid=testimonial-sections/section_testimonial17&context=react) |
| 1474 | Testimonial 18 | [`testimonial-sections/section_testimonial18.jpg`](/reference-images/testimonial-sections/section_testimonial18.jpg) | — | [open](https://www.relume.ai/preview?cid=testimonial-sections/section_testimonial18&context=react) |
| 1475 | Testimonial 19 | [`testimonial-sections/section_testimonial19.jpg`](/reference-images/testimonial-sections/section_testimonial19.jpg) | — | [open](https://www.relume.ai/preview?cid=testimonial-sections/section_testimonial19&context=react) |
| 1476 | Testimonial 20 | [`testimonial-sections/section_testimonial20.jpg`](/reference-images/testimonial-sections/section_testimonial20.jpg) | — | [open](https://www.relume.ai/preview?cid=testimonial-sections/section_testimonial20&context=react) |
| 1477 | Testimonial 21 | [`testimonial-sections/section_testimonial21.jpg`](/reference-images/testimonial-sections/section_testimonial21.jpg) | I | [open](https://www.relume.ai/preview?cid=testimonial-sections/section_testimonial21&context=react) |
| 1478 | Testimonial 22 | [`testimonial-sections/section_testimonial22.jpg`](/reference-images/testimonial-sections/section_testimonial22.jpg) | — | [open](https://www.relume.ai/preview?cid=testimonial-sections/section_testimonial22&context=react) |
| 1479 | Testimonial 23 | [`testimonial-sections/section_testimonial23.jpg`](/reference-images/testimonial-sections/section_testimonial23.jpg) | — | [open](https://www.relume.ai/preview?cid=testimonial-sections/section_testimonial23&context=react) |
| 1480 | Testimonial 24 | [`testimonial-sections/section_testimonial24.jpg`](/reference-images/testimonial-sections/section_testimonial24.jpg) | — | [open](https://www.relume.ai/preview?cid=testimonial-sections/section_testimonial24&context=react) |
| 1481 | Testimonial 25 | [`testimonial-sections/section_testimonial25.jpg`](/reference-images/testimonial-sections/section_testimonial25.jpg) | — | [open](https://www.relume.ai/preview?cid=testimonial-sections/section_testimonial25&context=react) |
| 1482 | Testimonial 26 | [`testimonial-sections/section_testimonial26.jpg`](/reference-images/testimonial-sections/section_testimonial26.jpg) | — | [open](https://www.relume.ai/preview?cid=testimonial-sections/section_testimonial26&context=react) |
| 1483 | Testimonial 27 | [`testimonial-sections/section_testimonial27.jpg`](/reference-images/testimonial-sections/section_testimonial27.jpg) | — | [open](https://www.relume.ai/preview?cid=testimonial-sections/section_testimonial27&context=react) |
| 1484 | Testimonial 28 | [`testimonial-sections/section_testimonial28.jpg`](/reference-images/testimonial-sections/section_testimonial28.jpg) | — | [open](https://www.relume.ai/preview?cid=testimonial-sections/section_testimonial28&context=react) |
| 1485 | Testimonial 29 | [`testimonial-sections/section_testimonial29.jpg`](/reference-images/testimonial-sections/section_testimonial29.jpg) | — | [open](https://www.relume.ai/preview?cid=testimonial-sections/section_testimonial29&context=react) |
| 1486 | Testimonial 30 | [`testimonial-sections/section_testimonial30.jpg`](/reference-images/testimonial-sections/section_testimonial30.jpg) | — | [open](https://www.relume.ai/preview?cid=testimonial-sections/section_testimonial30&context=react) |
| 1487 | Testimonial 31 | [`testimonial-sections/section_testimonial31.jpg`](/reference-images/testimonial-sections/section_testimonial31.jpg) | — | [open](https://www.relume.ai/preview?cid=testimonial-sections/section_testimonial31&context=react) |
| 1490 | Testimonial 34 | [`testimonial-sections/section_testimonial34.jpg`](/reference-images/testimonial-sections/section_testimonial34.jpg) | U | [open](https://www.relume.ai/preview?cid=testimonial-sections/section_testimonial34&context=react) |
| 1491 | Testimonial 35 | [`testimonial-sections/section_testimonial35.jpg`](/reference-images/testimonial-sections/section_testimonial35.jpg) | U | [open](https://www.relume.ai/preview?cid=testimonial-sections/section_testimonial35&context=react) |
| 1492 | Testimonial 36 | [`testimonial-sections/section_testimonial36.jpg`](/reference-images/testimonial-sections/section_testimonial36.jpg) | B | [open](https://www.relume.ai/preview?cid=testimonial-sections/section_testimonial36&context=react) |
| 1493 | Testimonial 37 | [`testimonial-sections/section_testimonial37.jpg`](/reference-images/testimonial-sections/section_testimonial37.jpg) | B | [open](https://www.relume.ai/preview?cid=testimonial-sections/section_testimonial37&context=react) |
| 1494 | Testimonial 38 | [`testimonial-sections/section_testimonial38.jpg`](/reference-images/testimonial-sections/section_testimonial38.jpg) | B | [open](https://www.relume.ai/preview?cid=testimonial-sections/section_testimonial38&context=react) |
| 1495 | Testimonial 39 | [`testimonial-sections/section_testimonial39.jpg`](/reference-images/testimonial-sections/section_testimonial39.jpg) | B | [open](https://www.relume.ai/preview?cid=testimonial-sections/section_testimonial39&context=react) |
| 1496 | Testimonial 40 | [`testimonial-sections/section_testimonial40.jpg`](/reference-images/testimonial-sections/section_testimonial40.jpg) | — | [open](https://www.relume.ai/preview?cid=testimonial-sections/section_testimonial40&context=react) |
| 1497 | Testimonial 41 | [`testimonial-sections/section_testimonial41.jpg`](/reference-images/testimonial-sections/section_testimonial41.jpg) | — | [open](https://www.relume.ai/preview?cid=testimonial-sections/section_testimonial41&context=react) |
| 1498 | Testimonial 42 | [`testimonial-sections/section_testimonial42.jpg`](/reference-images/testimonial-sections/section_testimonial42.jpg) | — | [open](https://www.relume.ai/preview?cid=testimonial-sections/section_testimonial42&context=react) |
| 1499 | Testimonial 43 | [`testimonial-sections/section_testimonial43.jpg`](/reference-images/testimonial-sections/section_testimonial43.jpg) | — | [open](https://www.relume.ai/preview?cid=testimonial-sections/section_testimonial43&context=react) |

## timelines

Predicted behavior: Timeline: vertical/horizontal line with dots/nodes and event cards (past/future).

| # | Component | Local image | Flags | Relume preview |
|---|-----------|-------------|-------|----------------|
| 1500 | Timeline 1 | [`timelines/section_timeline1.jpg`](/reference-images/timelines/section_timeline1.jpg) | I | [open](https://www.relume.ai/preview?cid=timelines/section_timeline1&context=react) |
| 1501 | Timeline 2 | [`timelines/section_timeline2.jpg`](/reference-images/timelines/section_timeline2.jpg) | I | [open](https://www.relume.ai/preview?cid=timelines/section_timeline2&context=react) |
| 1502 | Timeline 3 | [`timelines/section_timeline3.jpg`](/reference-images/timelines/section_timeline3.jpg) | I | [open](https://www.relume.ai/preview?cid=timelines/section_timeline3&context=react) |
| 1503 | Timeline 4 | [`timelines/section_timeline4.jpg`](/reference-images/timelines/section_timeline4.jpg) | I | [open](https://www.relume.ai/preview?cid=timelines/section_timeline4&context=react) |
| 1504 | Timeline 5 | [`timelines/section_timeline5.jpg`](/reference-images/timelines/section_timeline5.jpg) | I | [open](https://www.relume.ai/preview?cid=timelines/section_timeline5&context=react) |
| 1505 | Timeline 6 | [`timelines/section_timeline6.jpg`](/reference-images/timelines/section_timeline6.jpg) | I | [open](https://www.relume.ai/preview?cid=timelines/section_timeline6&context=react) |
| 1506 | Timeline 7 | [`timelines/section_timeline7.jpg`](/reference-images/timelines/section_timeline7.jpg) | I | [open](https://www.relume.ai/preview?cid=timelines/section_timeline7&context=react) |
| 1507 | Timeline 8 | [`timelines/section_timeline8.jpg`](/reference-images/timelines/section_timeline8.jpg) | I | [open](https://www.relume.ai/preview?cid=timelines/section_timeline8&context=react) |
| 1508 | Timeline 9 | [`timelines/section_timeline9.jpg`](/reference-images/timelines/section_timeline9.jpg) | I | [open](https://www.relume.ai/preview?cid=timelines/section_timeline9&context=react) |
| 1509 | Timeline 10 | [`timelines/section_timeline10.jpg`](/reference-images/timelines/section_timeline10.jpg) | I | [open](https://www.relume.ai/preview?cid=timelines/section_timeline10&context=react) |
| 1510 | Timeline 11 | [`timelines/section_timeline11.jpg`](/reference-images/timelines/section_timeline11.jpg) | I | [open](https://www.relume.ai/preview?cid=timelines/section_timeline11&context=react) |
| 1511 | Timeline 12 | [`timelines/section_timeline12.jpg`](/reference-images/timelines/section_timeline12.jpg) | I | [open](https://www.relume.ai/preview?cid=timelines/section_timeline12&context=react) |
| 1512 | Timeline 13 | [`timelines/section_timeline13.jpg`](/reference-images/timelines/section_timeline13.jpg) | I | [open](https://www.relume.ai/preview?cid=timelines/section_timeline13&context=react) |
| 1513 | Timeline 14 | [`timelines/section_timeline14.jpg`](/reference-images/timelines/section_timeline14.jpg) | I | [open](https://www.relume.ai/preview?cid=timelines/section_timeline14&context=react) |
| 1514 | Timeline 15 | [`timelines/section_timeline15.jpg`](/reference-images/timelines/section_timeline15.jpg) | I | [open](https://www.relume.ai/preview?cid=timelines/section_timeline15&context=react) |
| 1515 | Timeline 16 | [`timelines/section_timeline16.jpg`](/reference-images/timelines/section_timeline16.jpg) | — | [open](https://www.relume.ai/preview?cid=timelines/section_timeline16&context=react) |
| 1516 | Timeline 17 | [`timelines/section_timeline17.jpg`](/reference-images/timelines/section_timeline17.jpg) | — | [open](https://www.relume.ai/preview?cid=timelines/section_timeline17&context=react) |
| 1517 | Timeline 18 | [`timelines/section_timeline18.jpg`](/reference-images/timelines/section_timeline18.jpg) | — | [open](https://www.relume.ai/preview?cid=timelines/section_timeline18&context=react) |
| 1518 | Timeline 19 | [`timelines/section_timeline19.jpg`](/reference-images/timelines/section_timeline19.jpg) | — | [open](https://www.relume.ai/preview?cid=timelines/section_timeline19&context=react) |
| 1519 | Timeline 20 | [`timelines/section_timeline20.jpg`](/reference-images/timelines/section_timeline20.jpg) | — | [open](https://www.relume.ai/preview?cid=timelines/section_timeline20&context=react) |
| 1520 | Timeline 21 | [`timelines/section_timeline21.jpg`](/reference-images/timelines/section_timeline21.jpg) | — | [open](https://www.relume.ai/preview?cid=timelines/section_timeline21&context=react) |

## topbars

Predicted behavior: Utility bar above navbar: announcement text, region/language select, social links.

| # | Component | Local image | Flags | Relume preview |
|---|-----------|-------------|-------|----------------|
| 1521 | Topbar 1 | [`topbars/topbar1_component.jpg`](/reference-images/topbars/topbar1_component.jpg) | — | [open](https://www.relume.ai/preview?cid=topbars/topbar1_component&context=react) |
| 1522 | Topbar 2 | [`topbars/topbar2_component.jpg`](/reference-images/topbars/topbar2_component.jpg) | — | [open](https://www.relume.ai/preview?cid=topbars/topbar2_component&context=react) |
| 1523 | Topbar 3 | [`topbars/topbar3_component.jpg`](/reference-images/topbars/topbar3_component.jpg) | — | [open](https://www.relume.ai/preview?cid=topbars/topbar3_component&context=react) |
| 1524 | Topbar 4 | [`topbars/topbar4_component.jpg`](/reference-images/topbars/topbar4_component.jpg) | — | [open](https://www.relume.ai/preview?cid=topbars/topbar4_component&context=react) |
