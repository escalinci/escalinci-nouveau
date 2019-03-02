FROM node:10.15.2

LABEL com.github.actions.name="GitHub Action for yarn"
LABEL com.github.actions.description="Wraps the yarn CLI"
LABEL com.github.actions.icon="package"
LABEL com.github.actions.color="blue"

COPY "entrypoint.sh" "/entrypoint.sh"
ENTRYPOINT ["/entrypoint.sh"]
