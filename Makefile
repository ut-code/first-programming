start:
	npm run dev

build:
	npm run build

serve: build build-liveserver
	./live-server

build-liveserver:
	cd live-server.src; go build -o ./live-server .
	mv live-server.src/live-server .

