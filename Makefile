default: start

setup:
	npm ci

start: build
	make serve

build:
	npm run build

serve: build-liveserver
	./live-server

fix:
	npm run type-check
	npx prettier . --write
# ---

build-liveserver:
	cd live-server.src; go build -o ./live-server .
	mv live-server.src/live-server .

