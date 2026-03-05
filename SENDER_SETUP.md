# Sender.net Email Integration Setup

This guide will help you set up Sender.net to send confirmation emails to users who submit the enquiry form.

## Step 1: Create a Sender.net Account

1. Go to [Sender.net](https://www.sender.net/) and sign up for a free account
2. Verify your email address

## Step 2: Verify Your Domain/Email

1. Log in to your Sender.net dashboard
2. Go to **Settings** → **Sender Domains**
3. Add and verify your domain (or use a verified email address)
4. Follow the DNS verification steps if using a custom domain

## Step 3: Get Your API Key

1. In Sender.net dashboard, go to **Settings** → **API**
2. Click **Generate API Key** or copy your existing key
3. Save this key securely - you'll need it for the next step

## Step 4: Configure Environment Variables

1. Copy `.env.local.example` to `.env.local` (if you haven't already):
   ```bash
   cp .env.local.example .env.local
   ```

2. Open `.env.local` and add your Sender.net credentials:
   ```env
   SENDER_API_KEY=your_actual_api_key_here
   SENDER_FROM_EMAIL=noreply@yourdomain.com
   SENDER_FROM_NAME=Your Company Name
   ```

   Replace:
   - `your_actual_api_key_here` with your Sender.net API key
   - `noreply@yourdomain.com` with your verified email address
   - `Your Company Name` with your business name

## Step 5: Customize the Email Template (Optional)

The email template is in `app/api/send-email/route.ts`. You can customize:
- Email subject
- HTML content
- Styling
- Footer text

## Step 6: Test the Integration

1. Restart your development server:
   ```bash
   npm run dev
   ```

2. Submit a test enquiry form with your email address
3. Check your inbox for the confirmation email
4. Check Sender.net dashboard for email statistics

## How It Works

1. User submits the enquiry form
2. Form data is sent to Google Sheets (existing functionality)
3. Simultaneously, a confirmation email is sent to the user via Sender.net API
4. User receives a professional confirmation email

## Troubleshooting

### Email not received?
- Check Sender.net dashboard for delivery status
- Verify your sender email is verified in Sender.net
- Check spam/junk folder
- Ensure API key is correct in `.env.local`

### API errors?
- Check browser console for error messages
- Verify API key has proper permissions
- Check Sender.net API limits (free tier has limits)

### Still having issues?
- Check the server logs in your terminal
- Verify all environment variables are set correctly
- Ensure `.env.local` is not committed to git (it's in .gitignore)

## Sender.net Free Tier Limits

- 2,500 emails per month
- 1,000 subscribers
- Basic email templates
- API access

For higher volumes, consider upgrading to a paid plan.

## Security Notes

- Never commit `.env.local` to version control
- Keep your API key secure
- Use environment variables for all sensitive data
- Consider rate limiting for production use
