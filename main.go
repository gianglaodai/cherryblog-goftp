package main

import (
	"cherryblog-goftp/internal"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/template/html/v2"
)

func main() {
	engine := html.New("./web/views", ".html")
	app := fiber.New(fiber.Config{
		Views: engine,
		ViewsLayout: "layouts/base",
	})
	app.Static("/public", "./web/public")
	internal.SetupRoutes(app)
	app.Listen(":3000")
}
