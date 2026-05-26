package rpc

import (
	"github.com/google/wire"
	"github.com/qhai-dev/kubase/service/account/rpc/handler"
)

var ProviderSet = wire.NewSet(
	handler.NewAccountService,
	NewRPCServer,
)
