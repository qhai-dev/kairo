package rpc

import "github.com/qhai-dev/kubase/service/account/rpc/handler"

func NewRPCServer(handler *handler.AccountService) error {
	handler.Handler()

	return nil
}
