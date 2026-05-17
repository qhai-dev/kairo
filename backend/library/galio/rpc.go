package galio

import (
	"context"
	"fmt"

	"google.golang.org/grpc"
)

type RPCServer struct {
	grpcServer *grpc.Server
}

func NewRPCServer() *RPCServer {
	s := grpc.NewServer()

	return &RPCServer{
		grpcServer: s,
	}
}

func (s *RPCServer) Start(ctx context.Context) error {
	fmt.Print("rpc start \n")
	return nil
}

func (s *RPCServer) Stop(ctx context.Context) error {
	return nil
}
