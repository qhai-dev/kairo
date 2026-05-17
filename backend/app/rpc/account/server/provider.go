package server

import (
	"github.com/google/wire"
	"github.com/qhai-dev/galio/rpc/account/server/handler"
)

var ProviderSet = wire.NewSet(
	handler.NewAccountService,
	NewRPCServer,
)
