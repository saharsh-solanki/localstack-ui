NPX := npx
BLACK_FLAGS := --target-version py38
PYTHON := python
PIP := pip
NPM := npm

# Keep in sync with .pre-commit-config.yaml prettier hook.
PRETTIER_TARGETS = "**/*.(css|js|json|less)"

.PHONY: format-js
format-js: localstack-ui/node_modules
	$(NPX) eslint --ignore-path .gitignore --fix .
	$(NPX) prettier --ignore-path .gitignore --write $(PRETTIER_TARGETS)

# This are setup command 
.PHONY: setup-frontend
setup-frontend:
	cd localstack-ui && $(NPM) install

.PHONY: setup-backend
setup-backend:
	cd localstack_backend && $(PYTHON) -m venv venv && source venv/bin/activate && $(PIP) install -r requirements.txt

.PHONY: setup
setup: setup-frontend setup-backend

