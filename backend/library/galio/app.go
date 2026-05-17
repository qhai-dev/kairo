package galio

import (
	"context"
	"fmt"
)

type Application struct {
	conf   any
	ctx    context.Context
	cancel context.CancelFunc
}

func NewApplication() *Application {
	ctx, cancel := context.WithCancel(context.Background())
	return &Application{
		ctx:    ctx,
		cancel: cancel,
	}
}

func (app *Application) Run(srv Server) error {
	err := srv.Start(app.ctx)
	if err != nil {
		return err
	}

	return nil
}

func (app *Application) Close() {
	// 关闭 consul的链接 等等
}

// conf 设计待定
func (app *Application) GetConf(key string) any {
	fmt.Printf("%v \n", key)

	return app.conf
}
