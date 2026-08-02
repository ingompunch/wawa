# Project Operational Rules

## Backend & Deployment Boundaries

1. **Backend & Security Rules Authority (`airpick2-b-to-b`)**:
   - Firestore Security Rules (`firestore.rules`) and Cloud Functions are strictly managed and deployed **ONLY** from the B2B repository (`airpick2-b-to-b`).
   - Do **NOT** execute `firebase deploy --only functions` or `firebase deploy --only firestore:rules` from this frontend repository.

2. **Frontend Scope (`airpick-b2c` / Customer Website)**:
   - This repository is the B2C customer-facing web application built in AI Studio.
   - It reads configuration from Firestore (`companies/{companyId}`) and creates reservation documents (`reservations/{id}`).
   - Focus strictly on UI/UX, reservation form validation, and client-side logic.
