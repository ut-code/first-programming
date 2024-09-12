package main

import (
	"context"
	"errors"
	"net/http"
	"os"
	"os/signal"
	"syscall"
	"time"
)

type h struct{}

var handler h

func (_ h) Start(s *http.Server) error {
	var errch chan error
	go func() {
		errch <- s.ListenAndServe()
	}()

	interrupt, cancel := signal.NotifyContext(context.Background(), syscall.SIGTERM, os.Interrupt)
	defer cancel()

	select {
	case err := <-errch:
		if !errors.Is(err, http.ErrServerClosed) {
			// server failed
			return err
		} else {
			// this branch won't occur
			return nil
		}

	case <-interrupt.Done():
		// interrupted or kill'd with SIGTERM
		// shutting down the server with timeout of 10 sec
		ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
		defer cancel()
		err := s.Shutdown(ctx)
		if err != nil {
			return err
		}
		return nil
	}
}
