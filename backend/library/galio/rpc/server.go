package rpc

import "context"

type Server struct {
}

func NewServer() *Server {
	return &Server{}
}

// Start start the gRPC server.
func (s *Server) Start(ctx context.Context) error {
	return nil
}

// Stop stop the gRPC server.
func (s *Server) Stop(ctx context.Context) error {
	return nil
}
