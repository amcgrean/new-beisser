# Environment Variables — Beisser Lumber Website

## Required before any form submission works:
RESEND_API_KEY=           # Resend API key — get from Resend dashboard
RESEND_FROM_EMAIL=        # Verified sender used for quote and service emails
QUOTE_EMAIL_GRIMES=       # Inside sales email for Grimes branch
QUOTE_EMAIL_CORALVILLE=   # Inside sales email for Coralville branch
QUOTE_EMAIL_FORT_DODGE=   # Inside sales email for Fort Dodge branch
QUOTE_EMAIL_BIRCHWOOD=    # Inside sales email for Birchwood/Johnston branch
QUOTE_EMAIL_CC=           # Central inbox CC'd on all submissions

## Required for analytics:
NEXT_PUBLIC_GA_ID=        # Google Analytics 4 Measurement ID (format: G-XXXXXXXXXX)

## Required for deployment:
NEXT_PUBLIC_SITE_URL=     # Full production URL: https://beisserlumber.com

## Optional:
CONTACT_EMAIL=            # General contact form destination
SERVICE_REQUEST_EMAIL=    # Service request form destination
