#!/bin/sh
# The preview server cannot read ~/Documents (macOS TCC), so the source of truth
# lives here (with git) and gets mirrored to /tmp purely to be served.
# Re-run this after /tmp is wiped, or after editing files here.
SRC="$(cd "$(dirname "$0")" && pwd)"
DST=/tmp/improve-quiz
mkdir -p "$DST"
rsync -a --delete --exclude '.git' --exclude 'sync-preview.sh' "$SRC"/ "$DST"/
echo "synced $SRC -> $DST"
