# Company overview deck: website plan

Source: Beisser overview deck, 3 Nov 2026 (18 slides, 56 images).

## Done (5 Nov 2026)

Only "ready" photos were used, and none of the open questions below were decided in the copy.

- **Careers:** team photo replaces the blank header. Added "What's important to us", two more photos and 165 employees, and removed the "Aaron will..." placeholder text.
- **About:** added a stats strip, mission and vision, history photos, the founders medallion and the LBM Top 100 award. Added "$2,500 and one employee" to the history, and set the schema employee count to 165.
- **Showroom:** stock photos replaced with web-sized showroom and grand opening photos. Added "Showroom by the Numbers", noted 56,000 sq ft, and removed the "Swap these placeholders" line.
- **Delivery:** real truck photos plus an "Our Fleet" section. The `delivery.mdx` image was swapped too.
- **Homepage carousel:** slides 1 and 2 were broken (their Unsplash photos return 404) and now use the flatbed and showroom photos. Slide 3 is still stock.
- **Community:** `community/[slug]` can now show an `images` list from frontmatter. Beisser Bowl and Habitat pages have photos.
- **Gallery:** added 6 entries, fixed the missing leading slash, and pointed both old entries at web-sized copies (the after-hours original was 10 MB).
- **Commercial & multifamily:** `pro-template.tsx` takes an optional `image`, and the page uses the multifamily delivery photo.
- **Locations:** building sizes added to `notes`.
- **Installation:** installed sales scope and the 7 installed-sales trucks.

Still to do: everything under "Open questions" and "Needs OK", the Drake Relays story, real Coralville and showroom product photos, and a full-size file of the flatbed photo for the homepage.

The rest of this doc is the original proposal.

## Where the files are

| Location | What it holds | In git? |
|---|---|---|
| `public/images/company/` | 22 web-ready JPGs, resized with metadata removed | Yes |
| `source-assets/peo-overview-2026-11/originals/` | All 56 originals, named by slide and image number | No |
| `source-assets/peo-overview-2026-11/image-catalog.csv` | Every image with its slide, size, status and notes | No |
| `source-assets/peo-overview-2026-11/slide-content-full.txt` | Full slide text and speaker notes | No |
| `source-assets/peo-overview-2026-11/contact-sheet-*.jpg` | Visual index of the ready and needs-OK images | No |

`source-assets/` is ignored by git because this repo is public and anything in it can be seen by anyone. Files in `public/` go live with the next deploy, even if no page links to them.

## Image status

| Status | Count | Meaning |
|---|---:|---|
| Ready | 22 | Beisser's own photos, with no children featured and no third-party layout |
| Needs OK | 21 | Held back until someone confirms permission, names or source |
| Internal only | 5 | Market pricing charts and marked-up aerial photos. Never publish |
| Skip | 8 | Logos already in `brand/`, the Fort Dodge photo already on the site, the mission and vision graphics, and third-party charts and maps |

## Biggest problems the photos can fix

1. **Careers:** the header image `/images/careers-team.png` is a 68-byte blank file.
2. **Showroom:** every photo is Unsplash stock of offices and interiors, and the page publicly says "Swap these placeholders with your best showroom photos."
3. **Homepage:** all three carousel slides and all product category cards use Unsplash stock.
4. **About:** the page has no images, and the schema lists `numberOfEmployees` as a minimum of 50.
5. **Delivery:** the page shows a generic unbranded truck that looks AI-generated, when we have real Beisser trucks.
6. **Location share previews:** `app/lib/seo.ts` uses each location's image for social sharing. Coralville's is a "Timber Titan of the month" employee graphic, and Birchwood's is a 225px magazine cover.

## Page-by-page plan

Numbers (#) match the image numbers in the catalog.

| Page | Photos | Content from the deck | Work needed |
|---|---|---|---|
| `/careers` | `grand-opening-team` (#50), `habitat-team` (#53) | "What's important to us": attitude, safety, teamwork, customers, On-Time and In-Full, doing the right thing, having fun. 165 employees | Swap the image. Also remove the public "Aaron will replace..." and "Aaron can add roles..." text |
| `/about` | `about-founders-medallion` (#3), `about-heritage-pickup` (#8), existing `/locations/fort-dodge.jpg`, `award-lbm-100-2025` (#12) | Started with $2,500 and 1 employee. Mission and vision. LBM Journal Top 100. Key numbers strip | Add image and stat sections. Update employee count in the schema |
| `/showroom` | `grand-opening-warehouse` (#48) as hero, plus existing `/uploads/stair-display-showroom.jpg` and `/uploads/img_1388.jpg`. Add the exterior (#18) once cleared | "By the numbers" stats, rebuilt as page content. 56,000 sf, 4 miles from Grimes | Replace the stock images in `content/pages/showroom.mdx`. Remove the "Swap these placeholders" line. Real product photos are still needed |
| `/services/delivery` | `delivery-flatbed-home` (#22), `delivery-andersen-box-truck` (#23) | 34 delivery trucks, 35 forklifts, 15 piggyback forklifts, about 65,000 orders a year with 81% delivered. On-Time and In-Full. Service to bordering states | Replace `image` in `delivery.mdx`, add a fleet section, widen the service area wording |
| `/services/installation` | None suitable | Installed sales for doors, windows and some decking. 7 installed-sales trucks | Copy only |
| `/services/estimating` | None suitable | Certified engineers on staff (see open questions) | Copy only, after the wording is confirmed |
| `/pros/commercial-multifamily` | `delivery-multifamily-jobsite` (#24), plus #33 and #34 once cleared | Service beyond Iowa on larger jobs | `pro-template.tsx` needs image support |
| `/community/beisser-bowl` | `beisser-bowl-trophy-checks` (#44), `beisser-bowl-concession-counter` (#45), `beisser-bowl-concessions` (#41) | $1,000 to each booster club, shown on the checks dated Sept 8, 2023 | Community pages don't render images yet, so add that to `community/[slug]/page.tsx` |
| `/community/habitat-for-humanity` | `habitat-team` (#53), `habitat-trusses` (#54), `habitat-framing` (#55) | Photo shows Dallas County Habitat, while the page names Greater Des Moines Habitat | Same template change. Add Dallas County to the copy if confirmed |
| `/community` (new entry) | `drake-relays-crowd` (#37), `drake-relays-platform` (#38), `drake-relays-runway` (#39), `drake-relays-setup-crew` (#36), `drake-relays-truck` (#35) | The deck has photos only, so the story needs writing | Needs facts from Aaron. Community cards could also show a thumbnail |
| `/locations/*` | No usable Coralville or Birchwood photo in the deck | Grimes 155,000 sf on 18 acres. Coralville 58,000 sf on 10 acres. Fort Dodge 36,000 sf on 1 acre. Johnston 56,000 sf on 6 acres | Add to `notes` in `app/data/locations.ts`. Replace the Coralville and Birchwood images when real photos exist |
| `/gallery` | All grand opening photos (#48 to #52), plus Habitat and Beisser Bowl picks | Only two entries today | One small `.mdx` file per photo. Also, `grand-opening.mdx` has `image: uploads/...` with no leading slash, so that image probably fails (read from the code, not tested) |
| Homepage carousel | Best fit is #22, but at 743px it is too small for a 1600px hero | Could add a "Top 100 dealer" mention | Needs full-size files of the truck photos |

Most of the deck's photos are small: only the grand opening set (#47 to #52) is large enough for full-width use. The rest suit cards and in-page images.

## Facts for the site

Check these before publishing. All come from the deck unless noted.

- **Company:** started in Fort Dodge in 1953 with $2,500 and 1 employee. 165 employees across 4 locations.
- **Recognition:** LBM Journal Top 100 (the badge reads "2025 Top Dealer").
- **Vision:** "Provide building solutions that allow our customers to develop great communities."
- **Mission:** "To develop and maintain long-lasting relationships by delivering quality building materials and services. Beisser Lumber achieves customer satisfaction through the dedication of our valued employees to promote mutual growth and success."
- **Showroom by the numbers (magazine sidebar):** 50 ft deck display. 2-story home facade with 5 full-size exterior doors. 6x8 tiled patio space with multiple railing and lighting systems. 7 full-size decks. 3 patio displays. 34 full-size windows. 3 window brands. 100 doors on display, including 19 exterior. 21 interior door styles in stock. 18 interior handrail styles. 4 seats at the coffee bar. 40 employees at the location.

## Open questions

1. **"Largest" claim:** the site says "Iowa's largest family-owned lumberyard". The deck says "largest independently owned lumber dealer in our market". Which is the approved wording?
2. **"Certified engineers":** the deck says 5 on staff. "Engineer" can imply a licensed PE, so confirm the credential before publishing.
3. **Dave Ling's title:** the site says president, and the magazine quote says CEO.
4. **"400+ years":** the site credits sales staff, and the magazine sidebar says building trades combined.
5. **Service area:** the site says Central and Eastern Iowa, and the deck adds all bordering states and farther on larger jobs.
6. **Age wording:** "73 years" and "165 employees" will go out of date. "Since 1953" doesn't.

## Needs OK before use

| Images | What's needed |
|---|---|
| #40, #42, #43, #46 (Beisser Bowl) | Release for identifiable children and student athletes |
| #16, #17, #18 (magazine feature) | Publisher permission or clean files |
| #29, #32 (magazine covers) | Publisher permission |
| #30, #31, #33, #34 (customer projects) | Builder, owner and photographer OK. #31 also shows sale signs with contact details |
| #2, #7, #56 (people) | Names and context. #2 also looks like a screenshot of a press photo |
| #25, #26, #27 (rail car, forklifts) | Confirm they are ours. #26 and #27 look like manufacturer marketing photos |
| #6, #47 | Confirm OK to show the old logo and the floor plan |

The three employees in #50 and the people in other close-up team shots should also know their photos will be on the site.

## Keep off the site

- Market pricing tables and charts (#19 to #21)
- Marked-up aerial photos (#14, #15) and the highlighted road map (#11)
- Speaker notes about competitors
- Sales mix and internal comments on slides 8 and 13
