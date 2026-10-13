# reacourse

Course site for **REA course** - twenty lessons on reading software you did not write
with REA (Reverse Engineer Anything) and Opus 5.5, then rebuilding what you want as code
that is legally yours.

Static html + css + js, no framework, no build step. Deploy on Vercel with
Framework Preset "Other" and an empty build command.

## What to fill in before launch

`assets/config.js` is the only file that needs editing:

- `price` - currently 120 USD
- `stripeLink` - create a new Payment Link, collect email, redirect to `/course.html`
- `supabaseUrl` + `supabaseAnonKey` - a new Supabase project for this course
- wallets are shared across courses and already filled in

Then run `supabase.sql` once in the SQL Editor, add `{{ .Token }}` to the
Magic Link and Confirm signup email templates, and point Site URL and
Redirect URLs at the live domain.

## Layout

```
index.html      landing: hero, three layers, target router, five-year arithmetic, syllabus, receipts, limits, faq
pricing.html    what is inside and the price
checkout.html   card or crypto
pay.html        ?m=card -> Stripe, ?m=crypto -> wallets, QR and the tx hash form
course.html     cabinet: email -> 6-digit code -> lessons from the lessons table
supabase.sql    schema, kept out of the deploy by .vercelignore
assets/
  config.js     everything editable
  syllabus.js   public programme: 5 parts, 20 lessons, titles and one-liners only
```

Lesson text lives in the `lessons` table under RLS, never in the site files.

## Daily access grant

Card buyer, email from Stripe:

```sql
insert into access_list (email) values (lower('buyer@example.com')) on conflict (email) do nothing;
```

Crypto, after checking the hash in a block explorer:

```sql
with p as (update pending_payments set status = 'approved' where tx_hash = 'PASTE_HASH' returning email)
insert into access_list (email) select email from p on conflict (email) do nothing;
```
