package main

import (
	"fmt"
	"log"
	"net/http"
)

const PORT uint16 = 3000
const SERVE_DIR string = "./dist"

func main() {
	mux := http.NewServeMux()
	fs := http.FileServer(http.Dir(SERVE_DIR))
	mux.Handle("/", http.StripPrefix("/", fs))
	server := http.Server{
		Addr:    ":" + fmt.Sprint(PORT),
		Handler: mux,
	}

	fmt.Println("Listening at", PORT)
	if err := handler.Start(&server); err != nil {
		log.Fatalln(err)
	}
}
