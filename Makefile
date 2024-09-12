default: start

setup:
	npm ci

start: build
	make serve

build:
	npm run build

serve: build build-liveserver
	./live-server

build-liveserver:
	cd live-server.src; go build -o ./live-server .
	mv live-server.src/live-server .

