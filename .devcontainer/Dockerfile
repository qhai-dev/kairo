FROM mcr.microsoft.com/devcontainers/base:ubuntu

RUN apt-get update \
    && apt-get install -y --no-install-recommends \
       direnv curl ca-certificates \
       build-essential libssl-dev libyaml-dev zlib1g-dev \
    && rm -rf /var/lib/apt/lists/*

RUN curl -L https://github.com/bazelbuild/bazelisk/releases/latest/download/bazelisk-linux-amd64 \
      -o /usr/local/bin/bazel \
    && chmod +x /usr/local/bin/bazel

RUN echo 'eval "$(direnv hook bash)"' >> /etc/bash.bashrc

RUN curl -L https://kind.sigs.k8s.io/dl/v0.32.0/kind-linux-amd64 \
    -o /usr/local/bin/kind \
    && chmod +x /usr/local/bin/kind
