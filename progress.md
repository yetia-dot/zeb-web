folder structure
src/
├── app/                       # NEXT.JS APP ROUTER (Routes & Layouts)
│   ├── (auth)/                # Groups: Login, Signup, Profile
│   │   ├── login/page.tsx
│   │   └── signup/page.tsx
│   ├── (market)/              # Groups: Landing, Listings, Details
│   │   ├── page.tsx           # Home Page
│   │   └── listings/page.tsx  # Marketplace Grid
│   ├── (dashboard)/           # Groups: User Portal
│   │   ├── profile/page.tsx   # Edit Profile
│   │   └── registry/page.tsx  # My NFTs & Upload Form
│   ├── admin/                 # Protected Admin Route
│   │   └── page.tsx           # Admin Stats & Approval Table
│   ├── layout.tsx             # Global Providers & Main Layout
│   └── globals.css            # Tailwind & Theme Variables
│
├── components/                # THE COMPONENT LIBRARY
│   ├── ui/                    # THE ATOMS (Global & Generic)
│   │   ├── ZebButton.tsx      # Multi-variant button
│   │   ├── InputField.tsx     # Styled inputs for all forms
│   │   ├── ZebBadge.tsx       # "Live", "Hashed", "Tokenized" tags
│   │   └── Skeleton.tsx       # For loading states (very chic)
│   │
│   ├── layout/                # THE FRAMEWORK (Global Layout)
│   │   ├── Navbar.tsx         # Logo, Nav Links, Wallet Status
│   │   ├── Footer.tsx         # Socials & Links
│   │   └── Section.tsx        # Standardized <section> wrapper
│   │
│   ├── landing/               # PAGE-SPECIFIC: Home Page
│   │   ├── Hero.tsx           # High-impact intro
│   │   ├── PopularGrid.tsx    # Trending artwork section
│   │   └── HowItWorks.tsx     # The "Hash -> Tokenize -> Trade" steps
│   │
│   ├── listings/              # PAGE-SPECIFIC: Marketplace
│   │   ├── FilterBar.tsx      # Search + Category Tags
│   │   ├── ListingGrid.tsx    # The main display of ArtCards
│   │   ├── ArtCard.tsx        # Individual product card
│   │   └── DetailModal.tsx    # The "Slide-over" with NFT details
│   │
│   ├── dashboard/             # PAGE-SPECIFIC: User Registry
│   │   ├── StatsOverview.tsx  # Owned count, total value
│   │   ├── UploadForm.tsx     # The "Tokenize" input fields
│   │   └── ArtworkTable.tsx   # List of owned/registered items
│   │
│   └── admin/                 # PAGE-SPECIFIC: Admin Portal
│       ├── PlatformStats.tsx  # High-level data visualization
│       └── ApprovalQueue.tsx  # Table for flagged hash-collisions
│
├── lib/                       # UTILITIES & LOGIC
│   ├── utils.ts               # Tailwind merge helper (cn)
│   ├── stellar.ts             # Freighter & Stellar SDK logic (later)
│   └── hashing.ts             # SHA-256 calculation logic (later)
│
├── data/                      # MOCK DATA (For UI-First Development)
│   └── artworks.ts            # Fake list of African art for testing
│
└── public/                    # ASSETS
    ├── patterns/              # Subtle SVG African patterns
    └── fonts/                 # Custom font files if needed