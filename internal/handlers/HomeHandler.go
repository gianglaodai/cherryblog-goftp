package handlers

import (
	"encoding/json"
	"log"
	"os"

	"github.com/gofiber/fiber/v2"
)

type ManifestEntry struct {
	File string `json:"file"`
}

func HomeHandler(c *fiber.Ctx) error {
	manifest := map[string]ManifestEntry{}
	manifestData, err:= os.ReadFile("web/public/js/.vite/manifest.json")
	if(err != nil) {
		log.Fatal("Could not read manifest.json", err)
	}
	json.Unmarshal(manifestData, &manifest)
	pageName := "pages/home/index"
	return c.Render(pageName, fiber.Map{
		"Title":  "Home",
		"JsFile": manifest[pageName+".js"].File,
	}, "layouts/main", "layouts/base")

}
