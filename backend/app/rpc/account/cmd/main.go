package main

import (
	"github.com/qhai-dev/galio/library/galio"
)

func main() {
	app := galio.NewApplication()
	defer app.Close()

	gs, err := inject(app)
	if err != nil {
		panic(err)
	}

	if err := app.Run(gs); err != nil {
		panic(err)
	}
}
