# Use the official Ubuntu base image
FROM ubuntu:latest

# Set the maintainer label
# LABEL maintainer="your-email@example.com"

# Update the package list and install basic packages
RUN apt-get update && apt-get install -y \
    curl \
    wget \
    git \
    vim \
    build-essential \
    && rm -rf /var/lib/apt/lists/*

# Set the working directory
WORKDIR /workspace

# Set the default command to run when starting the container
CMD ["bash"]