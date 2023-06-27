NPX := npx
BLACK_FLAGS := --target-version py38

# Keep in sync with .pre-commit-config.yaml prettier hook.
PRETTIER_TARGETS = "**/*.(css|js|json|less)"

.PHONY: format-js
format-js: localstack-ui/node_modules
	$(NPX) eslint --ignore-path .gitignore --fix .
	$(NPX) prettier --ignore-path .gitignore --write $(PRETTIER_TARGETS)