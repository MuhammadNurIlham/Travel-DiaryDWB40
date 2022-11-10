package journeydto

type JourneyRequest struct {
	Title       string `json:"title" form:"title" gorm:"type: varchar(255)"`
	Description string `json:"description" gorm:"type:text" form:"description"`
	Image       string `json:"image" form:"image" gorm:"type: varchar(255)"`
	UserID      int    `json:"user_id" form:"user_id" gorm:"type: int"`
}
