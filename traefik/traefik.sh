docker run -d \
  -v /var/run/docker.sock:/var/run/docker.sock \
  -v $PWD/traefik.toml:/traefik.toml \
  -v $PWD/traefik_dynamic.toml:/traefik_dynamic.toml \
  -p 80:80 \
  -p 8080:8080 \
  --network traefik \
  --name traefik \
  traefik:latest