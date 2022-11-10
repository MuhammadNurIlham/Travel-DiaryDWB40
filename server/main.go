package main

import (
	"be-journey/database"
	"be-journey/pkg/mysql"
	"be-journey/routes"
	"fmt"
	"net/http"

	"github.com/gorilla/mux"
	"github.com/joho/godotenv"
)

func main() {
	// Init godotenv here ...
	// env
	errEnv := godotenv.Load()
	if errEnv != nil {
		panic("Failed to load env file")
	}

	mysql.DatabaseInit()

	database.RunMigration()

	r := mux.NewRouter()
	routes.RouteInit(r.PathPrefix("/api/v1").Subrouter())

	// Initialization "uploads" folder to public
	r.PathPrefix("/uploads").Handler(http.StripPrefix("/uploads/", http.FileServer(http.Dir("./uploads"))))

	// var port = os.Getenv("PORT")
	fmt.Println("Server Running on localhost: 5000")
	http.ListenAndServe("localhost:5000", r)
}
