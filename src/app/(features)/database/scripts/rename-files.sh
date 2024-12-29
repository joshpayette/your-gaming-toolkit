#!/bin/bash

# Directory to check
DIRECTORY="pscale"

# Check for a directory that starts with 'pscale_'
for DIR in pscale_*; do
  if [ -d "$DIR" ]; then
    # Rename the directory to 'pscale'
    mv "$DIR" "$DIRECTORY"
    break
  fi
done

# Loop through all files in the directory
for FILE in "$DIRECTORY"/*; do
  # Check if the file name contains the word 'schema'
  if [[ "$(basename "$FILE")" == *schema* ]]; then
    # Get the directory and the base name of the file
    DIR=$(dirname "$FILE")
    BASENAME=$(basename "$FILE")
    
    # Rename the file by prefixing it with '1'
    mv "$FILE" "$DIR/1$BASENAME"
  fi
done