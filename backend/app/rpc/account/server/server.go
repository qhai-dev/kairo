package server

import (
	"github.com/qhai-dev/galio/library/galio"
	"github.com/qhai-dev/galio/library/galio/rpc"
	"github.com/qhai-dev/galio/rpc/account/server/handler"
)

func NewRPCServer(handler *handler.AccountService) galio.Transport {
	srv := rpc.NewServer()

	handler.Handler()

	return srv
}
