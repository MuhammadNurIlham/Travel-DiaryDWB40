package models

type Bookmark struct {
	ID        int             `json:"id" gorm:"primary_key:auto_increment"`
	User      UsersResponse   `json:"user" gorm:"constraint:OnUpdate:CASCADE,OnDelete:CASCADE;"`
	UserID    int             `json:"user_id" gorm:"int"`
	JourneyID int             `json:"journey_id" gorm:"int"`
	Journey   JourneyResponse `json:"journey" gorm:"constraint:OnUpdate:CASCADE,OnDelete:CASCADE;"`
}

type BookmarkResponse struct {
	ID        int             `json:"id" gorm:"primary_key:auto_increment"`
	JourneyID int             `json:"journey_id" gorm:"int"`
	Journey   JourneyResponse `json:"journey"`
	User      UsersResponse   `json:"user"`
	UserID    int             `json:"user_id" gorm:"int"`
}

func (BookmarkResponse) TableName() string {
	return "bookmarks"
}
