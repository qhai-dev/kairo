package rpc

func NewRPCServer(handler *handler.AccountService) error {
	handler.Handler()

	return nil
}
