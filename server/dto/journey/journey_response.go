package journeydto

type JourneyResponse struct {
	Title string `json:"title"`
	Desc  string `json:"desc"`
	Image string `json:"image"`
	User  int    `json:"user"`
}
