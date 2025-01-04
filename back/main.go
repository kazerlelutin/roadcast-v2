package main

import (
	"github.com/gin-gonic/gin"
)

func main() {
	// Créer une instance du routeur Gin
	r := gin.Default()

	// Définir une route simple
	r.GET("/ping", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"message": "pong",
		})
	})

	// Lancer le serveur
	r.Run() // par défaut : localhost:8080
}
