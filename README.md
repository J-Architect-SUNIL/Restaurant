**Recent Improvements**

**Split the top header and navigation into separate components.**
This keeps contact details and navigation easier to maintain.

**Moved the navigation links into one reusable list.**
This removes repeated link markup and makes the menu easier to update.

**Extracted the hero's food item markup into a FoodCard component.**
This avoids repeating card markup and keeps the hero easier to read.

**Lazy-loaded route pages and lower home-page sections.**
This lets the browser load code when needed instead of loading every page component at the start.

**Prioritized the first hero image and deferred other images.**
This helps the main hero image load sooner and avoids loading non-leading images at high priority.

**Moved image URLs into one Cloudinary image map and added f_auto,q_auto.**
This keeps image references in one place and lets Cloudinary choose an appropriate format and compression.

**Removed unused homepage post entries and an unavailable chef-list button.**
This removes data and UI logic that the page did not use.

**Added or retained accessibility support for navigation, forms, images, and motion preferences.**
Examples include an accessible mobile-menu label, descriptive image text, labeled reservation fields, status announcements, and reduced-motion handling.