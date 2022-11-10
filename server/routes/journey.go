package routes

import (
	"be-journey/handlers"
	"be-journey/pkg/middleware"
	"be-journey/pkg/mysql"
	"be-journey/repositories"

	"github.com/gorilla/mux"
)

func JourneyRoutes(r *mux.Router) {
	journeyRepository := repositories.RepositoryJourney(mysql.DB)
	h := handlers.HandlerJourney(journeyRepository)

	r.HandleFunc("/journeys", middleware.Auth(h.FindJourneys)).Methods("GET")
	r.HandleFunc("/journey/{user_id}", h.GetJourney).Methods("GET")
	r.HandleFunc("/journey", middleware.Auth(middleware.UploadFile(h.CreateJourney))).Methods("POST")
	r.HandleFunc("/journey/{user_id}", h.DeleteJourney).Methods("DELETE")
}
