# Website inquiry operations

The `/api/inquiries/` POST route saves validated buying briefs in the private `jozing-inquiries` Upstash database connected to the JOZING Vercel project. There is no public API to read inquiries. The website confirms success only after the database acknowledges storage.

## Reviewing new inquiries

In Vercel, open the project → Storage → jozing-inquiries → Browser (or Open in Upstash). Records have keys `inquiry:JZ-YYYYMMDD-XXXXXXXX`. The `inquiries:received` sorted set lists references by receipt time. Each record contains the buyer's email, product, quantity, country, destination, message and source path. Treat all records as confidential; do not paste them into public issue trackers or analytics.

New records have status `new`. Records expire after 365 days. Remove a requested record and its sorted-set entry when fulfilling a verified deletion request. The index prunes expired entries as new inquiries arrive. Export legitimate leads into the company's protected sales system before expiry if further retention is needed for the business relationship.

## Email notifications

Configure `RESEND_API_KEY` and `INQUIRY_FROM_EMAIL` in Vercel only after verifying the sending domain with Resend. Recipient is the existing business inbox `sales_b2b@jozing.cn`; visitor email is used only as Reply-To. A separate `inquiry-notification:REFERENCE` entry records provider acceptance, not delivery. Saving is independent of email availability. Until email is configured, staff must review the private database regularly. WhatsApp remains an optional buyer follow-up channel.

Do not expose server credentials in `NEXT_PUBLIC_*`, client code, logs or the repository. Connected storage uses `KV_REST_API_URL` and `KV_REST_API_TOKEN` (Upstash-prefixed equivalents are supported).

## Abuse prevention and failure behavior

Requests require an allowed origin, JSON content, a valid email, required product/quantity/country, processing consent and an empty honeypot. Body is capped at 8 KiB. An atomic Redis script enforces 5 submissions per IP per 10 minutes, 10 per email per 24 hours and 100 across the website per 24 hours. Rate-limit keys contain keyed hashes, not raw email/IP, and expire. Database eviction is disabled; if storage is unavailable or full, submission fails visibly and offers direct contact instead of claiming success.

Replaying the same reference and brief returns the original success without creating another inquiry; different data with the same reference returns conflict. Never log inquiry bodies. `inquiry_saved` analytics contains only purchase type and source group, requires analytics consent and excludes product labels containing `TEST ONLY`.

Run `node scripts/test-inquiry-service.mjs` for validation and failure-path checks. Verify a clearly labeled `TEST ONLY` brief in the deployed form and confirm its record in the private database after a release. Keep test records separate from real leads.
