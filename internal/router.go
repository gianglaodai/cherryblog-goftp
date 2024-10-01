package internal

import (
	"cherryblog-goftp/internal/handlers"

	"github.com/gofiber/fiber/v2"
)

func SetupRoutes(app *fiber.App) {
	app.Get("/", handlers.HomeHandler)
}
