#!/bin/sh
# Prints resume/resume.html to public/eric-askew-resume.pdf with headless Chrome.
# Set CHROME to another Chrome or Chromium binary if it isn't in the default place.
set -e

CHROME="${CHROME:-/Applications/Google Chrome.app/Contents/MacOS/Google Chrome}"
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
PROFILE="$(mktemp -d)"
trap 'rm -rf "$PROFILE"' EXIT

"$CHROME" \
  --headless=new \
  --disable-gpu \
  --no-first-run \
  --user-data-dir="$PROFILE" \
  --no-pdf-header-footer \
  --virtual-time-budget=8000 \
  --print-to-pdf="$ROOT/public/eric-askew-resume.pdf" \
  "file://$ROOT/resume/resume.html" 2>/dev/null

echo "Wrote public/eric-askew-resume.pdf"
